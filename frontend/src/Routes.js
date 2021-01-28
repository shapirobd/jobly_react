import React, { useState, useContext, useEffect } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./Home";
import CompanyList from "./CompanyList";
import JobList from "./JobList";
import Login from "./Login";
import SignUp from "./SignUp";
import Profile from "./Profile";
import UserContext from "./UserContext";

const Routes = () => {
	// const [isLoggedIn, setIsLoggedIn] = useState(false);
	const {
		user,
		setUser,
		token,
		setToken,
		isLoggedIn,
		setIsLoggedIn,
		loggingOut,
		setLoggingOut,
	} = useContext(UserContext);

	useEffect(() => {
		localStorage.setItem("token", JSON.stringify(token));
		localStorage.setItem("user", JSON.stringify(user));
	}, [isLoggedIn]);
	// const storeUserInfo = useLocalStorage(token, user);

	useEffect(() => {
		if (loggingOut) {
			setToken(null);
			setUser(null);
			localStorage.setItem("token", JSON.stringify(null));
			localStorage.setItem("user", JSON.stringify(null));
			setIsLoggedIn(false);
			setLoggingOut(false);
		}
	}, [loggingOut]);

	const logout = () => {
		setUser(null);
		setToken(null);
	};
	// console.log(isLoggedIn);
	return (
		<Switch>
			{/* Homepage — just a simple welcome message */}
			<Route exact path="/">
				<Home />
			</Route>
			{/* List all companies */}
			<Route exact path="/companies">
				{isLoggedIn ? <CompanyList /> : <Redirect to="/login" />}
			</Route>
			{/* View details of this company */}
			<Route path="/companies/:handle">
				{isLoggedIn ? <JobList /> : <Redirect to="/login" />}
			</Route>
			{/* List all jobs */}
			<Route exact path="/jobs">
				{isLoggedIn ? <JobList /> : <Redirect to="/login" />}
			</Route>

			{/* Login/signup */}
			<Route exact path="/login">
				{isLoggedIn ? <Redirect to="/" /> : <Login />}
			</Route>
			{/* Signup form */}
			<Route exact path="/signup">
				{isLoggedIn ? <Redirect to="/" /> : <SignUp />}
			</Route>
			{/* Edit profile page */}
			<Route exact path="/profile">
				{isLoggedIn ? <Profile /> : <Redirect to="/login" />}
			</Route>
			<Route exact path="/logout">
				{isLoggedIn ? <Home loggingOut={true} /> : <Home />}
				<Redirect to="/" />
			</Route>
			<Route>
				<Redirect to="/" />
			</Route>
		</Switch>
	);
};

export default Routes;
