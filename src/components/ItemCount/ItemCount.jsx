import React from 'react'
import { useState } from 'react'

const ItemCount = ({initial=1, stock=10, onAdd}) => {
const [count, setCount] = useState(initial)
    
        const sumar = ()=>{
           if(count < stock)
           setCount(count+1)
        }

        const restar = () => {
            if(count > initial)
            setCount(count-1)
        }

        const handleonAdd = () =>{
            onAdd(count)
        }

  return (
    <div className='card'>
        <div className='card-body row'>

        <button className='btn btn-outline-dark w-100' onClick={sumar}>+</button> 
        <label>{count}</label>
        <button className='btn btn-outline-dark w-100' onClick={restar}>-</button>

        </div>
        <div className='card-footer'>
        <button className='btn btn-outline-dark w-100' onClick={handleonAdd} >Agregar al carrito</button>
        </div>

    </div>    
  )
  }

export default ItemCount