/* eslint no-unused-vars: 0 */
import * as React from "react";
import { render } from "@testing-library/react";

import Contact from "../components/Contact"; 

test("matches snapshot", () => {
  const screenshotApp = render(<Contact />);
  expect(screenshotApp).toMatchSnapshot();
});
