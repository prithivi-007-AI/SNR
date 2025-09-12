"use client"

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { month: "Jan", basic: 45, premium: 25, enterprise: 8 },
  { month: "Feb", basic: 52, premium: 28, enterprise: 12 },
  { month: "Mar", basic: 48, premium: 32, enterprise: 15 },
  { month: "Apr", basic: 61, premium: 35, enterprise: 18 },
  { month: "May", basic: 55, premium: 42, enterprise: 22 },
  { month: "Jun", basic: 67, premium: 38, enterprise: 25 },
]

export function TenantsChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis
          dataKey="month"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
        />
        <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
        <Tooltip
          content={({ active, payload, label }) => {
            if (active && payload && payload.length) {
              return (
                <div className="rounded-lg border bg-background p-2 shadow-sm">
                  <div className="grid gap-2">
                    <div className="font-medium">{label}</div>
                    {payload.map((entry, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full" style={{ backgroundColor: entry.color }} />
                        <span className="text-sm capitalize">
                          {entry.dataKey}: {entry.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            }
            return null
          }}
        />
        <Bar dataKey="basic" fill="hsl(var(--chart-1))" radius={[0, 0, 4, 4]} />
        <Bar dataKey="premium" fill="hsl(var(--chart-2))" radius={[0, 0, 4, 4]} />
        <Bar dataKey="enterprise" fill="hsl(var(--chart-3))" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
