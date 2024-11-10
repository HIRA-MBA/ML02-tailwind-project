import React from 'react';
import Link from 'next/link';

const NavBar = () => {
  return (
    <div className="bg-yellow-900 text-white p-4">
      <ul className="flex space-x-8 items-center">
      <li>
          <Link href="/" className="hover:text-blue-300">
            Home
          </Link>
        </li>
        <li>
          <Link href="/About" className="hover:text-blue-300">
            About us
          </Link>
        </li>
        <li>
          <Link href="/Contacts" className="hover:text-blue-300">
            Contact us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
