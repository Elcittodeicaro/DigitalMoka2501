'use client'

import { useState } from 'react'
import Image from 'next/image'
import { toast } from 'sonner'
import {
  Mic,
  Coffee,
  Users,
  Sparkles,
  Play,
  Mail,
  ExternalLink,
  ChevronRight,
  Database,
  Shield,
  Cpu,
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
  const [email, setEmail] = useState('')
  const [isSubscribing, setIsSubscribing] = useState(false)

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubscribing(true)

    try {
      // TODO: Integrare con Supabase
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast.success('Grazie per esserti iscritto alla newsletter!')
      setEmail('')
    } catch (error) {
      toast.error("Errore durante l'iscrizione. Riprova.")
    } finally {
      setIsSubscribing(false)
    }
  }

  const features = [
    {
      icon: Database,
      title: 'Raw Data',
      description:
        'Informazioni verificate e fonti attendibili. La tecnologia spiegata con dati reali.',
    },
    {
      icon: Shield,
      title: 'Firewall',
      description:
        'Filtriamo la complessità per te. Solo contenuti accessibili e comprensibili.',
    },
    {
      icon: Cpu,
      title: 'Algorithm',
      description:
        'Il nostro metodo: semplificare senza banalizzare. Qualità premium brew.',
    },
  }

  const latestEpisodes = [
    {
      id: 1,
      title: 'Benvenuti a Digital Moka',
      description:
        'Nel primo episodio vi presentiamo il podcast e cosa vi aspetta nelle prossime puntate.',
      duration: '30 min',
      season: 1,
      episode: 1,
      type: 'OUTPUT',
    },
    {
      id: 2,
      title: 'Intelligenza Artificiale: Opportunità o Minaccia?',
      description:
        "Esploriamo il mondo dell'AI e come sta cambiando il nostro modo di vivere e lavorare.",
      duration: '45 min',
      season: 1,
      episode: 2,
      type: 'FIREWALL',
    },
    {
      id: 3,
      title: 'Smartphone: Come Usarli in Modo Consapevole',
      description:
        'Consigli pratici per gestire il tempo sullo smartphone e migliorare il benessere digitale.',
      duration: '35 min',
      season: 1,
      episode: 3,
      type: 'RAW DATA',
    },
  ]

  const platforms = [
    { name: 'Spotify', url: '#' },
    { name: 'Apple Podcasts', url: '#' },
    { name: 'YouTube', url: '#' },
    { name: 'Google Podcasts', url: '#' },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header con Blueprint Grid */}
      <header className="sticky top-0 z-50 border-b border-blueprint-medium/30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="blueprint-grid absolute inset-0 opacity-30" />
        <div className="container relative flex h-16 max-w-screen-2xl items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 rounded border-2 border-blueprint-medium/50">
              <Image
                src="/logo.png"
                alt="Digital Moka Logo"
                fill
                className="object-contain p-1"
              />
            </div>
            <div>
              <h1 className="font-bold text-lg font-mono tracking-wider">
                DIGITAL MOKA
              </h1>
              <p className="text-xs text-muted-foreground font-mono">
                REV 1.2 | PROJECT: DN-2024-001
              </p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#episodi"
              className="text-sm font-medium font-mono hover:text-blueprint-light transition-colors"
            >
              EPISODI
            </a>
            <a
              href="#about"
              className="text-sm font-medium font-mono hover:text-blueprint-light transition-colors"
            >
              SPECS
            </a>
            <a
              href="#newsletter"
              className="text-sm font-medium font-mono hover:text-blueprint-light transition-colors"
            >
              API
            </a>
            <ThemeToggle />
          </nav>
          <div className="md:hidden">
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container max-w-screen-2xl">
        {/* Hero Section con Blueprint Background */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="blueprint-grid-large absolute inset-0 opacity-20" />
          <div className="relative grid gap-12 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded border border-blueprint-medium/50 bg-blueprint-dark/10 px-4 py-1.5 text-sm font-mono">
                <Mic className="h-4 w-4" />
                <span>PODCAST | TARGET: 40+</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-mono">
                <span className="text-blueprint-dark dark:text-blueprint-light">
                  DIGITAL MOKA
                </span>
                <br />
                <span className="text-2xl md:text-3xl text-muted-foreground mt-2 block">
                  Il tuo caffè quotidiano con la tecnologia
                </span>
              </h1>
              <div className="border-l-4 border-blueprint-medium pl-4">
                <p className="text-lg text-muted-foreground">
                  <span className="font-mono font-bold">OUTPUT:</span> Processed
                  & data as clear (135 ML)
                  <br />
                  <span className="font-mono font-bold">QUALITY:</span> Premium
                  brew
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="gap-2 font-mono bg-blueprint-dark hover:bg-blueprint-medium dark:bg-blueprint-light dark:hover:bg-blueprint-medium"
                >
                  <Play className="h-5 w-5" />
                  PLAY NOW
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 font-mono border-blueprint-medium/50"
                >
                  READ SPECS
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                {platforms.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.url}
                    className="text-xs font-mono text-muted-foreground hover:text-blueprint-light transition-colors flex items-center gap-1 border border-blueprint-medium/30 px-3 py-1 rounded"
                  >
                    {platform.name}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded border-2 border-blueprint-medium/50 bg-blueprint-dark/5 dark:bg-blueprint-dark/20 p-8 blueprint-grid">
                <Image
                  src="/logo-blueprint.jpg"
                  alt="Digital Moka Blueprint"
                  width={600}
                  height={600}
                  className="w-full h-full object-contain rounded"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-blueprint-dark dark:bg-blueprint-light text-white dark:text-blueprint-dark px-4 py-2 rounded font-mono text-xs font-bold">
                REV 1.2
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - Technical Style */}
        <section className="py-20 border-t border-blueprint-medium/30">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight font-mono">
              SYSTEM ARCHITECTURE
            </h2>
            <p className="mt-2 text-muted-foreground font-mono text-sm">
              ENGINEERED BY: DIGITAL MOKA LABS
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <Card
                  key={feature.title}
                  className="hover:shadow-lg transition-shadow border-blueprint-medium/30 bg-card/50 backdrop-blur"
                >
                  <CardHeader>
                    <div className="mb-2 h-12 w-12 rounded border-2 border-blueprint-medium/50 bg-blueprint-dark/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-blueprint-dark dark:text-blueprint-light" />
                    </div>
                    <CardTitle className="font-mono">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Latest Episodes Section */}
        <section id="episodi" className="py-20 border-t border-blueprint-medium/30">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight font-mono">
              LATEST RELEASES
            </h2>
            <p className="mt-2 text-muted-foreground font-mono text-sm">
              PROCESSED DATA | READY FOR CONSUMPTION
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {latestEpisodes.map((episode) => (
              <Card
                key={episode.id}
                className="hover:shadow-lg transition-shadow border-blueprint-medium/30 bg-card/50 backdrop-blur"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-medium text-blueprint-dark dark:text-blueprint-light border border-blueprint-medium/50 px-2 py-1 rounded">
                      S{episode.season}E{episode.episode}
                    </span>
                    <span className="text-xs font-mono font-medium text-muted-foreground">
                      {episode.duration}
                    </span>
                  </div>
                  <div className="text-xs font-mono text-muted-foreground mb-2">
                    TYPE: {episode.type}
                  </div>
                  <CardTitle className="text-xl">{episode.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {episode.description}
                  </CardDescription>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full gap-2 font-mono border-blueprint-medium/50"
                  >
                    <Play className="h-4 w-4" />
                    PLAY
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button
              variant="outline"
              size="lg"
              className="font-mono border-blueprint-medium/50"
            >
              VIEW ALL EPISODES
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </section>

        {/* Newsletter Section - API Style */}
        <section id="newsletter" className="py-20 border-t border-blueprint-medium/30">
          <Card className="max-w-2xl mx-auto border-blueprint-medium/30 bg-card/50 backdrop-blur">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 h-12 w-12 rounded border-2 border-blueprint-medium/50 bg-blueprint-dark/10 flex items-center justify-center">
                <Mail className="h-6 w-6 text-blueprint-dark dark:text-blueprint-light" />
              </div>
              <CardTitle className="text-2xl font-mono">
                API SUBSCRIPTION
              </CardTitle>
              <CardDescription className="font-mono text-sm">
                ENDPOINT: /newsletter/subscribe
                <br />
                METHOD: POST | RESPONSE: 200 OK
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="your.email@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 rounded border border-blueprint-medium/50 bg-background px-4 py-2 text-sm font-mono ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blueprint-medium focus-visible:ring-offset-2"
                  />
                  <Button
                    type="submit"
                    disabled={isSubscribing}
                    className="font-mono bg-blueprint-dark hover:bg-blueprint-medium dark:bg-blueprint-light dark:hover:bg-blueprint-medium"
                  >
                    {isSubscribing ? 'SENDING...' : 'SUBSCRIBE'}
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground text-center font-mono">
                  PRIVACY: COMPLIANT | SPAM: ZERO | QUALITY: PREMIUM
                </p>
              </form>
            </CardContent>
          </Card>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 border-t border-blueprint-medium/30">
          <div className="max-w-3xl mx-auto">
            <div className="border-l-4 border-blueprint-medium pl-6 space-y-6">
              <h2 className="text-3xl font-bold tracking-tight font-mono">
                PROJECT SPECIFICATIONS
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <span className="font-mono font-bold text-foreground">
                    MATERIAL:
                  </span>{' '}
                  Contenuti verificati e fonti attendibili
                </p>
                <p>
                  <span className="font-mono font-bold text-foreground">
                    QUALITY:
                  </span>{' '}
                  Premium brew - La tecnologia spiegata senza tecnicismi
                </p>
                <p>
                  <span className="font-mono font-bold text-foreground">
                    CAPACITY:
                  </span>{' '}
                  6.5 FL OZ (193 ML) - Episodi da 30-45 minuti
                </p>
                <p>
                  <span className="font-mono font-bold text-foreground">
                    TARGET:
                  </span>{' '}
                  Persone 40+ che vogliono capire l'impatto della tecnologia
                </p>
                <p>
                  <span className="font-mono font-bold text-foreground">
                    ENGINEERED BY:
                  </span>{' '}
                  Digital Moka Labs
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Technical Style */}
      <footer className="border-t border-blueprint-medium/30 bg-background/50 py-12 mt-20">
        <div className="blueprint-grid absolute inset-0 opacity-10" />
        <div className="container max-w-screen-2xl relative">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Coffee className="h-5 w-5 text-blueprint-dark dark:text-blueprint-light" />
                <span className="font-bold font-mono">DIGITAL MOKA</span>
              </div>
              <p className="text-sm text-muted-foreground font-mono">
                REV 1.2 | DN-2024-001
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3 font-mono">NAVIGATION</h3>
              <ul className="space-y-2 text-sm text-muted-foreground font-mono">
                <li>
                  <a
                    href="#episodi"
                    className="hover:text-blueprint-light transition-colors"
                  >
                    Episodes
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blueprint-light transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="hover:text-blueprint-light transition-colors"
                  >
                    Specs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 font-mono">PLATFORMS</h3>
              <ul className="space-y-2 text-sm text-muted-foreground font-mono">
                <li>
                  <a
                    href="#"
                    className="hover:text-blueprint-light transition-colors"
                  >
                    Spotify
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blueprint-light transition-colors"
                  >
                    Apple Podcasts
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blueprint-light transition-colors"
                  >
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 font-mono">CONTACT</h3>
              <ul className="space-y-2 text-sm text-muted-foreground font-mono">
                <li>
                  <a
                    href="#newsletter"
                    className="hover:text-blueprint-light transition-colors"
                  >
                    Newsletter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blueprint-light transition-colors"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blueprint-light transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-blueprint-medium/30 text-center text-sm text-muted-foreground font-mono">
            <p>© 2024 DIGITAL MOKA | ALL RIGHTS RESERVED | PROJECT: DN-2024-001</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
