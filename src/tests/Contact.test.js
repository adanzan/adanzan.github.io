/* eslint no-unused-vars: 0 */
import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Contact from "../components/Contact"; 


let testRender;

describe("Contact component", () => {
	beforeEach(() => {
		testRender = render(<Contact />);
	});
	test("matches snapshot", () => {
		expect(testRender).toMatchSnapshot();
	});
	describe("displays", () => {
		// test("title", () => {
		// expect(testRender.getByText("CONTACT"));
		// });
		test("icons", () => {
			expect(testRender.getByTitle("Linkedin logo"));
			expect(testRender.getByTitle("Github logo"));
			expect(testRender.getByTitle("Email icon"));
			// expect(testRender.getByTitle("Instagram logo"));
		});
		// test("resume download button", () => {
		// 	expect(testRender.getByText("Download resume"));
		// });
	});
});
