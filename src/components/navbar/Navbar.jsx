import React from "react";
import styles from './Navbar.module.css';
import Logo from "../logo/Logo";

import { useSelector, useDispatch } from "react-redux";

function Navbar() {

    const count = useSelector((state) => state.cart.totalCount);

    return (
        <div className={styles.main}>
            <Logo />
            <div>
                <img className={styles.checkout} alt="checkout" src="https://profiles-fyi-shivam907.vercel.app/cart.svg" />
                <span className={styles.count}>
                    <p>{count}</p>
                </span>
            </div>

        </div>

    )
}

export default Navbar;