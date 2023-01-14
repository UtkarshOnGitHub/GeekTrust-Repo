import React from 'react'
import ProductDisplay from '../ProductDisplay/ProductDisplay'
import styles from "./Products.module.css"
const Products = ({products}) => {

  return (
    <div className={styles.main}>
        {products?.map((e)=>{
          return(
            <ProductDisplay data={e}/>
          )
        })}
    </div>
  )
}

export default Products
