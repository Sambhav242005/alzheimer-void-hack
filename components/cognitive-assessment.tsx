"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, FileText } from "lucide-react"

export function CognitiveAssessment() {
  const tests = [
    {
      name: "Mini-Cog",
      score: 2,
      maxScore: 3,
      date: "2 hours ago",
      status: "high-risk",
      interpretation: "Possible Cognitive Impairment",
    },
    {
      name: "MMSE (Mini-Mental State Exam)",
      score: 22,
      maxScore: 30,
      date: "2 hours ago",
      status: "moderate-risk",
      interpretation: "Mild Cognitive Impairment",
    },
    {
      name: "MoCA (Montreal Cognitive Assessment)",
      score: 19,
      maxScore: 30,
      date: "1 day ago",
      status: "high-risk",
      interpretation: "Mild to Moderate Impairment",
    },
    {
      name: "Clock Drawing Test",
      score: 5,
      maxScore: 10,
      date: "3 days ago",
      status: "moderate-risk",
      interpretation: "Visuospatial & Executive Dysfunction",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Tests Completed", value: "4", color: "bg-blue-500/20 text-blue-500" },
          { label: "Avg Score", value: "62%", color: "bg-yellow-500/20 text-yellow-600" },
          { label: "Trend", value: "Declining", color: "bg-red-500/20 text-red-500" },
          { label: "Last Test", value: "2 hrs ago", color: "bg-accent/20 text-accent" },
        ].map((stat) => (
          <Card key={stat.label} className="bg-card border-border p-4">
            <p className="text-xs text-muted-foreground mb-1">{stat.label}</p>
            <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
          </Card>
        ))}
      </div>

      <div className="space-y-3">
        {tests.map((test) => (
          <Card key={test.name} className="bg-card border-border p-4">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-semibold text-foreground">{test.name}</h3>
                  <Badge
                    className={`${
                      test.status === "high-risk"
                        ? "bg-red-500/20 text-red-500 border-red-500/30"
                        : "bg-yellow-500/20 text-yellow-600 border-yellow-500/30"
                    }`}
                  >
                    {test.status === "high-risk" ? "High Risk" : "Moderate Risk"}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Score</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl font-bold text-foreground">{test.score}</span>
                      <span className="text-xs text-muted-foreground">/ {test.maxScore}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Interpretation</p>
                    <p className="text-sm font-medium text-foreground">{test.interpretation}</p>
                  </div>
                </div>

                <div className="h-1.5 bg-sidebar rounded-full overflow-hidden mb-2">
                  <div
                    className={`h-full ${
                      (test.score / test.maxScore) * 100 >= 70
                        ? "bg-emerald-500"
                        : (test.score / test.maxScore) * 100 >= 50
                          ? "bg-yellow-500"
                          : "bg-red-500"
                    }`}
                    style={{ width: `${(test.score / test.maxScore) * 100}%` }}
                  ></div>
                </div>

                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>{test.date}</span>
                </div>
              </div>

              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-accent">
                <FileText className="w-4 h-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <Card className="bg-accent/10 border-accent/30 p-6">
        <h3 className="font-semibold text-accent mb-3">Clinical Notes</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Patient demonstrates consistent decline across multiple cognitive domains. Performance on attention and
          executive function tests particularly concerning. Mini-Cog result of 2/3 combined with MMSE score of 22/30
          indicates probable mild cognitive impairment progressing to moderate stage. Recommend comprehensive
          neuropsychological evaluation and increased care coordination.
        </p>
      </Card>
    </div>
  )
}
