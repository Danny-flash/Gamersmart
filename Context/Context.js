import { createContext, useContext, useReducer, useState } from "react"
import Products from '../Components/ProductData'
import { cartReducer, productReducer } from "./Reducers"


const Cart = createContext()


const Context = ( {children} ) => {
    
        const [products] = useState(Products)
        const [ state, dispatch] = useReducer(cartReducer, {
            products: products,
            cart: []
        })

  return (
    <Cart.Provider value={{state, dispatch }}>
        { children }
    </Cart.Provider>
  )
}

export default Context

   export const CartState = () => {
       return useContext(Cart)
   }