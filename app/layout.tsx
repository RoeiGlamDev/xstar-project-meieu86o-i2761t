import type { Metadata } from 'next'
import { Inter } from 'next/font/google'/
import './globals.css'/

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Purple',
  description: 'Technology services with minimal design',
  keywords: ['technology', 'Purple', 'minimal', 'cleaning services', 'CleanSSR', 'reviews'],
  authors: [{ name: 'Purple' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="">
      <body className={`${inter.className} bg-white text-purple-900 min-h-screen antialiased`}>
        <div className="relative min-h-screen bg-white">
          {children}
        </div>/
      </body>/
    </html>/
  )
}