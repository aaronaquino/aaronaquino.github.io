import React from 'react';
import styles from './navigation.module.scss';

const Navigation = () => {
  return (
    <header>
        <nav className={styles.topNav}>
            <a href="/" className={styles.logoContainer} title="Aaron Aquino">
                <svg className={styles.logo} viewBox="554 554 892 892" width="892" height="892">
                    <circle cx="1000" cy="1000" r="425" fill="none" strokeWidth="42" strokeLinejoin="miter" strokeLinecap="butt" strokeMiterlimit="3"/>
                    <path d=" M 755 1195.5 C 752.367 1207.684 759.75 1216.715 770 1218.5 C 780.464 1220.322 790.575 1214.878 793 1203.5 Q 796.057 1189.155 872 828.5 L 1012 1123.5 L 1127 830.5 Q 1224.416 1236.235 1227 1246.5 C 1229.584 1256.765 1241.057 1260.951 1250 1258.5 C 1258.943 1256.049 1265.715 1246.729 1264 1238.5 Q 1262.285 1230.271 1136 704.5 L 1009 1027.5 L 858 710.5 Q 758.325 1180.114 755 1195.5 Z " strokeWidth="1" strokeLinejoin="miter" strokeLinecap="square" strokeMiterlimit="3"/>
                    <path d=" M 694 985.5 L 700 1023.5 L 1289 938.5 L 1283 900.5 L 694 985.5 Z " strokeWidth="1" strokeLinejoin="miter" strokeLinecap="square" strokeMiterlimit="3"/>
                </svg>
            </a>
            <button className={styles.hamburgerButton}
               onClick={toggleTopNav}
               aria-labelledby="hamburgerAriaInstructions">
                    <div id="hamburgerAriaInstructions" className={styles.screenreaderOnly}>
                        Click to show menu
                    </div>
                    <svg height="20px" viewBox="0 0 448 512" width="20px">
                        <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/>
                    </svg>
            </button>
            <div className={styles.break}></div>
            <div className={styles.menuButtonsContainer}>
                <a className={styles.menuButton} href="/hacker">Hacker</a>
                <a className={styles.menuButton} href="/dancer">Dancer</a>
                <a className={styles.menuButton} href="/creative">Creative</a>
                <a className={styles.menuButton} href="/">About</a>
            </div>
        </nav>
    </header>
  )
};

/** Toggle the "responsive" class on the topnav when the user clicks on the hamburger icon. */
 function toggleTopNav() {
    const topNav = document.querySelector(`.${styles.topNav}`);
	const hamburgerButton = document.querySelector(`.${styles.hamburgerButton}`);
	const menuButtonsContainer = document.querySelector(`.${styles.menuButtonsContainer}`);
	const hamburgerScreenreaderText = document.querySelector('#hamburgerAriaInstructions');

	if (!topNav.classList.contains(styles.isResponsive)) {
		topNav.classList.add(styles.isResponsive);
		menuButtonsContainer.classList.add(styles.isResponsive);
		hamburgerButton.classList.add(styles.isTouched);
		hamburgerScreenreaderText.innerText = 'Click to hide menu';
	} else {
		topNav.classList.remove(styles.isResponsive);
		menuButtonsContainer.classList.remove(styles.isResponsive);
		hamburgerButton.classList.remove(styles.isTouched);
		hamburgerScreenreaderText.innerText = 'Click to show menu';
	}
}

export default Navigation;