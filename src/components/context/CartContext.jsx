import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";


 const CartContext = createContext([])

 export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {
const [cartList, setCartList] = useState([])


const agregarCarrito = (nuevoProducto)=> {
    const idx = cartList.findIndex(producto => producto.id === nuevoProducto.id)
    if(idx != -1){
        cartList[idx].cantidad = cartList[idx].cantidad + nuevoProducto.cantidad
        setCartList([...cartList])
    } else {
        setCartList([...cartList, nuevoProducto])
    }


   // setCartList([...cartList, nuevoProducto])
}

const vaciarCarrito = ()=> {
    setCartList([])
}

//cantidad total

const cantidadTotal = () => cartList.reduce((count, objProducto ) => count += objProducto.cantidad, 0 )
// precio total
const precioTotal = () => cartList.reduce((count, objProducto ) => count += (objProducto.cantidad * objProducto.price), 0 )
//eliminar por item

const eliminarItem = (id) => setCartList(cartList.filter(producto =>  producto.id != id))


    return(
        <CartContext.Provider value={{
            cartList,
            agregarCarrito,
            cantidadTotal,
            precioTotal,
            eliminarItem,
            vaciarCarrito}}>
            {children}
        </CartContext.Provider>
    )

    
}

