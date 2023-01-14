import React, { useEffect, useState } from 'react'
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
    useEffect(()=>{
        getData().then((res)=>{
            setData(res)
        })
    },[])

    const changeQty =(id)=>{
        for(let i=0;i<data.length;i++){
            if(data[i].id==id){
                data[i].quantity = data[i].quantity-1
            }
        }
        setState(!state)
    }

  return (
    <>
    <Search/>
    <div className={styles.main}>
        <Sidebar />
        <Products products={data} changeQty={changeQty} state={state}/>
    </div>
    </>
  )
}

export default Home
