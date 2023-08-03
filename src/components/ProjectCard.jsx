/* eslint no-unused-vars: 0 */

import * as React from "react";
import PropTypes from "prop-types";

import { Card } from "@mui/material";

import styles from "../styles/ProjectCard.module.css";

export default function ProjectCard({
	name, description, image, technologies, link
}) {
	return(
		<div className={styles.ProjectCard}>
			<Card>
				<h3>{name}</h3>
				<p>{description}</p>
				<a href={link}>
					<img src={image} alt={name}/>
				</a>
				<p>{technologies}</p>
			</Card>
		</div>
	);
}

ProjectCard.propTypes = {
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
};
