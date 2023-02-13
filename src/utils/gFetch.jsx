



let productos = [
    {id: '1', categoria: 'playeras', name: 'Juan', price: 37, foto: 'https://cdn.shopify.com/s/files/1/0277/3925/8982/products/C0300-playera-cr-mc-caballero-100algodon-azul-claro_1.jpg?v=1650375211'},
    {id: '2', categoria: 'zapatos', name: 'Ramiro', price: 20, foto: 'https://www.flexi.com.mx/medias/402801-negro-derecha.jpg?context=bWFzdGVyfGltYWdlc3wyNDc1Njd8aW1hZ2UvanBlZ3xoMzIvaDIxLzg4MDAxNTEyNzM1MDIvNDAyODAxLW5lZ3JvLWRlcmVjaGEuanBnfGMzNThkYWRhNTFmOTIxNmM1MDdiZDhlMDJmNTBkMTAzYmY4YTZmNTc4M2M5OTA0YzIwNGI4Y2YxNTE3ZjhkODM'},
    {id: '3', categoria: 'zapatos', name: 'Adriana', price: 25, foto: 'https://www.flexi.com.mx/medias/402801-negro-derecha.jpg?context=bWFzdGVyfGltYWdlc3wyNDc1Njd8aW1hZ2UvanBlZ3xoMzIvaDIxLzg4MDAxNTEyNzM1MDIvNDAyODAxLW5lZ3JvLWRlcmVjaGEuanBnfGMzNThkYWRhNTFmOTIxNmM1MDdiZDhlMDJmNTBkMTAzYmY4YTZmNTc4M2M5OTA0YzIwNGI4Y2YxNTE3ZjhkODM'},
    {id: '4', categoria: 'playeras', name: 'Aime', price: 150, foto: 'https://cdn.shopify.com/s/files/1/0277/3925/8982/products/C0300-playera-cr-mc-caballero-100algodon-azul-claro_1.jpg?v=1650375211'},
    {id: '5', categoria: 'zapatos', name: 'Chiwis', price: 40, foto: 'https://www.flexi.com.mx/medias/402801-negro-derecha.jpg?context=bWFzdGVyfGltYWdlc3wyNDc1Njd8aW1hZ2UvanBlZ3xoMzIvaDIxLzg4MDAxNTEyNzM1MDIvNDAyODAxLW5lZ3JvLWRlcmVjaGEuanBnfGMzNThkYWRhNTFmOTIxNmM1MDdiZDhlMDJmNTBkMTAzYmY4YTZmNTc4M2M5OTA0YzIwNGI4Y2YxNTE3ZjhkODM'},
    {id: '6', categoria: 'playeras', name: 'Dado', price: 46, foto: 'https://cdn.shopify.com/s/files/1/0277/3925/8982/products/C0300-playera-cr-mc-caballero-100algodon-azul-claro_1.jpg?v=1650375211'},
    {id: '7', categoria: 'playeras', name: 'Tamalina', price: 60, foto: 'https://cdn.shopify.com/s/files/1/0277/3925/8982/products/C0300-playera-cr-mc-caballero-100algodon-azul-claro_1.jpg?v=1650375211'},
    {id: '8', categoria: 'zapatos', name: 'MamáBurak', price: 250, foto: 'https://www.flexi.com.mx/medias/402801-negro-derecha.jpg?context=bWFzdGVyfGltYWdlc3wyNDc1Njd8aW1hZ2UvanBlZ3xoMzIvaDIxLzg4MDAxNTEyNzM1MDIvNDAyODAxLW5lZ3JvLWRlcmVjaGEuanBnfGMzNThkYWRhNTFmOTIxNmM1MDdiZDhlMDJmNTBkMTAzYmY4YTZmNTc4M2M5OTA0YzIwNGI4Y2YxNTE3ZjhkODM'}
]

const gFetch = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(id ? productos.find(prod => prod.id === id) : productos)
        }, 1000)
    })
}

export default gFetch