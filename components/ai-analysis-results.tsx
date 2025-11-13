"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, CheckCircle, Zap, Brain, TrendingDown } from "lucide-react"
import Image from "next/image"

export function AIAnalysisResults() {
  return (
    <div className="space-y-6">
      {/* MedGemma Analysis Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 bg-card border-border p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold text-foreground">MedGemma AI Analysis</h2>
              <p className="text-sm text-muted-foreground mt-1">Latest Brain MRI Assessment - 2 hours ago</p>
            </div>
            <Badge className="bg-red-500/20 text-red-500 border-red-500/30">High Risk</Badge>
          </div>

          <div className="relative rounded-lg overflow-hidden mb-6 bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-6 border border-accent/30">
            <div className="absolute inset-0 opacity-10">
              <Image src="/brain-mri-scan.jpg" alt="Brain MRI" fill className="object-cover" />
            </div>
            <div className="relative">
              <p className="text-sm text-muted-foreground mb-2">Neural Activity Regions Analyzed</p>
              <div className="grid grid-cols-4 gap-2">
                {["Hippocampus", "Entorhinal", "Prefrontal", "Temporal"].map((region) => (
                  <div key={region} className="bg-accent/20 rounded p-3 border border-accent/30">
                    <p className="text-xs font-semibold text-accent">{region}</p>
                    <p className="text-xs text-muted-foreground mt-1">Analyzed</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Key Findings</h3>
            <div className="space-y-3">
              <FindingItem
                icon={AlertCircle}
                severity="high"
                title="Significant Hippocampal Atrophy"
                description="Bilateral hippocampal volume reduction of 28% compared to age-matched controls"
              />
              <FindingItem
                icon={Zap}
                severity="moderate"
                title="Reduced Neural Connectivity"
                description="Decreased functional connectivity in default mode network by 18%"
              />
              <FindingItem
                icon={TrendingDown}
                severity="moderate"
                title="Cortical Thinning Detected"
                description="Cortical thickness reduction in entorhinal cortex and temporal regions"
              />
              <FindingItem
                icon={CheckCircle}
                severity="low"
                title="Preserved Gray Matter"
                description="Primary visual and motor cortices remain within normal range"
              />
            </div>
          </div>
        </Card>

        {/* Risk Assessment */}
        <div className="space-y-4">
          <Card className="bg-card border-border p-6">
            <h3 className="font-semibold text-foreground mb-4">Risk Assessment</h3>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">Alzheimer's Risk</span>
                  <span className="text-lg font-bold text-red-500">78%</span>
                </div>
                <div className="h-2 bg-sidebar rounded-full overflow-hidden">
                  <div className="h-full bg-red-500" style={{ width: "78%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">Progression Rate</span>
                  <span className="text-lg font-bold text-yellow-500">Fast</span>
                </div>
                <div className="h-2 bg-sidebar rounded-full overflow-hidden">
                  <div className="h-full bg-yellow-500" style={{ width: "72%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">Confidence Score</span>
                  <span className="text-lg font-bold text-accent">94%</span>
                </div>
                <div className="h-2 bg-sidebar rounded-full overflow-hidden">
                  <div className="h-full bg-accent" style={{ width: "94%" }}></div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-accent/10 border-accent/30 p-4">
            <h4 className="font-semibold text-accent mb-2 flex items-center gap-2">
              <Brain className="w-4 h-4" />
              Recommendations
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Initiate cognitive therapy program</li>
              <li>• Prescribe neuroprotective agents</li>
              <li>• Increase monitoring frequency</li>
              <li>• Refer to neurology specialist</li>
              <li>• Schedule follow-up MRI in 6 months</li>
            </ul>
          </Card>
        </div>
      </div>

      {/* Biomarker Analysis */}
      <Card className="bg-card border-border p-6">
        <h3 className="font-semibold text-foreground mb-4">Biomarker Analysis</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { marker: "Amyloid-β", value: "245 pg/mL", status: "high", range: "< 192 pg/mL" },
            { marker: "Tau Protein", value: "89 pg/mL", status: "high", range: "< 60 pg/mL" },
            { marker: "P-tau181", value: "38 pg/mL", status: "high", range: "< 20 pg/mL" },
            { marker: "APOE4 Genotype", value: "Positive", status: "risk", range: "Genetic marker" },
          ].map((bio) => (
            <div key={bio.marker} className="bg-sidebar rounded-lg p-4 border border-border">
              <p className="text-xs text-muted-foreground mb-1">{bio.marker}</p>
              <p className="text-lg font-bold text-foreground mb-2">{bio.value}</p>
              <p className="text-xs text-muted-foreground">Reference: {bio.range}</p>
              <Badge
                className={`mt-2 ${
                  bio.status === "high"
                    ? "bg-red-500/20 text-red-500 border-red-500/30"
                    : bio.status === "risk"
                      ? "bg-yellow-500/20 text-yellow-600 border-yellow-500/30"
                      : "bg-emerald-500/20 text-emerald-600 border-emerald-500/30"
                }`}
              >
                {bio.status === "high" ? "Elevated" : bio.status === "risk" ? "Risk Factor" : "Normal"}
              </Badge>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

interface FindingItemProps {
  icon: React.ComponentType<{ className?: string }>
  severity: "high" | "moderate" | "low"
  title: string
  description: string
}

function FindingItem({ icon: Icon, severity, title, description }: FindingItemProps) {
  const severityColors = {
    high: "bg-red-500/10 border-red-500/20 text-red-500",
    moderate: "bg-yellow-500/10 border-yellow-500/20 text-yellow-600",
    low: "bg-emerald-500/10 border-emerald-500/20 text-emerald-600",
  }

  return (
    <div className={`rounded-lg p-3 border flex gap-3 ${severityColors[severity]}`}>
      <Icon className="w-5 h-5 flex-shrink-0 mt-0.5" />
      <div>
        <p className="font-semibold text-sm">{title}</p>
        <p className="text-xs opacity-80 mt-1">{description}</p>
      </div>
    </div>
  )
}
