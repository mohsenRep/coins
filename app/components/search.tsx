"use client";
import { useDebouncedCallback } from "use-debounce";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const Search = () => {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }
    console.log(term);
    replace(`${pathname}?${params.toString()}`);
  },300);
  return (
    <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 p-4 bg-gray-300 rounded-t-lg  items-center">
      <span className="pr-2">نام رمز ارز</span>
      <span className="justify-self-center">ارزش دلاری</span>
      <span className="justify-self-center">تغییر روزانه</span>
      <span className="hidden lg:block justify-self-center">خرید از والت</span>
      <span className="hidden lg:block justify-self-center">فروش به والت</span>
      <input
        type="text"
        placeholder="جستجو ..."
        className="hidden lg:block justify-self-center w-full p-4 border border-gray-300 rounded-md"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("search")?.toString()}
      />
    </div>
  );
};
export default Search;
