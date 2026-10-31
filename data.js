/**
 * data.js - Robust Local Database for Animerco
 * Includes Solo Leveling, Demon Slayer, Jujutsu Kaisen, Attack on Titan, and stream servers.
 */
const ANIME_DATABASE = [
  {
    id: "solo-leveling",
    mal_id: 52299,
    title: "Solo Leveling",
    japaneseTitle: "俺だけレベルアップな件 (Ore dake Level Up na Ken)",
    synopsis: "Over a decade after 'gates' connecting worlds appeared, awakened humans known as hunters hunt monsters inside dungeons. Sung Jin-woo, notoriously known as the weakest hunter of all mankind, is fatally wounded in a perilous double dungeon. A mysterious quest window appears, transforming his destiny.",
    genres: ["Action", "Fantasy", "Supernatural", "Shonen"],
    poster: "https://cdn.myanimelist.net/images/anime/1066/141029.jpg",
    banner: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1600&q=80",
    score: 8.52,
    episodesCount: 12,
    year: 2024,
    studio: "A-1 Pictures",
    trailerYoutubeId: "pW_zV3oV6gY",
    episodes: [
      {
        number: 1,
        title: "I'm Used to It",
        servers: [
          { name: "Alpha Server (HD 1080p)", embedUrl: "https://www.youtube-nocookie.com/embed/pW_zV3oV6gY?autoplay=1" },
          { name: "Hydra (Multi-Sub)", embedUrl: "https://www.youtube-nocookie.com/embed/g6bM7gX3H2E?autoplay=1" }
        ]
      },
      {
        number: 2,
        title: "If I Had One More Chance",
        servers: [
          { name: "Alpha Server (HD 1080p)", embedUrl: "https://www.youtube-nocookie.com/embed/w7pS6vO5CqM?autoplay=1" }
        ]
      }
    ]
  },
  {
    id: "demon-slayer",
    mal_id: 38000,
    title: "Demon Slayer: Kimetsu no Yaiba",
    japaneseTitle: "鬼滅の刃 (Kimetsu no Yaiba)",
    synopsis: "Tanjiro Kamado's peaceful life is shattered when his family is slaughtered by a demon, and the sole survivor, his sister Nezuko, is transformed into a demon. Tanjiro embarks on a journey to avenge his family and cure his sister.",
    genres: ["Action", "Fantasy", "Historical", "Shonen"],
    poster: "https://cdn.myanimelist.net/images/anime/1286/99889.jpg",
    banner: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1600&q=80",
    score: 8.48,
    episodesCount: 26,
    year: 2019,
    studio: "ufotable",
    trailerYoutubeId: "VQGCKyvzIM4",
    episodes: [
      {
        number: 1,
        title: "Cruelty",
        servers: [
          { name: "Alpha Server (HD 1080p)", embedUrl: "https://www.youtube-nocookie.com/embed/VQGCKyvzIM4?autoplay=1" }
        ]
      }
    ]
  },
  {
    id: "jujutsu-kaisen",
    mal_id: 40748,
    title: "Jujutsu Kaisen",
    japaneseTitle: "呪術廻戦 (Jujutsu Kaisen)",
    synopsis: "High schooler Yuji Itadori spends his days with the Occult Club until he swallows the finger of the demon Ryomen Sukuna to save his friends, becoming host to the King of Curses.",
    genres: ["Action", "Supernatural", "Fantasy", "Shonen"],
    poster: "https://cdn.myanimelist.net/images/anime/1171/109222.jpg",
    banner: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80",
    score: 8.61,
    episodesCount: 24,
    year: 2020,
    studio: "MAPPA",
    trailerYoutubeId: "pkKu9hLT-t8",
    episodes: [
      {
        number: 1,
        title: "Ryomen Sukuna",
        servers: [
          { name: "Alpha Server (HD 1080p)", embedUrl: "https://www.youtube-nocookie.com/embed/pkKu9hLT-t8?autoplay=1" }
        ]
      }
    ]
  },
  {
    id: "attack-on-titan",
    mal_id: 16498,
    title: "Attack on Titan",
    japaneseTitle: "進撃の巨人 (Shingeki no Kyojin)",
    synopsis: "Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called Titans, forcing humans behind concentric walls. Eren Yeager vows to cleanse the earth of every single Titan.",
    genres: ["Action", "Drama", "Mystery", "Suspense"],
    poster: "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
    banner: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1600&q=80",
    score: 8.55,
    episodesCount: 25,
    year: 2013,
    studio: "WIT Studio",
    trailerYoutubeId: "MGRm4IzK1SQ",
    episodes: [
      {
        number: 1,
        title: "To You, in 2000 Years",
        servers: [
          { name: "Alpha Server (HD 1080p)", embedUrl: "https://www.youtube-nocookie.com/embed/MGRm4IzK1SQ?autoplay=1" }
        ]
      }
    ]
  }
];

if (typeof window !== "undefined") {
  window.ANIME_DATABASE = ANIME_DATABASE;
}