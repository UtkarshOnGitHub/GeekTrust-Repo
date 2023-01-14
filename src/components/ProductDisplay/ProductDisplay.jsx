import React from 'react'
import styles from "./ProductDisplay.module.css"
const ProductDisplay = ({data}) => {
    console.log(data)
  return (
    <div className={styles.main}>
        <div className={styles.image}>
            <img src={data.imageURL} alt="" />
        </div>
        
        <h3>{data.name}</h3>
        <div className={styles.buttonPrice}>
            <h4>Rs:{data.price}</h4>
            <button>Add To Cart</button>
        </div>
    </div>
  )
}

export default ProductDisplay
