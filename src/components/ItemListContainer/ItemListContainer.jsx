import React, { useEffect, useState } from "react";
//import gFetch from "../../utils/gFetch";
import {useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { getItems } from "../../utils/firebase";

//Promise → simulación de API, tiene 3 estados posibles↓



//Pendiente → hasta que nos devulvan el dinero
// Rechazada → Reject → No nos devolverán el dinero
//Completada → Fullfilled, es decir, nos pagaron



const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [boolean, setBoolean] = useState(false)
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()


    console.log(products)
    useEffect(() => {
        //fetch('http://google.com', {
           // method: 'POST',
           // headers: {'Content-Type:':'application/jason'},
            //body:[]
       // })
    }, [])


    useEffect(()=>{
        if (categoryId) {
           //gFetch()
           getItems()
            .then(respuestaPromesa => {
                setProducts(respuestaPromesa.filter(items => items.categoria === categoryId))
            }) // Se hace una cosa por .then
            .catch((error) => console.log(error))
            .finally(()=> setLoading(false))

        } else {
            //gFetch()
            getItems()
            .then(respuestaPromesa => {
                setProducts(respuestaPromesa)
            }) // Se hace una cosa por .then
            .catch((error) => console.log(error))
            .finally(()=> setLoading(false))
        }


    }, [categoryId])


        return(
            <div className="cards">
                {/*<h2>{saludo}</h2>
                <button onClick={()=>setBoolean(!boolean)}>Cambiar estado</button>*/}


            {
                loading
                ?
                    <h1>Cargando...</h1>
                :
                
                <ItemList products={products}/>

            }
            </div>

        )




}

export default ItemListContainer