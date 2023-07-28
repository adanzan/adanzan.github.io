/* eslint no-unused-vars: 0 */
import * as React from "react";
import { render } from "@testing-library/react";

import Experience from "../components/Experience"; 

test("matches snapshot", () => {
  const screenshotApp = render(<Experience />);
  expect(screenshotApp).toMatchSnapshot();
});
