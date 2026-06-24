import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Navbar from './components/Navbar'
import Cart from './pages/Cart'
import ProductDetails from './pages/ProductDetails'
import Checkout from './pages/Checkout'
import AdminDashboard from './pages/AdminDashboard'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />

        <Route path="/cart" element={<Cart />} />

        <Route path="/checkout" element={<Checkout />} />

        <Route
          path="/admin"
          element={<AdminDashboard />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App