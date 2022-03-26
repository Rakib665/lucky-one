import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import React from 'react';
import './Product.css'
const Product = (props) => {
    const {handleAddToCart,product} = props
    const {price,name,img} =product
    //   console.log(image)
    return (
    <div className='container'>
         <div className='product-container'>
            <img src={img} alt="" />
            <p>Brand Name: {name}</p>
            <p className='price'>Price: ${price}</p>
            
        </div>
        <button onClick={()=>{handleAddToCart(product)}} className='add-btn'>
        <p className='btn-text'>Add to Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </button>
    </div>
    );
};

export default Product;