import React from 'react';
import Name from '../Name/Name';
import './Cart.css'

const Cart = ({cart,chooseBtnHandleClick}) => {
    let names = [];
     for(const product of cart){
        console.log(cart[0].id)

         names = [...names,product.name] 
     }
//   console.log(names)
    return (
        <div>
           
            <h2>Order Summary</h2>
            {/* <p>Selected Items: {cart.length}</p>
            <h3>Name: {names}</h3> */}
             {
                names.map(n => <Name
                name = {n}
                ></Name> )
            }
           
            <button onClick={chooseBtnHandleClick} className='choose-btn'>Choose One for me</button>
        </div>
    );
};

export default Cart;