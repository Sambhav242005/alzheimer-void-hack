"use client"

import type React from "react"

import { useState } from "react"
import { Save, Bell, Lock, User } from "lucide-react"
import { Sidebar } from "@/components/sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function SettingsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [settings, setSettings] = useState({
    fullName: "Dr. John Smith",
    email: "john@example.com",
    organization: "Healthcare Center",
    notifications: true,
    emailAlerts: true,
    twoFactor: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked, type } = e.target
    setSettings({
      ...settings,
      [name]: type === "checkbox" ? checked : e.target.value,
    })
  }

  const handleSave = () => {
    console.log("Settings saved:", settings)
  }

  return (
    <div className="flex h-screen bg-background">
      <Sidebar open={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      <main className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <div className="flex-1 overflow-auto">
          <div className="p-6 space-y-6 max-w-2xl">
            {/* Header */}
            <div>
              <h1 className="text-3xl font-bold text-foreground">Settings</h1>
              <p className="text-muted-foreground mt-1">Manage your account and preferences</p>
            </div>

            {/* Profile Settings */}
            <Card className="p-6 bg-card border-border space-y-6">
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-accent" />
                <h2 className="text-xl font-semibold text-foreground">Profile</h2>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Full Name</label>
                  <Input
                    type="text"
                    name="fullName"
                    value={settings.fullName}
                    onChange={handleChange}
                    className="bg-background border-border text-foreground"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <Input
                    type="email"
                    name="email"
                    value={settings.email}
                    onChange={handleChange}
                    className="bg-background border-border text-foreground"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Organization</label>
                  <Input
                    type="text"
                    name="organization"
                    value={settings.organization}
                    onChange={handleChange}
                    className="bg-background border-border text-foreground"
                  />
                </div>
              </div>
            </Card>

            {/* Notification Settings */}
            <Card className="p-6 bg-card border-border space-y-6">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-accent" />
                <h2 className="text-xl font-semibold text-foreground">Notifications</h2>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">Push Notifications</p>
                    <p className="text-sm text-muted-foreground">Receive alerts on patient updates</p>
                  </div>
                  <input
                    type="checkbox"
                    name="notifications"
                    checked={settings.notifications}
                    onChange={handleChange}
                    className="w-5 h-5 cursor-pointer"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">Email Alerts</p>
                    <p className="text-sm text-muted-foreground">Send alerts via email</p>
                  </div>
                  <input
                    type="checkbox"
                    name="emailAlerts"
                    checked={settings.emailAlerts}
                    onChange={handleChange}
                    className="w-5 h-5 cursor-pointer"
                  />
                </div>
              </div>
            </Card>

            {/* Security Settings */}
            <Card className="p-6 bg-card border-border space-y-6">
              <div className="flex items-center gap-3">
                <Lock className="w-5 h-5 text-accent" />
                <h2 className="text-xl font-semibold text-foreground">Security</h2>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">Two-Factor Authentication</p>
                    <p className="text-sm text-muted-foreground">Add extra security to your account</p>
                  </div>
                  <input
                    type="checkbox"
                    name="twoFactor"
                    checked={settings.twoFactor}
                    onChange={handleChange}
                    className="w-5 h-5 cursor-pointer"
                  />
                </div>

                <Button variant="outline" className="w-full border-border text-foreground bg-transparent">
                  Change Password
                </Button>
              </div>
            </Card>

            {/* Save Button */}
            <div className="flex justify-end gap-2">
              <Button variant="outline" className="border-border bg-transparent">
                Cancel
              </Button>
              <Button onClick={handleSave} className="bg-accent hover:bg-accent/90 text-white gap-2">
                <Save className="w-4 h-4" />
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
