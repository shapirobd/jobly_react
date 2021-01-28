import React, { useEffect, useState } from "react";
import JoblyApi from "./api";
import Company from "./Company";
import "./CompanyList.css";

const CompanyList = () => {
	const [inputText, setInputText] = useState("");
	const [companies, setCompanies] = useState([]);

	useEffect(() => {
		const getCompanies = async (inputText) => {
			const resp = await JoblyApi.getCompanies(inputText);
			setCompanies(resp);
		};
		getCompanies(inputText);
	}, [inputText]);

	const handleChange = (e) => {
		const { value } = e.target;
		setInputText(value);
	};
	return (
		<div className="CompanyList">
			<form>
				<input
					type="text"
					value={inputText}
					onChange={handleChange}
					placeholder="Search for company name..."
				/>
			</form>
			{companies.map((c) => (
				<Company
					name={c.name}
					description={c.description}
					logoUrl={c.logoUrl}
					handle={c.handle}
					key={c.handle}
				/>
			))}
		</div>
	);
};

export default CompanyList;
