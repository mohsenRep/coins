"use client";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import getCoinChart from "@/app/api/getCoinChart";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ChartOptions,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend,
  Ticks,
} from "chart.js";
import { useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

const getPeriod = (time: string) => {
  switch (time) {
    case "24h":
      return "24 ساعته";

    case "1w":
      return "1 هفته";

    case "1m":
      return "1 ماه";

    case "3m":
      return "3 ماه";
    case "1y":
      return "1 سال";

    case "ALL":
      return "همه";
    default:
      return "time";
  }
};
const CoinChart: React.FC<{ currency_code: string; chartPeriod: any }> = ({
  currency_code,
  chartPeriod,
}) => {
  const [timeDuration, setTimeDuration] = useState(chartPeriod.items[0]);
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await getCoinChart(currency_code, timeDuration),
    placeholderData: keepPreviousData,
    queryKey: ["coinChart", currency_code, timeDuration],
  });

  const labelForValue = data.items.map((item: any) => item.title);
  const chartData = {
    labels: data.items.map((item: any) => item.date),
    datasets: [
      {
        label: "قیمت بیت کوین",
        data: data.items.map((item: any) => item.price),
        borderColor: "rgb(255, 159, 64)",
        backgroundColor: "rgba(255, 159, 64,0.2)",
        fill: "start",
        yAxisID: "y1",
      },
      {
        label: "برابری",
        data: data.items.map((item: any) => item.irt_price),
        borderColor: "rgb(54, 162, 235)",
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        yAxisID: "y",
        spanGaps: false,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    interaction: {
      mode: "index" as const,
      intersect: false,
    },

    hover: {
      mode: "index" as const,
      intersect: false,
    },
    elements: {
      point: {
        radius: 0,
      },
      line: {
        tension: 0.8,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        mode: "index" as const,
        intersect: false,
      },
    },
    scales: {
      y: {
        stacked: false,
        position: "right" as const,
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
        ticks: {
          callback: function (val: string | number): string | undefined {
            if (+val > 1000000) {
              return (+val / 1000000).toLocaleString() + "M";
            }
            return +val > 1000
              ? (+val / 1000).toLocaleString() + "k"
              : val.toString();
          },
        },
      },
      y1: {
        type: "linear" as const,
        display: true,
        position: "left" as const,
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          callback: function (val: string | number): string | undefined {
            return +val > 1000
              ? (+val / 1000).toLocaleString() + "k"
              : val.toString();
          },
        },
      },
      x: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
  };

  const chartDataUsdPrice = {
    labels: data.items.map((item: any) => item.date),
    datasets: [
      {
        label: "نرخ دلار",
        data: data.items.map((item: any) => item.usd_price), // Approximation for visualization
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        fill: "start",
      },
    ],
  };

  const optionsUsdPrice: ChartOptions<"line"> = {
    responsive: true,
    aspectRatio: 5,
    layout: {
      padding: {
        right: 50,
      },
    },
    interaction: {
      mode: "index" as const,
      intersect: false,
    },
    
    hover: {
      mode: "index" as const,
      intersect: false,
    },
    elements: {
      point: {
        radius: 0,
      },
      line: {
        tension: 0.8,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        mode: "index" as const,
        intersect: false,
      },
    },
    scales: {
      y: {
        stacked: false,
        type: "linear" as const,
        display: true,
        position: "left" as const,
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
        ticks: {
          callback: function (
            val: number | string,
            index: number
          ): string | undefined {
            return +val > 1000
              ? (+val / 1000).toString() + "k"
              : val.toString();
          },
        },
      },
      x: {
        grid: {
          display: false,
          color: "grey",
        },
        ticks: {
          callback: function (
            val: number | string,
            index: number
          ): string | undefined {
            switch (timeDuration) {
              case "24h":
                return index % 3 === 0 ? labelForValue[val] : undefined;
              case "1w":
                return index % 24 === 0 ? labelForValue[val] : undefined;
              case "1m":
                return index % 90 === 0 ? labelForValue[val] : undefined;
              case "3m":
                return index % 10 === 0 ? labelForValue[val] : undefined;
              case "1y":
                return index % 1095 === 0 ? labelForValue[val] : undefined;
              case "ALL":
                const totalObjects = data.length;
                const step = Math.floor(totalObjects / 8);
                return index % step === 0 ? labelForValue[val] : undefined;
              default:
                return undefined;
            }
          },
        },
      },
    },
  };

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (isError) {
    return <div>Sorry There was an Error</div>;
  }

  return (
    <>
      <h2 className="text-xl font-bold  text-center my-16">
        نمودار قیمت
        <span className="text-2xl font-bold mb-4 text-blue-700">
          {" " + data.items[0].coin.fa_name + " "}
        </span>
        و نرخ برابری تومان
      </h2>
      <div className="bg-white p-4 rounded-lg shadow-md" dir="rtl">
        <div className="flex justify-start gap-4 mb-8 mr-4">
          {chartPeriod.items.map((item: string,index:number) => (
            <button
            key={index}
              onClick={() => setTimeDuration(item)}
              className={`" text-xs lg:text-sm 2xl:text-base" ${
                item === timeDuration ? "text-blue-600" : "text-gray-500"
              }`}
            >
              {getPeriod(item)}
            </button>
          ))}
        </div>
        <Line options={options} data={chartData} />
        <Line options={optionsUsdPrice} data={chartDataUsdPrice} />
        <div className="flex justify-center gap-6 mt-4 text-sm">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-orange-400 rounded-full ml-2"></div>
            <span>قیمت بیت کوین</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-400 rounded-full ml-2"></div>
            <span>برابری</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-400 rounded-full ml-2"></div>
            <span>نرخ دلار</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoinChart;
