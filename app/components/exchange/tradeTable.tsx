"use client";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import getCoinPrice from "@/app/api/getCoinPrice";
import { useState } from "react";
import { digitsEnToFa, addCommas } from "@persian-tools/persian-tools";
const TradeTable: React.FC<{ currency_code: string }> = ({ currency_code }) => {
  const [trade, setTrade] = useState("buy");
  const [value, setValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    // Regular expression to match numbers with optional single decimal point
    const regex = /^(0|[1-9]\d*)?(\.\d*)?$/;

    if (regex.test(inputValue) || inputValue === "") {
      if (inputValue === ".") {
        setValue("0.");
      }
      // Check if the input already contains a decimal point
      else if (inputValue.indexOf(".") === inputValue.lastIndexOf(".")) {
        setValue(inputValue);
      }
    }
  };
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await getCoinPrice(currency_code),
    placeholderData: keepPreviousData,
    queryKey: ["coinPrice", currency_code],
    refetchInterval: 1000 * 60,
  });
  const buyAmount = (amount: number) => {
    if (amount < 500000) {
      return '';
    } else {
      return digitsEnToFa(
        addCommas((amount / +data.items[0].buy_irt_price).toFixed(9))
      );
    }
  };
  const sellAount = (amount: number) => {
    if (amount * +data.items[0].sell_irt_price < 500000) {
      return '';
    } else {
      return digitsEnToFa(
        addCommas((amount * +data.items[0].sell_irt_price).toFixed(0))
      );
    }
  };

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (isError) {
    return <div>Sorry There was an Error</div>;
  }

  return (
    <section className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-6">
        <div>
          <h2 className=" font-bold mb-4 text-sm">قیمت لحظه ای:</h2>
          <div className="flex  items-center mb-4">
            <img
              src={data.items[0].icon}
              alt={data.items[0].en_name}
              className="w-10 h-10 ml-2"
            />
            <div>
              <div className="font-bold text-sm mb-2">
                {data.items[0].fa_name}{" "}
              </div>
              <div className="text-sm text-gray-500">
                {data.items[0].currency_code}
              </div>
            </div>
            <div className="mr-auto text-right">
              <div className="font-bold text-left mb-2">
                {digitsEnToFa(addCommas(data.items[0].irt_price))} تومان
              </div>
              <div className="text-sm text-gray-500 text-left ">
                ${addCommas(data.items[0].price)}
              </div>
            </div>
          </div>
          <hr className="mb-6  h-0.5 border-t-0 bg-gray-200" />
          <div className="grid grid-cols-2 gap-6 lg:gap-9 text-xs lg:text-sm 2xl:text-base">
            <div className="text-gray-500 text-right">تغییر قیمت امروز:</div>
            <div
              className={`text-left  ${
                data.items[0].daily_change_percent.includes("-")
                  ? "text-red-500"
                  : "text-green-500"
              }`}
              dir="ltr"
            >
              {digitsEnToFa(data.items[0].daily_change_percent)}
            </div>

            <div className="text-gray-500 text-right">
              خرید {data.items[0].fa_name}:
            </div>
            <div className="text-left  text-green-500">
              {digitsEnToFa(addCommas(data.items[0].buy_irt_price))} تومان
            </div>

            <div className="text-gray-500 text-right">
              فروش {data.items[0].fa_name} :
            </div>
            <div className="text-left  text-red-500">
              {digitsEnToFa(addCommas(data.items[0].sell_irt_price))} تومان
            </div>

            {/* <div className="text-gray-500 text-right">
              بالاترین قیمت ۲۴ ساعته:
            </div>
            <div className="text-left  text-green-500">۵,۰۰۰,۰۰۰,۰۰۰ تومان</div>

            <div className="text-gray-500 text-right">
              پایین ترین قیمت ۲۴ ساعته:
            </div>
            <div className="text-left  text-red-500">۴,۰۰۰,۰۰۰,۰۰۰ تومان</div> */}
          </div>
          <hr className="mt-6 lg:hidden  h-0.5 border-t-0 bg-gray-200" />
        </div>

        <div>
          <h2 className="text-lg font-bold mb-4">ارسال می کنید:</h2>
          <div className="bg-gray-100 rounded-lg p-3 flex items-center justify-between mb-4 text-xs lg:text-sm 2xl:text-base">
            <input
              type="text"
              placeholder="مقدار را وارد کنید"
              className="bg-transparent  outline-none text-right"
              value={value}
              onChange={handleInputChange}
            />
            {trade === "buy" ? (
              <div className="flex items-center gap-2">
                <img
                  src="/img/rial.png"
                  alt="Iran Flag"
                  className="w-6 h-6 rounded-full mr-2"
                />
                <span>تومان</span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <img
                  src={data.items[0].icon}
                  alt="Bitcoin Icon"
                  className="w-6 h-6 mr-2"
                />
                <span>{data.items[0].fa_name} </span>
              </div>
            )}
          </div>

          <div className="flex justify-end   mt-8">
            <div
              className="bg-gray-200 rounded-full p-2"
              onClick={() => {
                trade === "sell" ? setTrade("buy") : setTrade("sell");
              }}
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                />
              </svg>
            </div>
          </div>

          <h2 className="text-lg font-bold mb-4">دریافت می کنید:</h2>
          <div className="bg-gray-100 rounded-lg p-3 flex items-center justify-between mb-6 text-xs lg:text-sm 2xl:text-base">
            <input
              type="text"
              placeholder={trade === "buy" ? `حداقل خرید ${digitsEnToFa(addCommas("500,000"))} تومان` : `حداقل فروش ${digitsEnToFa(addCommas("500,000"))} تومان`}
              className="bg-transparent text-right outline-none"
              value={trade === "buy" ? buyAmount(+value) : sellAount(+value)}
              readOnly
            />
            {trade === "sell" ? (
              <div className="flex items-center gap-2">
                <img
                  src="/img/rial.png"
                  alt="Iran Flag"
                  className="w-6 h-6 rounded-full mr-2"
                />
                <span>تومان</span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <img
                  src={data.items[0].icon}
                  alt="Bitcoin Icon"
                  className="w-6 h-6 mr-2"
                />
                <span>{data.items[0].fa_name} </span>
              </div>
            )}
          </div>

          {/* <div className=" grid grid-cols-2 gap-6 lg:gap-9 text-xs lg:text-sm 2xl:text-base mb-6">
            <div className="text-gray-500">نرخ ارز یک</div>
            <div className="text-left font-bold">۵,۶۰۰ دلار</div>

            <div className="text-gray-500">نرخ ارز دو</div>
            <div className="text-left font-bold">۴۹,۷۵۰ تومان</div>
          </div> */}
          {trade === "buy" ? (
            <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-bold">
              ثبت سفارش خرید
            </button>
          ) : (
            <button className="w-full bg-red-500 text-white py-3 rounded-lg font-bold">
              ثبت سفارش فروش
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
export default TradeTable;
