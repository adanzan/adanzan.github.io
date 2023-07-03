/**
 * Features the details of an organization, along with the roles I worked as
*/

import * as React from "react";
import Paper from "@mui/material/Paper";

import styles from "../styles/Snippet.module.css";

export default function Snippet ({ orgName, location, logo, logoLink, positions }) {
  // Creates an element for each position in the organization
  const positionElement = positions.map((position, index) => {
    return (
      <div className={styles.position} key={index}>
        <div className={styles.positionNameDate}>
          <h4>{position.name}</h4>
          <h4>{position.dateRange}</h4>
        </div>
        <p>{position.description}</p>
      </div>
    );
  });

  return (
    <Paper className={styles.snippetPaper} elevation={+10} >
      <div className={styles.organization}>
        <a href={logoLink} target="_blank" rel="noopener noreferrer">
          {/* Use scale() to enlarge logos slightly when hovered over 
          https://www.pluralsight.com/guides/create-a-hover-button-in-a-react-app*/}
          <img className={styles.logo} src={logo} alt={orgName + " logo"}/>
        </a>
        <div className={styles.organizationNameLocation}>
          <h3>{orgName}</h3>
          <h3>{location}</h3>
        </div>
      </div>
      {positionElement}
    </Paper>
  );
}
