import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import LoginForm from "../LoginForm";

test("smoke test", () => {
	render(
		<MemoryRouter>
			<LoginForm />
		</MemoryRouter>
	);
});

test("snapshot test", () => {
	const { asFragment } = render(
		<MemoryRouter>
			<LoginForm />
		</MemoryRouter>
	);
	expect(asFragment()).toMatchSnapshot();
});

test("contains correct inputs/labels", () => {
	const { getByLabelText, getByText } = render(
		<MemoryRouter>
			<LoginForm />
		</MemoryRouter>
	);
	expect(getByLabelText("Username")).toBeInTheDocument();
	expect(getByLabelText("Password")).toBeInTheDocument();
	expect(getByText("Submit")).toBeInTheDocument();
});
