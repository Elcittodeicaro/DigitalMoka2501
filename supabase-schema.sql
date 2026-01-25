-- Digital Moka Podcast Database Schema
-- Esegui questo script nel SQL Editor di Supabase

-- Tabella Episodi
CREATE TABLE IF NOT EXISTS episodes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  audio_url TEXT NOT NULL,
  duration INTEGER NOT NULL, -- durata in secondi
  published_at TIMESTAMP WITH TIME ZONE NOT NULL,
  season INTEGER DEFAULT 1,
  episode_number INTEGER NOT NULL,
  cover_image TEXT,
  spotify_url TEXT,
  apple_url TEXT,
  youtube_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabella Newsletter
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  is_active BOOLEAN DEFAULT TRUE,
  unsubscribed_at TIMESTAMP WITH TIME ZONE
);

-- Tabella Blog Posts
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  cover_image TEXT,
  author TEXT NOT NULL,
  published_at TIMESTAMP WITH TIME ZONE NOT NULL,
  tags TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indici per migliorare le performance
CREATE INDEX IF NOT EXISTS idx_episodes_published_at ON episodes(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_episodes_season_episode ON episodes(season, episode_number);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_at ON blog_posts(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);

-- Enable Row Level Security (RLS)
ALTER TABLE episodes ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Policy per lettura pubblica degli episodi
CREATE POLICY "Gli episodi sono visibili a tutti"
  ON episodes FOR SELECT
  USING (true);

-- Policy per lettura pubblica dei blog posts
CREATE POLICY "I blog posts sono visibili a tutti"
  ON blog_posts FOR SELECT
  USING (true);

-- Policy per inserimento newsletter (solo insert, no read per privacy)
CREATE POLICY "Chiunque può iscriversi alla newsletter"
  ON newsletter_subscribers FOR INSERT
  WITH CHECK (true);

-- Funzione per aggiornare updated_at automaticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger per aggiornare updated_at
CREATE TRIGGER update_episodes_updated_at
  BEFORE UPDATE ON episodes
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Dati di esempio (opzionale)
INSERT INTO episodes (title, description, audio_url, duration, published_at, season, episode_number, cover_image)
VALUES 
  (
    'Benvenuti a Digital Moka',
    'Nel primo episodio di Digital Moka, vi presentiamo il podcast che spiega la tecnologia in modo semplice e accessibile. Scoprite cosa vi aspetta nelle prossime puntate!',
    'https://example.com/episode-1.mp3',
    1800,
    NOW(),
    1,
    1,
    'https://example.com/cover-ep1.jpg'
  );

INSERT INTO blog_posts (title, slug, content, excerpt, author, published_at, tags)
VALUES 
  (
    'Perché abbiamo creato Digital Moka',
    'perche-digital-moka',
    'La tecnologia è ovunque, ma spesso viene spiegata in modo troppo complesso. Digital Moka nasce per cambiare questo...',
    'Scopri la storia dietro il podcast Digital Moka e la nostra missione.',
    'Team Digital Moka',
    NOW(),
    ARRAY['podcast', 'tecnologia', 'digital-moka']
  );
