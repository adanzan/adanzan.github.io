/**
 * My journey, which consists of multiple Snippet components
*/

import * as React from "react";
import Snippet from "./Snippet.js";

import styles from "../styles/Journey.module.css";
import workData from "../resources/workData.json";
import agula_logo from "../resources/images/agula_logo.jpeg";
import middlebury_logo from "../resources/images/middlebury_logo.png";
import kids_code_academy_logo from "../resources/images/kids_code_academy_logo.png";

export default function Journey( ) {
    // List of all journey snippets
    const snippets = [];
    // An array of all logos
    const logos = [agula_logo, middlebury_logo, kids_code_academy_logo];
    // Creates a Snippet component for all workData entries
    // TODO: Use json.parse() method
    for (let index in workData) {
        const work = workData[index];
        snippets.push(<Snippet key={index} orgName={work.orgName} location={work.location} 
                      logo={logos[index]} logoLink={work.logoLink} positions={work.positions}/>);
    } 

    return (
        <div className={styles.Journey}>
            <h2>My Journey</h2>
            {snippets}
        </div>
    );
}