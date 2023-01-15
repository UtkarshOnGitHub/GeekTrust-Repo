import React, { useEffect, useState } from 'react'
import App from '../../App';
import Products from '../../components/Products/Products'
import Search from '../../components/Search/Search'
import Sidebar from '../../components/sidebar/Sidebar'
import styles from "./Home.module.css";

async function getData(){
    let res = await fetch("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json");
    let data = await res.json()
    return data
}


const Home = () => {
    const [data, setData] = useState([])
    const [state ,setState] = useState(false)
    const [orignal, setOrignal] = useState([])
    const [colorState , setColorState] = useState(null)
    const [genderState , setGenderState] = useState(null)
    const [priceState , setPriceState] = useState(null)
    const [typeState ,settypeState] = useState(null)
    useEffect(()=>{
        getData().then((res)=>{
            setData(res)
            setOrignal(res)
        })
    },[])

    const changeQty =(id)=>{
        // for(let i=0;i<data.length;i++){
        //     if(data[i].id==id){
        //         data[i].quantity = data[i].quantity-1
        //     }
        // }
        setState(!state)
    }


    const filterFunction = (value)=>{
        if(value=="all"){
            setColorState(null)
        }
        if(value[1]=="color"){
            setColorState(value[0])
        }else if(value[1]=="gender"){
            setGenderState(value[0])
        }else if(value[1]=="price"){
            setPriceState(value[0])
        }else if(value[1]=="type"){
            settypeState(value[0])
        }
    }


    console.log(priceState)
    useEffect(()=>{
        ApplyFilter()
    },[colorState,genderState,priceState,typeState])


// Filter Handling Logic
    const ApplyFilter = () =>{
        let newList = orignal;
        if(colorState){
            newList = newList?.filter((e)=>{
                return e.color==colorState
            })
        }

        if(genderState){
            newList = newList?.filter((e)=>{
                return e.gender ==genderState
            })
        }

        if(priceState){
            newList = newList?.filter((e)=>{
                return e.price > priceState[0] && e.price < priceState[1]
            })
        }

        if(typeState){
            newList = newList?.filter((e)=>{
                return e.type==typeState
            })
        }



        setData(newList)
    }



  return (
    <>
    <Search/>
    <div className={styles.main}>
        <Sidebar filterFunction = {filterFunction}/>
        {data.length==0 ? <div style={{width:"70%"}}><h1>No Product Found</h1></div> :<Products products={data} changeQty={changeQty} orignal={orignal}/>}
    </div>
    </>
  )
}

export default Home
