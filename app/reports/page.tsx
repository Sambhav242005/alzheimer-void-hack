"use client"

import { useState } from "react"
import { Download, Filter, Calendar } from "lucide-react"
import { Sidebar } from "@/components/sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function ReportsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const reports = [
    {
      id: "1",
      title: "Monthly Alzheimer's Trend Report",
      date: "November 2025",
      patients: 24,
      type: "Comprehensive",
      status: "Ready",
    },
    {
      id: "2",
      title: "Quarterly Biomarker Analysis",
      date: "Q3 2025",
      patients: 18,
      type: "Clinical",
      status: "Ready",
    },
    {
      id: "3",
      title: "High-Risk Patient Alert Report",
      date: "November 10, 2025",
      patients: 6,
      type: "Alert",
      status: "Ready",
    },
    {
      id: "4",
      title: "Cognitive Assessment Summary",
      date: "November 2025",
      patients: 24,
      type: "Summary",
      status: "Processing",
    },
    {
      id: "5",
      title: "MedGemma AI Analysis Report",
      date: "November 2025",
      patients: 24,
      type: "AI Analysis",
      status: "Ready",
    },
    {
      id: "6",
      title: "Patient Progression Timeline",
      date: "6-Month Review",
      patients: 15,
      type: "Historical",
      status: "Ready",
    },
  ]

  return (
    <div className="flex h-screen bg-background">
      <Sidebar open={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      <main className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <div className="flex-1 overflow-auto">
          <div className="p-6 space-y-6">
            {/* Header */}
            <div>
              <h1 className="text-3xl font-bold text-foreground">Reports</h1>
              <p className="text-muted-foreground mt-1">Generate and manage patient reports</p>
            </div>

            {/* Filter Bar */}
            <div className="flex gap-4">
              <Button variant="outline" className="gap-2 border-border bg-transparent">
                <Calendar className="w-4 h-4" />
                Date Range
              </Button>
              <Button variant="outline" className="gap-2 border-border bg-transparent">
                <Filter className="w-4 h-4" />
                Filter
              </Button>
            </div>

            {/* Reports Grid */}
            <div className="grid gap-4">
              {reports.map((report) => (
                <Card
                  key={report.id}
                  className="p-4 bg-card border-border hover:border-accent/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{report.title}</h3>
                      <div className="flex gap-4 mt-2 text-sm text-muted-foreground">
                        <span>{report.date}</span>
                        <span>{report.patients} Patients</span>
                        <span className="text-accent">{report.type}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          report.status === "Ready"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-yellow-500/20 text-yellow-400"
                        }`}
                      >
                        {report.status}
                      </span>
                      <Button variant="ghost" size="sm" className="gap-2">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
