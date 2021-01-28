import React, { useEffect, useContext } from "react";
import { Paper, Typography } from "@material-ui/core";
import useToggle from "./useToggle";
import axios from "axios";
import "./JobCard.css";
import JoblyApi from "./api";
import UserContext from "./UserContext";

const JobCard = ({
	title,
	companyName,
	salary,
	equity,
	id,
	applied,
	applications,
	setApplications,
}) => {
	const { user, setUser } = useContext(UserContext);

	const [isClicked, toggleIsClicked] = useToggle(false);

	const handleClick = (e) => {
		e.preventDefault();
		toggleIsClicked();
	};

	useEffect(() => {
		const applyToJob = async () => {
			if (isClicked) {
				try {
					const res = await JoblyApi.applyToJob(user.username, id, {
						user,
					});
					const job = await JoblyApi.getJob(res.applied);
					setApplications((applications) => [...applications, job]);
				} catch (e) {
					console.log(e);
				}
			}
		};
		if (isClicked) applyToJob();
	}, [isClicked]);

	useEffect(() => {
		setUser((user) => ({
			...user,
			applications,
		}));
	}, [applications]);

	return (
		<Paper elevation={3} className="JobCard">
			<div className="JobCard-header">
				<Typography className="JobCard-title" variant="body1">
					{title}
				</Typography>
				<Typography className="JobCard-companyName" variant="body1">
					{companyName}
				</Typography>
			</div>
			<Typography className="JobCard-salary" variant="body2">
				Salary: {salary}
			</Typography>
			<Typography className="JobCard-equity" variant="body2">
				Equity: {equity}
			</Typography>
			<div className="JobCard-btn-wrapper">
				{applied ? (
					<button className="JobCard-btn-disabled" disabled>
						<Typography variant="button">
							<b>Applied</b>
						</Typography>
					</button>
				) : (
					<button className="JobCard-btn" onClick={handleClick}>
						<Typography variant="button">
							<b>Apply</b>
						</Typography>
					</button>
				)}
			</div>
		</Paper>
	);
};

export default JobCard;
