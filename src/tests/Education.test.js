/* eslint no-unused-vars: 0 */
import * as React from "react";
import { render } from "@testing-library/react";

import Education from "../components/Education"; 

let testRender;

describe(("Education component"), () => {
	beforeEach(() => {
		testRender = render(<Education />);
	});
	test("matches snapshot", () => {
		expect(testRender).toMatchSnapshot();
	});
	test("has title", () => {
		expect(testRender.getByText("EDUCATION"));
	});
});
