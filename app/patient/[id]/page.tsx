"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Download } from "lucide-react"
import { Sidebar } from "@/components/sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { Button } from "@/components/ui/button"
import { AIAnalysisResults } from "@/components/ai-analysis-results"
import { CognitiveAssessment } from "@/components/cognitive-assessment"
import { HistoricalChart } from "@/components/historical-chart"

export default function PatientDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("analysis")
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const patients: Record<string, any> = {
    "1": { name: "Margaret Johnson", age: 72, id: "P-2024-001" },
    "2": { name: "Robert Chen", age: 68, id: "P-2024-002" },
    "3": { name: "Elizabeth Brooks", age: 75, id: "P-2024-003" },
    "4": { name: "James Wilson", age: 65, id: "P-2024-004" },
    "5": { name: "Patricia Miller", age: 71, id: "P-2024-005" },
    "6": { name: "George Davis", age: 70, id: "P-2024-006" },
  }

  const patient = patients[params.id] || { name: "Unknown Patient", age: 0, id: "Unknown" }

  return (
    <div className="flex h-screen bg-background">
      <Sidebar open={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      <main className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <div className="flex-1 overflow-auto">
          {/* Patient Header */}
          <div className="border-b border-border bg-card sticky top-0 z-10">
            <div className="flex items-center justify-between px-6 py-4">
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => router.back()}
                  className="text-foreground hover:bg-accent/10"
                >
                  <ArrowLeft className="w-5 h-5" />
                </Button>
                <div>
                  <h1 className="text-2xl font-bold text-foreground">{patient.name}</h1>
                  <p className="text-sm text-muted-foreground">
                    Age {patient.age} • Patient ID: {patient.id}
                  </p>
                </div>
              </div>
              <Button className="bg-accent hover:bg-accent/90 text-white gap-2">
                <Download className="w-4 h-4" />
                Export Report
              </Button>
            </div>

            {/* Tabs */}
            <div className="flex gap-1 px-6 border-t border-border">
              {["analysis", "assessment", "history"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-3 font-medium text-sm border-b-2 transition-colors ${
                    activeTab === tab
                      ? "border-accent text-accent"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab === "analysis" && "AI Analysis"}
                  {tab === "assessment" && "Cognitive Tests"}
                  {tab === "history" && "History"}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 max-w-6xl mx-auto">
            {activeTab === "analysis" && <AIAnalysisResults />}
            {activeTab === "assessment" && <CognitiveAssessment />}
            {activeTab === "history" && <HistoricalChart />}
          </div>
        </div>
      </main>
    </div>
  )
}
