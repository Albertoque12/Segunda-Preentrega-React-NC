import React, { useEffect, useState } from "react";


const Api = ()=> {
    const [poke, setPoke] = useState([])


    const useFetch= async () => {
        const pokes = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
        const pokeParse = await pokes.json()
        console.log(pokeParse)
        setPoke(pokeParse.results)
        
    }

    useEffect(() => {
       // fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
       // .then(res => res.json())
      //  .then(pokemon => setPoke(pokemon.results))
      useFetch()
    }, [])
    

    return (
        <>
       
           <div>{poke.map(po => <div key={poke.id}>
                {po.name}
            </div>)}
            </div> 
   
        </>
    )

}


export default Api