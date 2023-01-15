import React, { useEffect } from 'react'
import ProductDisplay from '../ProductDisplay/ProductDisplay'
import styles from "./Products.module.css"
const Products = ({products,changeQty,orignal}) => {

  return (
    <div className={styles.main}>
        {products?.map((e)=>{
          let orignal = e.quantity
          return(
            <ProductDisplay key={e.id} data={e} changeQty={changeQty} orignal={orignal} />
          )
        })}
    </div>
  )
}

export default Products
