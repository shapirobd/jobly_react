import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import JoblyApi from "../api";
import App from "../App";
import Login from "../Login";

let loggingOut;

test("smoke test", () => {
	render(
		<MemoryRouter initialEntries={["/"]}>
			<App />
		</MemoryRouter>
	);
});

test("snapshot test", () => {
	const { asFragment } = render(
		<MemoryRouter initialEntries={["/profile"]}>
			<App />
		</MemoryRouter>
	);
	expect(asFragment()).toMatchSnapshot();
});
