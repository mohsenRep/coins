async function getData(searchParams?: { search?: string; page?: string }) {
  const options = {
    method: "POST",
    headers: {
      "X-HTTP-Method-Override": "GET",
      accept: "application/json",
    },
    body: JSON.stringify({
      search: searchParams?.search,
      page: searchParams?.page,
    }),
  };

  const response = fetch("https://b.wallet.ir/coinlist/list", options)
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return response;
}

export default async function getCoinList(searchParams?: {
  search?: string;
  page?: string;
}) {
  const data = await getData(searchParams);
  return data;
}
