import React from "react"
import { useCartContext } from "../context/CartContext"

const CartContainer = () => {
    const {cartList, vaciarCarrito} = useCartContext()


    return(
        <div>
            {cartList.map(produ=> <div key={produ.id}>
                <img src={produ.foto} className='w-25 '/>
                    <hr/>
                    <label>Nombre: {produ.name}</label>
                    <hr/>
                    <label>Cantidad: {produ.cantidad}</label>
                    <hr/>
                    <label>Precio: ${produ.price * produ.cantidad}</label>
                                    </div>)}
                    <button onClick={vaciarCarrito}>Vaciar Carrito</button>                
        </div>
    )
}


export default CartContainer