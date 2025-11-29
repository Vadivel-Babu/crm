import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

// Custom Tooltip Component
const CustomTooltip = ({ active, payload, coordinate }) => {
  if (active && payload && payload.length) {
    const x = coordinate.x;
    const y = coordinate.y;
    return (
      <div
        style={{
          left: x - 40, // centers tooltip (80px width / 2)
          top: y - 60, // place above the dot
          background: "#000",
          color: "#fff",
          padding: "6px 12px",
          borderRadius: "8px",
          fontSize: "12px",
          textAlign: "center",
        }}
      >
        <div>Chats</div>
        <strong>{payload[0].value}</strong>
        <div
          style={{
            position: "absolute",
            bottom: "-6px",
            left: "50%",
            transform: "translateX(-50%)",
            width: 0,
            height: 0,
            borderLeft: "6px solid transparent",
            borderRight: "6px solid transparent",
            borderTop: "6px solid #000",
          }}
        />
      </div>
    );
  }
  return null;
};

export default function Chart({ data }) {
  return (
    <div style={{ width: "100%", height: 320 }}>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
        >
          <CartesianGrid stroke="#eaeaea" vertical={false} />

          <XAxis
            dataKey="week"
            tick={{ fontSize: 12, fill: "#666" }}
            tickMargin={10}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            domain={[0, 25]}
            ticks={[0, 5, 10, 15, 20, 25]}
            tick={{ fontSize: 12, fill: "#666" }}
            axisLine={false}
            tickLine={false}
          />

          {/* Tooltip */}
          <Tooltip content={<CustomTooltip />} />

          {/* Line */}
          <Line
            type="monotone"
            dataKey="value"
            stroke="#00D907" // exact neon green like screenshot
            strokeWidth={4}
            dot={{
              r: 6,
              fill: "#fff",
              stroke: "#000",
              strokeWidth: 2,
            }}
            activeDot={{
              r: 8,
              fill: "#fff",
              stroke: "#000",
              strokeWidth: 2,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
