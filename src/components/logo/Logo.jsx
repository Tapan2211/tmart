import React from "react";
import styles from './Logo.module.css';

function Logo() {
    return (
        <div>
            <img className={styles.image} alt="image" src="https://profiles-fyi-shivam907.vercel.app/logo.svg" />
        </div>
    )
}

export default Logo;