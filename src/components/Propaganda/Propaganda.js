import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Propaganda.css'
const Propaganda = () => {
    const [products,setProducts] = useState([])
    //  console.log(products)
    useEffect(()=>{
        fetch('product.json')
        .then(res=>res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='shop'>
            <div className="products-container">
            {
                products.map(product=><Product
                product = {product}
                key = {product.id}
                ></Product>)
            }
            </div>
            <div className="cart-container">
            <h2>Cart summary</h2>
            </div>
        </div>
    );
};

export default Propaganda;