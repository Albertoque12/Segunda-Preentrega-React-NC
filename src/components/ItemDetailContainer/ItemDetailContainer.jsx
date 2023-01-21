import React from "react";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const {detailId} = useParams()
    console.log(detailId)

//useEffect(solicitud(id))

    return(
        <div>ItemDetailContainer {detailId} </div>
    )
}


export default ItemDetailContainer