import { Metadata } from "next"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import BurndownChart from "./components/burndown-chart"
import { MainNav } from "./components/main-nav"
import { Overview } from "./components/overview"
import { PieData } from "./components/pie"
import { RecentSales } from "./components/recent-sales"
import { Search } from "./components/search"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app using the components.",
}

const COLORS = {
  finished: "#16A085",
  tests: "#D4AC0D",
  rams: "#8884d8",
  pending: "#5D6D7E",
}

const data0 = [
  { name: "Pendiente", value: 42, color: COLORS.pending },
  { name: "Pruebas", value: 1, color: COLORS.tests },
  { name: "Ramaleos", value: 15, color: COLORS.rams },
  { name: "Terminado", value: 10, color: COLORS.finished },
]

export default function DashboardPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex-col md:flex">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          </div>
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Info A</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <Overview />
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Eventos recientes</CardTitle>
                  <CardDescription>
                    Se crearon 30 eventos este mes
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentSales />
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-12">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Hidraulico</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pl-2">
                <PieData data={data0} />
              </CardContent>
            </Card>
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Sanitario Y Extraccion</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pl-2">
                <PieData data={data0} />
              </CardContent>
            </Card>
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Electricidad</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pl-2">
                <PieData data={data0} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
