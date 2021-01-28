import React from "react";

const SignUpForm = ({ handleChange, handleSubmit, errorMessage }) => {
	return (
		<form className="SignUp-form" onSubmit={handleSubmit}>
			<label htmlFor="username">Username</label>
			<input
				type="text"
				onChange={handleChange}
				name="username"
				id="username-input"
			></input>
			{errorMessage ? <p className="SignUp-form-err">{errorMessage}</p> : null}
			<label htmlFor="password">Password</label>
			<input
				type="password"
				onChange={handleChange}
				name="password"
				id="password-input"
			></input>
			<label htmlFor="firstName">First Name</label>
			<input
				type="text"
				onChange={handleChange}
				name="firstName"
				id="firstName-input"
			></input>
			<label htmlFor="lastName">Last Name</label>
			<input
				type="text"
				onChange={handleChange}
				name="lastName"
				id="lastName-input"
			></input>
			<label htmlFor="email">Email</label>
			<input
				type="email"
				onChange={handleChange}
				name="email"
				id="email-input"
			></input>
			<div className="SignUp-btn-wrapper">
				<button type="submit" className="SignUp-btn">
					Submit
				</button>
			</div>
		</form>
	);
};

export default SignUpForm;
