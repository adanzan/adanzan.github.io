/* eslint no-unused-vars: 0 */
import * as React from "react";
import { render } from "@testing-library/react";

import Project from "../components/Project"; 
import projectData from "../resources/files/projectData.json";

let testRender;


describe("Project component", () => {
	beforeEach(() => {
		testRender = render(<Project />);
	});
	test("matches snapshot", () => {
		expect(testRender).toMatchSnapshot();
	});
	describe("displays", () => {
		test("title", () => {
			expect(testRender.getByText(/PROJECTS/));
		});
		test.skip("projects", () => {
			expect(testRender.getByText(""));
		});
	});
	test("contains information from json", () => {
		projectData.forEach((project) => {
			expect(testRender.getByText(project.name));
		});
	});
});