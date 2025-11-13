"use client"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { Brain, Users, FileText, Settings, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SidebarProps {
  open: boolean
  onToggle: () => void
}

export function Sidebar({ open, onToggle }: SidebarProps) {
  const router = useRouter()
  const pathname = usePathname()

  const menuItems = [
    { icon: Brain, label: "Dashboard", href: "/dashboard" },
    { icon: Users, label: "Patients", href: "/patients" },
    { icon: FileText, label: "Reports", href: "/reports" },
    { icon: Settings, label: "Settings", href: "/settings" },
  ]

  const handleSignOut = () => {
    router.push("/")
  }

  return (
    <>
      <aside
        className={`${
          open ? "w-64" : "w-0"
        } bg-sidebar border-r border-border transition-all duration-300 ease-in-out flex flex-col overflow-hidden`}
      >
        <div className="p-6 border-b border-border">
          <Link href="/dashboard" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">MedGemma</h1>
              <p className="text-xs text-muted-foreground">Alzheimer's AI</p>
            </div>
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive ? "bg-accent text-white" : "text-foreground hover:bg-accent hover:text-white"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t border-border space-y-2">
          <Button
            onClick={handleSignOut}
            variant="ghost"
            className="w-full justify-start gap-2 text-foreground hover:bg-accent hover:text-white"
          >
            <LogOut className="w-5 h-5" />
            <span>Sign Out</span>
          </Button>
        </div>
      </aside>
    </>
  )
}
