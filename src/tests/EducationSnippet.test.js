/* eslint no-unused-vars: 0 */
import * as React from "react";
import { render } from "@testing-library/react";

import EducationSnippet from "../components/EducationSnippet"; 

test("matches snapshot", () => {
  const screenshotApp = render(<EducationSnippet 
    name={"testName"}
    degree={"testDegree"}
    dateRange={"testDateRange"}
    location={"testLocation"}
    logo={"testLogo"}
    link={"testLink"}
    gpa={"testGpa"}
    achievements={["testAchievement1, testAchievement2"]}
    />);
  expect(screenshotApp).toMatchSnapshot();
});
