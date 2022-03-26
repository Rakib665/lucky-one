import React from 'react';
import './Name.css'
const Name = ({name}) => {
    // console.log(name)
    return (
        <div>
            <h2 className='name-of-wine'>Name: {name} </h2>
           
        </div>
    );
};

export default Name;