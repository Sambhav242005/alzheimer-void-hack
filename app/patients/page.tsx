"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Plus, Filter } from "lucide-react"
import { Sidebar } from "@/components/sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PatientCard } from "@/components/patient-card"

export default function PatientsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")

  const patients = [
    {
      id: "1",
      name: "Margaret Johnson",
      age: 72,
      riskScore: 78,
      lastAssessment: "2 hours ago",
      status: "high-risk",
      cognitiveScore: 22,
      mmseScore: 22,
      image: "/elderly-woman.png",
    },
    {
      id: "2",
      name: "Robert Chen",
      age: 68,
      riskScore: 45,
      lastAssessment: "4 hours ago",
      status: "moderate-risk",
      cognitiveScore: 28,
      mmseScore: 28,
      image: "/elderly-man.jpg",
    },
    {
      id: "3",
      name: "Elizabeth Brooks",
      age: 75,
      riskScore: 92,
      lastAssessment: "1 hour ago",
      status: "high-risk",
      cognitiveScore: 18,
      mmseScore: 18,
      image: "/elderly-woman-portrait.jpg",
    },
    {
      id: "4",
      name: "James Wilson",
      age: 65,
      riskScore: 28,
      lastAssessment: "3 hours ago",
      status: "low-risk",
      cognitiveScore: 29,
      mmseScore: 29,
      image: "/elderly-man-portrait.jpg",
    },
    {
      id: "5",
      name: "Patricia Miller",
      age: 71,
      riskScore: 65,
      lastAssessment: "5 hours ago",
      status: "moderate-risk",
      cognitiveScore: 24,
      mmseScore: 24,
      image: "/elderly-woman-smiling.jpg",
    },
    {
      id: "6",
      name: "George Davis",
      age: 70,
      riskScore: 35,
      lastAssessment: "6 hours ago",
      status: "low-risk",
      cognitiveScore: 29,
      mmseScore: 29,
      image: "/elderly-man-smiling.jpg",
    },
  ]

  const filteredPatients = patients.filter(
    (patient) => patient.name.toLowerCase().includes(searchTerm.toLowerCase()) || patient.id.includes(searchTerm),
  )

  return (
    <div className="flex h-screen bg-background">
      <Sidebar open={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      <main className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <div className="flex-1 overflow-auto">
          <div className="p-6 space-y-6">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-foreground">Patients</h1>
                  <p className="text-muted-foreground mt-1">Manage and monitor all patients</p>
                </div>
                <Button className="bg-accent hover:bg-accent/90 text-white gap-2">
                  <Plus className="w-4 h-4" />
                  Add Patient
                </Button>
              </div>

              {/* Search and Filter */}
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by name or ID..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-background border-border text-foreground"
                  />
                </div>
                <Button variant="outline" className="gap-2 border-border bg-transparent">
                  <Filter className="w-4 h-4" />
                  Filter
                </Button>
              </div>
            </div>

            {/* Patient Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredPatients.map((patient) => (
                <Link key={patient.id} href={`/patient/${patient.id}`}>
                  <PatientCard patient={patient} />
                </Link>
              ))}
            </div>

            {filteredPatients.length === 0 && (
              <div className="text-center py-12 text-muted-foreground">
                <p>No patients found matching your search.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
