'use client'

import { useState } from 'react'
import Image from 'next/image'
import { toast } from 'sonner'
import {
  Mic,
  Coffee,
  Play,
  Mail,
  ExternalLink,
  ChevronRight,
  Database,
  Shield,
  Cpu,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
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
        'Filtriamo la complessita per te. Solo contenuti accessibili e comprensibili.',
    },
    {
      icon: Cpu,
      title: 'Algorithm',
      description:
        'Il nostro metodo: semplificare senza banalizzare. Qualita premium brew.',
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
      type: 'OUTPUT',
    },
    {
      id: 2,
      title: 'Intelligenza Artificiale: Mito o Realta?',
      description:
        "Scopriamo insieme cosa significa davvero AI e come sta cambiando la nostra vita quotidiana.",
      duration: '45 min',
      season: 1,
      episode: 2,
      type: 'FIREWALL',
    },
    {
      id: 3,
      title: 'Smartphone: Amico o Nemico?',
      description:
        'Analizziamo il rapporto con i nostri dispositivi e come usarli in modo consapevole.',
      duration: '40 min',
      season: 1,
      episode: 3,
      type: 'RAW DATA',
    },
  ]

  const platforms = [
    { name: 'Spotify', url: 'https://open.spotify.com/show/0Yz5hnpYtlmHKQPwpgEqKh?si=5d6f6c0b4a5d4c0a' },
    { name: 'Apple Podcasts', url: 'https://podcasts.apple.com/us/podcast/digital-moka/id1791140131' },
  ]

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/profile.php?id=61571757382734', color: '#1877F2' },
    { name: 'X (Twitter)', icon: Twitter, url: 'https://x.com/DigitalMoka', color: '#000000' },
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/digital.moka/', color: '#E4405F' },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header con Logo Principale */}
      <header className="sticky top-0 z-50 border-b border-blueprint-medium/30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="blueprint-grid absolute inset-0 opacity-30" />
        <div className="container relative flex h-20 max-w-screen-2xl items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative h-16 w-16 rounded border-2 border-blueprint-medium/50 bg-background p-1">
              <Image
                src="/logo.png"
                alt="Digital Moka Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
              <h1 className="font-bold text-xl font-mono tracking-wider">
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
              href="#newsletter"
              className="text-sm font-medium font-mono hover:text-blueprint-light transition-colors"
            >
              NEWSLETTER
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
        {/* Hero Section con Tagline */}
        <section className="relative py-12 md:py-20 overflow-hidden">
          <div className="blueprint-grid-large absolute inset-0 opacity-20" />
          <div className="relative space-y-12">
            {/* Testo Hero */}
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 rounded border border-blueprint-medium/50 bg-blueprint-dark/10 px-4 py-1.5 text-sm font-mono">
                <Mic className="h-4 w-4" />
                <span>PODCAST | TECNOLOGIA QUOTIDIANA</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-mono">
                <span className="text-blueprint-dark dark:text-blueprint-light">
                  DIGITAL MOKA
                </span>
              </h1>
              {/* Tagline Principale */}
              <p className="text-2xl md:text-3xl text-muted-foreground font-light italic">
                La tecnologia spiegata semplice, un sorso alla volta
              </p>
              <div className="border-l-4 border-blueprint-medium pl-4 max-w-2xl mx-auto text-left">
                <p className="text-lg text-muted-foreground">
                  <span className="font-mono font-bold">OUTPUT:</span> Processed
                  & data as clear (135 ML)
                  <br />
                  <span className="font-mono font-bold">QUALITY:</span> Premium
                  brew
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                  className="gap-2 font-mono border-blueprint-medium/50 hover:bg-blueprint-dark/10"
                  onClick={() => document.getElementById('perche')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  SCOPRI DI PIU
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Blueprint Image Full Width */}
            <div className="relative w-full h-[600px] md:h-[800px] -mx-4 md:mx-0">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background z-10" />
              <Image
                src="/logo-blueprint.jpg"
                alt="Digital Moka Blueprint Technical Drawing"
                fill
                className="object-contain object-center"
                priority
              />
            </div>
          </div>
        </section>

        {/* Sezione "Perche Digital Moka" */}
        <section id="perche" className="py-20 border-t border-blueprint-medium/30">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tight font-mono mb-4">
                PERCHE DIGITAL MOKA
              </h2>
            </div>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Digital Moka nasce da una semplice osservazione: la tecnologia
                sta cambiando rapidamente il nostro modo di vivere, lavorare e
                comunicare, ma spesso viene raccontata in modo troppo tecnico o
                superficiale.
              </p>
              <p>
                Volevamo creare uno spazio dove chiunque, indipendentemente dal
                proprio background tecnico, potesse capire davvero cosa sta
                succedendo nel mondo digitale. Non servono lauree in
                informatica: serve solo curiosita e voglia di capire.
              </p>
              <p className="border-l-4 border-blueprint-medium pl-4 italic">
                Come una moka prepara il caffe con cura e metodo, noi
                prepariamo contenuti verificati, accessibili e pratici. Un
                sorso alla volta, per rendere la tecnologia piu vicina a tutti.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 border-t border-blueprint-medium/30">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight font-mono mb-4">
              SYSTEM COMPONENTS
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I tre pilastri del nostro metodo per rendere la tecnologia
              accessibile a tutti
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-blueprint-medium/30 bg-card/50 backdrop-blur"
              >
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded border-2 border-blueprint-medium/50 bg-blueprint-dark/10">
                    <feature.icon className="h-6 w-6 text-blueprint-dark dark:text-blueprint-light" />
                  </div>
                  <CardTitle className="font-mono">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Latest Episodes */}
        <section
          id="episodi"
          className="py-20 border-t border-blueprint-medium/30"
        >
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight font-mono mb-4">
              LATEST EPISODES
            </h2>
            <p className="text-muted-foreground">
              Gli ultimi episodi del podcast Digital Moka
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {latestEpisodes.map((episode) => (
              <Card
                key={episode.id}
                className="border-blueprint-medium/30 bg-card/50 backdrop-blur hover:border-blueprint-medium/60 transition-colors"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-flex items-center rounded bg-blueprint-dark/20 px-2.5 py-0.5 text-xs font-mono font-semibold text-blueprint-dark dark:text-blueprint-light border border-blueprint-medium/30">
                      S{episode.season}E{episode.episode}
                    </span>
                    <span className="text-xs font-mono text-muted-foreground">
                      {episode.type}
                    </span>
                  </div>
                  <CardTitle className="font-mono text-lg">
                    {episode.title}
                  </CardTitle>
                  <CardDescription>{episode.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground font-mono">
                      {episode.duration}
                    </span>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="gap-2 font-mono"
                    >
                      <Play className="h-4 w-4" />
                      PLAY
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section
          id="newsletter"
          className="py-20 border-t border-blueprint-medium/30"
        >
          <Card className="max-w-2xl mx-auto border-blueprint-medium/30 bg-card/50 backdrop-blur">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded border-2 border-blueprint-medium/50 bg-blueprint-dark/10">
                <Mail className="h-6 w-6 text-blueprint-dark dark:text-blueprint-light" />
              </div>
              <CardTitle className="text-2xl font-mono">
                NEWSLETTER
              </CardTitle>
              <CardDescription>
                Ricevi gli aggiornamenti su nuovi episodi, notizie tech e
                contenuti esclusivi direttamente nella tua casella di posta
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="tua.email@esempio.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 rounded border border-blueprint-medium/50 bg-background px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blueprint-medium focus-visible:ring-offset-2"
                  />
                  <Button
                    type="submit"
                    disabled={isSubscribing}
                    className="bg-blueprint-dark hover:bg-blueprint-medium dark:bg-blueprint-light dark:hover:bg-blueprint-medium"
                  >
                    {isSubscribing ? 'Invio...' : 'Iscriviti'}
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground text-center">
                  Niente spam, solo contenuti di qualita. Cancellazione in
                  qualsiasi momento.
                </p>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer con Social Links e LinkedIn */}
      <footer className="border-t border-blueprint-medium/30 bg-background/50 py-12 mt-20">
        <div className="blueprint-grid absolute inset-0 opacity-10" />
        <div className="container max-w-screen-2xl relative space-y-12">
          {/* Social Links */}
          <div className="text-center space-y-6">
            <h3 className="font-semibold text-lg font-mono">SEGUICI</h3>
            <div className="flex justify-center gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 w-12 items-center justify-center rounded border-2 border-blueprint-medium/50 bg-background hover:bg-blueprint-dark/10 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5 text-blueprint-dark dark:text-blueprint-light" />
                </a>
              ))}
            </div>
          </div>

          {/* LinkedIn Personale */}
          <div className="max-w-md mx-auto">
            <Card className="border-blueprint-medium/30 bg-card/50 backdrop-blur">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 rounded-full border-2 border-blueprint-medium/50 overflow-hidden bg-blueprint-dark/10">
                    <Image
                      src="/simone-avatar.jpg"
                      alt="Simone Araceli"
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-mono font-semibold">Creato da Simone</p>
                    <p className="text-sm text-muted-foreground mb-2">
                      Host & Creator di Digital Moka
                    </p>
                    <a
                      href="https://www.linkedin.com/in/simone-araceli-b3a03b3b/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-mono text-blueprint-dark dark:text-blueprint-light hover:underline"
                    >
                      <Linkedin className="h-4 w-4" />
                      Connettiti su LinkedIn
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Footer Grid */}
          <div className="grid gap-8 md:grid-cols-4 pt-8 border-t border-blueprint-medium/30">
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
                    Episodi
                  </a>
                </li>
                <li>
                  <a
                    href="#perche"
                    className="hover:text-blueprint-light transition-colors"
                  >
                    Perche Digital Moka
                  </a>
                </li>
                <li>
                  <a
                    href="#newsletter"
                    className="hover:text-blueprint-light transition-colors"
                  >
                    Newsletter
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 font-mono">PLATFORMS</h3>
              <ul className="space-y-2 text-sm text-muted-foreground font-mono">
                {platforms.map((platform) => (
                  <li key={platform.name}>
                    <a
                      href={platform.url}
                      className="hover:text-blueprint-light transition-colors"
                    >
                      {platform.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 font-mono">LEGAL</h3>
              <ul className="space-y-2 text-sm text-muted-foreground font-mono">
                <li>
                  <a
                    href="#"
                    className="hover:text-blueprint-light transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blueprint-light transition-colors"
                  >
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@digitalmoka.com"
                    className="hover:text-blueprint-light transition-colors"
                  >
                    Contatti
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-blueprint-medium/30 text-center">
            <p className="text-sm text-muted-foreground font-mono">
              © 2024 Digital Moka Labs. All rights reserved. | Designed with ☕
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
