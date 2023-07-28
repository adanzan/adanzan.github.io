/* eslint no-unused-vars: 0 */
import * as React from "react";
import { render } from "@testing-library/react";

import ExperienceSnippet from "../components/ExperienceSnippet"; 

const screenshotApp = render(<ExperienceSnippet 
    name={"testName"} 
    location={"testLocation"} 
    logo={"testLogo"} 
    link={"testLink"} 
    positions={[{name: "testName1", dateRange: "testDateRange1"}, 
                {name: "testName2", dateRange: "testDateRange2"}]}
              />);

test("matches snapshot", () => {
  expect(screenshotApp).toMatchSnapshot();
    // TODO: Expect these to match the rendered object

});
