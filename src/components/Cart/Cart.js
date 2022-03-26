import React from 'react';
import Name from '../Name/Name';
import './Cart.css'

const Cart = ({cart}) => {
    //  console.log(cart)
    let names = [];
     for(const product of cart){
         names = [...names,product.name] 
     }
   
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
        </div>
    );
};

export default Cart;