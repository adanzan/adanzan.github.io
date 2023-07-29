/* eslint no-unused-vars: 0 */
import * as React from "react";
import { render } from "@testing-library/react";

import Skills from "../components/Skills"; 

let testRender;

describe("Skills component", () => {
	beforeEach(() => {
		testRender = render(<Skills />);
	});
	test("matches snapshot", () => {
		expect(testRender).toMatchSnapshot();
	});
	test("has title", () => {
		expect(testRender.getByText("SKILLS"));
	});
	describe("correctly displays", () => {
		test("section titles", () => {
			expect(testRender.getByText(/Programming.*Languages/));
			expect(testRender.getByText("Tools"));
			expect(testRender.getByText(/Frameworks.*Languages/));
			expect(testRender.getByText("Soft Skills"));
		});
		describe("skill", () => {
			test("logos", () => {
				expect(testRender.getByTitle("Python logo"));
				expect(testRender.getByTitle("Firebase logo"));
				expect(testRender.getByTitle("React logo"));
				expect(testRender.getByTitle("Agile"));
			});
			test("texts", () => {
				expect(testRender.getByText("Python"));
				expect(testRender.getByText("GitHub"));
				expect(testRender.getByText("React"));
			});
		});
	});
});