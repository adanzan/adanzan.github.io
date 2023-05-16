/**
 * Used to display a work object
*/

import styles from "../styles/snippet.modules.css"

// TODO: Write tests for Snippet.js, 

export default function Snippet({orgName, location, positions}) {

    // Creates an element for each position
    const positionElement = positions.map((position, index) => {
        // Creates a list element for each dateRange worked as position
        const dateElement = position.dateRange.map((date, index) => {
            return (<li key={index}>{date}</li>);
        });

        return (
            <div key={index}>
                <p>{position.positionName}</p>
                {/* TODO: Get rid of indent in ul, or figure out what other element to use (Probably use CSS after the fact)*/}
                <ul>{dateElement}</ul>
                <p>{position.description}</p>
                <br/>
            </div>
        );
    });

    return (
        <div>
            <h2 class="styles.orgName">{orgName}</h2>
            <h3>{location}</h3>
            {positionElement}
        </div>
    );
}