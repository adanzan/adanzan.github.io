/* eslint no-unused-vars: 0 */
import * as React from "react";
import { render } from "@testing-library/react";

import Education from "../components/Education"; 

test("matches snapshot", () => {
  const screenshotApp = render(<Education />);
  expect(screenshotApp).toMatchSnapshot();
});
