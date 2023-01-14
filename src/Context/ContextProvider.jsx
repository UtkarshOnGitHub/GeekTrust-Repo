import React from 'react'
import { useState } from 'react';
export const AppContext  = React.createContext();



const ContextProvider = ({children}) => {
    const[dataN,setData] = useState(false)
    const [cart , setCart] = useState([])
  return (
    <div>
        <AppContext.Provider value={{cart,setCart}}>
            {children}
        </AppContext.Provider>
    </div>
  )
}

export default ContextProvider