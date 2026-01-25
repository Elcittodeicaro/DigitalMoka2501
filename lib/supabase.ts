import { createClient } from '@supabase/supabase-js'

// Supabase client configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types (da aggiornare dopo aver creato le tabelle)
export type Episode = {
  id: string
  title: string
  description: string
  audio_url: string
  duration: number
  published_at: string
  season: number
  episode_number: number
  cover_image?: string
  spotify_url?: string
  apple_url?: string
  youtube_url?: string
  created_at: string
}

export type Newsletter = {
  id: string
  email: string
  subscribed_at: string
  is_active: boolean
}

export type BlogPost = {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string
  cover_image?: string
  author: string
  published_at: string
  tags: string[]
  created_at: string
}
