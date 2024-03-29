/* eslint no-unused-vars: 0 */

/**
 * My experience, consists of multiple ExperienceSnippet components
*/

import * as React from "react";
import ExperienceSnippet from "./ExperienceSnippet";

import styles from "../styles/Experience.module.css";
import workData from "../resources/files/workData.json";
import aesLogo from "../resources/images/aesLogo.png";
import agulaLogo from "../resources/images/agulaLogo.jpeg";
import middleburyLogo from "../resources/images/middleburyLogo.png";
import kidsCodeAcademyLogo from "../resources/images/kidsCodeAcademyLogo.png";

export default function Experience() {
	// List of all work snippets
	const experienceSnippets = [];
	// An array of all logos used in the experienceSnippets
	const logos = [aesLogo, agulaLogo, middleburyLogo, kidsCodeAcademyLogo];
	// Creates a ExperienceSnippet component for all workData entries
	for (const index in workData) {
		const work = workData[index];
		experienceSnippets.push(<ExperienceSnippet
			key={index}
			name={work.name}
			location={work.location}
			logo={logos[index]}
			link={work.link}
			positions={work.positions}
		/>);
	}

	return (
		<div id="experience" className={styles.Experience}>
			<h2>EXPERIENCE</h2>
			<div className={styles.snippets}>
				{experienceSnippets}
			</div>
		</div>
	);
}
