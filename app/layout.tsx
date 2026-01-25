import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '@/app/globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next.js 14 Vercel App',
  description:
    'Modern Next.js 14 application with TypeScript, Tailwind CSS, shadcn/ui, and Vercel deployment',
  keywords: [
    'Next.js',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'shadcn/ui',
    'Vercel',
  ],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://example.com',
    siteName: 'Next.js 14 Vercel App',
    title: 'Next.js 14 Vercel App',
    description:
      'Modern Next.js 14 application with TypeScript, Tailwind CSS, shadcn/ui, and Vercel deployment',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js 14 Vercel App',
    description:
      'Modern Next.js 14 application with TypeScript, Tailwind CSS, shadcn/ui, and Vercel deployment',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
