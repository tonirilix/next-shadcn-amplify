import { Metadata } from "next"
import Image from "next/image"
import { Activity, CreditCard, DollarSign, Download, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import BurndownChart from "./components/burndown-chart"
// import { CalendarDateRangePicker } from "./components/date-range-picker"
// import { MainNav } from "./components/main-nav"
import { Overview } from "./components/overview"
import { RecentSales } from "./components/recent-sales"

// import { Search } from "./components/search"
// import TeamSwitcher from "./components/team-switcher"
// import { UserNav } from "./components/user-nav"

// export const metadata: Metadata = {
//   title: "Dashboard",
//   description: "Example dashboard app using the components.",
// }

export default function DashboardPage() {
  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/dashboard-light.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="block dark:hidden"
        />
        <Image
          src="/examples/dashboard-dark.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="hidden dark:block"
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <Overview />
            <BurndownChart />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
            <CardDescription>You made 265 sales this month.</CardDescription>
          </CardHeader>
          <CardContent>
            <RecentSales />
          </CardContent>
        </Card>
      </div>
    </>
  )
}
