import React, { useState } from "react";

const useToggle = (initial = false) => {
	const [data, setData] = useState(initial);

	const toggleData = () => {
		setData((data) => !data);
	};

	return [data, toggleData];
};

export default useToggle;
