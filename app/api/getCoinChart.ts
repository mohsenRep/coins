async function getData(currency_code: string, period = '24h') {
    const options = {
        method: "POST",
        headers: {
            "X-HTTP-Method-Override": "GET",
            accept: "application/json",
        },
        body: JSON.stringify({
            currency_code,
            period
        }),
    };

    const response = fetch("https://b.wallet.ir/coinlist/chart", options)
        .then((response) => response.json())
        .catch((err) => console.error(err));

    return response;
}

export default async function getCoinChart(currency_code: string, period?: string) {
    const data = await getData(currency_code, period);
    return data;
}