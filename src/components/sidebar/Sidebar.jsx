import React, { useState } from 'react'
import styles from "./Sidebar.module.css"




const Sidebar = ({filterFunction}) => {
  // Logic Part
  const [menState,setMenState] = useState(false)
  const [WomenState,setWomenState] = useState(false)

  const [hoodie , setHoodie] = useState(false)
  const [polo , setPolo] = useState(false)
  const [basic , setBasic] = useState(false)

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


  const handlePriceChange =(value)=>{
    if(value==0){
      filterFunction([[0,250],"price"])
    }else if(value==250){
      filterFunction([[0,450],"price"])
    }else{
      filterFunction([[451,Infinity],"price"])
    }
  }
  
  const handleTypeChange =(value)=>{
    if(value=="Polo"){
      if(polo==true){
        setPolo(false)
      }else{
        filterFunction([value,"type"])
        setBasic(false)
        setHoodie(false)
        setPolo(true)
      }
    }else if(value=="Hoodie"){
      if(hoodie==true){
        setHoodie(false)
      }else{
        filterFunction([value,"type"])
        setBasic(false)
        setPolo(false)
        setHoodie(true)
      }     
    }else{
      if(basic==true){
        setBasic(false)
      }else{
        filterFunction([value,"type"])
        setHoodie(false)
        setPolo(false)
        setBasic(true)
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
            <input type={"checkbox"} value={0} onChange={(e)=>(handlePriceChange(e.target.value))}/>
            <label>0-250Rs</label><br/>
          </div>
          <div>
            <input type={"checkbox"} value={250} onChange={(e)=>(handlePriceChange(e.target.value))}/>
            <label>Rs 251-450</label><br/>
          </div>
          <div>
            <input type={"checkbox"} value={450} onChange={(e)=>(handlePriceChange(e.target.value))}/>
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
            <input type={"checkbox"} value="Polo" checked={polo} onChange={(e)=>(handleTypeChange(e.target.value))}/>
            <label>Polo</label><br/>
          </div>
          <div>
            <input type={"checkbox"} value="Hoodie" checked={hoodie} onChange={(e)=>(handleTypeChange(e.target.value))}/>
            <label>Hoodie</label><br/>
          </div>
          <div>
            <input type={"checkbox"} value="Basic" checked={basic} onChange={(e)=>(handleTypeChange(e.target.value))}/>
            <label>Basic</label><br/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Sidebar
