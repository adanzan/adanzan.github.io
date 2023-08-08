/* eslint no-unused-vars: 0 */

import * as React from "react";

import { IconButton, Button } from "@mui/material";

import { BiLogoLinkedinSquare, BiLogoGithub, BiLogoInstagram } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import styles from "../styles/Contact.module.css";

export default function Header() {
	return (
		<div id="contact" className={styles.Contact}>
			{/* <h2>CONTACT</h2> */}
			<div className={styles.columns}>
				<div className={styles.resumeDownload}>
					{/* <Button 
						size="large" 
						variant="text" 
						color="tertiary"
						href="./Anthony_Achit-Erdene_Resume.pdf" 
						download="Anthony_Achit-Erdene_Resume.pdf" 
						data-testid="resumeDownload">
            Download resume
					</Button> */}
				</div>
				<div className={styles.icons}>
					<IconButton href="https://www.linkedin.com/in/anthony-achiterdene/" target="_blank" size="large">
						<BiLogoLinkedinSquare color="#37c" fontSize="2rem" title="Linkedin logo" />
					</IconButton>
					<IconButton href="https://github.com/adanzan" target="_blank" size="large">
						<BiLogoGithub color="#37c" fontSize="2rem" title="Github logo" />
					</IconButton>
					<IconButton href="mailto:danzanachiterdene@gmail.com" target="_blank" size="large">
						<MdOutlineEmail color="#37c" fontSize="2rem" title="Email icon" />
					</IconButton>
					{/* <IconButton href="https://www.instagram.com/a_danzan/" target="_blank" size="large">
						<BiLogoInstagram color="#37c" fontSize="2rem" title="Instagram logo" />
					</IconButton> */}
				</div>
			</div>
		</div>
	);
}
