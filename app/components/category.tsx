const Category = () => {
  return (
    <div className="lg:static relative">
      <button
        id="dropdownButton"
        className="w-full lg:hidden bg-blue-600 text-white p-3 mb-4 rounded-lg flex justify-between items-center"
      >
        <span id="selectedOption">همه</span>
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <div
        id="dropdownMenu"
        className="hidden absolute lg:grid lg:static lg:grid-flow-col lg:gap-2 lg:mb-8 lg:justify-stretch top-full left-0 right-0 mt-2 bg-white border lg:border-none border-gray-200 rounded-md shadow-lg lg:shadow-none"
      >
        <button className="w-full lg:bg-blue-600 text-right px-4 py-2 lg:py-3 lg:text-white lg:text-center lg:rounded-md  hover:bg-gray-300">
          همه
        </button>
        <button className="w-full lg:bg-gray-100 text-right px-4 py-2 lg:py-3 lg:text-black lg:text-center lg:rounded-md  hover:bg-gray-300">
          دیفای
        </button>
        <button className="w-full lg:bg-gray-100 text-right px-4 py-2 lg:py-3 lg:text-black lg:text-center lg:rounded-md  hover:bg-gray-300">
          حریم خصوصی
        </button>
        <button className="w-full lg:bg-gray-100 text-right px-4 py-2 lg:py-3 lg:text-black lg:text-center lg:rounded-md  hover:bg-gray-300">
          متاورس
        </button>
        <button className="w-full lg:bg-gray-100 text-right px-4 py-2 lg:py-3 lg:text-black lg:text-center lg:rounded-md  hover:bg-gray-300">
          قابل استخراج
        </button>
        <button className="w-full lg:bg-gray-100 text-right px-4 py-2 lg:py-3 lg:text-black lg:text-center lg:rounded-md  hover:bg-gray-300">
          میم کوین
        </button>
        <button className="w-full lg:bg-gray-100 text-right px-4 py-2 lg:py-3 lg:text-black lg:text-center lg:rounded-md  hover:bg-gray-300">
          استیبل کوین
        </button>
        <button className="w-full lg:bg-gray-100 text-right px-4 py-2 lg:py-3 lg:text-black lg:text-center lg:rounded-md  hover:bg-gray-300">
          ICO
        </button>
      </div>
    </div>
  );
};
export default Category;
