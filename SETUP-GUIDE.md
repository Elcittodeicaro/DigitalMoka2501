# 🚀 Guida Completa: Setup Digital Moka

Questa guida ti accompagnerà passo per passo nel setup completo del sito Digital Moka, dall'integrazione Supabase al deploy su Vercel.

---

## 📋 Indice

1. [Setup Supabase](#1-setup-supabase)
2. [Configurazione Locale](#2-configurazione-locale)
3. [Deploy su Vercel](#3-deploy-su-vercel)
4. [Configurazione Variabili d'Ambiente](#4-configurazione-variabili-dambiente)
5. [Test e Verifica](#5-test-e-verifica)

---

## 1. Setup Supabase

### 1.1 Creare un Progetto Supabase

1. Vai su [supabase.com](https://supabase.com)
2. Clicca su **"Start your project"** (o "New Project" se hai già un account)
3. Accedi con GitHub
4. Clicca su **"New Project"**
5. Compila i campi:
   - **Name**: `digital-moka` (o il nome che preferisci)
   - **Database Password**: Scegli una password sicura (salvala!)
   - **Region**: Scegli la regione più vicina (es. `Europe West (Ireland)`)
   - **Pricing Plan**: Free (per iniziare)
6. Clicca su **"Create new project"**
7. Attendi 1-2 minuti che il progetto venga creato

### 1.2 Ottenere le Credenziali

1. Nel dashboard Supabase, vai su **Settings** (icona ingranaggio in basso a sinistra)
2. Clicca su **API**
3. Copia questi valori (ti serviranno dopo):
   - **Project URL** (es. `https://xxxxx.supabase.co`)
   - **anon public** key (la chiave pubblica, inizia con `eyJ...`)

### 1.3 Creare le Tabelle del Database

1. Nel dashboard Supabase, clicca su **SQL Editor** (icona database a sinistra)
2. Clicca su **"New query"**
3. Copia e incolla **tutto il contenuto** del file `supabase-schema.sql` (che trovi nella root del progetto)
4. Clicca su **"Run"** (o premi `Ctrl+Enter`)
5. Dovresti vedere il messaggio "Success. No rows returned"
6. Vai su **Table Editor** per verificare che le tabelle siano state create:
   - `episodes`
   - `newsletter_subscribers`
   - `blog_posts`

### 1.4 Verificare i Dati di Esempio

1. Vai su **Table Editor**
2. Clicca sulla tabella `episodes`
3. Dovresti vedere 1 episodio di esempio
4. Clicca sulla tabella `blog_posts`
5. Dovresti vedere 1 post di esempio

✅ **Supabase è pronto!**

---

## 2. Configurazione Locale

### 2.1 Clonare il Repository (se non l'hai già fatto)

```bash
git clone https://github.com/Elcittodeicaro/DigitalMoka2501.git
cd DigitalMoka2501
```

### 2.2 Installare le Dipendenze

```bash
npm install
```

Questo installerà tutte le dipendenze, incluso `@supabase/supabase-js`.

### 2.3 Configurare le Variabili d'Ambiente

1. Copia il file `.env.example` in `.env.local`:

```bash
cp .env.example .env.local
```

2. Apri `.env.local` con il tuo editor e sostituisci i valori:

```env
# Next.js
NEXT_PUBLIC_APP_NAME=Digital Moka
NEXT_PUBLIC_APP_DESCRIPTION=La tecnologia spiegata semplice, un sorso alla volta

# Supabase (SOSTITUISCI CON I TUOI VALORI!)
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...tua-chiave-qui
```

3. Salva il file

### 2.4 Avviare il Server di Sviluppo

```bash
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000) nel browser.

✅ **Il sito dovrebbe essere visibile con il nuovo design Digital Moka!**

---

## 3. Deploy su Vercel

### 3.1 Opzione A: Deploy Automatico (Consigliato)

Se hai già connesso il repository GitHub a Vercel, il deploy avviene automaticamente ad ogni push.

1. Vai su [vercel.com/dashboard](https://vercel.com/dashboard)
2. Dovresti vedere il progetto **digital-moka2501**
3. Clicca sul progetto
4. Verifica che l'ultimo deploy sia in corso o completato

### 3.2 Opzione B: Deploy Manuale

Se non hai ancora connesso il repository:

1. Vai su [vercel.com](https://vercel.com)
2. Clicca su **"Add New..."** → **"Project"**
3. Seleziona **"Import Git Repository"**
4. Cerca e seleziona **DigitalMoka2501**
5. Clicca su **"Import"**
6. Vercel rileverà automaticamente Next.js
7. **NON cliccare ancora su "Deploy"** - prima configura le variabili d'ambiente (vedi sezione 4)

---

## 4. Configurazione Variabili d'Ambiente su Vercel

### 4.1 Aggiungere le Variabili

1. Nel dashboard del progetto su Vercel, vai su **Settings**
2. Clicca su **Environment Variables** (nel menu a sinistra)
3. Aggiungi le seguenti variabili:

| Name | Value | Environment |
|------|-------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://xxxxx.supabase.co` | Production, Preview, Development |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `eyJhbGc...` | Production, Preview, Development |

4. Per ogni variabile:
   - Inserisci il **Name**
   - Inserisci il **Value** (copia da Supabase)
   - Seleziona tutti gli **Environment** (Production, Preview, Development)
   - Clicca su **"Add"**

### 4.2 Rideploy

Dopo aver aggiunto le variabili:

1. Vai su **Deployments**
2. Clicca sui tre puntini `...` dell'ultimo deployment
3. Clicca su **"Redeploy"**
4. Conferma cliccando su **"Redeploy"**

Oppure, più semplicemente:

```bash
git commit --allow-empty -m "Trigger redeploy"
git push origin master
```

✅ **Il sito è ora live su Vercel con Supabase configurato!**

---

## 5. Test e Verifica

### 5.1 Verificare il Sito Live

1. Vai all'URL del tuo sito Vercel (es. `https://digital-moka2501.vercel.app`)
2. Verifica che la homepage si carichi correttamente
3. Verifica che il tema dark/light funzioni (icona sole/luna nell'header)

### 5.2 Testare la Newsletter

1. Scorri fino alla sezione "Iscriviti alla Newsletter"
2. Inserisci un'email di test
3. Clicca su "Iscriviti"
4. Dovresti vedere un messaggio di successo (toast verde)
5. Vai su Supabase → Table Editor → `newsletter_subscribers`
6. Verifica che l'email sia stata inserita

**Nota**: Attualmente la newsletter è solo un placeholder. Per implementarla completamente:
- Apri `app/page.tsx`
- Cerca la funzione `handleNewsletterSubmit`
- Sostituisci il `TODO` con:

```typescript
const { error } = await supabase
  .from('newsletter_subscribers')
  .insert([{ email }])

if (error) throw error
```

### 5.3 Verificare le Performance

1. Apri Chrome DevTools (F12)
2. Vai su **Lighthouse**
3. Clicca su **"Generate report"**
4. Verifica i punteggi:
   - Performance: > 90
   - Accessibility: > 90
   - Best Practices: > 90
   - SEO: > 90

---

## 🎯 Prossimi Passi

Ora che il setup base è completo, puoi:

### 1. Aggiungere Episodi Reali

Vai su Supabase → Table Editor → `episodes` e aggiungi i tuoi episodi:

```sql
INSERT INTO episodes (title, description, audio_url, duration, published_at, season, episode_number, cover_image, spotify_url, apple_url)
VALUES (
  'Titolo Episodio',
  'Descrizione completa...',
  'https://url-audio.mp3',
  1800,  -- durata in secondi (30 min = 1800)
  NOW(),
  1,     -- stagione
  1,     -- numero episodio
  'https://url-cover.jpg',
  'https://spotify.com/...',
  'https://podcasts.apple.com/...'
);
```

### 2. Creare Pagine Aggiuntive

Crea nuove pagine in `app/`:

- `app/episodi/page.tsx` - Lista completa episodi
- `app/episodi/[id]/page.tsx` - Pagina singolo episodio
- `app/blog/page.tsx` - Lista articoli blog
- `app/blog/[slug]/page.tsx` - Pagina singolo articolo

### 3. Aggiungere un Player Audio

Installa un componente player:

```bash
npm install react-h5-audio-player
```

### 4. Integrare Analytics

Aggiungi Google Analytics o Vercel Analytics:

```bash
npm install @vercel/analytics
```

### 5. Configurare un Dominio Personalizzato

1. Vai su Vercel → Settings → Domains
2. Aggiungi il tuo dominio (es. `digitalmoka.com`)
3. Segui le istruzioni per configurare i DNS

---

## 🆘 Troubleshooting

### Errore: "supabaseUrl is required"

- Verifica che le variabili d'ambiente siano configurate correttamente
- Riavvia il server di sviluppo: `npm run dev`
- Su Vercel, verifica che le variabili siano state aggiunte e fai un redeploy

### Errore: "Failed to fetch"

- Verifica che l'URL Supabase sia corretto (deve iniziare con `https://`)
- Verifica che la chiave anon sia corretta
- Controlla la console del browser per errori dettagliati

### Il tema dark/light non funziona

- Cancella la cache del browser (Ctrl+Shift+Delete)
- Verifica che `next-themes` sia installato: `npm list next-themes`

### Gli episodi non si caricano

- Verifica che le tabelle Supabase siano state create correttamente
- Controlla che ci siano dati nella tabella `episodes`
- Verifica le policy RLS in Supabase (devono permettere SELECT pubblico)

---

## 📚 Risorse Utili

- [Documentazione Next.js](https://nextjs.org/docs)
- [Documentazione Supabase](https://supabase.com/docs)
- [Documentazione Vercel](https://vercel.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com/docs)

---

## 💡 Suggerimenti

1. **Backup del Database**: Esporta regolarmente i dati da Supabase
2. **Monitoraggio**: Configura Vercel Analytics per tracciare le visite
3. **SEO**: Aggiungi un `sitemap.xml` e `robots.txt`
4. **Sicurezza**: Non committare mai `.env.local` su Git
5. **Performance**: Usa `next/image` per ottimizzare le immagini

---

**Buon lavoro con Digital Moka! ☕️**

Se hai domande o problemi, consulta la documentazione o apri una issue su GitHub.
