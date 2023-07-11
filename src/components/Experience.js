/**
 * My work experience, consists of multiple Snippet components
*/

import * as React from 'react'
import WorkSnippet from './WorkSnippet'

import styles from '../styles/Experience.module.css'
import workData from '../resources/workData.json'
import agulaLogo from '../resources/images/agulaLogo.jpeg'
import middleburyLogo from '../resources/images/middleburyLogo.png'
import kidsCodeAcademyLogo from '../resources/images/kidsCodeAcademyLogo.png'

export default function Experience () {
  // List of all work snippets
  const workSnippets = []
  // An array of all logos used in the workSnippet
  const logos = [agulaLogo, middleburyLogo, kidsCodeAcademyLogo]
  // Creates a WorkSnippet component for all workData entries
  // TODO: Use json.parse() method
  for (const index in workData) {
    const work = workData[index]
    workSnippets.push(<WorkSnippet key={index} name={work.name} location={work.location}
                      logo={logos[index]} link={work.link} positions={work.positions}/>)
  }


  return (
        <div className={styles.Experience}>
            <h2>Work Experience</h2>
            <div className={styles.snippets}>
                {workSnippets}
            </div>
        </div>
  )
}
