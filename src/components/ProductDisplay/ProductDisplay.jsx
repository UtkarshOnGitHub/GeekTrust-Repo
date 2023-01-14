import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../Context/ContextProvider'
import styles from "./ProductDisplay.module.css"
const ProductDisplay = ({data,changeQty,state}) => {
  const {cart,setCart} = useContext(AppContext)
  useEffect(()=>{
    console.log(data)
  },[state])

  const handleAddToCart =(data)=>{
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
            {data.quantity < 3 ? "Add":<button onClick={()=>{handleAddToCart(data)}}>Add To Cart</button>}
        </div>
    </div>
  )
}

export default ProductDisplay
