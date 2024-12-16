import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import logo from '../img/logo300px.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-bold text-xl flex items-center justify-between">
            <img src={logo} alt="" className='w-12 h-12 mx-5' />
            Equipe Vilhena Jiu-jitsu</Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-300"
            >
              <Menu size={24} />
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-gray-300">início</Link>
            <Link to="/instructors" className="hover:text-gray-300">Instrutores</Link>
            <Link to="/locations" className="hover:text-gray-300">Filiais</Link>
            <Link to="/news" className="hover:text-gray-300">Notícias</Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 hover:bg-gray-800 rounded">Home</Link>
              <Link to="/instructors" className="block px-3 py-2 hover:bg-gray-800 rounded">Instructors</Link>
              <Link to="/locations" className="block px-3 py-2 hover:bg-gray-800 rounded">Locations</Link>
              <Link to="/news" className="block px-3 py-2 hover:bg-gray-800 rounded">News</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}