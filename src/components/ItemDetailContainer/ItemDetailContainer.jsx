import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
//import gFetch from "../../utils/gFetch";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getItem } from "../../utils/firebase";


const ItemDetailContainer = () => {
    const {detailId} = useParams()

    const [producto, setProducto] = useState({})


     useEffect(()=>{
        getItem(detailId)
        .then(resp => setProducto(resp))
        //.finally(() => )
     }, [])


    return(
            <ItemDetail producto={producto}/>

    )
}


export default ItemDetailContainer