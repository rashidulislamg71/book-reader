import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* About */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-3">BookShelf</h2>
          <p className="text-sm leading-6">
            A simple platform to track your reading journey, manage your wishlists,
            and discover new books you’ll love.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
           <Link to="/" className="hover:text-white">Home</Link> <br />
           <Link to="/listedBooks" className="hover:text-white">Read List</Link> <br />
           <Link to="/pagesToReadBooks" className="hover:text-white">Wishlist</Link> <br />
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-3">Contact</h2>
          <p className="text-sm">Email: support@bookshelf.com</p>
          <p className="text-sm">Phone: +880 1234 567890</p>
          <p className="text-sm mt-2">Kaliganj, Dhaka, Bangladesh</p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} BookShelf. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;