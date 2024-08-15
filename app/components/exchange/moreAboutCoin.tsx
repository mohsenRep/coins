"use client";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import getCoinPrice from "@/app/api/getCoinPrice";
const MoreAboutCoin: React.FC<{ currency_code: string }> = ({
  currency_code,
}) => {
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await getCoinPrice(currency_code),
    placeholderData: keepPreviousData,
    queryKey: ["coinPrice", currency_code],
  });
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (isError) {
    return <div>Sorry There was an Error</div>;
  }
  return (
    <section>
      <h2 className="text-xl font-bold  text-center 2xl:text-right my-16">
        توضیحات بیشتر درباره{" "}
        <span className="text-2xl font-bold mb-4">
          {data.items[0].fa_name}
        </span>{" "}
      </h2>

      <p className="text-sm leading-relaxed mt-16 text-justify">
        {data.items[0].about}
      </p>
      <p className="text-sm leading-relaxed mb-16  text-justify">
        {data.items[0].about}
      </p>
    </section>
  );
};

export default MoreAboutCoin;
