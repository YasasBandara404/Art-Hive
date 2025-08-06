import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return <footer className="bg-gray-50 dark:bg-gray-900 border-t dark:border-gray-800">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl bg-gradient-to-r from-ct-blue-500 to-ct-teal-500 bg-clip-text text-transparent mb-4">Art Hive</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Empowering creators to showcase, sell, and engage with their audience through digital content.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-ct-blue-500 dark:hover:text-ct-blue-400">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-ct-blue-500 dark:hover:text-ct-blue-400">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-ct-blue-500 dark:hover:text-ct-blue-400">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-ct-blue-500 dark:hover:text-ct-blue-400">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4 dark:text-gray-200">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/category/digital-art" className="text-gray-600 dark:text-gray-400 hover:text-ct-blue-500 dark:hover:text-ct-blue-400">
                  Digital Art
                </Link>
              </li>
              <li>
                <Link to="/category/templates" className="text-gray-600 dark:text-gray-400 hover:text-ct-blue-500 dark:hover:text-ct-blue-400">
                  Comic books
                </Link>
              </li>
              <li>
                <Link to="/category/courses" className="text-gray-600 dark:text-gray-400 hover:text-ct-blue-500 dark:hover:text-ct-blue-400">
                  Anime arts
                </Link>
              </li>
              <li>
                <Link to="/category/e-books" className="text-gray-600 dark:text-gray-400 hover:text-ct-blue-500 dark:hover:text-ct-blue-400">
                  Sketch arts
                </Link>
              </li>
              <li>
                <Link to="/featured" className="text-gray-600 dark:text-gray-400 hover:text-ct-blue-500 dark:hover:text-ct-blue-400">
                  Wall arts
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4 dark:text-gray-200">Information</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-ct-blue-500 dark:hover:text-ct-blue-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-ct-blue-500 dark:hover:text-ct-blue-400">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-600 dark:text-gray-400 hover:text-ct-blue-500 dark:hover:text-ct-blue-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 dark:text-gray-400 hover:text-ct-blue-500 dark:hover:text-ct-blue-400">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 dark:text-gray-400 hover:text-ct-blue-500 dark:hover:text-ct-blue-400">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4 dark:text-gray-200">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <Mail size={16} className="mr-2" />
                <span>arthive@gmail.com</span>
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                123 Digital Avenue, Colombo 04
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                Sri Lanka
              </li>
              <li className="text-gray-600 dark:text-gray-400">Tel: +94 752660551</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t dark:border-gray-800 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} Create & Trade. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                All prices are in <span className="font-medium">LKR (Sri Lankan Rupees)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};

export default Footer;