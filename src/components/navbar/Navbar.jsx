import React from "react";
import styles from './Navbar.module.css';
import Logo from "../logo/Logo";

function Navbar() {
    return (
        <div className={styles.main}>
            <Logo />
            <div>
                <img className={styles.checkout} alt="checkout" src="https://profiles-fyi-shivam907.vercel.app/cart.svg" />
                <span className={styles.count}>
                    <p>0</p>
                </span>
            </div>

        </div>

    )
}

export default Navbar;