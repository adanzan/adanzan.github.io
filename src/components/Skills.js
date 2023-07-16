import * as React from 'react';

import styles from '../styles/Skills.module.css';

import {
    BiLogoPython, BiLogoJavascript,
    BiSolidFileCss, BiSolidFileHtml,
    BiLogoReact, BiLogoJava, BiLogoGit,
    BiLogoGithub, BiLogoFirebase, BiRun,
    BiLogoCPlusPlus
} from "react-icons/bi";
import { TbLetterC } from 'react-icons/tb';
import { FaLinux, FaPeopleCarry } from 'react-icons/fa';
import { LiaChalkboardTeacherSolid } from 'react-icons/lia';
import { VscDebugConsole } from 'react-icons/vsc';
import { GiTeamIdea } from 'react-icons/gi';

// import pythonIcon from '../resources/images/python-logo-24.png';

export default function Skills() {
    return (
        <div id="skills" className={styles.Skills}>
            <h2>SKILLS</h2>
            <div className={styles.sections}>
                {/* Programming Languages */}
                <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>Programming<br/>Languages</h3>
                    <div className={styles.icons}>
                        <div className={styles.icon}> <BiLogoJavascript color="green" size="4rem"/> JavaScript </div>
                        <div className={styles.icon}> <BiLogoPython color="green" size="4rem"/> Python </div>
                        <div className={styles.icon}> <BiLogoJava color="orange" size="4rem"/> Java </div>
                        <div className={styles.icon}> <TbLetterC color="orange" size="4rem"/> C </div>
                        <div className={styles.icon}> <BiLogoCPlusPlus color="orange" size="4rem"/> C++ </div>
                    </div>
                </div>
                {/* Tools */}
                <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>Tools</h3>
                    <div className={styles.icons}>
                        <div className={styles.icon}> <BiLogoGit color="green" size="4rem"/> Git </div>
                        <div className={styles.icon}> <BiLogoGithub color="green" size="4rem"/> GitHub </div>
                        <div className={styles.icon}> <FaLinux color="green" size="4rem"/> Linux/Unix </div>
                        <div className={styles.icon}> <BiLogoFirebase color="orange" size="4rem"/> Firebase </div>
                    </div>
                </div>
                {/* Frameworks & Languages */}
                <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>Frameworks &<br/>Languages</h3>
                    <div className={styles.icons}>
                        <div className={styles.icon}> <BiLogoReact color="green" size="4rem"/> React </div>
                        <div className={styles.icon}> <BiSolidFileHtml color="orange"size="4rem"/> HTML </div>
                        <div className={styles.icon}> <BiSolidFileCss color="orange" size="4rem"/> CSS </div>
                    </div>
                </div>
                {/* Soft Skills */}
                <div className={styles.section}> 
                    <h3 className={styles.sectionTitle}>Soft Skills</h3>
                    <div className={styles.icons}>
                        <div className={styles.icon}> <VscDebugConsole size="3rem"/> Debugging </div>
                        <div className={styles.icon}> <LiaChalkboardTeacherSolid size="3rem"/> Teaching </div>
                        <div className={styles.icon}> <BiRun size="3rem"/> Agile </div>
                        <div className={styles.icon}> <FaPeopleCarry size="3rem"/> Teamwork </div>
                        <div className={styles.icon}> <GiTeamIdea size="3rem"/> Leadership </div>
                    </div>
                </div>
                {/* TODO: Add Languages */}
                {/* TODO: Add Interests, maybe in about me section ->  */}
            </div>
        </div>
    );
}