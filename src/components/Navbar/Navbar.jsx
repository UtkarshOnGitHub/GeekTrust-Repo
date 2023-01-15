import React, { useContext } from 'react'
import styles from "./Navbar.module.css"
import shopping from "../../Assets/shopping-cart-icon.svg"
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../../Context/ContextProvider'
const Navbar = () => {  
  const redirect = useNavigate()

  const handleRedirect =()=>{
    redirect("/cart")
  }
  const {cart} = useContext(AppContext)
  return (
    <div className={styles.main}>
        <div>
            <h3>TeeRex Store</h3>
        </div>
        <div className={styles.box}>
            <Link to="/"><p className={styles.toHide}>Products</p></Link>
            <div onClick={handleRedirect}>
              <img src={shopping} alt="" />
              <h5 className={styles.qty}>{cart.length}</h5>
            </div>
        </div>
    </div>
  )
}

export default Navbar
