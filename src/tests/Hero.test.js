/* eslint no-unused-vars: 0 */
import * as React from "react";
import { render } from "@testing-library/react";

import Hero from "../components/Hero"; 

test("matches snapshot", () => {
  const screenshotApp = render(<Hero />);
  expect(screenshotApp).toMatchSnapshot();
});
