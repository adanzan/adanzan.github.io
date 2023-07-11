/**
 * Features the details of an organization, along with the roles I worked as
*/

// TODO: MUI Grid styling on logo and name so that it doesn't deform with rescaling

import * as React from 'react'
import Paper from '@mui/material/Paper'

import styles from '../styles/Snippet.module.css'

export default function WorkSnippet ({ name, location, logo, link, positions }) {
  // Creates an element for each position in the organization
  const positionElement = positions.map((position, index) => {
    return (
      <div className={styles.position} key={index}>
        <p> <strong>{position.name}</strong></p>
        <p>{position.dateRange}</p>
      </div>
    )
  })

  return (
    <div className={styles.WorkSnippet}>
      <Paper className={styles.snippetPaper} elevation={+10}>
                <div className={styles.org}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img className={styles.logo} src={logo} alt={name + ' logo'}/>
          </a>
          <div className={styles.nameLocationWrapper}>
            <div className={styles.nameLocation}>
              <a className={styles.name} href={link} target="_blank" rel="noopener noreferrer">
                <h3>{name}</h3>
              </a>
              <p className={styles.location}>{location}</p>
            </div>
          </div>
        </div>
        <div className={styles.detailsWrapper}>
            {/* <div className={styles.details}> */}
              {positionElement}
            {/* </div> */}
        </div>
      </Paper>
    </div>
  )
}
