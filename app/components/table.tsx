import Link from "next/link";
import Search from "./search";

const Table = (data: { items: any[] }) => {
  if (data.items.length === 0) {
    return <div> نتیجه ای یافت نشد</div>;
  }
  return (
    <>
      {data.items.map(
        (
          item: {
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
          },
          index: number
        ) => (
          <div
            key={item.id}
            className={`grid grid-cols-3 lg:grid-cols-6 ${
              index % 2 === 0 ? "bg-white" : "bg-gray-100"
            } gap-4 p-4 items-center `}
          >
            <div className="flex gap-2">
              <img src={item.icon} alt={item.en_name} className="w-8 h-8 " />
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
            <span className="justify-self-center">${item.price}</span>
            <span className="text-red-500 justify-self-center">
              {item.daily_change_percent}
            </span>
            <span className="hidden lg:block justify-self-center">
              {item.buy_irt_price} تومان
            </span>
            <span className="hidden lg:block justify-self-center">
              {item.sell_irt_price} تومان
            </span>
            <Link href={`/exchange/${item.currency_code}`} className="hidden lg:block w-full p-4 bg-blue-600 text-white rounded hover:bg-blue-700 justify-self-center text-center">
              معامله
            </Link>
          </div>
        )
      )}
    </>
  );
};
export default Table;
