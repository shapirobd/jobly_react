import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CompanyList from "../CompanyList";

test("smoke test", () => {
	render(
		<MemoryRouter>
			<CompanyList />
		</MemoryRouter>
	);
});

test("snapshot test", () => {
	const { asFragment } = render(
		<MemoryRouter>
			<CompanyList />
		</MemoryRouter>
	);
	expect(asFragment()).toMatchSnapshot();
});
