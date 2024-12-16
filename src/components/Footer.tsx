import { Facebook, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../img/logo300px.png'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">FORÇA E HONRA OSS</h3>
            <p className="text-gray-300">Transforme sua vida através da arte do Jiu-Jitsu Brasileiro</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-300">Anexo a academia gol de placa</p>
            <p className="text-gray-300">Phone: (94) 98448-6969</p>
            <p className="text-gray-300">Email: jeffersonvilhena@gmail.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/vilhenajiujitsu" className="hover:text-gray-300"><Facebook /></a>
              <a href="https://www.instagram.com/vilhenajiujitsu/" className="hover:text-gray-300"><Instagram /></a>
              <a href="#" className="hover:text-gray-300"><Youtube /></a>
            </div>
            <div>
              <Link to="/" className="font-bold text-xl flex items-center justify-between">
                <img src={logo} alt="" className='w-40 h-40 mx-20' />
              </Link>

            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-300">&copy; {new Date().getFullYear()} Equipe Vilhena Jiu-jitsu All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}