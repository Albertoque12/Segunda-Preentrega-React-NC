
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx.jsx'
import CartContainer from './components/CartContainer/CartContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'


function App() {

  return (
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
  )
}

export default App
