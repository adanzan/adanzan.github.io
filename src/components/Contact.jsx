/* eslint no-unused-vars: 0 */

import * as React from "react";

import { IconButton, Button } from "@mui/material";

import { BiLogoLinkedinSquare, BiLogoGithub, BiLogoInstagram } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import styles from "../styles/Contact.module.css";

export default function Header() {
	return (
		<div id="contact" className={styles.Contact}>
			<h2>CONTACT</h2>
			<div className={styles.columns}>
				<div className={styles.icons}>
					<IconButton href="https://www.linkedin.com/in/anthony-achiterdene/" target="_blank" size="large">
						<BiLogoLinkedinSquare color="white" fontSize="4.5rem" />
					</IconButton>
					<IconButton href="https://github.com/adanzan" target="_blank" size="large">
						<BiLogoGithub color="white" fontSize="4.5rem" />
					</IconButton>
					<IconButton href="mailto:danzanachiterdene@gmail.com" target="_blank" size="large">
						<MdOutlineEmail color="white" fontSize="4.5rem" />
					</IconButton>
					<IconButton href="https://www.instagram.com/a_danzan/" target="_blank" size="large">
						<BiLogoInstagram color="white" fontSize="4.5rem" />
					</IconButton>
				</div>
				<div className={styles.resumeDownload}>
					{/* TODO: add format choices - word and pdf */}
					<Button size="large" variant="contained" href="./Anthony_Achit-Erdene_Resume.pdf" download>
            Download resume
					</Button>
				</div>
			</div>
		</div>
	);
}
