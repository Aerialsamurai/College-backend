import React, { useEffect, useState } from "react";
import "./placement.css";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Placement = () => {
  const [placementData, setPlacementData] = useState({});
  const [year, setYear] = useState(2024);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("https://college-backend-la5k.onrender.com/placements")
      .then(res => {
        setPlacementData(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError("Failed to load placement data");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const data = placementData[year] || {};

  return (
    <div id="placement" className="placement-wrapper">
      <h2 className="plac-head">IIT Delhi Placement Statistics</h2>
      <div className="placement-container">
        <div className="year-selector">
          {[2024, 2023, 2022].map((y) => (
            <button
              key={y}
              onClick={() => setYear(y)}
              className={year === y ? "active" : ""}
            >
              {y}
            </button>
          ))}
        </div>

        <div className="chart-container">
          <div className="actual-chart-wrapper">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={data.chart}
              margin={{ top: 20, right: 20, bottom: 5, left: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="branch" angle={-45} textAnchor="end" interval={0} height={90} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Registered" fill="#1f77b4" />
              <Bar dataKey="Placed" fill="#ff7f0e" />
            </BarChart>
          </ResponsiveContainer>
          </div>
        </div>

        <h3>Placement Percentages</h3>
        <table className="stats-table">
          <thead>
            <tr>
              <th>Branch</th>
              <th>Placement %</th>
            </tr>
          </thead>
          <tbody>
            {data.percentage.map((item, index) => (
              <tr key={index}>
                <td>{item.branch}</td>
                <td>{item.percentage}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3>Median & Average Salaries</h3>
        <div className="stat-salary-tab">
        <table className="stats-table salary-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Domestic</th>
              <th>International</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Median</td>
              <td>{data.salary.medianDomestic}</td>
              <td>{data.salary.medianInternational}</td>
            </tr>
            <tr>
              <td>Average</td>
              <td>{data.salary.averageDomestic}</td>
              <td>{data.salary.averageInternational}</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
};

export default Placement;