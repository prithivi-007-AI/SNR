"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { day: "1", sales: 420 },
  { day: "2", sales: 380 },
  { day: "3", sales: 520 },
  { day: "4", sales: 480 },
  { day: "5", sales: 650 },
  { day: "6", sales: 720 },
  { day: "7", sales: 580 },
  { day: "8", sales: 690 },
  { day: "9", sales: 750 },
  { day: "10", sales: 620 },
  { day: "11", sales: 580 },
  { day: "12", sales: 680 },
  { day: "13", sales: 720 },
  { day: "14", sales: 850 },
  { day: "15", sales: 920 },
  { day: "16", sales: 780 },
  { day: "17", sales: 650 },
  { day: "18", sales: 720 },
  { day: "19", sales: 680 },
  { day: "20", sales: 750 },
  { day: "21", sales: 820 },
  { day: "22", sales: 890 },
  { day: "23", sales: 950 },
  { day: "24", sales: 780 },
  { day: "25", sales: 680 },
  { day: "26", sales: 720 },
  { day: "27", sales: 850 },
  { day: "28", sales: 920 },
  { day: "29", sales: 980 },
  { day: "30", sales: 1050 },
]

export function SalesChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip
          content={({ active, payload, label }) => {
            if (active && payload && payload.length) {
              return (
                <div className="rounded-lg border bg-background p-2 shadow-sm">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col">
                      <span className="text-[0.70rem] uppercase text-muted-foreground">Day {label}</span>
                      <span className="font-bold text-muted-foreground">${payload[0].value}</span>
                    </div>
                  </div>
                </div>
              )
            }
            return null
          }}
        />
        <Line type="monotone" dataKey="sales" stroke="hsl(var(--primary))" strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  )
}
