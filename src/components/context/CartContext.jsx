import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";


 const CartContext = createContext([])

 export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {
const [cartList, setCartList] = useState([])


const agregarCarrito = (producto)=> {
    setCartList([...cartList, producto])
}

const vaciarCarrito = ()=> {
    setCartList([])
}

//2:04:57

    return(
        <CartContext.Provider value={{
            cartList,
            agregarCarrito,
            vaciarCarrito}}>
            {children}
        </CartContext.Provider>
    )

    
}

