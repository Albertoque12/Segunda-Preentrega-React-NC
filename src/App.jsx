
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import CartContainer from './components/CartContainer/CartContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { CartContextProvider } from './components/context/CartContext'
import { getItems } from './utils/firebase'


function App() {
getItems()

  return (
<CartContextProvider>
    <BrowserRouter>
    <NavBar/>
      <Routes>

          <Route path='/' element={<ItemListContainer saludo={"Promises ↓"}/>} />
          <Route path='/category/:categoryId' element={<ItemListContainer saludo={"Promises ↓"}/>} />
          <Route path='/detail/:detailId' element={<ItemDetailContainer/>} />
          <Route path='/cart' element={<CartContainer/>} />

          <Route path='*' element={<Navigate to='/'/>} />
      </Routes>
    </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
