import React, { useState } from "react";
import styles from './CartItem.module.css';
import { toast } from 'react-toastify';

import { useSelector, useDispatch } from "react-redux";
import { removeItem, increaseQuantity, decreaseQuantity } from "../redux/CardSlice";
import Navbar from "../navbar/Navbar";
import Header from '../header/Header';
import { DISSCOUNT, NO_DISSCOUNT } from '../utill/config';

function CartItem({ send }) {

    const [discountCode, setDiscountCode] = useState('');
    const [discount, setDiscount] = useState(0);
    const [isDiscountApplied, setIsDiscountApplied] = useState(false);

    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.items);
    const count = useSelector((state) => state.cart.totalCount);

    // Calculate the total amount
    const totalAmount = items.reduce((total, item) => total + (item.price * item.quantity), 0);
    // Calculate discounted total
    const discountAmount = (totalAmount * discount / 100);
    const discountedTotal = totalAmount - (totalAmount * discount / 100);

    const handleDiscountCodeChange = (e) => {
        setDiscountCode(e.target.value);
    };

    const applyDiscount = () => {
        if (discountCode === 'TAPAN10' && !isDiscountApplied) {
            setDiscount(10);
            setIsDiscountApplied(true);
        } else if (isDiscountApplied) {
            toast.success(DISSCOUNT);
        } else {
            toast.error(NO_DISSCOUNT);
        }
    };


    const removeCartItem = (id) => {
        dispatch(removeItem({ id }));
    }

    const increaseQty = (id) => {
        dispatch(increaseQuantity({ id }));
    };

    const decreaseQty = (id) => {
        dispatch(decreaseQuantity({ id }));
    };

    return (
        <div className={styles.main}>
            <Navbar />
            <Header title="Shopping Cart" subTitle="" />

            {
                items.length === 0 ? (
                    <div className={styles.empty_div}>
                        <h1>Your cart is empty.</h1>
                        <p>Looks like you haven't added anything to your cart yet.</p>
                    </div>
                ) : (

                    <div className={styles.sub_div}>

                        <div className={styles.cartItem}>
                            <div className={styles.product_table}>
                                <div className={styles.table_header}>
                                    <div className={`${styles.header_item} ${styles.product_header}`}>Product</div>
                                    <div className={`${styles.header_item} ${styles.price_header}`}>Price</div>
                                    <div className={`${styles.header_item} ${styles.qty_header}`}>Qty</div>
                                    <div className={`${styles.header_item} ${styles.total_header}`}>Total</div>
                                </div>
                                {
                                    items.map((product, index) => (
                                        <div key={index} className={styles.table_row}>
                                            <div className={styles.product}>
                                                <img src={product.img} alt={product.name} className={styles.product_image} />
                                                <div className={styles.product_details}>
                                                    <div className={styles.product_name}>{product.name}</div>
                                                    <div className={styles.product_description}>{product.description}</div>
                                                    <button className={styles.delete_button} onClick={() => removeCartItem(product.id)}>
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                            <div className={styles.price}>₹{product.price}</div>
                                            <div className={styles.quantity}>
                                                <button onClick={() => decreaseQty(product.id)}>-</button>
                                                <span>{product.quantity}</span>
                                                <button onClick={() => increaseQty(product.id)}>+</button>
                                            </div>
                                            <div className={styles.total}>{product.price * product.quantity}</div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className={styles.checkout}>
                            <p>Checkout:</p>

                            {
                                items.map((item) => (
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
                                ))
                            }

                            <div style={{ height: 'auto' }}>
                                <div className={styles.promoDiv}>
                                    <input
                                        value={discountCode}
                                        onChange={handleDiscountCodeChange}
                                        placeholder="Discount Code"
                                        className={styles.input} />

                                    <button
                                        onClick={applyDiscount}
                                        className={styles.button}>Apply</button>
                                </div>
                                <p style={{ fontSize: '10px', fontWeight: '500', marginLeft: '20px', marginRight: '20px' }}>Apply code <span style={{ fontWeight: '800' }}>TAPAN10</span> to get 10% off</p>
                            </div>

                            <div className={styles.total}>
                                {isDiscountApplied && (
                                    <div className={styles.totalAmount}>
                                        <p>Promo Code :</p>
                                        <p>₹{discountAmount.toFixed(2)}</p>
                                    </div>
                                )}

                                <div className={styles.totalAmount}>
                                    <p>Total :</p>
                                    <p>₹{discountedTotal.toFixed(2)}</p>
                                </div>
                                <button className={styles.order_button}>Place Order</button>
                            </div>
                        </div>

                    </div>
                )
            }


        </div>
    )
}

export default CartItem;