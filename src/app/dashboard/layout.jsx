"use client"
// import "@/css/style.css"
import { useState } from "react"

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <html>
      <body suppressContentEditableWarning={true}>
        {children}
      </body>
    </html>
  )
}