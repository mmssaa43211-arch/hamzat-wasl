```tsx
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'همزة وصل',
  description: 'منصة محادثات متكاملة تدعم المساعد الثقافي الذكي',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap" rel="stylesheet" />
        <style>{`
          body {
            font-family: 'Cairo', sans-serif;
          }
        `}</style>
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
