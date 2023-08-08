/* eslint no-unused-vars: 0 */

import * as React from "react";
import PropTypes from "prop-types";

import { Card } from "@mui/material";

import styles from "../styles/ProjectCard.module.css";

export default function ProjectCard({
	name, description, technologies, link
}) {
	return(
		<div className={styles.ProjectCard}>
			<a href={link} target="_blank" rel="noopener noreferrer">
				<Card 
					elevation={0}
					sx={{
						border: "1.5px solid orange", 
						borderRadius: "1em"
					}}>
					<div className={styles.card}>
						<h3>{name}</h3>
						<p className={styles.description}>{description}</p>
						<p>{technologies}</p>
					</div>
				</Card>
			</a>
		</div>
	);
}

ProjectCard.propTypes = {
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
};
