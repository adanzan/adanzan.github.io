/* eslint no-unused-vars: 0 */

import * as React from "react";
import PropTypes from "prop-types";
import { Paper } from "@mui/material";
import styles from "../styles/Snippet.module.css";

export default function EducationSnippet({
	name, degree, dateRange, location, logo, link, gpa, achievements,
}) {
	const achievementElement = achievements.map((achievement) => (
		<li key={achievement}>
			{achievement}
		</li>
	));

	return (
		<div className={styles.EducationSnippet}>
			<Paper className={styles.snippetPaper} elevation={+10}>
				<div className={styles.org}>
					<a href={link} target="_blank" rel="noopener noreferrer">
						<img className={styles.logo} src={logo} alt={`${name}logo`} />
					</a>
					<div className={styles.nameLocationWrapper}>
						<div className={styles.nameLocation}>
							<a className={styles.name} href={link} target="_blank" rel="noopener noreferrer">
								<h3>{name}</h3>
							</a>
							<p className={styles.location}>{location}</p>
						</div>
					</div>
				</div>
				<div className={styles.detailsWrapper}>
					<div className={styles.details}>
						<p className={styles.detailsDegree}>
							{" "}
							<strong>{degree}</strong>
							{" "}
						</p>
						<p className={styles.detailsDate}>{dateRange}</p>
						<p>
							{" "}
							<strong>GPA:</strong>
							{" "}
							{gpa}
						</p>
						<p>{achievementElement}</p>
					</div>
				</div>
			</Paper>
		</div>
	);
}

EducationSnippet.propTypes = {
	name: PropTypes.string.isRequired,
	degree: PropTypes.string.isRequired,
	dateRange: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	logo: PropTypes.element.isRequired,
	link: PropTypes.string.isRequired,
	gpa: PropTypes.string.isRequired,
	achievements: PropTypes.arrayOf(
		PropTypes.string,
	).isRequired,
};
