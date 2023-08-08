/* eslint no-unused-vars: 0 */
import * as React from "react";

import {
	BiLogoPython, BiLogoJavascript,
	BiSolidFileCss, BiSolidFileHtml,
	BiLogoReact, BiLogoJava, BiLogoGit,
	BiLogoGithub, BiLogoFirebase, BiRun,
	BiLogoCPlusPlus, BiTestTube
} from "react-icons/bi";
import { TbLetterC } from "react-icons/tb";
import { FaLinux, FaPeopleCarry } from "react-icons/fa";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { VscDebugConsole } from "react-icons/vsc";
import { GiTeamIdea } from "react-icons/gi";
import styles from "../styles/Skills.module.css";

export default function Skills() {
	return (
		<div id="skills" className={styles.Skills}>
			<h2>SKILLS</h2>
			<div className={styles.sections}>
				{/* Programming Languages */}
				<div className={styles.section}>
					<h3 className={styles.sectionTitle}>
						Programming
						<br />
						Languages
					</h3>
					<div className={styles.icons}>
						<div className={styles.icon}>
							{" "}
							<BiLogoJavascript color="black" size="3rem" title="Javascript logo" />
							{" "}
							JavaScript
							{" "}
						</div>
						<div className={styles.icon}>
							{" "}
							<BiLogoPython color="black" size="3rem" title="Python logo" />
							{" "}
							Python
							{" "}
						</div>
						<div className={styles.icon}>
							{" "}
							<BiLogoJava color="black" size="3rem" title="Java logo" />
							{" "}
							Java
							{" "}
						</div>
						<div className={styles.icon}>
							{" "}
							<TbLetterC color="black" size="3rem" title="C logo" />
							{" "}
							C
							{" "}
						</div>
						<div className={styles.icon}>
							{" "}
							<BiLogoCPlusPlus color="black" size="3rem" title="C++ logo" />
							{" "}
							C++
							{" "}
						</div>
					</div>
				</div>
				{/* Tools */}
				<div className={styles.section}>
					<h3 className={styles.sectionTitle}>Tools</h3>
					<div className={styles.icons}>
						<div className={styles.icon}>
							{" "}
							<BiLogoGit color="black" size="3rem" title="Git logo" />
							{" "}
              Git
							{" "}
						</div>
						<div className={styles.icon}>
							{" "}
							<BiLogoGithub color="black" size="3rem" title="Github logo" />
							{" "}
              GitHub
							{" "}
						</div>
						<div className={styles.icon}>
							{" "}
							<FaLinux color="black" size="3rem" title="Linux logo" />
							{" "}
              Linux/Unix
							{" "}
						</div>
						<div className={styles.icon}>
							{" "}
							<BiLogoFirebase color="black" size="3rem" title="Firebase logo" />
							{" "}
              Firebase
							{" "}
						</div>
					</div>
				</div>
				{/* Frameworks & Languages */}
				<div className={styles.section}>
					<h3 className={styles.sectionTitle}>
            Frameworks &
						<br />
            Languages
					</h3>
					<div className={styles.icons}>
						<div className={styles.icon}>
							{" "}
							<BiLogoReact color="black" size="3rem" title="React logo"/>
							{" "}
              React
							{" "}
						</div>
						<div className={styles.icon}>
							{" "}
							<BiTestTube color="black" size="3rem" title="Jest logo"/>
							{" "}
              Jest
							{" "}
						</div>
						<div className={styles.icon}>
							{" "}
							<BiSolidFileHtml color="black" size="3rem" title="HTML logo" />
							{" "}
              HTML
							{" "}
						</div>
						<div className={styles.icon}>
							{" "}
							<BiSolidFileCss color="black" size="3rem" title="CSS logo" />
							{" "}
              CSS
							{" "}
						</div>
					</div>
				</div>
				{/* Soft Skills */}
				<div className={styles.section}>
					<h3 className={styles.sectionTitle}>Soft Skills</h3>
					<div className={styles.icons}>
						<div className={styles.icon}>
							{" "}
							<BiRun size="3rem" title="Agile" />
							{" "}
              Agile
							{" "}
						</div>
						<div className={styles.icon}>
							{" "}
							<FaPeopleCarry size="3rem" title="Teamwork" />
							{" "}
              Teamwork
							{" "}
						</div>
						<div className={styles.icon}>
							{" "}
							<GiTeamIdea size="3rem" title="Leadership" />
							{" "}
              Leadership
							{" "}
						</div>
						<div className={styles.icon}>
							{" "}
							<VscDebugConsole size="3rem" title="Debugging" />
							{" "}
              Debugging
							{" "}
						</div>
						<div className={styles.icon}>
							{" "}
							<LiaChalkboardTeacherSolid size="3rem" title="Teaching" />
							{" "}
              Teaching
							{" "}
						</div>
					</div>
				</div>
				{/* TODO: Add Languages */}
				{/* TODO: Add Interests, maybe in about me section ->  */}
			</div>
		</div>
	);
}
