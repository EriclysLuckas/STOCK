import { useState, useEffect } from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell, Legend } from "recharts";
import useBaseContext from "../../hooks/userBaseContext";

export default function ProductsPieChart() {
  const { base } = useBaseContext();
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (!base || base.length === 0) return;

    const data = Object.values(
      base.reduce((acc, p) => {
        const key = p.category?.toLowerCase() || "sem categoria";
        if (!acc[key]) acc[key] = { name: p.category, value: 0 };
        acc[key].value += p.quantity || 0;
        return acc;
      }, {})
    );
    setChartData(data);
  }, [base]);

  const COLORS = ["#046F5D", "#845EC3", "#4145FF", "#0065FC", "#a4de6c", "#d0ed57", "#ffc658"];


  const renderCustomLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const RADIAN = Math.PI / 180;

    const radius = innerRadius + (outerRadius - innerRadius) / 1.5;

    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="#fff"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="14"
        fontFamily="Poppins, sans-serif"
      >
        {(percent * 100).toFixed(0)}%
      </text>
    );
  };


  return (
    <ResponsiveContainer width="100%" height={400} >
      <PieChart  >
        <Pie
          data={chartData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="55%"
          outerRadius={90}
          label={renderCustomLabel}
          labelLine={false}
          stroke="#424241"

        >
          {chartData.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip contentStyle={{
          width: "100%",
          backgroundColor: '#1e293b',
          borderRadius: '8px',
          color: '#fff',
          border: '8px',
          padding: '8px 12px',
          fontSize: "10px",

        }}

          itemStyle={{ color: '#fff' }} />
        <Legend
          content={({ payload }) => (
            <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
              {payload.map((entry, index) => (
                <div key={`legend-${index}`} style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <div style={{ width: 12, height: 12, backgroundColor: entry.color }}></div>
                  <span style={{ color: "#fff", fontSize: "12px" }}>{entry.value}</span>
                </div>
              ))}
            </div>
          )}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
