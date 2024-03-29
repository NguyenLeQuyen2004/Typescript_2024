import './App.css'

import { Header } from './components/Header/Header'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Register from './pages/Register'
import Login from './pages/Login'
import ProductDetail from './pages/ProductDetail'
import Dashboard from './pages/admin/Dashboard'
import ProductAdd from './pages/admin/ProductAdd'
import { useEffect, useState } from 'react'

import instance from './apis'
import { productType } from './interfaces/Product'
import Footer from './components/Footer'

function App() {
  const [products, setProducts] = useState<productType[]>([])
  useEffect(() => {
    // Cach 2:
    const getProducts = async () => {
      try {
        const { data } = await instance.get('/products')
        console.log(data)
        setProducts(data)
      } catch (error) {
        console.log(error)
      }
    }
    getProducts()
  }, [])
  const handleAdd = (product: productType) => {
    console.log(product)
  }
  return (
    <>
      <Header />
      <Routes>
        {/* client */}
        <Route path='/'>
          <Route index element={<Home products={products} />} />
          <Route path='/shop/:id' element={<ProductDetail />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
        {/* admin */}
        <Route path='/admin'>
          <Route index element={<Dashboard products={products} />} />
          <Route path='/admin/add' element={<ProductAdd onAdd={handleAdd} />} />
        </Route>
        {/* not found */}
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
