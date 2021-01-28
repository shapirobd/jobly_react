import React, { useContext } from "react";
import UserContext from "./UserContext";

const ProfileForm = ({ handleChange, handleSubmit, formData }) => {
	const { user } = useContext(UserContext);

	return (
		<form className="ProfileForm" onSubmit={handleSubmit}>
			<label htmlFor="username">Username</label>
			<input
				type="text"
				onChange={handleChange}
				name="username"
				value={user.username}
				id="username-input"
				disabled
			></input>
			<label htmlFor="firstName">First Name</label>
			<input
				type="text"
				onChange={handleChange}
				name="firstName"
				value={formData.firstName}
				id="firstName-input"
			></input>
			<label htmlFor="lastName">Last Name</label>
			<input
				type="text"
				onChange={handleChange}
				name="lastName"
				value={formData.lastName}
				id="lastName-input"
			></input>
			<label htmlFor="email">Email</label>
			<input
				type="email"
				onChange={handleChange}
				name="email"
				value={formData.email}
				id="email-input"
			></input>
			<label htmlFor="password">Confirm Password</label>
			<input
				type="password"
				onChange={handleChange}
				name="password"
				id="password-input"
			></input>
			<div className="Profile-btn-wrapper">
				<button type="submit" className="Profile-btn">
					Submit
				</button>
			</div>
		</form>
	);
};

export default ProfileForm;
