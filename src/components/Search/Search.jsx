import React, { useState } from 'react'
import styles from "./Search.module.css"
import search from "../../Assets/search-line-icon.svg"
import filter from "../../Assets/filter.svg"
const Search = ({filterFunction}) => {
  const [value , setValue] = useState("")

  const handleCheck =()=>{
    filterFunction([value,"search"])
  }

  return (
    <div className={styles.main}>
      <input type="text" placeholder='Search For Products' onChange={(e)=>(setValue(e.target.value))}/>
      <div className={styles.btn} onClick={handleCheck}>
        <img src={search} alt="" />
      </div>
      <div className={styles.hidebtn} onClick={handleCheck}>
        <img src={filter} alt="" />
      </div>
    </div>
  )
}

export default Search
