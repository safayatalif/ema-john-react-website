import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart , faTrashAlt} from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({ product , handelRemoveFromCart }) => {
    const { id, img, quantity, name, price } = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='item-detail'>
                <p className='item-name'>{name}</p>
                <p>price: <span className='orange-color'>${price}</span></p>
                <p>Quantity: <span className='orange-color'>{quantity}</span></p>
            </div>
            <button onClick={()=>handelRemoveFromCart(id)} className='item-btn'><FontAwesomeIcon className='btn-icon' icon={faTrashAlt} /></button>
        </div>
    );
};

export default ReviewItem;