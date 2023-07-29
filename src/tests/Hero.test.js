/* eslint no-unused-vars: 0 */
import * as React from "react";
import { render } from "@testing-library/react";

import Hero from "../components/Hero"; 

let testRender;

describe("Hero component", () => {
	beforeEach(() => {
		testRender = render(<Hero />);
	});
	test("matches snapshot", () => {
		expect(testRender).toMatchSnapshot();
	});
	describe("displays", () => {
		test("first name", () => {
			expect(testRender.getByText("Anthony"));
		});
		test("image", () => {
			expect(testRender.getByRole("img", "Me"));
		});
		test("brief", () => {
			expect(testRender.getByText(/Software Developer/));
		});
	});
});