import * as React from 'react';
import Box from '@mui/material/Box';

import styles from '../styles/Hero.module.css';
import portrait from '../resources/images/portrait.jpeg';

export default function Hero() {
    return (
        <div className={styles.Hero}>
            <h2 className={styles.textSection}>Hi, I am Anthony Danzan Achit-Erdene</h2>
            {/* Could add one blurring out if one is hovered over - Anthony, Danzan */}
            {/* <Box sx={{borderRadius: '16px'}}> */}
            <img className={styles.imageSection} src={portrait} alt="Me"/>

        </div>
    )
}