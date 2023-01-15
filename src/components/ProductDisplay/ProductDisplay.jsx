import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../Context/ContextProvider'
import styles from "./ProductDisplay.module.css"
const ProductDisplay = ({data,changeQty,orignal}) => {
  const {cart,setCart} = useContext(AppContext)

  // console.log(cart)


  const handleAddToCart =(data)=>{
    for(let i=0;i<cart.length;i++){
      if(data.id===cart[i].id){
        cart[i].quantity += 1
      }
    }
    data.quantity = data.quantity+1
    setCart([...cart,data])
    changeQty(data.id)
  }
  return (
    <div className={styles.main}>
        <div className={styles.image}>
            <img src={data.imageURL} alt="" />
        </div>
        
        <h3>{data.name}</h3>
        <div className={styles.buttonPrice}>
            <h4>Rs:{data.price}</h4>
            {data.quantity < orignal ? 
            <div style={{display:"flex" ,gap:"6px"}}>
              <button>-</button>
              <button>{data.quantity}</button>
              <button>+</button>
            </div>
            :<button onClick={()=>{handleAddToCart(data)}}>Add To Cart</button>}
        </div>
    </div>
  )
}

export default ProductDisplay
