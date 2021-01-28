import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import UserContext from "./UserContext";
import "./Home.css";

const Home = ({ loggingOut }) => {
	const { user } = useContext(UserContext);

	return (
		<div className="Home">
			<Typography variant="h3">Jobly</Typography>
			<Typography variant="h5">
				All the jobs in one, convenient place.
			</Typography>
			{user ? (
				<Typography variant="h4" id="Home-welcome">
					Welcome, {user.username}
				</Typography>
			) : (
				<>
					<Link className="Home-btn" to="/login">
						Log in
					</Link>
					<Link className="Home-btn" to="/signup">
						Sign up
					</Link>
				</>
			)}
		</div>
	);
};

export default Home;
