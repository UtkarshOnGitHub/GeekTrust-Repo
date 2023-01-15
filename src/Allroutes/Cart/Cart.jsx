import React, { useContext, useEffect, useState } from 'react'
import CartCard from '../../components/CartCard/CartCard'
import { AppContext } from '../../Context/ContextProvider'
import styles from "./Cart.module.css"

const Cart = () => {

  const {cart} = useContext(AppContext)
  const [total ,setTotal] = useState(0)

  const AddAmount = ()=>{
    let sum = 0;
    for(let i=0;i<cart.length;i++){
      sum += cart[i].quantity * cart[i].price
    }
    return sum
  }

  useEffect(()=>{
    AddAmount()
  },[cart])

  return (
    <div className={styles.main}>
      <h3>Shopping Cart</h3>
        <div className={styles.cartCard}>
            {cart?.map((e)=>{
              return(
                <CartCard key={e.id} cartItems = {e} />
              )
            })}
            <div className={styles.hr}>
              <h4>Total Amount:{AddAmount()}</h4>
            </div>
        </div>
    </div>
  )
}

export default Cart
