import { Link } from 'react-router-dom';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">IntelliHelper</h3>
            <p className="max-w-xs">Providing cutting-edge AI solutions to help businesses grow and succeed in the digital age.</p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-blue-400 transition">Home</Link></li>
                <li><Link to="/services" className="hover:text-blue-400 transition">Services</Link></li>
                <li><Link to="/about" className="hover:text-blue-400 transition">About</Link></li>
                <li><Link to="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <EnvelopeIcon className="h-5 w-5 mr-2" />
                  info@intellihelper.com
                </li>
                <li className="flex items-center">
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  +1 (555) 123-4567
                </li>
                <li className="flex items-center">
                  <MapPinIcon className="h-5 w-5 mr-2" />
                  San Francisco, CA
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} IntelliHelper. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}