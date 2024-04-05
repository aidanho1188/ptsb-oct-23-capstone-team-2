import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
import "./dashboardChart.css";
import { useEffect } from "react";

function DashboardChart() {
  let data = [
    {
      name: "Open",
      "Work Order Status": 15,
      fill: "#5FC6FF",
    },
    {
      name: "Awaiting Quote",
      "Work Order Status": 2,
      fill: "#FFC154",
    },
    {
      name: "On Site",
      "Work Order Status": 5,
      fill: "#FFAD54",
    },
    {
      name: "In Progress",
      "Work Order Status": 8,
      fill: "#FF5F5F",
    },
    {
      name: "Incomplete",
      "Work Order Status": 3,
      fill: "#B55FFF",
    },
    {
      name: "Completed",
      "Work Order Status": 12,
      fill: "#61CE99",
    },
  ];

  return (
    <div className="dashboard-chart">
      <BarChart width={900} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" fill="#4f4f4f" />
        <XAxis dataKey="name" stroke="white" />
        <YAxis
          stroke="white"
          label={{
            value: "No. Work Orders",
            angle: -90,
            position: "insideBottomLeft",
            fill: "white",
            offset: 15,
          }}
        />{" "}
        <Tooltip />
        <Legend />
        <Bar dataKey="Work Order Status" fill="#ffff" />
      </BarChart>
    </div>
  );
}

export default DashboardChart;
