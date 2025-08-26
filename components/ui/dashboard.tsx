import * as React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "./card"
import { Badge } from "./badge"
import { Progress } from "./progress"
import { Chart } from "./chart"

interface DashboardStat {
  title: string
  value: string | number
  change?: number
  changeType?: "increase" | "decrease"
  icon?: React.ReactNode
}

interface DashboardProps {
  stats: DashboardStat[]
  recentBookings?: Array<{
    id: string
    customerName: string
    vehicleName: string
    date: string
    status: string
    amount: number
  }>
  chartData?: Array<{
    label: string
    value: number
    color?: string
  }>
  className?: string
}

export function Dashboard({ stats, recentBookings, chartData, className }: DashboardProps) {
  return (
    <div className={cn("space-y-6", className)}>
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              {stat.icon && (
                <div className="text-gray-400">
                  {stat.icon}
                </div>
              )}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">
                {stat.value}
              </div>
              {stat.change !== undefined && (
                <div className="flex items-center space-x-1 mt-1">
                  <Badge
                    variant={stat.changeType === "increase" ? "success" : "destructive"}
                    className="text-xs"
                  >
                    {stat.changeType === "increase" ? "+" : "-"}{Math.abs(stat.change)}%
                  </Badge>
                  <span className="text-xs text-gray-500">from last month</span>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chart */}
        {chartData && (
          <Card>
            <CardHeader>
              <CardTitle>Revenue Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <Chart data={chartData} type="bar" />
            </CardContent>
          </Card>
        )}

        {/* Recent Bookings */}
        {recentBookings && (
          <Card>
            <CardHeader>
              <CardTitle>Recent Bookings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentBookings.map((booking) => (
                  <div key={booking.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <p className="font-medium text-gray-900">{booking.customerName}</p>
                        <Badge
                          variant={
                            booking.status === "confirmed" ? "success" :
                            booking.status === "pending" ? "warning" :
                            "secondary"
                          }
                          className="text-xs"
                        >
                          {booking.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">{booking.vehicleName}</p>
                      <p className="text-xs text-gray-500">{booking.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">
                        ${booking.amount.toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
              <h4 className="font-medium text-gray-900">Add New Vehicle</h4>
              <p className="text-sm text-gray-600">Register a new car to the fleet</p>
            </button>
            <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
              <h4 className="font-medium text-gray-900">View Reports</h4>
              <p className="text-sm text-gray-600">Generate and view business reports</p>
            </button>
            <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
              <h4 className="font-medium text-gray-900">Manage Users</h4>
              <p className="text-sm text-gray-600">Add or modify user accounts</p>
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
