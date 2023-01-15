import React from 'react'
import styles from "./Cart-card.module.css"
const CartCard = ({cartItems}) => {
  console.log(cartItems)
  return (
    <div className={styles.main}>
        <div>
          <img src={cartItems.imageURL} alt="" />
        </div>
        <div>
          <h3>{cartItems.name}</h3>
          <p style={{marginTop:"-20px"}}>Price:{cartItems.price}</p>
        </div>
        
        <h3>Price</h3>
        <button>Delete</button>
    </div>
  )
}

export default CartCard
