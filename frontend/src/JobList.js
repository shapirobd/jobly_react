import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./api";
import JobCard from "./JobCard";
import { Typography } from "@material-ui/core";
import UserContext from "./UserContext";
import "./JobList.css";

const JobList = () => {
	const { handle } = useParams();

	const { user } = useContext(UserContext);
	const [inputText, setInputText] = useState("");
	const [jobs, setJobs] = useState([]);
	const [company, setCompany] = useState(null);
	const [applications, setApplications] = useState(user.applications);

	useEffect(() => {
		const getJobs = async () => {
			try {
				let resp;
				if (handle) {
					const res = await JoblyApi.getCompany(handle);
					setCompany(res);
					setInputText("");
					resp = res.jobs;
				} else {
					resp = await JoblyApi.getJobs(inputText);
				}
				setJobs(resp);
			} catch (e) {
				console.log(e);
			}
		};
		getJobs();
	}, [inputText, handle]);

	const handleChange = (e) => {
		const { value } = e.target;
		setInputText(value);
	};

	return (
		<div className="JobList">
			{company ? (
				<div>
					<Typography className="JobList-compName" variant="h6">
						{company.name}
					</Typography>
					<Typography className="JobList-compDescription" variant="body1">
						{company.description}
					</Typography>
				</div>
			) : (
				<form>
					<input
						type="text"
						value={inputText}
						onChange={handleChange}
						placeholder="Search for job title..."
					/>
				</form>
			)}
			{jobs.map((j) => (
				<JobCard
					title={j.title}
					companyName={j.companyName}
					salary={j.salary}
					equity={j.equity}
					id={j.id}
					applied={
						applications.filter((app) => app.id === j.id).length ? true : false
					}
					applications={applications}
					setApplications={setApplications}
					key={j.id}
				/>
			))}
		</div>
	);
};

export default JobList;
