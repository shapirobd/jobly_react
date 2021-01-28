import React, { useState, useEffect } from "react";

const useLocalStorage = () => {
	const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
	const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));
	const [isLoggedIn, setIsLoggedIn] = useState(!!user);
	const [loggingOut, setLoggingOut] = useState(false);
	const [isUpdated, setIsUpdated] = useState(false);

	useEffect(() => {
		localStorage.setItem("token", JSON.stringify(token));
		localStorage.setItem("user", JSON.stringify(user));
	}, [isLoggedIn]);

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

	useEffect(() => {
		if (user) {
			localStorage.setItem("user", JSON.stringify(user));
		}
	}, [user]);

	return {
		user,
		setUser,
		token,
		setToken,
		isLoggedIn,
		setIsLoggedIn,
		loggingOut,
		setLoggingOut,
		isUpdated,
		setIsUpdated,
	};
};

export default useLocalStorage;
