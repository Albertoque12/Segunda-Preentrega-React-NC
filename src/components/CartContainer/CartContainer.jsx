import { addDoc, collection, getFirestore, updateDoc, doc } from "firebase/firestore"
import React, { useState } from "react"
import { useCartContext } from "../context/CartContext"

const CartContainer = () => {
    const [showOrderDetails, setShowOrderDetails] = useState(false);
    const [dataForm, setDataForm] = useState({
        name:"",
        phone: "",
        email: "",
        validEmail: "",

    })
    const {cartList, vaciarCarrito, precioTotal, eliminarItem} = useCartContext()
    const { name, phone, email, validEmail } = dataForm;
    const generarOrden = (evt) => {
        evt.preventDefault()

        if (email !== validEmail) {
            alert("Los correos no coinciden");
            return;
          }
        //{buyer: {email, phone, name}, items: [{id, title, price}], total}
        const order = {}

        order.buyer = dataForm

        order.items = cartList.map(({id, name, price}) => ({name, price, id}))

        order.total = precioTotal()

        const db = getFirestore()

        const queryCollection = collection(db, 'orders')

        //agregar
      addDoc(queryCollection, order)
        .then(res => {
            console.log(res)
            setDataForm({
                name:"",
                phone:"",
                email:"",
                validEmail:"",
            })
            setShowOrderDetails(true)
        })
        .catch(err => console.log(err))

        //update
        // const queryDocUpdate = doc(db, 'productos', '2OBe04ZHEgNUsR5OEbQB')

        // updateDoc(queryDocUpdate, {
        //     stock: 90
        // })
        // .then(resp => console.log('actualizado'))

        //console.log(order)
    }

    const handleOnChange = (evt) =>{
        console.log(evt.target.name)
        console.log(evt.target.value)
        setDataForm({
            ...dataForm,
            [evt.target.name]: evt.target.value
        })
    }

    console.log(dataForm)

    return(
        <div>
            {cartList.map(produ=> <div key={produ.id}>
                <img src={produ.foto} className='w-25 '/>
                    <hr/>
                    <label>Nombre: {produ.name}</label>
                    <hr/>
                    <label>Cantidad: {produ.cantidad}</label>
                    <hr/>
                    <label>Precio individual: ${produ.price}</label>
                    <hr/>  
                    <button onClick={() => eliminarItem(produ.id)} >X</button>
                                    </div>)}

                                    <h3>Formulario</h3>
                    <form onSubmit={generarOrden} className="form-control w-100" >
                        <input 
                        type=""
                        name="name"
                        placeholder="Ingresar nombre"
                        value={dataForm.name}
                        onChange={handleOnChange}
                        required
                        /><br/>
                        <input 
                        type="number"
                        name="phone"
                        placeholder="Ingresar número"
                        value={dataForm.phone}
                        onChange={handleOnChange}
                        required
                        /><br/>
                        <input
                        type="email"
                        name="email"
                        placeholder="Ingresar correo"
                        value={dataForm.email}
                        onChange={handleOnChange}
                        required
                        /><br/>
                        <input
                        type="email"
                        name="validEmail"
                        placeholder="Confirmar correo"
                        value={dataForm.validEmail}
                        onChange={handleOnChange}
                        required
                        /><br/>                                                
                        <button className="btn btn-success" type="submit">Generar orden</button> 
                    </form>
            
                    {showOrderDetails && (
  <div>
    <h3>Detalle de compra</h3>
    <ul>
      {cartList.map((product) => (
        <li className="lista" key={product.id}>
          <span>{product.name} x {product.cantidad}</span>
          <span>${product.price * product.cantidad}</span>
        </li>
      ))}
    </ul>
    <p>Total: ${precioTotal()}</p>
  </div>
)}

                    <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar Carrito</button> 
                    
                    <h2>Total: ${precioTotal()}</h2>               
        </div>
    )
}


export default CartContainer