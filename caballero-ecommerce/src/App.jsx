import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from './components/CartWidget/NavBar/NavBar'
import ProductListContainer from './components/CartWidget/ItemListContainer/ItemListContainer'

import './App.css'
import Matera from './components/CartWidget/Matera/Matera'
import Llavero from './components/CartWidget/Llaveros/Llavero'
import ItemDetail from './components/CartWidget/ItemDetail/ItemDetail'
import ItemDetailLlavero from './components/CartWidget/ItemDetailLlavero/ItemDetailLlavero'



function App() {


  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ProductListContainer greeting='saludo desde app, bienvenidos' />} />
        <Route path='/materas' element={<Matera />}/>
        <Route path='/llaveros' element={<Llavero/>}/>
        <Route path='/detalle' element={<ItemDetail />}/>
        <Route path='/detallellav' element={<ItemDetailLlavero />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
