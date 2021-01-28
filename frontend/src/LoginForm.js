import React from "react";

const LoginForm = ({ handleSubmit, handleChange }) => {
	return (
		<form className="Login-form" onSubmit={handleSubmit}>
			<label htmlFor="username">Username</label>
			<input
				type="text"
				onChange={handleChange}
				name="username"
				id="username"
			></input>
			<label htmlFor="password">Password</label>
			<input
				type="password"
				onChange={handleChange}
				name="password"
				id="password"
			></input>
			<div className="Login-btn-wrapper">
				<button type="submit" className="Login-btn">
					Submit
				</button>
			</div>
		</form>
	);
};
export default LoginForm;
