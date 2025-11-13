"use client"

import Link from "next/link"
import { Brain, BarChart3, Shield, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold">MedGemma</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/register">
              <Button className="bg-accent hover:bg-accent/90 text-white">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-balance">AI-Powered Alzheimer's Detection & Tracking</h1>
          <p className="text-xl text-muted-foreground text-balance">
            Advanced MedGemma medical imaging analysis combined with cognitive assessments for early detection and
            continuous monitoring of Alzheimer's disease.
          </p>
          <div className="flex gap-4 justify-center pt-6">
            <Link href="/register">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white gap-2">
                Start Free Trial <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Powerful Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-background rounded-lg border border-border space-y-4">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold">MedGemma AI Analysis</h3>
              <p className="text-muted-foreground">
                Advanced medical imaging analysis using MedGemma 4B/27B models for accurate brain region analysis.
              </p>
            </div>
            <div className="p-6 bg-background rounded-lg border border-border space-y-4">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold">Cognitive Assessment</h3>
              <p className="text-muted-foreground">
                Comprehensive cognitive tests including MMSE, MoCA, and Mini-Cog with continuous tracking.
              </p>
            </div>
            <div className="p-6 bg-background rounded-lg border border-border space-y-4">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold">HIPAA Compliant</h3>
              <p className="text-muted-foreground">
                Enterprise-grade security with data encryption and patient privacy protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-accent">1000+</p>
            <p className="text-muted-foreground mt-2">Patients Monitored</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-accent">95%</p>
            <p className="text-muted-foreground mt-2">Detection Accuracy</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-accent">24/7</p>
            <p className="text-muted-foreground mt-2">Monitoring Support</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-card/50 rounded-lg m-6 text-center space-y-6">
        <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Join healthcare providers worldwide using MedGemma for early Alzheimer's detection and patient care.
        </p>
        <Link href="/register">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
            Create Your Account
          </Button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border text-center text-muted-foreground">
        <p>&copy; 2025 MedGemma. All rights reserved.</p>
      </footer>
    </div>
  )
}
