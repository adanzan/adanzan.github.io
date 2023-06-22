/**
 * Used to display a work object
*/

import * as React from "react";

import styles from "../styles/Snippet.module.css";

export default function Snippet ({ orgName, location, positions }) {
  // Creates an element for each position in the organization
  const positionElement = positions.map((position, index) => {
    return (
            <div className="position" key={index}>
                <div className="positionNameDate">
                    <h3>{position.name}</h3>
                    <h3>{position.dateRange}</h3>
                </div>
                <p>{position.description}</p>
            </div>
    );
  });

  return (
        <div className={styles.Snippet}>
            <h2>{orgName + " - " + location}</h2>
            {positionElement}
        </div>
  );
}
