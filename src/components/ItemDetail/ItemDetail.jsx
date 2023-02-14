import {React, useState} from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({producto}) => {
const [isInCount, setIsInCount]  = useState(true)  
const {agregarCarrito} = useCartContext()
    
    const onAdd = (cant)=>{
        agregarCarrito({...producto, cantidad: cant})
        setIsInCount(false)
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
            <div className="col-6"> 
            {isInCount ?
                <ItemCount onAdd={onAdd}/>
             :   
             <>
                <Link to={"/cart"}>
                <button className='btn btn-outline-primary' >Ir al carrito</button>
                </Link>
                <Link to={"/"}>
                <button className='btn btn-outline-success'>Seguir comprando</button>
                </Link>
             </>
            
            }
             </div>
        </div>
    </div>
    
    </>
  )
}

export default ItemDetail