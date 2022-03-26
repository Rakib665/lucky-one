import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Propaganda.css'
const Propaganda = () => {
    const [products,setProducts] = useState([])
    const [cart,setCart] = useState([])
       console.log(cart.map)
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
    const pickRandom = ()=>{
         let newCart = [...cart];
         if (newCart.length){
             let picked = newCart[Math.floor(Math.random() * newCart.length)]
             newCart = [picked]
             setCart(newCart)
         }   
    }
    const chooseBtnHandleClick = () =>{
        // console.log('clicked')
        pickRandom()
        // console.log(pickRandom())
        
    }
    return (
        <div className='club'>
            <div className="cart-container">
                {/* {
                    cart.map(singleCart => <Cart
                        cart = {singleCart}
                        chooseBtnHandleClick = {chooseBtnHandleClick}
                    ></Cart>)
                } */}
                <Cart
                cart = {cart} 
                
                chooseBtnHandleClick = {chooseBtnHandleClick}
                ></Cart>
            </div>
            <div className="products-container">
            {
                products.map(product=><Product
                product = {product}
                key = {product.id}
                handleAddToCart ={handleAddToCart}
                ></Product>)
            }
            </div>
            
        </div>
    );
};

export default Propaganda;