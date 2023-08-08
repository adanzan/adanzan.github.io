/* eslint no-unused-vars: 0 */

import * as React from "react";

import styles from "../styles/Education.module.css";

import EducationSnippet from "./EducationSnippet";

import middleburyLogo from "../resources/images/middleburyLogo.png";
import orchlonLogo from "../resources/images/orchlonLogo.png";

export default function Education() {
	const middleburyAchievements = ["cum laude", "Computer Science Honors"];
	const orchlonAchievements = ["Captain of varsity volleyball team", "Class President for 9 years"];

	return (
		<div id="education" className={styles.Education}>
			<h2>EDUCATION</h2>
			<EducationSnippet
				name="Middlebury College"
				degree={`B.A. in Computer Science,
                                         \n     Minor in Russian Language`}
				dateRange="Sep 2018 - Feb 2023"
				location="Middlebury, VT"
				logo={middleburyLogo}
				link="https://www.middlebury.edu/"
				gpa="3.5"
				achievements={middleburyAchievements}
			/>
			<EducationSnippet
				name="Orchlon International School"
				degree="High School Diploma"
				dateRange="Sep 2006 - May 2018"
				location="Ulaanbaatar, Mongolia"
				logo={orchlonLogo}
				link="https://orchlon.mn/en/"
				gpa="3.9"
				achievements={orchlonAchievements}
			/>
		</div>
	);
}
