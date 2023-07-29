/* eslint no-unused-vars: 0 */
import * as React from "react";
import { render } from "@testing-library/react";

import Header from "../components/Header"; 

let testRender;

describe("Header component", () => {
	beforeEach(() => {
		testRender = render(<Header />);
	});
	test("matches snapshot", () => {
		expect(testRender).toMatchSnapshot();
	});
	describe("displays", () => {
		test("logo", () => {
			expect(testRender.getByRole("img", "logo"));
		});
		test("menu items", () => {
			expect(testRender.getByText("EDUCATION"));
			expect(testRender.getByText("EXPERIENCE"));
			expect(testRender.getByText("SKILLS"));
			expect(testRender.getByText("CONTACT"));
		});
	});

});
