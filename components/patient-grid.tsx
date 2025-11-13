"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PatientCard } from "@/components/patient-card"

export function PatientGrid() {
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

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Patient Cases</h2>
        <Button className="bg-accent hover:bg-accent/90 text-white">New Assessment</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {patients.map((patient) => (
          <Link key={patient.id} href={`/patient/${patient.id}`}>
            <PatientCard patient={patient} />
          </Link>
        ))}
      </div>
    </div>
  )
}
