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
            <div key={index}>
                <p>{position.positionName}</p>
                <p>{dateElement}</p>
                <p>{position.description}</p>
                <br/>
            </div>
        );
    });

    return (
        <div className={styles.Snippet}>
            <h2>{orgName}</h2>
            <h3>{location}</h3>
            {positionElement}
        </div>
    );
}