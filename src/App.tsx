import React, { useState } from 'react';
import { ANIME_DATABASE, getLatestEpisodes, WEEKLY_SCHEDULE } from './data/animeData';
import { Anime } from './types/anime';
import { EpisodeViewer } from './components/EpisodeViewer';

export function App() {
  const [selectedAnime, setSelectedAnime] = useState<Anime | null>(ANIME_DATABASE[0]);
  const [selectedEpIndex, setSelectedEpIndex] = useState(0);

  const latestEps = getLatestEpisodes();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pb-12">
      <header className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-black bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Animelik
            </span>
            <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded-md font-semibold">نسخة VIP</span>
          </div>
          <div className="text-sm text-slate-400">
            منصة الأنمي المجانية 🚀
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 mt-6">
        {selectedAnime && (
          <div className="bg-slate-900/60 rounded-3xl p-6 border border-slate-800 mb-10">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <img 
                src={selectedAnime.poster} 
                alt={selectedAnime.titleArabic} 
                className="w-48 h-72 object-cover rounded-2xl shadow-2xl border border-slate-700"
              />
              <div className="flex-1">
                <h1 className="text-3xl font-black text-white mb-2">{selectedAnime.titleArabic}</h1>
                <p className="text-slate-400 text-sm mb-4">{selectedAnime.titleEnglish} | ⭐ {selectedAnime.rating}</p>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">{selectedAnime.story}</p>
                
                <h3 className="text-sm font-bold text-slate-200 mb-3">اختر الحلقة للمشاهدة أو التحميل:</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedAnime.seasons[0]?.episodes.map((ep, idx) => (
                    <button
                      key={ep.id}
                      onClick={() => setSelectedEpIndex(idx)}
                      className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                        selectedEpIndex === idx 
                          ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30' 
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      الحلقة {ep.episodeNumber}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {selectedAnime.seasons[0]?.episodes[selectedEpIndex] && (
              <EpisodeViewer
                servers={selectedAnime.seasons[0].episodes[selectedEpIndex].servers}
                downloads={selectedAnime.seasons[0].episodes[selectedEpIndex].downloads}
                episodeTitle={selectedAnime.seasons[0].episodes[selectedEpIndex].title}
              />
            )}
          </div>
        )}

        <h2 className="text-xl font-black text-white mb-6 border-r-4 border-purple-600 pr-3">قائمة الأنميات المتاحة في المنصة</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {ANIME_DATABASE.map((anime) => (
            <div
              key={anime.id}
              onClick={() => { setSelectedAnime(anime); setSelectedEpIndex(0); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-purple-500/50 cursor-pointer transition-all group shadow-lg"
            >
              <div className="aspect-[3/4] relative overflow-hidden">
                <img 
                  src={anime.poster} 
                  alt={anime.titleArabic} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2 left-2 bg-black/70 backdrop-blur-md text-amber-400 text-xs px-2 py-1 rounded-lg font-bold">
                  ★ {anime.rating}
                </span>
              </div>
              <div className="p-3">
                <h3 className="font-bold text-white text-sm truncate">{anime.titleArabic}</h3>
                <p className="text-xs text-slate-400 mt-1">{anime.seasonName}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;