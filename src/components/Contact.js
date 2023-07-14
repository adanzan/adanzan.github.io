import * as React from 'react'

import styles from '../styles/Contact.module.css'

import { IconButton, Button } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'
import EmailIcon from '@mui/icons-material/Email'

export default function Header () {
  return (
        <div id="contact" className={styles.Contact}>
            <h2>Contact Me</h2>
            <div className={styles.columns}>
                <div className={styles.icons}>
                    <IconButton href="https://www.linkedin.com/in/anthony-achiterdene/" target="_blank" size="large">
                        <LinkedInIcon color='icon' fontSize='large'/>
                    </IconButton>
                    <IconButton href="https://github.com/adanzan" target="_blank" size="large">
                        <GitHubIcon color='icon' fontSize='large'/>
                    </IconButton>
                    <IconButton href="https://www.instagram.com/a_danzan/" target="_blank" size="large">
                        <InstagramIcon color='icon' fontSize='large'/>
                    </IconButton>
                    <IconButton href="mailto:danzanachiterdene@gmail.com" target="_blank" size="large">
                        <EmailIcon color='icon' fontSize='large'/>
                    </IconButton>
                </div>
                <div className={styles.resumeDownload}>
                    {/* Maybe add format choices - word and pdf as well */}
                        {/* It could be a button that pops out */}
                    <Button variant="contained" href="./Anthony_Achit-Erdene_Resume.pdf" download>
                        {/* <a href="../resources/files/Anthony_Achit_Resume.pdf" download>
                        </a> */}
                        Download resume
                    </Button>
                </div>
            </div>
        </div>
  );
}
