/**
 * Used to display a work object
*/

import * as React from 'react'

import styles from "../styles/Snippet.module.css"

export default function Snippet({orgName, location, positions}) {

    // Creates an element for each position
    const positionElement = positions.map((position, index) => {
        // Creates a list element for each dateRange worked as position
        const dateElement = position.dateRange.map((date, index) => {
            return (<p key={index}>{date}</p>);
        });

        return (
            <div className="positionElement" key={index}>
                <h3>{position.name}</h3>
                <p>{dateElement}</p>
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