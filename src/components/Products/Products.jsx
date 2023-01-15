import React, { useEffect } from 'react'
import ProductDisplay from '../ProductDisplay/ProductDisplay'
import styles from "./Products.module.css"
const Products = ({products}) => {

  return (
    <div className={styles.main}>
        {products?.map((e)=>{
          let orignal = e.quantity
          return(
            <ProductDisplay key={e.id} data={e}/>
          )
        })}
    </div>
  )
}

export default Products
