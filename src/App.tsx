import './App.css'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Register from './pages/Register'
import Login from './pages/Login'
import ProductDetail from './pages/ProductDetail'
import Footer from './components/Footer'
import { Header } from './components/Header/Header'
import Slide from './components/Silde'

function App() {
  return (
    <>
      <Header />
      <Slide />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop/:id' element={<ProductDetail />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
