import React from "react";
import Routes from "./Routes";
import NavBar from "./NavBar";
import "./App.css";
import UserContext from "./UserContext";
import useLocalStorage from "./useLocalStorage";

function App() {
	// const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
	// const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));
	// const [isLoggedIn, setIsLoggedIn] = useState(false);
	// const [loggingOut, setLoggingOut] = useState(false);

	const {
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
	} = useLocalStorage();

	return (
		<div className="App">
			<UserContext.Provider
				value={{
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
				}}
			>
				<NavBar />
				<Routes />
			</UserContext.Provider>
		</div>
	);
}

export default App;
