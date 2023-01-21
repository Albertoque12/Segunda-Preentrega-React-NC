import React, { useEffect, useState } from "react";
import gFetch from "../../utils/gFetch";
import { Link, useParams } from "react-router-dom";

//Promise → simulación de API, tiene 3 estados posibles↓



//Pendiente → hasta que nos devulvan el dinero
// Rechazada → Reject → No nos devolverán el dinero
//Completada → Fullfilled, es decir, nos pagaron



const ItemListContainer = ({saludo}) => {
    const [products, setProducts] = useState([])
    const [boolean, setBoolean] = useState(false)
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()


    console.log(categoryId)
    useEffect(() => {
        //fetch('http://google.com', {
           // method: 'POST',
           // headers: {'Content-Type:':'application/jason'},
            //body:[]
       // })
    }, [])


    useEffect(()=>{
        if (categoryId) {
            gFetch()
            .then(respuestaPromesa => {
                setProducts(respuestaPromesa.filter(items => items.categoria === categoryId))
            }) // Se hace una cosa por .then
            .catch((error) => console.log(error))
            .finally(()=> setLoading(false))

        } else {
            gFetch()
            .then(respuestaPromesa => {
                setProducts(respuestaPromesa)
            }) // Se hace una cosa por .then
            .catch((error) => console.log(error))
            .finally(()=> setLoading(false))
        }


    }, [categoryId])

    console.log(products)




        return(
            <div className="cards">
                {/*<h2>{saludo}</h2>
                <button onClick={()=>setBoolean(!boolean)}>Cambiar estado</button>*/}


            {
                loading
                ?
                    <h1>Cargando...</h1>
                :
                
                products.map(produ => <div key={produ.id} className='card w-25 mt-5 shadow'>
                {/* ↑Array original, con .map() se crea otro array sin modificar el primero. En este caso es nro. En el navegador aparece un error, se debe agregar un prop key para eliminarlo */}
                
                                    <div className="card-head">
                                        {produ.name}
                                    </div>
                                    <div className="card-body">
                                        <img src={produ.foto} className='w-100'/>
                                            <h6>Categoría: {produ.categoria}</h6>
                                            <h6>Precio: {produ.price}</h6>
                                    </div>
                                    <div className="card-footer">
                                        <Link to={`/detail/${produ.id}`}>
                                            <button type="button" className="btn btn-outline-dark w-100">Ir a detalles</button>
                                        </Link>
                                    </div>
                            
                
                
                                    </div>)
            }
            </div>

        )




}

export default ItemListContainer