import React, { useContext } from 'react'
import CartCard from '../../components/CartCard/CartCard'
import { AppContext } from '../../Context/ContextProvider'
import styles from "./Cart.module.css"

const Cart = () => {

  const {cart} = useContext(AppContext)

  return (
    <div className={styles.main}>
      <h3>Shopping Cart</h3>
        <div className={styles.cartCard}>
            {cart?.map((e)=>{
              return(
                <CartCard key={e.id} cartItems = {e}/>
              )
            })}
            <div className={styles.hr}>
              <h4>Total Amount:400</h4>
            </div>
        </div>
    </div>
  )
}

export default Cart
