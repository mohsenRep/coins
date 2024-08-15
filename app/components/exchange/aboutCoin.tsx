"use client";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import getCoinPrice from "@/app/api/getCoinPrice";
import Image from "next/image";
const AboutCoin: React.FC<{ currency_code: string }> = ({ currency_code }) => {
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
    <section className="">
      <div className="2xl:hidden">
        <h2 className="text-xl font-bold  text-center my-16">
          درباره{" "}
          <span className="text-2xl font-bold mb-4 text-blue-700">
            {data.items[0].fa_name}
          </span>{" "}
        </h2>
        <Image
          src="/img/bitcoinExchange.jpg"
          alt="Bitcoin stack"
          className="lg:hidden  w-full rounded-3xl mb-4"
          height={195}
          width={337}
        />
        <Image
          src="/img/bitcoinExchange.jpg"
          alt="Bitcoin stack"
          className="hidden lg:block w-full rounded-3xl mb-4"
          height={321}
          width={555}
        />
        <p className="text-sm leading-relaxed my-16 text-justify">
          {data.items[0].about}
        </p>
      </div>
      <div className="hidden  2xl:grid grid-cols-2 gap-4 text-base  my-16">
        <div>
          <h2 className="text-xl font-bold  text-right">
            درباره{" "}
            <span className="text-2xl font-bold mb-4 text-blue-700">
              {data.items[0].fa_name}
            </span>{" "}
          </h2>
          <p className="text-base leading-8 mt-8 text-justify">
            {data.items[0].about}
          </p>
        </div>
        <Image
          src="/img/bitcoinExchange.jpg"
          alt="Bitcoin stack"
          className="hidden 2xl:block w-full rounded-3xl mb-4"
          height={321}
          width={555}
        />
      </div>
    </section>
  );
};

export default AboutCoin;
