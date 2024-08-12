import TradeTable from "@/app/components/exchange/tradeTable";
import getCoinPrice from "@/app/api/getCoinPrice";
import getChartPeriod from "@/app/api/getChartPeriod";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import Image from "next/image";
import CoinChart from "@/app/components/exchange/coinChart";

export default async function Page({
  params,
}: {
  params: { currency_code: string };
}) {
  const chartPeriod = await getChartPeriod();
  console.log(chartPeriod);

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["coinPrice", params.currency_code, chartPeriod.items[0]],
    queryFn: async () =>
      await getCoinPrice(params.currency_code, chartPeriod.items[0]),
  });
  const coinPrice = await getCoinPrice(params.currency_code);
  console.log(coinPrice);
  return (
    <div>
      <main className="2xl:container mx-auto lg:p-10 p-4 2xl:px-36">
        <HydrationBoundary state={dehydrate(queryClient)}>
          <TradeTable currency_code={params.currency_code} chartPeriod={chartPeriod} />
        </HydrationBoundary>
        <section>
          <h2 className="text-2xl font-bold mb-4">درباره بیت کوین</h2>
          <Image
            src="/img/bitcoinExchange.jpg"
            alt="Bitcoin stack"
            className="w-full rounded-lg mb-4"
            height={195}
            width={337}
          />
          <p className="text-sm leading-relaxed">
            بیت کوین یا نماد اختصاری BTC یک ارز دیجیتال یا شکلی از دارایی
            دیجیتال است که از ارزش آن در حدود ۵۴۱ میلیارد دلار در رتبه ۱ بازار
            قرار دارد. بیت کوین در تاریخ ۱۳۹۸/۱۰/۱۸ به قیمت ۶۵۷۷۷.۹۰ دلار معامله
            شد. حجم معاملات روزانه ی بیت کوین ۴۹۶۷۶.۲۵ میلیون دلار است که معادل
            ۴۳۸۹۰۷۶۷۰۴.۲۵ تومان معامله می شود و حجم معاملات روزانه آن
            ۲۰۳۸۷۶۶۱۸۵.۰۲۲ دلار است. قیمت در ۲۴ ساعت ۱.۵۳ تغییر یافته است. آخرین
            قیمت ثبت شده بیت کوین در تاریخ ۱۴۰۲ اسفند ۲۴ معادل ۷۳۶۲۸.۴ دلار بوده
            که هم‌اکنون ۷.۶۲٪ نسبت به آن زمان تغییر داشته است.
          </p>
        </section>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <CoinChart
            currency_code={params.currency_code}
            chartPeriod={chartPeriod}
          />
        </HydrationBoundary>
      </main>
    </div>
  );
}
