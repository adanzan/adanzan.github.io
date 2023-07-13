import * as React from 'react'

import styles from "../styles/Header.module.css"

import { AppBar, Toolbar, Button } from '@mui/material'

import logo from "../resources/images/logo.png"

export default function Header () {
  return (
    <AppBar className={styles.appBar}>
      <Toolbar className={styles.toolbar} variant="regular">
        <Button>
          <div className={styles.logoWrapper}>
            <img className={styles.logo} src={logo} alt="logo"/>
            {/* <Typography>Anthony Achit</Typography> */}
          </div>
        </Button>
        <div className={styles.buttonsWrapper}>
          <div className={styles.buttons}>
              <Button className={styles.button} variant="text">Education</Button>
              <Button variant="text">Experience</Button>
              <Button variant="text">Contact</Button>
              {/* <Button variant="contained" disabled={true}>Download Resume</Button> */}
          </div>
        </div>
      </Toolbar>
    </AppBar>
  )
}
