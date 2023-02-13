import React from 'react'
import Item from '../Item/Item'


const ItemList = ({products}) => {
  return (
    <div className="cards">
{    products.map(produ => <Item produ={produ}/>)
                        
                        }
    </div>

  )
}

export default ItemList