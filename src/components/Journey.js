/**
 * My journey, which consists of multiple Snippet components
*/

import * as React from "react";
import WorkSnippet from "./WorkSnippet";
import EducationSnippet from "./EducationSnippet"

import styles from "../styles/Journey.module.css";
import workData from "../resources/workData.json";
import agulaLogo from "../resources/images/agulaLogo.jpeg";
import middleburyLogo from "../resources/images/middleburyLogo.png";
import kidsCodeAcademyLogo from "../resources/images/kidsCodeAcademyLogo.png";
import orchlonLogo from "../resources/images/orchlon.png";

export default function Journey( ) {
    // List of all work snippets
    const workSnippets = [];
    // An array of all logos used in the workSnippet
    const logos = [agulaLogo, middleburyLogo, kidsCodeAcademyLogo];
    // Creates a WorkSnippet component for all workData entries
    // TODO: Use json.parse() method
    for (let index in workData) {
        const work = workData[index];
        workSnippets.push(<WorkSnippet key={index} name={work.name} location={work.location} 
                      logo={logos[index]} link={work.link} positions={work.positions}/>);
    } 

    const middleburyAchievements = ["cum laude", "Computer Science Honors"];
    const orchlonAchievements = ["Captain of varsity volleyball team", "Class President for 9 years"];

    return (
        <div className={styles.Journey}>
            <h2>My Journey</h2>
            <div className={styles.snippets}>
                <EducationSnippet name="Middlebury College"
                                dateRange={"2018/09 - 2023/02"}
                                location={"Middlebury, VT"}
                                logo={middleburyLogo}
                                link={"https://www.middlebury.edu/"}
                                gpa={"3.5"}
                                achievements={middleburyAchievements}/>   
                {/* Work */}
                {workSnippets}
                <EducationSnippet name="Orchlon International School"
                                dateRange="2005/09 - 2018/06" 
                                location="Ulaanbaatar, Mongolia" 
                                logo={orchlonLogo} 
                                link={"https://orchlon.mn/en/"} 
                                gpa="3.9" 
                                achievements={orchlonAchievements}/>  
            </div>
        </div>
    );
}