import React from "react";
import { Link } from "react-router-dom";
import { Paper, Typography } from "@material-ui/core";
import "./Company.css";

const Company = ({ name, description, logoUrl, handle }) => {
	return (
		<Link to={`/companies/${handle}`} className="Company-link">
			<Paper elevation={3} className="Company">
				<div className="Company-header">
					<Typography className="Company-name" variant="body1">
						{name}
					</Typography>
					{logoUrl ? (
						<img className="Company-logo" src={`.${logoUrl}`} alt={logoUrl} />
					) : null}
				</div>
				<Typography className="Company-description" variant="body2">
					{description}
				</Typography>
			</Paper>
		</Link>
	);
};

export default Company;
