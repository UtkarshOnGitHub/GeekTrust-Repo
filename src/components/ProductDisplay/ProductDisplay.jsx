import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../Context/ContextProvider'
import styles from "./ProductDisplay.module.css"
const ProductDisplay = ({data}) => {
  const {cart,setCart} = useContext(AppContext)
  const [value , setValue] = useState(1)

  const checkCartFunction =(id)=>{
      let filtered = cart?.filter((e)=>{
        return e.id == id
      })
      return filtered.length===1 ? true : false
  }

  const handleAddToCart =(data)=>{
      setCart([...cart , {...data,quantity:value}]);
  }


  const cartQuantity = (id)=>{
    let filtered = cart?.filter((e)=>{
      return e.id == id
    })
    setValue(filtered[0].quantity)
  }



  const handleChangeQty =(id,val)=>{
      for(let i=0;i<cart.length;i++){
        if(cart[i].quantity < 1 ){
          return
        }
        if(id==cart[i].id){
          if(val== -1 && cart[i].quantity!=0){
            cart[i].quantity = cart[i].quantity + val
            cartQuantity(id)
            return;
          }
          if(cart[i].quantity >= data.quantity){
            alert("Limit Exceeded")
          }else{
            cart[i].quantity = cart[i].quantity + val
            cartQuantity(id)
          }
        }
      }
      console.log(cart)
  }




  return (
    <div className={styles.main}>
        <div className={styles.image}>
            <img src={data.imageURL} alt="" />
        </div>
        <h3>{data.name}</h3>
        <div className={styles.buttonPrice}>
            <h4>Rs:{data.price}</h4>
            {checkCartFunction(data.id) ? 
            <div style={{display:"flex" ,gap:"6px"}}>
              <button disabled={value==1} onClick={()=>(handleChangeQty(data.id,-1))}>-</button>
              <button>{value}</button>
              <button onClick={()=>(handleChangeQty(data.id,1))}>+</button>
            </div>
            :<button onClick={()=>{handleAddToCart(data)}}>Add To Cart</button>}
        </div>
    </div>
  )
}

export default ProductDisplay
