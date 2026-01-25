# Next.js 14 Vercel App

A modern, production-ready Next.js 14 application with TypeScript, Tailwind CSS, shadcn/ui, and all the tools you need to build amazing web applications.

## Features

- **Next.js 14** with App Router and Server Components
- **TypeScript** for type safety
- **Tailwind CSS** for utility-first styling
- **shadcn/ui** for beautiful, accessible React components
- **Dark/Light Theme** support with next-themes
- **Toast Notifications** with sonner
- **Icons** with lucide-react
- **Form Handling** with React Hook Form
- **Schema Validation** with Zod
- **SEO Optimized** with metadata
- **Vercel Ready** for instant deployment

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 14 | React framework with App Router |
| TypeScript | Type-safe JavaScript |
| Tailwind CSS | Utility-first CSS framework |
| shadcn/ui | Accessible React components |
| next-themes | Dark/Light mode support |
| sonner | Toast notifications |
| lucide-react | Beautiful icons |
| React Hook Form | Form state management |
| Zod | Schema validation |

## Getting Started

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm or yarn package manager

### Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd nextjs-vercel-app
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your configuration values if needed.

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

The page will auto-update as you edit files.

### Building for Production

Create an optimized production build:

```bash
npm run build
```

### Running Production Build Locally

Start the production server:

```bash
npm start
```

## Project Structure

```
nextjs-vercel-app/
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Home page
│   ├── not-found.tsx       # 404 page
│   └── globals.css         # Global styles and Tailwind directives
├── components/
│   ├── ui/                 # shadcn/ui components
│   │   ├── button.tsx
│   │   └── card.tsx
│   ├── theme-provider.tsx  # next-themes provider
│   └── theme-toggle.tsx    # Theme switcher component
├── lib/
│   └── utils.ts            # Utility functions (cn, etc.)
├── public/                 # Static assets
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── next.config.js          # Next.js configuration
├── .eslintrc.json          # ESLint configuration
├── vercel.json             # Vercel deployment configuration
└── README.md               # This file
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## Deployment

### Deploy to Vercel

This project is optimized for Vercel deployment:

1. **Push to GitHub**

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Connect to Vercel**

- Go to [vercel.com](https://vercel.com)
- Click "New Project"
- Import your GitHub repository
- Vercel will auto-detect Next.js and configure everything
- Click "Deploy"

### Environment Variables on Vercel

1. Go to your project settings on Vercel
2. Navigate to "Environment Variables"
3. Add your variables (matching `.env.example`)
4. Redeploy your project

### Automatic Deployments

Every push to your main branch will automatically trigger a new deployment on Vercel.

## Customization

### Adding New Components

To add new shadcn/ui components:

1. Copy the component code into `components/ui/`
2. Import and use in your pages or components

Example:

```tsx
import { Button } from '@/components/ui/button'

export default function MyComponent() {
  return <Button>Click me</Button>
}
```

### Styling

- Global styles: `app/globals.css`
- Component styles: Use Tailwind classes or CSS modules
- Theme colors: Edit `tailwind.config.ts`

### Dark Mode

The app includes dark mode support via next-themes. Users can toggle between light and dark modes using the theme toggle button in the header.

To customize theme colors, edit the CSS variables in `app/globals.css`:

```css
:root {
  --primary: 0 0% 9.0%;
  --secondary: 0 0% 96.1%;
  /* ... more variables ... */
}

.dark {
  --primary: 0 0% 98%;
  --secondary: 0 0% 14.9%;
  /* ... more variables ... */
}
```

## Best Practices

1. **Use TypeScript** - Define types for all props and state
2. **Component Organization** - Keep components small and focused
3. **Tailwind Classes** - Use utility classes for styling
4. **Server Components** - Use server components by default in Next.js 14
5. **Client Components** - Mark interactive components with `'use client'`
6. **Environment Variables** - Use `.env.local` for sensitive data

## Performance Tips

- Next.js automatically optimizes images with `next/image`
- Dynamic imports for code splitting: `dynamic(() => import('...'))`
- Use `next/font` for optimized font loading
- Enable compression in `next.config.js`

## Troubleshooting

### Build Errors

If you encounter build errors:

1. Clear the build cache: `rm -rf .next`
2. Reinstall dependencies: `rm -rf node_modules && npm install`
3. Check TypeScript errors: `npm run build`

### Development Server Issues

If the dev server won't start:

1. Check if port 3000 is in use
2. Try: `npm run dev -- -p 3001`
3. Clear cache: `rm -rf .next`

### Styling Issues

If Tailwind styles aren't applied:

1. Verify `content` paths in `tailwind.config.ts`
2. Restart dev server
3. Clear browser cache (Ctrl+Shift+Delete)

## Contributing

1. Create a feature branch: `git checkout -b feature/amazing-feature`
2. Commit changes: `git commit -m 'Add amazing feature'`
3. Push to branch: `git push origin feature/amazing-feature`
4. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Support

For issues and questions:

1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Visit [shadcn/ui docs](https://ui.shadcn.com)
3. See [Tailwind CSS docs](https://tailwindcss.com/docs)

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Vercel Documentation](https://vercel.com/docs)

---

**Built with ❤️ using Next.js 14**
