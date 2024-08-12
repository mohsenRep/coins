"use client";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import getCoinPrice from "@/app/api/getCoinPrice";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend,
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
    queryFn: async () => await getCoinPrice(currency_code, timeDuration),
    placeholderData: keepPreviousData,
    queryKey: ["coinPrice", currency_code, timeDuration],
  });

  const labelForValue = data.items[0].chart.map((item: any) => item.title);
  const chartData = {
    labels: data.items[0].chart.map((item: any) => item.date),
    datasets: [
      {
        label: "قیمت بیت کوین",
        data: data.items[0].chart.map((item: any) => item.price),
        borderColor: "rgb(255, 159, 64)",
        backgroundColor: "rgba(255, 159, 64,0.2)",
        fill: "start",
        yAxisID: "y1",
      },
      {
        label: "برابری",
        data: data.items[0].chart.map((item: any) => item.irt_price),
        borderColor: "rgb(54, 162, 235)",
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        yAxisID: "y",
        spanGaps: false,
      },
    ],
  };

  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: false,
    hover: {
      mode: "index",
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
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      y: {
        position: "right" as const,
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
      },
      y1: {
        type: "linear",
        display: true,
        position: "left" as const,

        grid: {
          drawOnChartArea: false,
        },
      },
      x: {
        display: false,
        grid: {
          display: false, // This will hide vertical grid lines
        },
      },
    },
  };

  const chartDataUsdPrice = {
    labels: data.items[0].chart.map((item: any) => item.date),
    datasets: [
      {
        label: "نرخ دلار",
        data: data.items[0].chart.map((item: any) => item.usd_price), // Approximation for visualization
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        fill: "start",
      },
    ],
  };

  const optionsUsdPrice = {
    responsive: true,

    aspectRatio: 5,

    layout: {
      padding: {
        right: 90,
      },
    },
    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: false,
    hover: {
      mode: "index",
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
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left" as const,

        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
      },
      x: {
        gridLines: { display: false, color: "grey" },
        ticks: {
          callback: function (val: any, index: number): string | undefined {
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
                // Select 9 objects with equal time difference
                const totalObjects = data.length;
                const step = Math.floor(totalObjects / 8);
                return index % step === 0 ? labelForValue[val] : undefined;
              default:
                return data; // Return all data if period is not recognized
            }
          },
        },
        grid: {
          display: false, // This will hide vertical grid lines
        },
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md" dir="rtl">
      <div className="flex justify-start gap-4 mb-8 mr-8">
        {chartPeriod.items.map((item: string) => (
          <button
            onClick={() => setTimeDuration(item)}
            className="text-blue-600 text-xs lg:text-sm 2xl:text-base"
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
  );
};

export default CoinChart;
