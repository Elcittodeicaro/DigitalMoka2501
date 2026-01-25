import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '@/app/globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Digital Moka - La tecnologia spiegata semplice, un sorso alla volta',
  description:
    'Il podcast per i 40+ che vogliono capire l\'impatto della tecnologia sulla vita quotidiana. Episodi settimanali, semplici e pratici.',
  keywords: [
    'podcast',
    'tecnologia',
    'digital',
    'over 40',
    'intelligenza artificiale',
    'smartphone',
    'digitale',
    'tech',
    'italiano',
  ],
  authors: [{ name: 'Digital Moka Team' }],
  creator: 'Digital Moka',
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: 'https://digitalmoka.com',
    siteName: 'Digital Moka',
    title: 'Digital Moka - La tecnologia spiegata semplice',
    description:
      'Il podcast per i 40+ che vogliono capire l\'impatto della tecnologia sulla vita quotidiana.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Digital Moka Podcast',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Moka - La tecnologia spiegata semplice',
    description:
      'Il podcast per i 40+ che vogliono capire l\'impatto della tecnologia sulla vita quotidiana.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" suppressHydrationWarning>
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
