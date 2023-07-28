/* eslint no-unused-vars: 0 */
import * as React from "react";
import { render } from "@testing-library/react";

import Header from "../components/Header"; 

test("matches snapshot", () => {
  const screenshotApp = render(<Header />);
  expect(screenshotApp).toMatchSnapshot();
});
