import React, { useEffect, useState } from 'react'
import '../../static/components/cart/cart.css'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

function Cart() {
    const dispatch = useDispatch()
    const [cartData, setCartData] = useState([])
    const [subtotal, setSubtotal] = useState(0);
    const cartItemsId = useSelector((state) => state.cartReducer)

    console.log("cartItemsId", cartItemsId.cartProducts)

    useEffect(() => {
        setSubtotal(
            cartItemsId.cartProducts.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
        )
    }, [cartItemsId])

    useEffect(() => {
        console.log("Subtotal", subtotal)
        dispatch({
            type: "SUBTOTAL",
            payload: {
                subtotal
            }
        })
    }, [subtotal])

    function increment(id, qty) {
        console.log("qty", id, qty);
        dispatch({
            type: "INCREMENT",
            payload: {
                id,
                qty,
            },
        });
    }

    function decrement(id, qty) {
        if (qty > 0) {
            return dispatch({
                type: "DECREMENT",
                payload: {
                    id,
                    qty,
                },
            });
        }
        return
    }

    function deleteItem(id) {
        console.log("yes", id)
        dispatch({
            type: "DELETE",
            payload: {
                id
            }
        })
    }

    console.log("cartData", cartItemsId.cartProducts.length)
    return (
        <div className="cart container">
            <div className="cart_cont">
                <div className="cart_left">
                    <h3>Shopping Cart</h3>
                    <div className="cart_border"></div>
                    <div className="cart_products">
                        {cartItemsId.cartProducts.length !== 0 && cartItemsId.cartProducts[0] != undefined ? (
                            cartItemsId.cartProducts.map((item, key) => {
                                // {console.log("item", item, cartData.length)}
                                return (
                                    <div className="cart_item" key={key}>
                                        <div className="cart_item_img">
                                            <img src={item.thumbnail} alt="img" className='cart_img' />
                                        </div>
                                        <div className='d-flex justify-content-between w-100'>
                                            <div className="cart_item_detail">
                                                <h3>{item.title}</h3>
                                                <h4>{item.description}</h4>
                                                <p>In Stock: {item.stock}</p>
                                                <div className="cart_btns">
                                                    <button
                                                        className="dec"
                                                        onClick={() =>
                                                            decrement(item.id, item.qty - 1)
                                                        }
                                                    >
                                                        -
                                                    </button>
                                                    <p className='item_qty'>{item.qty}</p>
                                                    <button
                                                        className="inc"
                                                        onClick={() =>
                                                            increment(item.id, item.qty + 1)
                                                        }
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                                <div>
                                                    <button className="delete"
                                                        onClick={() => deleteItem(item.id)}
                                                    >Remove</button>
                                                </div>
                                            </div>

                                            <div className="cart_price">
                                                <p><span>&#8377;</span>{item.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <h3>Oops! your cart is empty</h3>
                        )}
                    </div>
                </div>

                <div className="cart_right">
                    <p>Subtotal({cartItemsId.cartProducts.length} items):</p>
                    <p><span>&#8377;</span>{subtotal}</p>
                    <div className="cart_payment">
                        {<Link to="/payment"><button className="payment">Ready To Checkout</button></Link>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart