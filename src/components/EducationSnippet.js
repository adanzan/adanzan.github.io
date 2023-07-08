import * as React from "react";

import styles from "../styles/EducationSnippet.module.css";
import stylesSnippet from "../styles/Snippet.module.css";

import { Paper } from "@mui/material";

export default function EducationSnippet ({name, dateRange, location, logo, link, gpa, achievements}) {
    const achievementElement = achievements.map((achievement, index) => {
        return (
            <li key={index}>
                {achievement}
            </li>
        );
    });

    return (
        <div className={styles.EducationSnippet}>
            <Paper className={stylesSnippet.snippetPaper} elevation={+10} style={{backgroundColor: "#fff3e0"}}>
                <div className={stylesSnippet.org}>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <img className={stylesSnippet.logo} src={logo} alt={name + "logo"}/>
                    </a>
                    <div className={stylesSnippet.nameLocationWrapper}>
                        <div className={stylesSnippet.nameLocation}>
                            <a className={stylesSnippet.name} href={link} target="_blank" rel="noopener noreferrer">
                                <h3>{name}</h3>
                            </a>
                            <h4>{location}</h4>
                        </div>
                    </div>
                    <div className={styles.detailsWrapper}>
                        <div className={styles.details}>
                            <h4>{dateRange}</h4>
                            <p> <strong>GPA:</strong> {gpa}</p>
                            <p>{achievementElement}</p>
                        </div>
                    </div>
                </div>
            </Paper>
        </div>
    );
}