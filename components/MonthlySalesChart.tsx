"use client";

import React from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartLegend,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const chartData = [
  { month: "Jan", cakes: 4500, cookies: 2400, pastries: 1800 },
  { month: "Feb", cakes: 4800, cookies: 2210, pastries: 2000 },
  { month: "Mar", cakes: 5200, cookies: 2290, pastries: 2100 },
  { month: "Apr", cakes: 4900, cookies: 2780, pastries: 2500 },
  { month: "May", cakes: 5500, cookies: 1890, pastries: 2300 },
  { month: "Jun", cakes: 6000, cookies: 2390, pastries: 2600 },
  { month: "Jul", cakes: 6200, cookies: 3490, pastries: 2900 },
  { month: "Aug", cakes: 6500, cookies: 3200, pastries: 3000 },
  { month: "Sep", cakes: 7000, cookies: 3100, pastries: 3200 },
  { month: "Oct", cakes: 7500, cookies: 4000, pastries: 3500 },
  { month: "Nov", cakes: 8000, cookies: 3000, pastries: 3800 },
  { month: "Dec", cakes: 9500, cookies: 4300, pastries: 4500 },
];

const chartConfig = {
  sales: {
    label: "Sales ($)",
  },
  cakes: {
    label: "Cakes",
    color: "var(--color-paletteMaroonDark)",
  },
  cookies: {
    label: "Cookies",
    color: "var(--color-paletteMaroonRose)",
  },
  pastries: {
    label: "Pastries",
    color: "var(--color-palettePinkMedium)",
  },
};

const MonthlySalesChart = () => {
  return (
    <Card className="border-none shadow-none">
      <CardHeader>
        <CardTitle>Monthly Bake Sales</CardTitle>
        <CardDescription>
          A fictional look at our sales growth over the past year.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{ top: 20, right: 20, bottom: 5, left: 10 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <YAxis
              tickFormatter={(value) => `$${value / 1000}k`}
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <ChartLegend />
            <Bar
              dataKey="cakes"
              stackId="a"
              fill={chartConfig.cakes.color}
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="cookies"
              stackId="a"
              fill={chartConfig.cookies.color}
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="pastries"
              stackId="a"
              fill={chartConfig.pastries.color}
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default MonthlySalesChart;
