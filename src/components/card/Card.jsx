import React from "react";
import styles from './Card.module.css';

import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../redux/CardSlice";

function Card({ send }) {

    const { name, description, price, img } = send;
    const dispatch = useDispatch();
    const item = useSelector((state) => state.cart.items);

    const handleClick = () => {
        console.log(name)
        dispatch(addItem(item));
    }

    return (
        <div className={styles.main}>
            <img className={styles.image} src={img} alt="image" />
            <div className={styles.sub_div}>
                <h1>{name}</h1>
                <p>{description}</p>
                <h2>₹{price}</h2>

                <button className={styles.button} onClick={handleClick}>
                    <p>Add to Cart</p>
                    <img style={{ marginLeft: '10px', height: '20px', width: '20px', padding: '5px' }} src="https://profiles-fyi-shivam907.vercel.app/cart.svg" alt="cart" />
                </button>
            </div>
        </div>
    )
}

export default Card;