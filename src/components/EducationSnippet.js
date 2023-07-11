import * as React from 'react'

import styles from '../styles/Snippet.module.css'

import { Paper } from '@mui/material'

export default function EducationSnippet ({ name, dateRange, location, logo, link, gpa, achievements }) {
  const achievementElement = achievements.map((achievement, index) => {
    return (
            <li key={index}>
                {achievement}
            </li>
    )
  })

  return (
        <div className={styles.EducationSnippet}>
             <Paper className={styles.snippetPaper} elevation={+10}>
                <div className={styles.org}>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <img className={styles.logo} src={logo} alt={name + 'logo'}/>
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
                    <div className={styles.details}>
                        <p className={styles.detailsDate}>{dateRange}</p>
                        <p> <strong>GPA:</strong> {gpa}</p>
                        <p>{achievementElement}</p>
                    </div>
                </div>
            </Paper>
        </div>
  )
}
