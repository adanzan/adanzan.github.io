import * as React from "react";

import styles from "../styles/Hero.module.css";
import portrait from "../resources/images/me.jpeg";

export default function Hero() {
	return (
		<div className={styles.Hero}>
			<div className={styles.textSection}>
				<h1>Hello, I&apos;m</h1>
				<h1>Anthony</h1>
				<h1>Danzan</h1>
				<h1>Achit-Erdene</h1>
				<p className={styles.brief}>
					I'm a Software Developer based in Boston, MA.
				</p>
			</div>
			<img className={styles.image} src={portrait} alt="Me" />
		</div>
	);
}
