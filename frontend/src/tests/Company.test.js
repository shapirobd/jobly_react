import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Company from "../Company";

test("smoke test", () => {
	render(
		<MemoryRouter>
			<Company />
		</MemoryRouter>
	);
});

test("snapshot test", () => {
	const { asFragment } = render(
		<MemoryRouter>
			<Company />
		</MemoryRouter>
	);
	expect(asFragment()).toMatchSnapshot();
});
