import React, { useState, useEffect, useContext } from "react";
import { Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import JoblyApi from "./api";
import axios from "axios";
import UserContext from "./UserContext";
import ProfileForm from "./ProfileForm";
import "./Profile.css";

const Profile = () => {
	const history = useHistory();
	const { user, setUser, setIsUpdated } = useContext(UserContext);

	const FORM_INITIAL_STATE = {
		password: "",
		firstName: user.firstName,
		lastName: user.lastName,
		email: user.email,
	};
	const [formData, setFormData] = useState(FORM_INITIAL_STATE);
	const [formSubmitted, setFormSubmitted] = useState(false);

	useEffect(() => {
		const editUser = async () => {
			if (formSubmitted) {
				try {
					const res = await JoblyApi.updateUser(user.username, formData);
					setUser(res);
				} catch (e) {
					console.log(e);
				}
			}
		};
		editUser();
	}, [formSubmitted]);

	useEffect(() => {
		if (formSubmitted) {
			setIsUpdated(true);
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
		<div className="Profile">
			<Typography className="Profile-heading" variant="h4">
				Edit Profile
			</Typography>
			<ProfileForm
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				formData={formData}
			/>
		</div>
	);
};

export default Profile;
