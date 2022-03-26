import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Propaganda.css'
const Propaganda = () => {
    const [products,setProducts] = useState([])
    const [cart,setCart] = useState([])
    //  console.log(products)
    useEffect(()=>{
        fetch('product.json')
        .then(res=>res.json())
        .then(data => setProducts(data))
    },[])

    const handleAddToCart = (product) =>{
        // console.log(product)
        const newCart = [...cart,product]
        setCart(newCart)
    }
    return (
        <div className='shop'>
            <div className="products-container">
            {
                products.map(product=><Product
                product = {product}
                key = {product.id}
                handleAddToCart ={handleAddToCart}
                ></Product>)
            }
            </div>
            <div className="cart-container">
                <Cart
                cart = {cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Propaganda;