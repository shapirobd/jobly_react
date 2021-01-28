import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

test("smoke test", () => {
	render(
		<MemoryRouter initialEntries={["/"]}>
			<App />
		</MemoryRouter>
	);
});

test("snapshot test", () => {
	const { asFragment } = render(
		<MemoryRouter initialEntries={["/"]}>
			<App />
		</MemoryRouter>
	);
	expect(asFragment()).toMatchSnapshot();
});

test("contains correct content", () => {
	const { getByText } = render(
		<MemoryRouter initialEntries={["/"]}>
			<App />
		</MemoryRouter>
	);
	expect(
		getByText("All the jobs in one, convenient place.")
	).toBeInTheDocument();
	expect(getByText("Log in")).toBeInTheDocument();
});
