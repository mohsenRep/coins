const Header = () => {
  return (
    <header className="bg-gray-100 sticky top-0">
      <nav className="2xl:container mx-auto px-4 lg:px-10 2xl:px-36  py-2 flex justify-between items-center">
        <div className="flex items-center">
          <button className="ml-4 lg:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
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
              <a href="#" className="text-gray-700 hover:text-blue-600">
                صفحه اصلی
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                قیمت رمزارزها
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                مقالات
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                تماس با ما
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                سایر
              </a>
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
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </nav>
    </header>
  );
};
export default Header;
