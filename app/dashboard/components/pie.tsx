"use client"

import { useState } from "react"
import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Sector,
  Tooltip,
} from "recharts"

export function PieData({ data }: any) {
  const [activeIndex, setActiveIndex] = useState(0)

  const handlePieEnter = (_: any, index: number) => {
    setActiveIndex(index)
  }
  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {data.map((entry: any, index: number) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  )
}
