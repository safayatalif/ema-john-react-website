import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import "./Orders.css"
import { removeFromDb } from '../../utilities/fakedb';
import { deleteShoppingCart } from '../../utilities/fakedb';

const Orders = () => {
    const saveCart = useLoaderData();
    const [cart , setCart] = useState(saveCart);
    const handelRemoveFromCart = (id)=>{
        const remaining = cart.filter(product=> product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }
    const handelClearCart = () =>{
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map(product => <ReviewItem
                        product={product}
                        key={product.id}
                        handelRemoveFromCart ={handelRemoveFromCart}
                    ></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart
                cart={cart}
                handelClearCart={handelClearCart} 
                ></Cart>
            </div>
        </div>
    );
};

export default Orders;