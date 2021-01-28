import React, { useState, useEffect, useContext } from "react";
import { Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import JoblyApi from "./api";
import axios from "axios";
import UserContext from "./UserContext";
import LoginForm from "./LoginForm";
import "./Login.css";

const Login = () => {
	const {
		user,
		setUser,
		token,
		setToken,
		isLoggedIn,
		setIsLoggedIn,
	} = useContext(UserContext);
	const history = useHistory();

	const FORM_INITIAL_STATE = {
		username: "",
		password: "",
	};
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [formData, setFormData] = useState(FORM_INITIAL_STATE);

	useEffect(() => {
		const login = async () => {
			if (formSubmitted) {
				try {
					const res = await JoblyApi.authenticate(formData);
					setToken(res.token);
				} catch (e) {
					console.log(e);
				}
				setFormSubmitted(false);
			}
		};
		login();
	}, [formSubmitted]);

	useEffect(() => {
		const loadUser = async () => {
			if (token && !isLoggedIn) {
				try {
					const apps = [];
					const res = await JoblyApi.getUser(formData.username, { token });
					res.applications.map(async (appId) =>
						apps.push(await JoblyApi.getJob(appId))
					);
					res.applications = apps;
					setUser(res);
				} catch (e) {
					console.log(e);
				}
			}
		};
		loadUser();
	}, [token]);

	useEffect(() => {
		if (user) {
			setIsLoggedIn(true);
			history.push("/");
			setFormData(FORM_INITIAL_STATE);
		}
	}, [user]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((formData) => ({
			...formData,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setFormSubmitted(true);
	};

	return (
		<div className="Login">
			<Typography className="Login-heading" variant="h4">
				Log In
			</Typography>
			<LoginForm handleChange={handleChange} handleSubmit={handleSubmit} />
		</div>
	);
};

export default Login;
