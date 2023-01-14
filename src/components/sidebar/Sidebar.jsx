import React from 'react'
import styles from "./Sidebar.module.css"
const Sidebar = () => {
  return (
    <div className={styles.main}>
      <div className={styles.box}>
        <div>
          <h3>Color</h3>
        </div>
        <div className={styles.inputType}>
          <div>
            <input type={"checkbox"}/>
            <label>Red</label><br/>
          </div>
          <div>
            <input type={"checkbox"}/>
            <label>Blue</label><br/>
          </div>
          <div>
            <input type={"checkbox"}/>
            <label>Green</label><br/>
          </div>
        </div>
      </div>
      <div className={styles.box}>
        <div>
          <h3>Gender</h3>
        </div>
        <div className={styles.inputType}>
          <div>
            <input type={"checkbox"}/>
            <label>Men</label><br/>
          </div>
          <div>
            <input type={"checkbox"}/>
            <label>Women</label><br/>
          </div>
        </div>
      </div>
      <div className={styles.box}>
        <div>
          <h3>Price</h3>
        </div>
        <div className={styles.inputType}>
          <div>
            <input type={"checkbox"}/>
            <label>0-250Rs</label><br/>
          </div>
          <div>
            <input type={"checkbox"}/>
            <label>Rs 251-450</label><br/>
          </div>
          <div>
            <input type={"checkbox"}/>
            <label>Rs 450</label><br/>
          </div>
        </div>
      </div>
      <div className={styles.box}>
        <div>
          <h3>Type</h3>
        </div>
        <div className={styles.inputType}>
          <div>
            <input type={"checkbox"}/>
            <label>Polo</label><br/>
          </div>
          <div>
            <input type={"checkbox"}/>
            <label>Hoodie</label><br/>
          </div>
          <div>
            <input type={"checkbox"}/>
            <label>Basic</label><br/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Sidebar
