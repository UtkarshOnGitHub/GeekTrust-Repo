import React from 'react'
import styles from "./Search.module.css"
import search from "../../Assets/search-line-icon.svg"
const Search = () => {
  return (
    <div className={styles.main}>
      <input type="text" placeholder='Search For Products'/>
      <div className={styles.btn}>
        <img src={search} alt="" />
      </div>
    </div>
  )
}

export default Search
