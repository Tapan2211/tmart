import React from "react";
import styles from './Navbar.module.css';
import Logo from "../logo/Logo";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function Navbar() {

    const navigate = useNavigate();
    const count = useSelector((state) => state.cart.totalCount);

    const handleClick = () => {
        navigate('/cart');
    }

    const handlLogo = () => {
        navigate('/');
    }
    return (
        <div className={styles.main}>
            <Logo onClick={handlLogo} />
            <div onClick={handleClick} send="TEST">
                <img className={styles.checkout} alt="checkout" src="https://profiles-fyi-shivam907.vercel.app/cart.svg" />
                <span className={styles.count}>
                    <p>{count}</p>
                </span>
            </div>

        </div>

    )
}

export default Navbar;