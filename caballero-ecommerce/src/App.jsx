import { useState } from 'react'
import NavBar from './components/CartWidget/NavBar/NavBar'
import './App.css'
import ProductListContainer from './components/CartWidget/ItemListContainer/ItemListContainer'

function App() {


  return (
    <>
      <NavBar />
      <ProductListContainer greeting='saludo desde app, bienvenidos'/>
    </>
  )
}

export default App
