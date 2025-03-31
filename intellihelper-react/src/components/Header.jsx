import { Link } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/outline';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-400">IntelliHelper</Link>
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-blue-400 transition">Home</Link>
          <Link to="/services" className="hover:text-blue-400 transition">Services</Link>
          <Link to="/about" className="hover:text-blue-400 transition">About</Link>
          <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
        </div>
        <button className="md:hidden focus:outline-none">
          <Bars3Icon className="h-6 w-6" />
        </button>
      </nav>
    </header>
  );
}