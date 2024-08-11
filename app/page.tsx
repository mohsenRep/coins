"use client";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import getCoinList from "./api/getCoinList";
import Category from "./components/category";
import Table from "./components/table";
import ExplainSection from "./components/explainSection";
import { Suspense } from "react";
import Pagination from "./components/pagination";
import Search from "./components/search";

export default function Home({
  searchParams,
}: {
  searchParams?: {
    search?: string;
    page?: string;
  };
}) {
  const search = searchParams?.search || "";
  const currentPage = Number(searchParams?.page) || 1;

  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await getCoinList(searchParams),
    placeholderData: keepPreviousData,
    queryKey: ["coinList", search, currentPage],
    enabled: !!searchParams,
  });


  return (
    <main className="2xl:container mx-auto lg:p-10 p-4 2xl:px-36">
      <h1 className="text-center my-12">لیست قیمت لحظه‌ای ارزهای دیجیتال</h1>

      <Category />
      <div className="bg-gray-100 rounded-lg mb-8 ">
        <Search />
        <Suspense key={search + currentPage} fallback={<div>Loading ...</div>}>
          {isLoading && <div>Loading ...</div>}
          {isError && <div>Sorry There was an Error</div>}
          {data && <Table items={data.items} />}
        </Suspense>
      </div>
      {data && (
        <Pagination
          currentPage={Number(data.page)}
          totalPages={Number(data.total_page)}
        />
      )}
      <ExplainSection />
    </main>
  );
}
