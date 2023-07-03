import * as React from "react";
import { useState } from "react";

import styles from "../styles/Hero.module.css";
import portrait from "../resources/images/new_portrait.png";

export default function Hero () {
  //On-hover, On-leave, change the visibility of name 
  const [mouseHover, setMouseHover] = useState(false);

  return (
        <div className={styles.Hero}>
          <div className={styles.textSection} 
          onMouseEnter={() => setMouseHover(true)} 
          onMouseLeave={() => setMouseHover(false)}>
            <h1>Hi, My Name Is</h1>
            <h1>Anthony Danzan</h1>
            {!mouseHover? <h1>Achit-Erdene</h1> : <h1 style={{opacity: 0.5}}>Achit-Erdene</h1>}
          </div>
          {/* Could add one blurring out if one is hovered over - Anthony, Danzan */}
          <div className={styles.imageSection}>
            <img className={styles.image} src={portrait} alt="Me"/>
          </div>
        </div>
  );
}
