import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  description: 'Welcome to my portfolio page!',
  title: 'Hunter Lindsay',
  viewport: 'width=device-width, initial-scale=1, minimum-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-950 text-slate-100 mx-auto p-4 background sm: phone`}>{children}</body>
    </html>
  )
}
