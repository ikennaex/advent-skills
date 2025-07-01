import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { logo } from '../../imports';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Company Info */}
        <div>
          <img className='h-16 mb-5' src= {logo} alt="" />
          <p className="text-gray-400 text-sm">
            Reliable domestic recruitment service delivering top-rated staff with ease.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <Link to="/" >
            <li><a className="hover:text-white">Home</a></li>
            </Link>

            <Link to="/about" >
            <li><a className="hover:text-white">About</a></li>
            </Link>

            <Link to= "/services">
            <li><a className="hover:text-white">Services</a></li>
            </Link>

            <Link to="/contact" >
            <li><a className="hover:text-white">Contact</a></li>
            </Link>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact</h4>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>Email: info@adventskills.com.ng</li>
            {/* <li>Phone: +234 800 000 0000</li> */}
            <li>21 Obafemi Awolowo way Ikeja, Lagos</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex space-x-4 text-gray-400 text-xl">
            <a href="#"><FaFacebook className="hover:text-white" /></a>
            <a href="#"><FaTwitter className="hover:text-white" /></a>
            <a href="#"><FaInstagram className="hover:text-white" /></a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Advent Skills. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;