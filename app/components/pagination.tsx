const Pagination = ({
  page,
  totalPage,
}: {
  page: number;
  totalPage: number;
}) => {
  return (
    <nav className="flex flex-row-reverse flex-nowrap justify-center items-center my-8">
      <a className="flex w-8 h-8 mx-1 justify-center items-center rounded-full bg-gray-200 text-black hover:border-gray-300 active:bg-blue-600 active">
        ۱
      </a>
      <a className="flex w-8 h-8 mx-1 justify-center items-center rounded-full bg-gray-200 text-black hover:border-gray-300">
        ۲
      </a>
      <a className="flex w-8 h-8 mx-1 justify-center items-center rounded-full bg-gray-200 text-black hover:border-gray-300">
        ۳
      </a>
      <span>...</span>
      <a className="flex w-8 h-8 mx-1 justify-center items-center rounded-full bg-gray-200 text-black hover:border-gray-300">
        ۱۰
      </a>
    </nav>
  );
};
export default Pagination;
