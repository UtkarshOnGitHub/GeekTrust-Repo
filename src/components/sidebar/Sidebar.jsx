import React, { useState } from 'react'
import styles from "./Sidebar.module.css"




const Sidebar = ({filterFunction}) => {
  // Logic Part
  const [menState,setMenState] = useState(false)
  const [WomenState,setWomenState] = useState(false)

  const [red,setRed] = useState(false)
  const [blue,setBlue] = useState(false)
  const [green,setGreen] = useState(false)




  const handleColorChange =(value)=>{
      if(value=="Red"){
        if(red==true){
          setRed(false)
          filterFunction("all")
        }else{
          filterFunction([value,"color"])
          setBlue(false)
          setGreen(false)
          setRed(true)
        }
      }else if(value=="Blue"){
        if(blue==true){
          setBlue(false)
          filterFunction("all")
        }else{
          filterFunction([value,"color"])
          setRed(false)
          setGreen(false)
          setBlue(true)
        }
      }else{
        if(green==true){
          setGreen(false)
          filterFunction("all")
        }else{
          filterFunction([value,"color"])
          setRed(false)
          setBlue(false)
          setGreen(true)
        }
      }
  }

  
  const handleChange =(value)=>{
    if(value=="Men"){
      if(menState==true){
        return
      }else{
        setWomenState(false)
        setMenState(true)
        filterFunction([value,"gender"])
      }
    }
    else{
      if(WomenState==true){
        return
      }else{
        setMenState(false)
        setWomenState(true)
        filterFunction([value,"gender"])
      }
    }

  }

  return (
    <div className={styles.main}>
      <div className={styles.box}>
        <div>
          <h3>Color</h3>
        </div>
        <div className={styles.inputType}>
          <div>
            <input type={"checkbox"} value="Red" checked={red} onChange={(e)=>(handleColorChange(e.target.value))} />
            <label>Red</label><br/>
          </div>
          <div>
            <input type={"checkbox"} value="Blue" checked={blue} onChange={(e)=>(handleColorChange(e.target.value))}/>
            <label>Blue</label><br/>
          </div>
          <div>
            <input type={"checkbox"} value="Green" checked={green} onChange={(e)=>(handleColorChange(e.target.value))}/>
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
            <input type={"checkbox"} value="Men" checked={menState} onChange={(e)=>(handleChange(e.target.value))}/>
            <label>Men</label><br/>
          </div>
          <div>
            <input type={"checkbox"} value="Women" checked={WomenState}  onChange={(e)=>(handleChange(e.target.value))}/>
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
