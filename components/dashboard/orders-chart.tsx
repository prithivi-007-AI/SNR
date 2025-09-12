"use client"

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { name: "Completed", value: 156, color: "hsl(var(--chart-1))" },
  { name: "Processing", value: 45, color: "hsl(var(--chart-2))" },
  { name: "Shipped", value: 23, color: "hsl(var(--chart-3))" },
  { name: "Cancelled", value: 10, color: "hsl(var(--chart-4))" },
]

export function OrdersChart() {
  return (
    <div className="space-y-4">
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="rounded-lg border bg-background p-2 shadow-sm">
                    <div className="grid gap-2">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full" style={{ backgroundColor: payload[0].payload.color }} />
                        <span className="text-sm font-medium">{payload[0].payload.name}</span>
                      </div>
                      <span className="text-sm">{payload[0].value} orders</span>
                    </div>
                  </div>
                )
              }
              return null
            }}
          />
        </PieChart>
      </ResponsiveContainer>

      <div className="grid grid-cols-2 gap-4">
        {data.map((item) => (
          <div key={item.name} className="flex items-center space-x-2">
            <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
            <div className="flex-1">
              <p className="text-sm font-medium">{item.name}</p>
              <p className="text-xs text-muted-foreground">{item.value} orders</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
