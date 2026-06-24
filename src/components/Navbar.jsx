import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import SearchBar from './SearchBar'

const Navbar = () => {
  const { cart } = useContext(CartContext)
  const [menuOpen, setMenuOpen] = useState(false)

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <nav className="bg-black text-white">
      <div className="flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="font-bold text-lg">UNITED DEALS</h1>

        {/* Desktop SearchBar */}
        <div className="hidden md:block flex-1 mx-6">
          <SearchBar />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-4 items-center font-bold">
          <Link to="/admin" className="hover:text-gray-400 hover:underline transition-colors duration-300">
            ADMIN
          </Link>
          <Link to="/cart" className="hover:text-gray-400 hover:underline transition-colors duration-300">
            CART ({totalItems})
          </Link>
        </div>

        {/* Hamburger Button (mobile) */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile SearchBar */}
      <div className="px-4 pb-3 md:hidden">
        <SearchBar />
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-4 pb-4 font-bold border-t border-gray-700">
          <Link
            to="/admin"
            className="hover:text-gray-400 pt-3"
            onClick={() => setMenuOpen(false)}
          >
            ADMIN
          </Link>
          <Link
            to="/cart"
            className="hover:text-gray-400"
            onClick={() => setMenuOpen(false)}
          >
            CART ({totalItems})
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
