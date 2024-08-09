"use client";
import { useQuery } from "@tanstack/react-query";
import getCoinList from "./api/getCoinList";

export default function Home() {
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await getCoinList(),
    queryKey: ["coinList"], //Array according to Documentation
  });
  if (isLoading) return <div>Loading ...</div>;
  if (isError) return <div>Sorry There was an Error</div>;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-3 lg:grid-cols-6 bg-white gap-4 p-4 items-center border-b border-gray-200 justify-items-center">
        {data.items.map(
          (item: {
            id: number;
            currency_code: string;
            en_name: string;
            fa_name: string;
            price: string;
            rate: number;
            buy_irt_price: string;
            sell_irt_price: string;
            irt_price: string;
            daily_change_percent: string;
            icon: string;
            about: string;
          }) => (
            <>
              <div key={item.id} className="flex items-center">
                <img
                  src={item.icon}
                  alt={item.en_name}
                  className="w-8 h-8 ml-2"
                />
                <div>
                  <div>
                    <span> {item.fa_name}</span>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">
                      {item.currency_code}
                    </span>
                  </div>
                </div>
              </div>
              <span>${item.price}</span>
              <span className="text-red-500">{item.daily_change_percent}</span>
              <span className="hidden lg:block">
                {item.buy_irt_price} تومان
              </span>
              <span className="hidden lg:block">
                {item.sell_irt_price} تومان
              </span>
              <button className="hidden lg:block w-full p-4 bg-blue-600 text-white rounded hover:bg-blue-700">
                معامله
              </button>
            </>
          )
        )}
      </div>
    </main>
  );
}
