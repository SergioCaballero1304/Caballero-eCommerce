import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from './components/CartWidget/NavBar/NavBar'
import ProductListContainer from './components/CartWidget/ItemListContainer/ItemListContainer'

import './App.css'
import Matera from './components/CartWidget/Matera/Matera'
import Llavero from './components/CartWidget/Llaveros/Llavero'


function App() {


  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ProductListContainer greeting='saludo desde app, bienvenidos' />} />
        <Route path='/materas' element={<Matera />}/>
        <Route path='/llaveros' element={<Llavero/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
