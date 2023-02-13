import React from "react";
import { Link } from "react-router-dom";


const Item = ({produ}) => {
    console.log(produ)
  return (
    <div key={produ.id} className='card w-25 mt-5 shadow'>
    {/* ↑Array original, con .map() se crea otro array sin modificar el primero. En este caso es nro. En el navegador aparece un error, se debe agregar un prop key para eliminarlo */}
    
                        <div className="card-head">
                            {produ.name}
                        </div>
                        <div className="card-body">
                            <img src={produ.foto} className='w-100'/>
                                <h6>Categoría: {produ.categoria}</h6>
                                <h6>Precio: ${produ.price}</h6>
                        </div>
                        <div className="card-footer">
                            <Link to={`/detail/${produ.id}`}>
                                <button type="button" className="btn btn-outline-dark w-100">Ir a detalles</button>
                            </Link>
                        </div>
                
    
    
                        </div>
  )
}

export default Item

