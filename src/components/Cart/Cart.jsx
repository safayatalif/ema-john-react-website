import React from 'react';
import "./Cart.css"

const Cart = ({cart}) => {
    let totalPrice = 0 ;
    let shipping = 0 ;
    for(const product of cart){
        totalPrice = totalPrice + product.price;
        shipping = shipping + product.shipping
    }
    const tax = totalPrice*7/100;
    const grand = totalPrice + shipping + tax ;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping:${shipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6>Grand Total: ${grand.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;