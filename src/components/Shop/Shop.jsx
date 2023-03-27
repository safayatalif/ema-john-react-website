import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import "./Shop.css"
import Cart from './../Cart/Cart';

const Shop = () => {
    const [cart , setCart] =useState([]);
    const handelAddToCart =(product) =>{
        console.log(product);
        const newCart = [...cart , product];
        setCart(newCart);
    }
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json()
                .then(data => setProducts(data)))
    }, []);
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product 
                    key = {product.id}
                    product = {product}
                    handelAddToCart ={handelAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart ={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;