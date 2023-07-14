import * as React from 'react'

import styles from "../styles/Header.module.css"

import { AppBar, Toolbar, Button } from '@mui/material'
import { Link, animateScroll as scroll } from "react-scroll";


import logo from "../resources/images/logo.png"

export default function Header () {
  // How long the animation should play
  const SCROLL_DURATION = 500;
  // How far to scroll past
  const SCROLL_OFFSET = -80;

  return (
    <AppBar className={styles.appBar}>
      <Toolbar className={styles.toolbar} variant="regular">
        <Button onClick={() => scroll.scrollToTop()}>
          <div className={styles.logoWrapper}>
            <img className={styles.logo} src={logo} alt="logo"/>
            {/* <Typography>Anthony Achit</Typography> */}
          </div>
        </Button>
        <div className={styles.buttonsWrapper}>
          <div className={styles.buttons}>
            <Link className={styles.link} activeClass={styles.linkActive}
                to="education"
                spy={true}
                smooth={true}
                offset={SCROLL_OFFSET}
                duration={SCROLL_DURATION}>
                EDUCATION
            </Link>
            <Link className={styles.link} activeClass={styles.linkActive}
                to="experience"
                spy={true}
                smooth={true}
                offset={SCROLL_OFFSET}
                duration={SCROLL_DURATION}>
                EXPERIENCE
            </Link>
            <Link className={styles.link} activeClass={styles.linkActive}
                to="contact"
                spy={true}
                smooth={true}
                offset={SCROLL_OFFSET}
                duration={SCROLL_DURATION}>
                CONTACT
            </Link>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  )
}
