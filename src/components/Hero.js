import * as React from 'react'

import styles from '../styles/Hero.module.css'

export default function Hero() {
    return (
        <div className={styles.Hero}>
            {/* Two boxes (MUI?), one is picture, one is text */}
            <h2 className={styles.textSection}>Hi, I am Anthony Danzan Achit-Erdene</h2>
            {/* Could add one blurring out if one is hovered over - Anthony, Danzan */}
            <h3 className={styles.imageSection}>Picture here </h3>
        </div>
    )
}