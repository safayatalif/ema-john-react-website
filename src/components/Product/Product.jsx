import React from 'react';
import "./Product.css";

const Product = (props) => {
    const {img , name} =props.product
    console.log(props)
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h6>{name}</h6>
        </div>
    );
};

export default Product;