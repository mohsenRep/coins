"use client";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import getCoinPrice from "@/app/api/getCoinPrice";
const TradeTable = (currency_code: { currency_code: string }) => {
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await getCoinPrice(currency_code.currency_code),
    placeholderData: keepPreviousData,
    queryKey: ["coinPrice", currency_code.currency_code],
  });
  return (
    <section className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className=" font-bold mb-4 text-sm">قیمت لحظه ای:</h2>
      <div className="flex  items-center mb-4">
        <img
          src={data.items[0].icon}
          alt="Bitcoin"
          className="w-10 h-10 ml-2"
        />
        <div>
          <div className="font-bold text-sm mb-2">بیت کوین</div>
          <div className="text-sm text-gray-500">BTC</div>
        </div>
        <div className="mr-auto text-right">
          <div className="font-bold text-left mb-2">۴,۳۹۴,۱۳۳,۷۳۴ تومان</div>
          <div className="text-sm text-gray-500 text-left">$۶۸,۷۵۶.۹۸</div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 text-xs">
        <div className="text-gray-500 text-right">تغییر قیمت امروز:</div>
        <div className="text-left text-green-500">+۱.۰۳٪</div>

        <div className="text-gray-500 text-right">خرید بیت کوین:</div>
        <div className="text-left  text-green-500">۴,۳۹۳,۹۹۵,۴۰۷ تومان</div>

        <div className="text-gray-500 text-right">فروش بیت کوین:</div>
        <div className="text-left  text-red-500">۴,۳۷۷,۶۹۸,۵۵۵ تومان</div>

        <div className="text-gray-500 text-right">بالاترین قیمت ۲۴ ساعته:</div>
        <div className="text-left  text-green-500">۵,۰۰۰,۰۰۰,۰۰۰ تومان</div>

        <div className="text-gray-500 text-right">
          پایین ترین قیمت ۲۴ ساعته:
        </div>
        <div className="text-left  text-red-500">۴,۰۰۰,۰۰۰,۰۰۰ تومان</div>
      </div>

      <h2 className="text-lg font-bold mb-4">ارسال می کنید:</h2>
      <div className="bg-gray-100 rounded-lg p-3 flex items-center justify-between mb-4">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="مقدار را وارد کنید"
            className="bg-transparent  outline-none text-right"
          />
          <img
            src="iran-flag.png"
            alt="Iran Flag"
            className="w-6 h-6 rounded-full mr-2"
          />
          <span>تومان</span>
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>

      <div className="flex justify-end   my-4">
        <div className="bg-gray-200 rounded-full p-2">
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
            />
          </svg>
        </div>
      </div>

      <h2 className="text-lg font-bold mb-4">دریافت می کنید:</h2>
      <div className="bg-gray-100 rounded-lg p-3 flex items-center justify-between mb-6">
        <input
          type="text"
          placeholder="مقدار نهایی"
          className="bg-transparent text-right outline-none"
          readOnly
        />
        <div className="flex items-center">
          <img
            src="bitcoin-icon.png"
            alt="Bitcoin Icon"
            className="w-6 h-6 mr-2"
          />
          <span>بیت کوین</span>
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>

      <div className="flex justify-between text-sm mb-6">
        <div>
          <div className="text-gray-500">نرخ ارز یک</div>
          <div className="font-bold">۵,۶۰۰ دلار</div>
        </div>
        <div className="text-left">
          <div className="text-gray-500">نرخ ارز دو</div>
          <div className="font-bold">۴۹,۷۵۰ تومان</div>
        </div>
      </div>

      <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold">
        ثبت سفارش خرید
      </button>
    </section>
  );
};
export default TradeTable;
