/* eslint no-unused-vars: 0 */
import * as React from "react";
import { render } from "@testing-library/react";

import App from "../components/App"; 

describe("App component", () => {
	test("matches snapshot", () => {
		const screenshotApp = render(<App />);
		expect(screenshotApp).toMatchSnapshot();
	});
});
