/**
 * Used to display a work object
*/

import * as React from 'react'

import styles from "../styles/Snippet.module.css"

export default function Snippet({orgName, location, positions}) {

    // Creates an element for each position
    const positionElement = positions.map((position, index) => {
        return (
            <div className="positionElement" key={index}>
                <h3>{position.name + " " + position.dateRange}</h3>
                <p>{position.description}</p>
            </div>
        );
    });

    return (
        <div className={styles.Snippet}>
            <h2>{orgName + " - "+ location}</h2>
            {positionElement}
        </div>
    );
}