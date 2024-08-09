async function getData() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  const response = fetch(
    "https://b.wallet.ir/coinlist/list",
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return response;
}

export default async function getCoinList() {
  const data = await getData();
  return data;
}
