"use client";
import { useQuery } from "@tanstack/react-query";
import getCoinList from "./api/getCoinList";
import Category from "./components/category";
import Table from "./components/table";
import ExplainSection from "./components/explainSection";

export default function Home() {
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await getCoinList(),
    queryKey: ["coinList"], //Array according to Documentation
  });
  if (isLoading) return <div>Loading ...</div>;
  if (isError) return <div>Sorry There was an Error</div>;
  return (
    <main className="2xl:container mx-auto lg:p-10 p-4 2xl:px-36">
      <h1 className="text-center my-12">لیست قیمت لحظه‌ای ارزهای دیجیتال</h1>

      <Category />
      <Table items={data.items} />
      <ExplainSection />
    </main>
  );
}
