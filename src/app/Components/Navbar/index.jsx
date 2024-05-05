'use client';

import Link from 'next/link';
import Logout from '../Logout';
import { useEffect } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  return (
    <div className="bg-white shadow-lg fixed w-9/12 z-10 rounded-full justify-self-center top-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5 px-11 ">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src="/img/LogoTravel.png" width={45} alt="" />
          <h1 className="text-2xl font-bold text-sky-700">LungoGo</h1>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex gap-6 font-medium">
            <li>
              <a href="/promos" className="hover:text-sky-700 text-sky-700 ">
                Promo
              </a>
            </li>
            <li>
              <a href="/journey" className="hover:text-sky-700 text-sky-700">
                Journey
              </a>
            </li>
            <li>
              <a href="/category" className="hover:text-sky-700 text-sky-700" aria-current="page">
                Category
              </a>
            </li>
            <li>
              {role === 'admin' ? (
                <a href="/admin/dashboard" className="hover:text-sky-700 text-sky-700">
                  Dashboard
                </a>
              ) : (
                ''
              )}
            </li>
          </ul>
        </div>
        {token ? (
          <Logout />
        ) : (
          <button onClick={() => (window.location.href = '/auth/login')} className="bg-blue-500 hover:bg-sky-700 text-white font-bold py-2 px-6 rounded">
            Login
          </button>
        )}
      </div>
    </div>
  );
};
export default Navbar;
