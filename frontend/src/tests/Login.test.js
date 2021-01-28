import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

test("smoke test", () => {
	render(
		<MemoryRouter initialEntries={["/login"]}>
			<App />
		</MemoryRouter>
	);
});

test("snapshot test", () => {
	const { asFragment } = render(
		<MemoryRouter initialEntries={["/login"]}>
			<App />
		</MemoryRouter>
	);
	expect(asFragment()).toMatchSnapshot();
});

test("contains correct content", () => {
	const { getByLabelText, getByText } = render(
		<MemoryRouter initialEntries={["/login"]}>
			<App />
		</MemoryRouter>
	);
	expect(getByText("Username")).toBeInTheDocument();
	expect(getByText("Password")).toBeInTheDocument();
	expect(getByText("Submit")).toBeInTheDocument();
});
