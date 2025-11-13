"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, AlertTriangle, Zap } from "lucide-react"
import Image from "next/image"

interface PatientCardProps {
  patient: {
    id: string
    name: string
    age: number
    riskScore: number
    lastAssessment: string
    status: "high-risk" | "moderate-risk" | "low-risk"
    cognitiveScore: number
    mmseScore: number
    image: string
  }
}

export function PatientCard({ patient }: PatientCardProps) {
  const getRiskColor = (score: number) => {
    if (score >= 70) return "bg-red-500/20 text-red-500 border-red-500/30"
    if (score >= 50) return "bg-yellow-500/20 text-yellow-600 border-yellow-500/30"
    return "bg-emerald-500/20 text-emerald-600 border-emerald-500/30"
  }

  const getRiskIcon = (status: string) => {
    return status === "high-risk" ? <AlertTriangle className="w-4 h-4" /> : <Zap className="w-4 h-4" />
  }

  return (
    <Card className="bg-card border-border overflow-hidden hover:border-accent/50 transition-colors cursor-pointer group">
      <div className="relative h-32 bg-gradient-to-br from-accent to-accent/50 overflow-hidden">
        <Image
          src={patient.image || "/placeholder.svg"}
          alt={patient.name}
          fill
          className="object-cover opacity-30 group-hover:opacity-40 transition-opacity"
        />
        <div
          className={`absolute top-3 right-3 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 border ${getRiskColor(patient.riskScore)}`}
        >
          {getRiskIcon(patient.status)}
          {patient.riskScore}%
        </div>
      </div>

      <div className="p-4 space-y-3">
        <div>
          <h3 className="text-lg font-bold text-foreground">{patient.name}</h3>
          <p className="text-xs text-muted-foreground">
            Age {patient.age} • {patient.lastAssessment}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="bg-sidebar rounded p-2">
            <p className="text-xs text-muted-foreground">Cognitive</p>
            <p className="text-sm font-bold text-foreground">{patient.cognitiveScore}/30</p>
          </div>
          <div className="bg-sidebar rounded p-2">
            <p className="text-xs text-muted-foreground">MMSE</p>
            <p className="text-sm font-bold text-foreground">{patient.mmseScore}/30</p>
          </div>
        </div>

        <div className="h-1 bg-sidebar rounded-full overflow-hidden">
          <div
            className={`h-full ${patient.riskScore >= 70 ? "bg-red-500" : patient.riskScore >= 50 ? "bg-yellow-500" : "bg-emerald-500"}`}
            style={{ width: `${patient.riskScore}%` }}
          ></div>
        </div>

        <Button
          variant="ghost"
          className="w-full group/btn justify-between text-accent hover:text-accent hover:bg-accent/10"
        >
          View Details
          <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </div>
    </Card>
  )
}
