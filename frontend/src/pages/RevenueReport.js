import { useContext } from "react";
import { OrderContext } from "../context/OrderContext";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

function RevenueReport() {
  const { orders } = useContext(OrderContext);

  // ✅ SAFE DEFAULT
  const safeOrders = orders || [];

  // ✅ TOTAL REVENUE (SAFE)
  const totalRevenue = safeOrders.reduce((total, order) => {
    const items = order?.items || [];

    return (
      total +
      items.reduce(
        (sum, item) =>
          sum + (item?.price || 0) * (item?.qty || 0),
        0
      )
    );
  }, 0);

  // ✅ DAILY REVENUE MAP
  const revenueMap = {};

  safeOrders.forEach(order => {
    const items = order?.items || [];

    // ⚠️ FIX: use createdAt (your OrderContext uses this)
    const date = new Date(order?.createdAt || Date.now()).toLocaleDateString();

    const orderTotal = items.reduce(
      (sum, item) =>
        sum + (item?.price || 0) * (item?.qty || 0),
      0
    );

    revenueMap[date] =
      (revenueMap[date] || 0) + orderTotal;
  });

  const chartData = Object.keys(revenueMap).map(date => ({
    date,
    revenue: revenueMap[date]
  }));

  return (
    <div className="container mt-4">

      <h2>Revenue Report</h2>

      <div className="card p-3 mb-4">
        <h4>Total Revenue: ₹{totalRevenue}</h4>
      </div>

      <div className="card p-3 mb-4">
        <h5>Revenue Analytics</h5>

        {chartData.length === 0 ? (
          <p>No data available</p>
        ) : (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>

      <div className="card p-3">
        <h5>Daily Revenue</h5>

        {chartData.length === 0 ? (
          <p>No revenue yet</p>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Revenue</th>
              </tr>
            </thead>
            <tbody>
              {chartData.map((d, index) => (
                <tr key={index}>
                  <td>{d.date}</td>
                  <td>₹{d.revenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

    </div>
  );
}

export default RevenueReport;