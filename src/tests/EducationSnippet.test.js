/* eslint no-unused-vars: 0 */
import * as React from "react";
import { render } from "@testing-library/react";

import EducationSnippet from "../components/EducationSnippet"; 

let testRender;

describe("EducationSnippet component", () => {
	beforeEach(() => {
		testRender = render(<EducationSnippet 
			name={"testName"}
			degree={"testDegree"}
			dateRange={"testDateRange"}
			location={"testLocation"}
			logo={"testLogo"}
			link={"testLink"}
			gpa={"testGpa"}
			achievements={["testAchievement1", "testAchievement2"]}
		/>);
	});
	test("matches snapshot", () => {
		expect(testRender).toMatchSnapshot();
	});

	describe("correctly displays", () => {
		test("name", () => {
			expect(testRender.getByRole("heading", "name")).toContainHTML("testName");
		});
		test("testGpa", () => {
			expect(testRender.getByText("testGpa"));
		});
		test("achievements", () => {
			expect(testRender.getByText("testAchievement1"));
			expect(testRender.getByText("testAchievement2"));
		});
	});
});

