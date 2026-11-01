import { Anime, AnimeType, AnimeStatus } from '../types/anime';

const TRAILER_MAP: Record<string, string> = {
  'Hotaru no Yomeiri': 'ZyglwIaZ',
  'Tower of God': 'X7eI3rEaXo8',
  'Tower of God S2': 'X7eI3rEaXo8',
  'Oshi no Ko S2': 'zts8wYV_8zY',
  'Demon Slayer S4': '7a5qK_Y2t3I',
  'Kaiju No. 8': '9GqX7Nq8q7o',
  'My Hero Academia S7': '0U17yK3r01A',
  'Mushoku Tensei S2': 'c2t4VjD_12s',
  'Wind Breaker': 'W1qB7A5zYF0',
  'Slime S3': 'Sl1m3S3oFfc',
  'Black Butler S4': 'W1qB7A5zYF0',
  'The Boy and the Heron': 't5khm-V39vw',
  'Suzume': 'F7nQT_7Zz8o',
  'Jujutsu Kaisen 0': '2DoCEFTb_kM',
  'Frieren': 'QeeKSlA5b50',
  'Solo Leveling': 'yP_P_K5nS3k',
  'Dan Da Dan': 'a3m3fJ6u8_8',
  'One Piece': 'S8_YwFLCh4U',
  'Bleach TYBW': 'e8YBesRKq_U',
  'Attack on Titan': 'M_OauHnAFc8',
};

export const createEpisodeServers = (animeTitle: string, epNum: number, customYoutubeId?: string) => {
  const ytid = customYoutubeId || TRAILER_MAP[animeTitle] || 'QeeKSlA5b50';
  return [
    {
      id: `yonaplay-${epNum}`,
      name: 'سيرفر Yonaplay VIP',
      quality: 'FHD' as const,
      embedUrl: `https://www.youtube-nocookie.com/embed/${ytid}?autoplay=1&rel=0&modestbranding=1`,
      directUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
      type: 'embed' as const,
    },
    {
      id: `gdrive-${epNum}`,
      name: 'سيرفر Google Drive FHD',
      quality: 'FHD' as const,
      embedUrl: `https://www.youtube-nocookie.com/embed/${ytid}?autoplay=1&rel=0`,
      directUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
      type: 'direct' as const,
    },
    {
      id: `vidmoly-${epNum}`,
      name: 'سيرفر Vidmoly Multi',
      quality: 'HD' as const,
      embedUrl: `https://www.youtube-nocookie.com/embed/${ytid}?autoplay=1&rel=0`,
      directUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      type: 'direct' as const,
    },
    {
      id: `streamwish-${epNum}`,
      name: 'سيرفر StreamWish HD',
      quality: 'HD' as const,
      embedUrl: `https://www.youtube-nocookie.com/embed/${ytid}?autoplay=1&rel=0`,
      directUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
      type: 'direct' as const,
    },
    {
      id: `mp4upload-${epNum}`,
      name: 'سيرفر Mp4Upload Fast',
      quality: 'SD' as const,
      embedUrl: `https://www.youtube-nocookie.com/embed/${ytid}?autoplay=1&rel=0`,
      directUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
      type: 'embed' as const,
    },
  ];
};

export const createDownloadLinks = (animeTitle: string, epNum: number) => [
  { server: 'Mega.nz', quality: '1080p FHD' as const, size: '1.2 GB', url: 'https://mega.nz/file/1noSjQLS#-KVrWJQVM19TiCTLiO3RJ2O-zgVIiH_atuB4PQsni4M' },
  { server: 'Google Drive', quality: '1080p FHD' as const, size: '1.2 GB', url: '#' },
  { server: 'Mediafire', quality: '720p HD' as const, size: '650 MB', url: '#' },
  { server: '1Fichier', quality: '720p HD' as const, size: '640 MB', url: '#' },
  { server: 'Uptobox', quality: '480p SD' as const, size: '320 MB', url: '#' },
];

export const ANIME_DATABASE: Anime[] = [
  {
    id: 'hotaru-no-yomeiri',
    slug: 'hotaru-no-yomeiri',
    titleArabic: 'زواج اليراعة',
    titleEnglish: 'Hotaru no Yomeiri',
    titleJapanese: 'ほたるの嫁入り',
    poster: 'https://i.ibb.co/1000188882.jpg',
    backdrop: 'https://i.ibb.co/1000188882.jpg',
    type: 'tv',
    status: 'ongoing',
    releaseYear: 2026,
    seasonName: 'شتاء 2026',
    rating: 8.9,
    votesCount: 5200,
    genres: ['رومانسي', 'تاريخي', 'دراما', 'إثارة', 'غموض'],
    studio: 'Animation Studio',
    episodesCount: 1,
    durationPerEp: '24 دقيقة',
    airDay: 'الأحد',
    airTime: '20:00',
    story: 'قصة حب درامية ومكثفة بين نبيلة من عائلة عريقة مصابة بمرض مميت وقاتل محترف غامض.',
    trailerYoutubeId: 'ZyglwIaZ',
    isFeatured: true,
    isPinned: true,
    seasons: [
      {
        id: 's1',
        number: 1,
        title: 'الموسم 1',
        year: 2026,
        episodesCount: 1,
        episodes: Array.from({ length: 1 }, (_, i) => ({
          id: `hotaru-s1-ep-${i + 1}`,
          animeId: 'hotaru-no-yomeiri',
          episodeNumber: i + 1,
          title: `الحلقة ${i + 1} - البداية`,
          thumbnail: 'https://i.ibb.co/1000188882.jpg',
          duration: '24 دقيقة',
          airedDate: '2026-01-01',
          servers: createEpisodeServers('Hotaru no Yomeiri', i + 1, 'ZyglwIaZ'),
          downloads: createDownloadLinks('Hotaru no Yomeiri', i + 1),
        })),
      },
    ],
  }
];

export const getLatestEpisodes = () => {
  const result: { anime: Anime; episode: any; timeAgo: string }[] = [];
  ANIME_DATABASE.forEach((anime) => {
    anime.seasons.forEach((season) => {
      season.episodes.forEach((ep) => {
        result.push({ anime, episode: ep, timeAgo: 'منذ ساعة' });
      });
    });
  });
  return result;
};

export const WEEKLY_SCHEDULE = [];
