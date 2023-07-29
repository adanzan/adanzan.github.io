/* eslint no-unused-vars: 0 */
import * as React from "react";
import { render } from "@testing-library/react";

import ExperienceSnippet from "../components/ExperienceSnippet"; 

let testRender;

describe("ExperienceSnippet component", () => {
	beforeEach(() => {
		testRender = render(<ExperienceSnippet 
			name={"testName"} 
			location={"testLocation"} 
			logo={"testLogo"} 
			link={"testLink"} 
			positions={[{name: "testName1", dateRange: "testDateRange1"}, 
				{name: "testName2", dateRange: "testDateRange2"}]}
		/>);
	});
	test("matches snapshot", () => {
		expect(testRender).toMatchSnapshot();
	});
	describe("correctly displays", () => {
		test("name", () => {
			expect(testRender.getByRole("heading", "name")).toContainHTML("testName");
		});
		test("positions", () => {
			expect(testRender.getByText("testName1"));
			expect(testRender.getByText("testDateRange2"));
		});
	});
});
		
		
