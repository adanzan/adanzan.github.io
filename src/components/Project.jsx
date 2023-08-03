/* eslint no-unused-vars: 0 */
import * as React from "react";
import ProjectCard from "./ProjectCard";

import styles from "../styles/Project.module.css";
import projectData from "../resources/files/projectData.json";

export default function Project() {
	const projectCards = [];
	projectData.map((project) => {
		projectCards.push(
			<ProjectCard 
				key={project.name}
				name={project.name} 
				description={project.description}
				image={project.image}
				technologies={project.technologies}
				link={project.link}
			/>);
	});

	return (
		<div id="projects">
			<h2>PROJECTS</h2>
			<div className={styles.projectCards}>
				{projectCards}
			</div>
		</div>);
}