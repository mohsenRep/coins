import Search from "./search";

const Table = (data: { items: any[] }) => {
  
  return (
    <div className="bg-gray-100 rounded-lg ">
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 p-4 bg-gray-300 rounded-t-lg  items-center">
        <span className="pr-2">نام رمز ارز</span>
        <span className="justify-self-center">ارزش دلاری</span>
        <span className="justify-self-center">تغییر روزانه</span>
        <span className="hidden lg:block justify-self-center">
          خرید از والت
        </span>
        <span className="hidden lg:block justify-self-center">
          فروش به والت
        </span>
        <Search />
      </div>

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
            <button className="hidden lg:block w-full p-4 bg-blue-600 text-white rounded hover:bg-blue-700 justify-self-center">
              معامله
            </button>
          </div>
        )
      )}
    </div>
  );
};
export default Table;
