import React, { useEffect } from 'react'
import ProductDisplay from '../ProductDisplay/ProductDisplay'
import styles from "./Products.module.css"
const Products = ({products,changeQty,state}) => {
  useEffect(()=>{
      // console.log(products)
  },[state])
  return (
    <div className={styles.main}>
        {products?.map((e)=>{
          return(
            <ProductDisplay data={e} changeQty={changeQty} state={state}/>
          )
        })}
    </div>
  )
}

export default Products
