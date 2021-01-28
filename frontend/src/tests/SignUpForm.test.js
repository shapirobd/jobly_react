import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SignUpForm from "../SignUpForm";

test("smoke test", () => {
	render(
		<MemoryRouter>
			<SignUpForm />
		</MemoryRouter>
	);
});

test("snapshot test", () => {
	const { asFragment } = render(
		<MemoryRouter>
			<SignUpForm />
		</MemoryRouter>
	);
	expect(asFragment()).toMatchSnapshot();
});
