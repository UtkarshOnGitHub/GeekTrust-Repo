import React from 'react'
import styles from "./Navbar.module.css"
import shopping from "../../Assets/shopping-cart-icon.svg"
import { Link, useNavigate } from 'react-router-dom'
const Navbar = () => {  
  const redirect = useNavigate()

  const handleRedirect =()=>{
    redirect("/cart")
  }

  return (
    <div className={styles.main}>
        <div>
            <h3>TeeRex Store</h3>
        </div>
        <div className={styles.box}>
            <p className={styles.toHide}>Products</p>
            <div onClick={handleRedirect}>
              <img src={shopping} alt="" />
              <h5 className={styles.qty}>1</h5>
            </div>
        </div>
    </div>
  )
}

export default Navbar
