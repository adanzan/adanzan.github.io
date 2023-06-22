/**
 * Used to display a work object
*/

import * as React from "react";
import Paper from "@mui/material/Paper";

import styles from "../styles/Snippet.module.css";

export default function Snippet ({ orgName, location, positions }) {
  // Creates an element for each position in the organization
  const positionElement = positions.map((position, index) => {
    return (
            <Paper className={styles.positionPaper} key={index} elevation="2">
                <div className={styles.positionNameDate}>
                    <h3>{position.name}</h3>
                    <h3>{position.dateRange}</h3>
                </div>
                <p>{position.description}</p>
            </Paper>
    );
  });

  return (
        <Paper className={styles.snippetPaper} variant="outlined">
          <div className={styles.organizationNameLocation}>
            <h2>{orgName}</h2>
            <h2>{location}</h2>
          </div>
          {positionElement}
        </Paper>
  );
}
