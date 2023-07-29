/* eslint no-unused-vars: 0 */
import * as React from "react";
import { render } from "@testing-library/react";

import Experience from "../components/Experience"; 

let testRender;

describe("Experience component", () => {
	beforeEach(() => {
		testRender = render(<Experience />);
	});
	test("matches snapshot", () => {
		expect(testRender).toMatchSnapshot();
	});
	test("has title", () => {
		expect(testRender.getByText("EXPERIENCE"));
	});
});
