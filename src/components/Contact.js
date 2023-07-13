import * as React from 'react'

import styles from '../styles/Contact.module.css'

import { IconButton } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'
import EmailIcon from '@mui/icons-material/Email'

export default function Header () {
  return (
        <div id="contact" className={styles.Contact}>
            <h2>Contact Me</h2>
            <div className={styles.icons}>
                <IconButton href="https://www.linkedin.com/anthony-achiterdene" target="_blank">
                    <LinkedInIcon color='icon' fontSize='large'/>
                </IconButton>
                <IconButton href="https://github.com/adanzan" target="_blank" size="large">
                    <GitHubIcon color='icon' fontSize='large'/>
                </IconButton>
                <IconButton href="https://www.instagram.com/a_danzan/" target="_blank">
                    <InstagramIcon color='icon' fontSize='large'/>
                </IconButton>
                <IconButton href="mailto:danzanachiterdene@gmail.com" target="_blank">
                    <EmailIcon color='icon' fontSize='large'/>
                </IconButton>
            </div>
        </div>
  );
}
