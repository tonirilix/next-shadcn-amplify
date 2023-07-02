"use client"

import React from "react"
import { Line, LineChart, XAxis, YAxis } from "recharts"

const BurndownChart = () => {
  const data = [
    {
      day: 1,
      workRemaining: 100,
    },
    {
      day: 2,
      workRemaining: 80,
    },
    {
      day: 3,
      workRemaining: 60,
    },
    {
      day: 4,
      workRemaining: 40,
    },
    {
      day: 5,
      workRemaining: 20,
    },
    {
      day: 6,
      workRemaining: 0,
    },
  ]

  return (
    <LineChart
      data={data}
      width={500}
      height={300}
      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
    >
      <XAxis dataKey="day" />
      <YAxis />
      <Line type="monotone" dataKey="workRemaining" />
    </LineChart>
  )
}

export default BurndownChart
