async function getData() {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
        },

    };

    const response = fetch("https://dev2.wallet.ir.reza.in/coinlist/chart-period", options)
        .then((response) => response.json())
        .catch((err) => console.error(err));

    return response;
}

export default async function getChartPeriod(
) {
    const data = await getData();
    return data;
}
