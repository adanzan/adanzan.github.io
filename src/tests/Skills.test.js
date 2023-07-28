/* eslint no-unused-vars: 0 */
import * as React from "react";
import { render } from "@testing-library/react";

import Skills from "../components/Skills"; 

test("matches snapshot", () => {
  const screenshotApp = render(<Skills />);
  expect(screenshotApp).toMatchSnapshot();
});
