import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider, UserButton } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LMS Platform',
  description: 'LMS Platform System',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <UserButton afterSignOutUrl="/" />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
