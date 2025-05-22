import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Thanakrit Sittisorn (DoDo) | Portfolio",
  description:
    "Portfolio ของ Thanakrit Sittisorn (DoDo) - FiveM Script Developer, C++, C#, Lua, React, Next.js, Node.js และ MongoDB",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="th" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
