import TradeTable from "@/app/components/exchange/tradeTable";
import getCoinPrice from "@/app/api/getCoinPrice";
import getChartPeriod from "@/app/api/getChartPeriod";
import getCoinChart from "@/app/api/getCoinChart";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import CoinChart from "@/app/components/exchange/coinChart";
import AboutCoin from "@/app/components/exchange/aboutCoin";
import MoreAboutCoin from "@/app/components/exchange/moreAboutCoin";
import FAQSection from "@/app/components/exchange/FAQSection ";

export default async function Page({
  params,
}: {
  params: { currency_code: string };
}) {
  const chartPeriod = await getChartPeriod();

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["coinPrice", params.currency_code],
    queryFn: async () => await getCoinPrice(params.currency_code),
  });
  await queryClient.prefetchQuery({
    queryKey: ["coinChart", params.currency_code, chartPeriod.items[0]],
    queryFn: async () =>
      await getCoinChart(params.currency_code, chartPeriod.items[0]),
  });

  return (
    <div>
      <main className="2xl:container mx-auto lg:p-10 p-4 2xl:px-36">
        <HydrationBoundary state={dehydrate(queryClient)}>
          <TradeTable currency_code={params.currency_code} />
          <AboutCoin currency_code={params.currency_code} />
          <CoinChart
            currency_code={params.currency_code}
            chartPeriod={chartPeriod}
          />
          <MoreAboutCoin currency_code={params.currency_code} />
          <FAQSection />
        </HydrationBoundary>
      </main>
    </div>
  );
}
