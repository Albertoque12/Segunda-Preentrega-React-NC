import React from 'react'
import { useCartContext } from '../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({producto}) => {
const {agregarCarrito} = useCartContext()
    
    const onAdd = (cant)=>{
        agregarCarrito({...producto, cantidad: cant})
    }


  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-6">
            <img src={producto.foto} className='w-100' />
            
                <h2>Nombre: {producto.name}</h2>
                <h2>Categoría: {producto.categoria}</h2>
                <h2>Precio: ${producto.price}</h2>
            </div>
            <div className="col-6"> <ItemCount onAdd={onAdd}/> </div>
        </div>
    </div>
    
    </>
  )
}

export default ItemDetail