export type AnimeType = 'tv' | 'movie' | 'OVA' | 'ONA' | 'special';
export type AnimeStatus = 'ongoing' | 'completed' | 'upcoming';

export interface EpisodeServer {
  id: string;
  name: string;
  quality: 'FHD' | 'HD' | 'SD';
  embedUrl: string;
  directUrl: string;
  type: 'embed' | 'direct';
}

export interface DownloadLink {
  server: string;
  quality: '1080p FHD' | '720p HD' | '480p SD';
  size: string;
  url: string;
}

export interface Episode {
  id: string;
  animeId: string;
  episodeNumber: number;
  title: string;
  thumbnail: string;
  duration: string;
  airedDate: string;
  servers: EpisodeServer[];
  downloads: DownloadLink[];
}

export interface Season {
  id: string;
  number: number;
  title: string;
  year: number;
  episodesCount: number;
  episodes: Episode[];
}

export interface Anime {
  id: string;
  slug: string;
  titleArabic: string;
  titleEnglish: string;
  titleJapanese: string;
  poster: string;
  backdrop: string;
  type: AnimeType;
  status: AnimeStatus;
  releaseYear: number;
  seasonName: string;
  rating: number;
  votesCount: number;
  genres: string[];
  studio: string;
  episodesCount: number;
  durationPerEp: string;
  airDay?: string;
  airTime?: string;
  story: string;
  trailerYoutubeId?: string;
  isFeatured?: boolean;
  isPinned?: boolean;
  seasons: Season[];
}