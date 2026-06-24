const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-6 mt-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-sm">
        <div>
          <h3 className="font-bold mb-2">Support</h3>
          <p className="text-gray-400">111 Balongun Close</p>
          <p className="text-gray-400">+234 813 123 4567</p>
          <p className="text-gray-400">unitedstores@gmail.com</p>
        </div>

        <div>
          <h3 className="font-bold mb-2">Exclusive</h3>
          <p className="text-gray-400">Subscribe</p>
          <p className="text-gray-400">Get exclusive offers and updates</p>
        </div>

        <div>
          <h3 className="font-bold mb-2">Follow Us</h3>
          <p className="text-gray-400">Facebook</p>
          <p className="text-gray-400">Instagram</p>
          <p className="text-gray-400">Twitter</p>
        </div>

        <div>
          <h3 className="font-bold mb-2">Quick Links</h3>
          <p className="text-gray-400">Privacy Policy</p>
          <p className="text-gray-400">Terms & Conditions</p>
        </div>

        <div>
          <h3 className="font-bold mb-2">Contact</h3>
          <p className="text-gray-400">Get in touch with us</p>
        </div>
      </div>

      <p className="text-center text-gray-600 text-xs mt-8">
        © {new Date().getFullYear()} United Deals. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
