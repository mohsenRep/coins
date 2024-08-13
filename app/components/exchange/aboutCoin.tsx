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
    <section>
      <h2 className="text-xl font-bold  text-center my-16">درباره <span className="text-2xl font-bold mb-4 text-blue-700">{data.items[0].fa_name}</span> </h2>
      <Image
        src="/img/bitcoinExchange.jpg"
        alt="Bitcoin stack"
        className="w-full rounded-3xl mb-4"
        height={195}
        width={337}
      />
      <p className="text-sm leading-relaxed my-16 text-justify">{data.items[0].about}</p>
    </section>
  );
};

export default AboutCoin;
