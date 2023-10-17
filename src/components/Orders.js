import React from 'react'
import './orders.css';

const Orders = () => {
  const orderData = JSON.parse(localStorage.getItem("orderData"));


  return (
    <div className='order'>
      <h1>My orders</h1>
      {orderData && (
        <div className='order-details'>
          <img src="https://rukminim2.flixcart.com/image/850/1000/xif0q/shirt/z/g/d/xl-st2-vebnor-original-imagpw72vhqfczsp.jpeg?q=90" alt={orderData.name} />
          <p className='order-details-name'>Prduct Name: {orderData.name}</p>
          <p className="order-details-price">price: {orderData.price}</p>
          <button>Cancel</button>
        </div>
      )}
    </div>
  )
}

export default Orders