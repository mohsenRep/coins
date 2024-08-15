interface IsFetchingTableProps {
  isLoading: boolean;
  isFetching: boolean;
}
const IsFetchingTable: React.FC<IsFetchingTableProps> = ({
  isLoading,
  isFetching,
}) => {
  return (
    <div
      className={`${
        isFetching && !isLoading ? "absolute" : "hidden"
      }  bg-blue-300 bg-opacity-60 z-10 h-full w-full flex items-start justify-center`}
    >
      <div className="flex items-center mt-16">
        <span className="text-xl mr-4 "> در حال بارگذاری ... </span>
        <svg
          className="animate-spin h-6 w-6 text-red-900 "
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>
    </div>
  );
};
export default IsFetchingTable;
