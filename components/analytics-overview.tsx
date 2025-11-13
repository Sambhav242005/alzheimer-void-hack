"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp, AlertCircle, Users, Brain } from "lucide-react"

export function AnalyticsOverview() {
  const stats = [
    {
      icon: Users,
      label: "Total Patients",
      value: "248",
      change: "+12%",
      positive: true,
    },
    {
      icon: AlertCircle,
      label: "At-Risk Cases",
      value: "34",
      change: "+5%",
      positive: false,
    },
    {
      icon: Brain,
      label: "Assessments Today",
      value: "12",
      change: "+3",
      positive: true,
    },
    {
      icon: TrendingUp,
      label: "Avg Risk Score",
      value: "42%",
      change: "-2%",
      positive: true,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.label} className="bg-card border-border p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <p className="text-3xl font-bold text-foreground mt-2">{stat.value}</p>
              <p className={`text-xs mt-2 ${stat.positive ? "text-emerald-500" : "text-red-500"}`}>{stat.change}</p>
            </div>
            <div className="p-3 bg-accent bg-opacity-10 rounded-lg">
              <stat.icon className="w-6 h-6 text-accent" />
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
