# 🎨 Digital Moka - Blueprint Theme Guide

## Panoramica

Il sito Digital Moka utilizza un **tema blueprint tecnico** ispirato ai disegni ingegneristici, perfettamente allineato con il logo e l'identità visiva del podcast.

---

## 🎨 Palette Colori

### Colori Primari

| Colore | Hex | HSL | Utilizzo |
|--------|-----|-----|----------|
| **Blueprint Dark** | `#1e3a5f` | `210 60% 25%` | Sfondi, testi primari |
| **Blueprint Medium** | `#2d5a8c` | `210 50% 40%` | Bordi, hover states |
| **Blueprint Light** | `#4a7ba7` | `200 60% 60%` | Accenti, link |
| **Blueprint Grid** | `#d4dce6` | `210 40% 88%` | Griglie di sfondo |

### Modalità Chiara (Light Mode)

- **Background**: Bianco/grigio molto chiaro (`210 40% 96%`)
- **Foreground**: Blu scuro (`210 50% 15%`)
- **Primary**: Blueprint Dark (`210 60% 35%`)
- **Accent**: Blueprint Light (`200 70% 50%`)

### Modalità Scura (Dark Mode)

- **Background**: Blu molto scuro (`210 50% 8%`)
- **Foreground**: Grigio chiaro (`210 40% 95%`)
- **Primary**: Blueprint Light (`200 70% 55%`)
- **Accent**: Blueprint Light (`200 70% 50%`)

---

## 🔤 Tipografia

### Font Principale

- **Family**: `Inter` (sans-serif)
- **Utilizzo**: Testo body, paragrafi, descrizioni

### Font Tecnico

- **Family**: `Courier New, Courier, monospace`
- **Utilizzo**: 
  - Titoli e heading
  - Etichette tecniche (REV 1.2, PROJECT: DN-2024-001)
  - Codici e annotazioni
  - Navigazione
- **Classe Tailwind**: `font-mono`

### Esempi

```tsx
// Titolo tecnico
<h1 className="font-mono font-bold">DIGITAL MOKA</h1>

// Etichetta tecnica
<span className="font-mono text-xs">REV 1.2</span>

// Testo normale
<p className="text-base">Contenuto del podcast...</p>
```

---

## 🎯 Componenti Stilistici

### 1. Blueprint Grid

Pattern a griglia che richiama i disegni tecnici.

```tsx
// Griglia semplice (20x20px)
<div className="blueprint-grid" />

// Griglia grande (100x100px + 20x20px)
<div className="blueprint-grid-large" />
```

**CSS:**
```css
.blueprint-grid {
  background-image: 
    linear-gradient(hsl(var(--blueprint-grid)) 1px, transparent 1px),
    linear-gradient(90deg, hsl(var(--blueprint-grid)) 1px, transparent 1px);
  background-size: 20px 20px;
}
```

### 2. Technical Borders

Bordi con effetto tecnico/ingegneristico.

```tsx
<div className="border-2 border-blueprint-medium/50 rounded" />
```

### 3. Cards con Effetto Blueprint

```tsx
<Card className="border-blueprint-medium/30 bg-card/50 backdrop-blur">
  <CardHeader>
    <CardTitle className="font-mono">TITOLO</CardTitle>
  </CardHeader>
  <CardContent>
    Contenuto...
  </CardContent>
</Card>
```

### 4. Etichette Tecniche

```tsx
<div className="inline-flex items-center gap-2 rounded border border-blueprint-medium/50 bg-blueprint-dark/10 px-4 py-1.5 text-sm font-mono">
  <Icon className="h-4 w-4" />
  <span>LABEL TEXT</span>
</div>
```

### 5. Annotazioni Stile Blueprint

```tsx
<div className="border-l-4 border-blueprint-medium pl-4">
  <p className="font-mono">
    <span className="font-bold">LABEL:</span> Description
  </p>
</div>
```

---

## 🖼️ Assets

### Logo

- **File principale**: `/public/logo.png` (1400x1400px)
- **Blueprint version**: `/public/logo-blueprint.jpg` (schema tecnico)
- **Favicon**: `/public/favicon.svg` (icona moka stilizzata)

### Utilizzo Logo

```tsx
import Image from 'next/image'

// Logo header
<Image
  src="/logo.png"
  alt="Digital Moka Logo"
  width={48}
  height={48}
  className="object-contain"
/>

// Blueprint full
<Image
  src="/logo-blueprint.jpg"
  alt="Digital Moka Blueprint"
  width={600}
  height={600}
  className="w-full h-full object-contain"
/>
```

---

## 🎨 Variabili CSS Personalizzate

### Definizione (globals.css)

