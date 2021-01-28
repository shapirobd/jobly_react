import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";
import "./NavBar.css";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

const NavBar = () => {
	const { user, setLoggingOut } = useContext(UserContext);
	const classes = useStyles();

	return (
		<div className="NavBar">
			<AppBar position="static">
				<Toolbar>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="menu"
					>
						<Link to="/" variant="h6" className={classes.title}>
							Jobly
						</Link>
					</IconButton>
					<div className="NavBar-routes">
						{user ? (
							<>
								<div className="NavBar-nav-routes">
									<Link to="/companies">Companies</Link>
									<Link to="/jobs">Jobs</Link>
									<Link to="/profile">Profile</Link>
								</div>

								<div className="NavBar-user-routes">
									<Link to="/logout" onClick={() => setLoggingOut(true)}>
										Logout {user.username}
									</Link>
								</div>
							</>
						) : (
							<>
								<div className="NavBar-user-routes">
									<Link to="/login">Login</Link>
									<Link to="/signup">Sign up</Link>
								</div>
							</>
						)}
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default NavBar;
