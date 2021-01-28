import React, { useState, useEffect, useContext } from "react";
import { Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import JoblyApi from "./api";
import axios from "axios";
import UserContext from "./UserContext";
import SignUpForm from "./SignUpForm";
import "./SignUp.css";

const SignUp = () => {
	const { user, setUser, token, setToken, setIsLoggedIn } = useContext(
		UserContext
	);
	const history = useHistory();

	const FORM_INITIAL_STATE = {
		username: "",
		password: "",
		firstName: "",
		lastName: "",
		email: "",
	};
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [formData, setFormData] = useState(FORM_INITIAL_STATE);
	const [errorMessage, setErrorMessage] = useState(null);

	useEffect(() => {
		const signUp = async () => {
			if (formSubmitted) {
				try {
					setFormSubmitted(false);
					const res = await JoblyApi.signUp(formData);
					setToken(res.token);
				} catch (e) {
					console.log(e);
					if (e[0].includes("Duplicate username")) {
						setErrorMessage("Username already taken");
					}
					console.log(e);
				}
			}
		};
		signUp();
	}, [formSubmitted]);

	useEffect(() => {
		const loadUser = async () => {
			if (token) {
				try {
					const res = await JoblyApi.getUser(formData.username, { token });
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
		<div className="SignUp">
			<Typography className="SignUp-heading" variant="h4">
				Sign Up
			</Typography>
			<SignUpForm
				handleSubmit={handleSubmit}
				handleChange={handleChange}
				errorMessage={errorMessage}
			/>
		</div>
	);
};

export default SignUp;
