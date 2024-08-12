async function getData(currency_code: string, chart = '24h') {
    const options = {
        method: "POST",
        headers: {
            "X-HTTP-Method-Override": "GET",
            accept: "application/json",
        },
        body: JSON.stringify({
            currency_code,
            chart
        }),
    };

    const response = fetch("https://b.wallet.ir/coinlist/list", options)
        .then((response) => response.json())
        .catch((err) => console.error(err));

    return response;
}

export default async function getCoinPrice(currency_code: string, chart?: string) {
    const data = await getData(currency_code, chart);
    return data;
}