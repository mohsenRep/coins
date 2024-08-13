"use client";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [hambergerMenu, setHambergerMenu] = useState(false);
  const handleClick = () => {
    setHambergerMenu(!hambergerMenu);
  };
  return (
    <header className="bg-gray-100 sticky top-0">
      <nav className="2xl:container mx-auto px-4 lg:px-10 2xl:px-36  py-2 flex justify-between items-center">
        <div className="flex items-center">
          <button onClick={handleClick} className="ml-4 lg:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <img
            src="/img/logo.svg"
            alt="Logo"
            className="h-7 lg:h-14 lg:ml-8 my-3"
          />
          <ul className="hidden lg:flex space-x-3 2xl:space-x-7 space-x-reverse">
            <li>
              <Link href="/" className="text-gray-700 hover:text-blue-600">
                صفحه اصلی
              </Link>
            </li>
            <li>
              <Link href="/" className="text-gray-700 hover:text-blue-600">
                قیمت رمزارزها
              </Link>
            </li>
            <li>
              <Link href="/" className="text-gray-700 hover:text-blue-600">
                مقالات
              </Link>
            </li>
            <li>
              <Link href="/" className="text-gray-700 hover:text-blue-600">
                تماس با ما
              </Link>
            </li>
            <li>
              <Link href="/" className="text-gray-700 hover:text-blue-600">
                سایر
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center lg:space-x-4 2xl:space-x-4 space-x-reverse">
          <i className="hidden lg:block fa-solid fa-phone"></i>
          <span className="hidden lg:block text-gray-600">۰۲۱۹۱۰۰۸۵۹۰</span>
          <img
            src="/img/profile.jpg"
            alt="نمایه کاربر"
            className="w-6 h-6 rounded-full mr-2"
          />
          <span className="text-sm">علی اسماعیلی</span>
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </nav>
      <div
        className={`navbar-menu absolute z-50 ${
          hambergerMenu ? "block" : "hidden"
        }`}
      >
        <div className="navbar-backdrop fixed  bg-gray-800 ">
          <nav className="fixed   top-0 left-0 bottom-0 flex flex-col w-full  py-6 px-6 bg-white border-r overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <Link
                className="ml-auto p-4 text-3xl font-bold leading-none"
                href="/"
              >
                <img
                  src="/img/logo.svg"
                  alt="Logo"
                  className="h-7 lg:h-14 lg:ml-8 my-3"
                />
              </Link>
              <button onClick={handleClick} className="navbar-close">
                <svg
                  className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div>
              <ul>
                <li className="mb-1">
                  <Link
                    className="block p-4 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded"
                    href="/"
                  >
                    صفحه اصلی
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    className="block p-4 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded"
                    href="/"
                  >
                    قیمت رمزارزها
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    className="block p-4 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded"
                    href="/"
                  >
                    مقالات
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    className="block p-4 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded"
                    href="/"
                  >
                    تماس با ما
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    className="block p-4 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded"
                    href="/"
                  >
                    سایر
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Header;
