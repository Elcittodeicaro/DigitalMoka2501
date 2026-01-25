'use client'

import { useState } from 'react'
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
      toast.error('Errore durante l\'iscrizione. Riprova.')
    } finally {
      setIsSubscribing(false)
    }
  }

  const features = [
    {
      icon: Coffee,
      title: 'Semplice e Accessibile',
      description:
        'La tecnologia spiegata in modo chiaro, senza tecnicismi. Un sorso alla volta.',
    },
    {
      icon: Users,
      title: 'Per i 40+',
      description:
        'Contenuti pensati per chi vuole capire l\'impatto della tecnologia sulla vita quotidiana.',
    },
    {
      icon: Sparkles,
      title: 'Episodi Settimanali',
      description:
        'Ogni settimana un nuovo episodio su temi attuali e rilevanti.',
    },
  ]

  const latestEpisodes = [
    {
      id: 1,
      title: 'Benvenuti a Digital Moka',
      description:
        'Nel primo episodio vi presentiamo il podcast e cosa vi aspetta nelle prossime puntate.',
      duration: '30 min',
      season: 1,
      episode: 1,
    },
    {
      id: 2,
      title: 'Intelligenza Artificiale: Opportunità o Minaccia?',
      description:
        'Esploriamo il mondo dell\'AI e come sta cambiando il nostro modo di vivere e lavorare.',
      duration: '45 min',
      season: 1,
      episode: 2,
    },
    {
      id: 3,
      title: 'Smartphone: Come Usarli in Modo Consapevole',
      description:
        'Consigli pratici per gestire il tempo sullo smartphone e migliorare il benessere digitale.',
      duration: '35 min',
      season: 1,
      episode: 3,
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
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
              <Coffee className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-lg">Digital Moka</h1>
              <p className="text-xs text-muted-foreground">
                La tecnologia spiegata semplice
              </p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#episodi"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Episodi
            </a>
            <a
              href="#about"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Chi Siamo
            </a>
            <a
              href="#newsletter"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Newsletter
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
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-sm">
                <Mic className="h-4 w-4" />
                <span>Podcast per i 40+</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Digital Moka: la tecnologia spiegata semplice,{' '}
                <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
                  un sorso alla volta
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Il podcast che ti aiuta a capire l'impatto della tecnologia sulla
                vita quotidiana. Senza tecnicismi, con esempi pratici e
                consigli utili.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2">
                  <Play className="h-5 w-5" />
                  Ascolta Ora
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  Scopri di Più
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                {platforms.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.url}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                  >
                    {platform.name}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-600/20 flex items-center justify-center">
                <Coffee className="h-32 w-32 text-amber-500" />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 border-t border-border">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">
              Perché Digital Moka?
            </h2>
            <p className="mt-2 text-muted-foreground">
              Un podcast pensato per te
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mb-2 h-12 w-12 rounded-lg bg-gradient-to-br from-amber-500/10 to-orange-600/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-amber-600 dark:text-amber-400" />
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

        {/* Latest Episodes Section */}
        <section id="episodi" className="py-20 border-t border-border">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">
              Ultimi Episodi
            </h2>
            <p className="mt-2 text-muted-foreground">
              Ascolta le nostre puntate più recenti
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {latestEpisodes.map((episode) => (
              <Card key={episode.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-muted-foreground">
                      S{episode.season}E{episode.episode}
                    </span>
                    <span className="text-xs font-medium text-muted-foreground">
                      {episode.duration}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{episode.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {episode.description}
                  </CardDescription>
                  <Button variant="outline" size="sm" className="w-full gap-2">
                    <Play className="h-4 w-4" />
                    Ascolta
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              Vedi Tutti gli Episodi
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </section>

        {/* Newsletter Section */}
        <section id="newsletter" className="py-20 border-t border-border">
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-gradient-to-br from-amber-500/10 to-orange-600/10 flex items-center justify-center">
                <Mail className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              </div>
              <CardTitle className="text-2xl">Iscriviti alla Newsletter</CardTitle>
              <CardDescription>
                Ricevi ogni settimana gli ultimi episodi, articoli e consigli
                direttamente nella tua casella di posta.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="La tua email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 rounded-md border border-input bg-background px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                  <Button type="submit" disabled={isSubscribing}>
                    {isSubscribing ? 'Iscrizione...' : 'Iscriviti'}
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground text-center">
                  Rispettiamo la tua privacy. Niente spam, solo contenuti di
                  qualità.
                </p>
              </form>
            </CardContent>
          </Card>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 border-t border-border">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter">Chi Siamo</h2>
            <p className="text-lg text-muted-foreground">
              Digital Moka è nato dalla passione di spiegare la tecnologia in modo
              semplice e accessibile. Ci rivolgiamo a persone over 40 che vogliono
              comprendere come la tecnologia sta cambiando il mondo, senza
              perdersi in tecnicismi.
            </p>
            <p className="text-lg text-muted-foreground">
              Ogni episodio è un "sorso" di conoscenza: breve, chiaro e pratico.
              Come un buon caffè, vogliamo darti l'energia per affrontare il
              digitale con consapevolezza.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background/50 py-12 mt-20">
        <div className="container max-w-screen-2xl">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Coffee className="h-5 w-5 text-amber-600" />
                <span className="font-bold">Digital Moka</span>
              </div>
              <p className="text-sm text-muted-foreground">
                La tecnologia spiegata semplice, un sorso alla volta.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Podcast</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#episodi" className="hover:text-foreground transition-colors">
                    Episodi
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-foreground transition-colors">
                    Chi Siamo
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Seguici</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Spotify
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Apple Podcasts
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Contatti</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#newsletter" className="hover:text-foreground transition-colors">
                    Newsletter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Contattaci
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2024 Digital Moka. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
