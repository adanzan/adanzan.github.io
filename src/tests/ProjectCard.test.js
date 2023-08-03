/* eslint no-unused-vars: 0 */
import * as React from "react";
import { render } from "@testing-library/react";

import ProjectCard from "../components/ProjectCard"; 

let testRender;

describe("ProjectCard component", () => {
	beforeEach(() => {
		testRender = render(
			<ProjectCard 
				name="testName"
				description="testDescription"
				image="testImage"
				technologies="testTechnologies"
				link="testLink"
			/>);
	});
	describe("has", () => {
		test("name", () => {
			expect(testRender.getByText("testName"));
		});
		test("description", () => {
			expect(testRender.getByText("testDescription"));
		});
		test("link", () => {
			expect(testRender.getByRole("link", "testLink"));
		});
		test("image", () => {
			expect(testRender.getByRole("img", "testImage"));
		}); 
		test("technologies", () => {
			expect(testRender.getByText("testTechnologies"));
		});
	});
});