```css
:root {
  --blueprint-dark: 210 60% 25%;
  --blueprint-medium: 210 50% 40%;
  --blueprint-light: 200 60% 60%;
  --blueprint-grid: 210 40% 88%;
}

.dark {
  --blueprint-dark: 200 70% 60%;
  --blueprint-medium: 200 60% 50%;
  --blueprint-light: 210 50% 40%;
  --blueprint-grid: 210 40% 18%;
}
```

### Utilizzo in Tailwind

```tsx
// Colore di sfondo
<div className="bg-blueprint-dark" />

// Colore testo
<p className="text-blueprint-light" />

// Bordo
<div className="border-blueprint-medium" />

// Con opacità
<div className="bg-blueprint-dark/10" />
<div className="border-blueprint-medium/50" />
```

---

## 📐 Layout Patterns

### Header Tecnico

```tsx
<header className="border-b border-blueprint-medium/30 bg-background/95 backdrop-blur">
  <div className="blueprint-grid absolute inset-0 opacity-30" />
  <div className="container relative">
    {/* Logo + Navigation */}
  </div>
</header>
```

### Hero Section con Blueprint

```tsx
<section className="relative py-20 overflow-hidden">
  <div className="blueprint-grid-large absolute inset-0 opacity-20" />
  <div className="relative">
    {/* Content */}
  </div>
</section>
```

### Card con Badge Tecnico

```tsx
<Card className="relative border-blueprint-medium/30">
  <div className="absolute -top-4 -right-4 bg-blueprint-dark text-white px-4 py-2 rounded font-mono text-xs">
    REV 1.2
  </div>
  <CardContent>
    {/* Content */}
  </CardContent>
</Card>
```

---

## 🎭 Stati Interattivi

### Hover States

```tsx
// Button
<Button className="bg-blueprint-dark hover:bg-blueprint-medium">
  Click Me
</Button>

// Link
<a className="text-muted-foreground hover:text-blueprint-light transition-colors">
  Link
</a>
```

### Focus States

```tsx
<input className="focus-visible:ring-2 focus-visible:ring-blueprint-medium" />
```

---

## 🌓 Dark Mode

Il tema si adatta automaticamente alla modalità scura/chiara:

- **Light Mode**: Sfondo chiaro, blueprint blu scuri
- **Dark Mode**: Sfondo scuro, blueprint blu chiari (invertiti)

### Toggle Manuale

Il sito include un toggle tema nell'header (componente `ThemeToggle`).

---

## 📱 Responsive Design

### Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
- **Large**: > 1400px

### Grid Responsive

```tsx
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  {/* Items */}
</div>
```

---

## 🎨 Best Practices

### ✅ Do

- Usa `font-mono` per elementi tecnici (titoli, labels, codici)
- Aggiungi griglie blueprint agli sfondi per effetto tecnico
- Usa opacità (`/30`, `/50`) per bordi e sfondi sovrapposti
- Mantieni il contrasto per accessibilità
- Usa `backdrop-blur` per effetti glassmorphism

### ❌ Don't

- Non usare colori fuori dalla palette blueprint
- Non esagerare con le griglie (max 2 layer)
- Non usare font-mono per testo lungo (solo titoli/labels)
- Non dimenticare gli stati hover/focus
- Non usare animazioni troppo aggressive

---

## 🔧 Personalizzazione

### Modificare i Colori

Modifica le variabili in `app/globals.css`:

```css
:root {
  --blueprint-dark: 210 60% 25%;  /* Cambia qui */
  --blueprint-medium: 210 50% 40%;
  --blueprint-light: 200 60% 60%;
}
```

### Aggiungere Nuovi Pattern

Aggiungi in `tailwind.config.ts`:

```ts
extend: {
  backgroundImage: {
    'custom-pattern': 'linear-gradient(...)',
  },
}
```

---

## 📚 Risorse

- **Tailwind CSS Docs**: https://tailwindcss.com/docs
- **shadcn/ui Components**: https://ui.shadcn.com
- **Next.js Image**: https://nextjs.org/docs/api-reference/next/image
- **HSL Color Picker**: https://hslpicker.com

---

## 🎯 Checklist Design

Quando crei nuovi componenti, assicurati di:

- [ ] Usare colori dalla palette blueprint
- [ ] Aggiungere `font-mono` per elementi tecnici
- [ ] Includere stati hover/focus
- [ ] Testare in dark/light mode
- [ ] Verificare responsive su mobile
- [ ] Aggiungere griglie blueprint dove appropriato
- [ ] Mantenere consistenza con il resto del sito

---

**Designed by Digital Moka Labs | REV 1.2 | PROJECT: DN-2024-001**
