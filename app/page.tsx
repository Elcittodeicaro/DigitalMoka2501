'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import {
  ArrowRight,
  Check,
  Code2,
  Palette,
  Zap,
  Github,
  ExternalLink,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ThemeToggle } from '@/components/theme-toggle'

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)

  const handleGetStarted = async () => {
    setIsLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast.success('Welcome! You are ready to start building amazing apps.')
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const features = [
    {
      icon: Code2,
      title: 'Next.js 14',
      description: 'Latest Next.js with App Router and Server Components',
    },
    {
      icon: Palette,
      title: 'Tailwind CSS',
      description: 'Utility-first CSS framework for rapid UI development',
    },
    {
      icon: Zap,
      title: 'shadcn/ui',
      description: 'Beautiful, accessible React components built with Radix UI',
    },
  ]

  const technologies = [
    { name: 'TypeScript', status: 'Configured' },
    { name: 'next-themes', status: 'Dark/Light Mode' },
    { name: 'sonner', status: 'Toast Notifications' },
    { name: 'lucide-react', status: 'Icons' },
    { name: 'React Hook Form', status: 'Form Handling' },
    { name: 'Zod', status: 'Schema Validation' },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold">
              N
            </div>
            <span className="font-semibold">Next.js Vercel</span>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="container max-w-screen-2xl py-12 md:py-24">
        {/* Hero Section */}
        <section className="space-y-8 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Build Modern Web Apps with{' '}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Next.js 14
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              A production-ready template with TypeScript, Tailwind CSS, shadcn/ui,
              and all the tools you need to build amazing applications.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              onClick={handleGetStarted}
              disabled={isLoading}
              className="gap-2"
            >
              {isLoading ? 'Loading...' : 'Get Started'}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Github className="h-4 w-4" />
              View on GitHub
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="mt-20 space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter">
              Everything You Need
            </h2>
            <p className="mt-2 text-muted-foreground">
              Pre-configured with modern tools and best practices
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mb-2 h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Technologies Section */}
        <section className="mt-20 space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter">
              Technologies Included
            </h2>
            <p className="mt-2 text-muted-foreground">
              A complete stack for modern web development
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {technologies.map((tech) => (
              <Card key={tech.name} className="flex items-center gap-4 p-6">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                <div>
                  <p className="font-semibold">{tech.name}</p>
                  <p className="text-sm text-muted-foreground">{tech.status}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20 rounded-lg border border-border bg-card p-8 text-center md:p-12">
          <h2 className="text-3xl font-bold tracking-tighter">
            Ready to Deploy?
          </h2>
          <p className="mt-4 text-muted-foreground">
            This template is optimized for Vercel. Deploy with one click and start
            building immediately.
          </p>
          <Button size="lg" className="mt-6 gap-2">
            Deploy to Vercel
            <ExternalLink className="h-4 w-4" />
          </Button>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background/50 py-8">
        <div className="container max-w-screen-2xl">
          <div className="flex flex-col gap-8 md:flex-row md:justify-between">
            <div>
              <p className="text-sm text-muted-foreground">
                © 2024 Next.js Vercel App. All rights reserved.
              </p>
            </div>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
