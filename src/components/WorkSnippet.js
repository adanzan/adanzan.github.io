/**
 * Features the details of an organization, along with the roles I worked as
*/

// TODO: MUI Grid styling on logo and name so that it doesn't deform with rescaling

import * as React from "react";
import Paper from "@mui/material/Paper";

import styles from "../styles/WorkSnippet.module.css";
import stylesSnippet from "../styles/Snippet.module.css";

export default function WorkSnippet ({ name, location, logo, link, positions }) {
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
    <div className={styles.WorkSnippet}>
      <Paper className={stylesSnippet.snippetPaper} elevation={+10} style={{backgroundColor: "#fff3e0"}}>
        <div className={stylesSnippet.org}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img className={stylesSnippet.logo} src={logo} alt={name + " logo"}/>
          </a>
          <div className={stylesSnippet.nameLocationWrapper}>
            <div className={stylesSnippet.nameLocation}>
              <a className={stylesSnippet.name} href={link} target="_blank" rel="noopener noreferrer">
                <h3>{name}</h3>
              </a>
              <h4>{location}</h4>
            </div>
          </div>
        </div>
        {positionElement}
      </Paper>
    </div>
  );
}
