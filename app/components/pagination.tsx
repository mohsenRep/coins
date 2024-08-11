import { usePathname, useSearchParams, useRouter } from "next/navigation";

const Pagination = ({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const onPageChange = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    replace(`${pathname}?${params.toString()}`);
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage === 1) {
        pageNumbers.push(1, 2, 3, "...", totalPages);
      }
      else if (currentPage === totalPages) {
        pageNumbers.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      }
      else {pageNumbers.push(1);

      if (currentPage > 3) {
        pageNumbers.push("...");
      }
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(currentPage + 1, totalPages - 1);
      console.log(start, end);

      for (let i = start; i <= end; i++) {
        pageNumbers.push(i);
      }

      if (currentPage < totalPages - 2) {
        pageNumbers.push("...");
      }

      pageNumbers.push(totalPages);
    }}

    return pageNumbers;
  };

  return (
    <nav className="flex flex-row-reverse flex-nowrap justify-center items-center my-8">
      {totalPages === 0 && <div className="mb4"></div>}

      {getPageNumbers().map((pageNumber, index) => (
        <button
          key={index}
          onClick={() => pageNumber !== "..." && onPageChange(pageNumber)}
          className={`flex w-8 h-8 mx-1 justify-center items-center rounded-full ${
            pageNumber == currentPage
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-black"
          }  ${
            pageNumber == "..." ? "cursor-default bg-white" : "cursor-pointer"
          }`}
          disabled={pageNumber === "..."}
        >
          {pageNumber}
        </button>
      ))}
    </nav>
  );
};

export default Pagination;
