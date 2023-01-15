import React, { useContext, useState } from 'react'
import { AppContext } from '../../Context/ContextProvider'
import styles from "./Cart-card.module.css"
const CartCard = ({cartItems,AddAmount}) => {
  const {cart,setCart} = useContext(AppContext)
  const [value , setValue] = useState(1)

  const cartQuantity = (id)=>{
    let filtered = cart?.filter((e)=>{
      return e.id == id
    })
    setValue(filtered[0].quantity)
  }



  const handleChangeQty =(id,val)=>{
      for(let i=0;i<cart.length;i++){
        if(id==cart[i].id){
            cart[i].quantity = cart[i].quantity + val
            cartQuantity(id)
          }
      }
  }
  console.log(cart)

  const handleDelete =(id)=>{
    let newFiltered = cart?.filter((e)=>{
        return e.id != id
    })
    setCart(newFiltered)
  }

  return (
    <div className={styles.main}>
        <div>
          <img src={cartItems.imageURL} alt="" />
        </div>
        <div>
          <h3>{cartItems.name}</h3>
          <p style={{marginTop:"-20px"}}>Price:{cartItems.price}</p>
        </div>
        
        <div style={{display:"flex" ,gap:"6px"}}>
              <button disabled={cartItems.quantity==1} onClick={()=>(handleChangeQty(cartItems.id,-1))}>-</button>
              <button>{cartItems.quantity}</button>
              <button onClick={()=>(handleChangeQty(cartItems.id,1))}>+</button>
            </div>
        <button onClick={()=>(handleDelete(cartItems.id))}>Delete</button>
    </div>
  )
}

export default CartCard
