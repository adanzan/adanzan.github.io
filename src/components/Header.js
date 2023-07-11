import * as React from 'react'

import styles from "../styles/Header.module.css"

import { AppBar, Toolbar, Button } from '@mui/material'

import logo from "../resources/images/logo.png"

export default function Header () {
  return (
    <AppBar>
      <Toolbar >
        <img className={styles.logo} src={logo} alt="logo"/>
        <div className={styles.buttons}>
            <Button variant="outline">Education</Button>
            <Button variant="outline">Experience</Button>
            <Button variant="outline">Contact</Button>
            <Button variant="contained" disabled={true}>Download Resume</Button>
        </div>
      </Toolbar>
    </AppBar>
  )
}
