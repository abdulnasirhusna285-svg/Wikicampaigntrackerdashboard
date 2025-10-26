import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

interface TimeSeriesChartProps {
  data: Array<{ date: string; [key: string]: any }>;
  title: string;
  description?: string;
  dataKeys: Array<{ key: string; color: string; name: string }>;
  type?: "line" | "area";
}

export function TimeSeriesChart({ data, title, description, dataKeys, type = "area" }: TimeSeriesChartProps) {
  const ChartComponent = type === "area" ? AreaChart : LineChart;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <ChartComponent data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="date" stroke="#6b7280" fontSize={12} />
            <YAxis stroke="#6b7280" fontSize={12} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #e5e7eb',
                borderRadius: '6px'
              }}
            />
            <Legend />
            {type === "area" ? (
              <>
                {dataKeys.map((dk) => (
                  <Area
                    key={dk.key}
                    type="monotone"
                    dataKey={dk.key}
                    stroke={dk.color}
                    fill={dk.color}
                    fillOpacity={0.2}
                    strokeWidth={2}
                    name={dk.name}
                  />
                ))}
              </>
            ) : (
              <>
                {dataKeys.map((dk) => (
                  <Line
                    key={dk.key}
                    type="monotone"
                    dataKey={dk.key}
                    stroke={dk.color}
                    strokeWidth={2}
                    name={dk.name}
                  />
                ))}
              </>
            )}
          </ChartComponent>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
