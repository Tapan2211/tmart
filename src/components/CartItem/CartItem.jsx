import React from "react";
import styles from './CartItem.module.css';

import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../redux/CardSlice";
import Navbar from "../navbar/Navbar";
import Header from '../header/Header';

function CartItem({ send }) {

    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.items);

    const removeCartItem = (id) => {
        dispatch(removeItem({ id }));
    }
    return (
        <div className={styles.main}>
            <Navbar />
            <Header title="Shopping Cart" subTitle="" />

            {
                items.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (

                    <div className={styles.sub_div}>
                        {
                            items.map((item) => (
                                <div className={styles.checkout}>
                                    <p>Checkout:</p>
                                    <div className={styles.item}>
                                        <div className={styles.checkout_div}>
                                            <img className={styles.productImage} src={item.img} alt="image" />
                                        </div>
                                        <div className={styles.checkout_div2}>
                                            <p style={{ fontSize: '14px', fontWeight: '500' }}>{item.name}</p>
                                            <p style={{ fontSize: '10px', fontWeight: '500' }}>{item.description}</p>
                                        </div>
                                        <div className={styles.checkout_div}>
                                            <p style={{ fontSize: '14px', fontWeight: '500' }}>₹{item.price}</p>
                                        </div>
                                    </div>

                                    <div style={{ height: 'auto' }}>
                                        <div className={styles.promoDiv}>
                                            <input placeholder="Discount Code" className={styles.input} /> <button className={styles.button}>Apply</button>
                                        </div>
                                        <p style={{ fontSize: '10px', fontWeight: '500', marginLeft: '20px', marginRight: '20px' }}>Apply code <span style={{ fontWeight: '800' }}>TAPAN10</span> to get 10% off</p>
                                    </div>

                                    <div className={styles.total}>
                                        <div className={styles.totalAmount}>
                                            <p>Total :</p>
                                            <p>₹{item.price}</p>
                                        </div>
                                        <button className={styles.order_button}>Place Order</button>
                                    </div>
                                </div>
                            ))
                        }
                        <div className={styles.cartItem}></div>


                    </div>
                )
            }


        </div>
    )
}

export default CartItem;