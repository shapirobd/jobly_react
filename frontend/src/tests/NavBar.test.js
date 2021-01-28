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
