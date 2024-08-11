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

const CoinChart: React.FC<{ currency_code: string; chartPeriod: any }> = ({
  currency_code,
  chartPeriod,
}) => {
  console.log(chartPeriod);
  const [timeDuration, setTimeDuration] = useState("1m");
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await getCoinPrice(currency_code, timeDuration),
    placeholderData: keepPreviousData,
    queryKey: ["coinPrice", currency_code],
  });

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
    labels: data.items[0].chart.map((item: any) => item.time),
    datasets: [
      {
        label: "نرخ دلار",
        data: data.items[0].chart.map((item: any) => item.usd_price), // Approximation for visualization
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.5)",
      },
    ],
  };

  const optionsUsdPrice = {
    responsive: true,

    aspectRatio: 5,

    layout: {
      padding: {
        right: 100,
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
        display: false,

        grid: {
          drawOnChartArea: false,
        },
      },
      x: {
        grid: {
          display: false, // This will hide vertical grid lines
        },
      },
    },
  };
  console.log(data.items[0].chart);
  return (
    <div className="bg-white p-4 rounded-lg shadow-md" dir="rtl">
      <div className="flex justify-between mb-4">
        <button className="text-blue-600">۲۴ ساعته</button>
        <button className="text-blue-600">۱ هفته</button>
        <button className="text-blue-600">۱ ماه</button>
        <button className="text-blue-600">۱ سال</button>
      </div>
      <Line options={options} data={chartData} />
      <Line options={optionsUsdPrice} data={chartDataUsdPrice} />
      <div className="flex justify-between mt-4 text-sm">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-orange-400 rounded-full mr-2"></div>
          <span>قیمت بیت کوین</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-blue-400 rounded-full mr-2"></div>
          <span>برابری</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
          <span>نرخ دلار</span>
        </div>
      </div>
    </div>
  );
};

export default CoinChart;
