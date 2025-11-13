"use client"

import { Card } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

export function HistoricalChart() {
  const data = [
    { date: "Jan 2024", riskScore: 45, cognitiveScore: 28, mmse: 28 },
    { date: "Feb 2024", riskScore: 52, cognitiveScore: 27, mmse: 27 },
    { date: "Mar 2024", riskScore: 58, cognitiveScore: 26, mmse: 25 },
    { date: "Apr 2024", riskScore: 65, cognitiveScore: 25, mmse: 24 },
    { date: "May 2024", riskScore: 72, cognitiveScore: 23, mmse: 22 },
    { date: "Jun 2024", riskScore: 78, cognitiveScore: 22, mmse: 22 },
  ]

  return (
    <div className="space-y-6">
      <Card className="bg-card border-border p-6">
        <h2 className="text-xl font-bold text-foreground mb-4">6-Month Progression Tracking</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="date" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#0f1419",
                border: "1px solid #1e293b",
                borderRadius: "8px",
              }}
              labelStyle={{ color: "#94a3b8" }}
            />
            <Legend />
            <Line type="monotone" dataKey="riskScore" stroke="#ef4444" strokeWidth={2} name="Risk Score (%)" />
            <Line type="monotone" dataKey="cognitiveScore" stroke="#f59e0b" strokeWidth={2} name="Cognitive Score" />
            <Line type="monotone" dataKey="mmse" stroke="#3b82f6" strokeWidth={2} name="MMSE Score" />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { title: "Risk Increase", value: "+33%", period: "Last 6 months", trend: "negative" },
          { title: "Cognitive Decline", value: "-6 pts", period: "Last 6 months", trend: "negative" },
          { title: "Projection", value: "92% risk", period: "In 6 months", trend: "warning" },
        ].map((metric) => (
          <Card key={metric.title} className="bg-card border-border p-4">
            <p className="text-xs text-muted-foreground mb-1">{metric.title}</p>
            <p
              className={`text-2xl font-bold mb-1 ${
                metric.trend === "negative"
                  ? "text-red-500"
                  : metric.trend === "warning"
                    ? "text-yellow-500"
                    : "text-emerald-500"
              }`}
            >
              {metric.value}
            </p>
            <p className="text-xs text-muted-foreground">{metric.period}</p>
          </Card>
        ))}
      </div>

      <Card className="bg-card border-border p-6">
        <h3 className="font-semibold text-foreground mb-4">Milestone Events</h3>
        <div className="space-y-4">
          {[
            { date: "Jun 2024", event: "High-risk diagnosis confirmed", severity: "high" },
            { date: "May 2024", event: "MRI shows hippocampal atrophy", severity: "high" },
            { date: "Apr 2024", event: "Medication adjustment initiated", severity: "moderate" },
            { date: "Mar 2024", event: "First cognitive assessment", severity: "low" },
          ].map((event) => (
            <div key={event.date} className="flex gap-4 pb-4 border-b border-border last:border-0">
              <div
                className={`w-2 h-8 rounded-full flex-shrink-0 mt-1 ${
                  event.severity === "high"
                    ? "bg-red-500"
                    : event.severity === "moderate"
                      ? "bg-yellow-500"
                      : "bg-emerald-500"
                }`}
              ></div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-foreground">{event.event}</p>
                <p className="text-xs text-muted-foreground">{event.date}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
