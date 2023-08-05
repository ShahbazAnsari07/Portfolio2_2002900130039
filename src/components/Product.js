import React from 'react';
import App from '../App';
export default function Product() {
  return (
    <>
        <div>
            <img src="image/Laptop.png" width={300} className = 'center' alt='logo'></img> 
            <div>
                <h1 style={{textAlign:'center'}}>Gaming Laptop</h1>
                <h2 style={{textAlign:'center'}}>Rs.45000</h2>
                <p style={{textAlign:'center'}}>An excellent choice for gaming </p>
            </div>
        </div>
    </>

  );

};
