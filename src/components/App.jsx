/* eslint no-unused-vars: 0 */
import * as React from "react"; 

import "../styles/App.css";
import Header from "./Header";
import Hero from "./Hero";
import Experience from "./Experience";
import Education from "./Education";
import Project from "./Project";
import Skills from "./Skills";
import Contact from "./Contact";

export default function App() {
	return (
		<div className="App">
			<Header />
			<Hero />
			<Education />
			<Experience />
			<Project />
			<Skills />
			<Contact />
		</div>
	);
}
