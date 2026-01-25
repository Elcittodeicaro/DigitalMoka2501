# ☕ Digital Moka - Podcast Website

> La tecnologia spiegata semplice, un sorso alla volta.

Sito web ufficiale del podcast **Digital Moka**, pensato per persone 40+ che vogliono capire l'impatto della tecnologia sulla vita quotidiana.

## 🎯 Caratteristiche

- ✅ **Landing Page** moderna e responsive
- ✅ **Elenco Episodi** con player audio integrato
- ✅ **Newsletter** con iscrizione via email
- ✅ **Blog** per articoli e approfondimenti
- ✅ **Dark/Light Mode** per una migliore esperienza utente
- ✅ **SEO Optimized** per massima visibilità
- ✅ **Integrazione Supabase** per database e backend
- ✅ **Deploy automatico su Vercel**

## 🛠️ Stack Tecnologico

| Tecnologia | Utilizzo |
|------------|----------|
| **Next.js 14** | Framework React con App Router |
| **TypeScript** | Type safety e migliore DX |
| **Tailwind CSS** | Styling utility-first |
| **shadcn/ui** | Componenti UI accessibili |
| **Supabase** | Database PostgreSQL e backend |
| **Vercel** | Hosting e deployment |
| **next-themes** | Gestione tema dark/light |
| **sonner** | Toast notifications |
| **lucide-react** | Icone SVG |

## 🚀 Quick Start

### Prerequisiti

- Node.js 18+ (LTS)
- Account Supabase (gratuito)
- Account Vercel (gratuito)

### Installazione

1. **Clona il repository**

```bash
git clone https://github.com/Elcittodeicaro/DigitalMoka2501.git
cd DigitalMoka2501
```

2. **Installa le dipendenze**

```bash
npm install
```

3. **Configura le variabili d'ambiente**

```bash
cp .env.example .env.local
```

Modifica `.env.local` con le tue credenziali Supabase:

```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

4. **Avvia il server di sviluppo**

```bash
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000) 🎉

## 📖 Guida Completa

Per una guida dettagliata su setup Supabase, deploy Vercel e configurazione completa, consulta:

👉 **[SETUP-GUIDE.md](./SETUP-GUIDE.md)**

La guida include:
- Setup Supabase passo per passo
- Creazione tabelle database
- Configurazione variabili d'ambiente
- Deploy su Vercel
- Troubleshooting

## 📁 Struttura del Progetto

```
DigitalMoka2501/
├── app/
│   ├── layout.tsx          # Layout root con metadata SEO
│   ├── page.tsx            # Homepage Digital Moka
│   ├── not-found.tsx       # Pagina 404
│   └── globals.css         # Stili globali + Tailwind
├── components/
│   ├── ui/                 # Componenti shadcn/ui
│   │   ├── button.tsx
│   │   └── card.tsx
│   ├── theme-provider.tsx  # Provider next-themes
│   └── theme-toggle.tsx    # Toggle tema
├── lib/
│   ├── utils.ts            # Utility functions (cn)
│   └── supabase.ts         # Client Supabase + types
├── public/                 # Assets statici
├── supabase-schema.sql     # Schema database
├── SETUP-GUIDE.md          # Guida completa setup
└── README.md               # Questo file
```

## 🗄️ Database Schema

Il progetto include uno schema Supabase completo con:

### Tabelle

- **episodes** - Episodi del podcast
  - title, description, audio_url, duration
  - season, episode_number
  - cover_image, spotify_url, apple_url, youtube_url
  - published_at, created_at, updated_at

- **newsletter_subscribers** - Iscritti newsletter
  - email (unique)
  - subscribed_at, is_active
  - unsubscribed_at

- **blog_posts** - Articoli blog
  - title, slug, content, excerpt
  - cover_image, author
  - published_at, tags[]
  - created_at, updated_at

### Row Level Security (RLS)

- ✅ Lettura pubblica per episodi e blog
- ✅ Inserimento pubblico per newsletter
- ✅ Privacy per email iscritti

## 📝 Comandi Disponibili

```bash
# Sviluppo
npm run dev          # Avvia server di sviluppo

# Build
npm run build        # Crea build di produzione
npm start            # Avvia server di produzione

# Linting
npm run lint         # Esegue ESLint
```

## 🌐 Deploy su Vercel

### Deploy Automatico

Ogni push su `master` triggera un deploy automatico su Vercel.

### Deploy Manuale

1. Vai su [vercel.com](https://vercel.com)
2. Importa il repository GitHub
3. Configura le variabili d'ambiente:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Clicca su "Deploy"

## 🎨 Personalizzazione

### Colori e Tema

Modifica i colori in `app/globals.css`:

```css
:root {
  --primary: 0 0% 9.0%;
  --secondary: 0 0% 96.1%;
  /* ... */
}
```

### Contenuti

- **Homepage**: `app/page.tsx`
- **Metadata SEO**: `app/layout.tsx`
- **Episodi**: Aggiungi in Supabase → Table Editor → `episodes`
- **Blog**: Aggiungi in Supabase → Table Editor → `blog_posts`

## 🔗 Link Utili

- **Repository**: [github.com/Elcittodeicaro/DigitalMoka2501](https://github.com/Elcittodeicaro/DigitalMoka2501)
- **Sito Live**: [digital-moka2501.vercel.app](https://digital-moka2501.vercel.app)
- **Supabase**: [supabase.com](https://supabase.com)
- **Vercel**: [vercel.com](https://vercel.com)

## 🤝 Contribuire

Contributi, issues e feature requests sono benvenuti!

1. Fork il progetto
2. Crea un branch (`git checkout -b feature/AmazingFeature`)
3. Commit le modifiche (`git commit -m 'Add some AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Apri una Pull Request

## 📄 Licenza

Questo progetto è open source e disponibile sotto la [MIT License](LICENSE).

## 👥 Team

**Digital Moka** - La tecnologia spiegata semplice, un sorso alla volta.

---

**Fatto con ❤️ e ☕ per la community Digital Moka**

Per domande o supporto, apri una [issue](https://github.com/Elcittodeicaro/DigitalMoka2501/issues).
