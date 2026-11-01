import React, { useState } from 'react';
import { EpisodeServer, DownloadLink } from '../types/anime';

interface EpisodeViewerProps {
  servers: EpisodeServer[];
  downloads: DownloadLink[];
  episodeTitle: string;
}

export const EpisodeViewer: React.FC<EpisodeViewerProps> = ({ servers, downloads, episodeTitle }) => {
  const [activeServer, setActiveServer] = useState<EpisodeServer>(servers[0] || null);
  const [activeTab, setActiveTab] = useState<'watch' | 'download'>('watch');

  return (
    <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 my-6">
      <div className="flex bg-slate-950 p-3 border-b border-slate-800 gap-4">
        <button
          onClick={() => setActiveTab('watch')}
          className={`px-6 py-2.5 rounded-xl font-bold transition-all duration-300 ${
            activeTab === 'watch'
              ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/30'
              : 'text-slate-400 hover:text-white bg-slate-900'
          }`}
        >
          🎬 مشاهدة الحلقة
        </button>
        <button
          onClick={() => setActiveTab('download')}
          className={`px-6 py-2.5 rounded-xl font-bold transition-all duration-300 ${
            activeTab === 'download'
              ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/30'
              : 'text-slate-400 hover:text-white bg-slate-900'
          }`}
        >
          📥 تحميل الحلقة (Mega & More)
        </button>
      </div>

      {activeTab === 'watch' && (
        <div>
          <div className="relative aspect-video w-full bg-black flex items-center justify-center">
            {activeServer ? (
              <iframe
                src={activeServer.embedUrl}
                title={episodeTitle}
                className="w-full h-full border-0"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            ) : (
              <p className="text-slate-400">عذراً، السيرفر غير متوفر حالياً</p>
            )}
          </div>

          <div className="p-4 bg-slate-950/50">
            <h4 className="text-slate-300 text-sm font-semibold mb-3">اختر سيرفر المشاهدة المناسب:</h4>
            <div className="flex flex-wrap gap-2">
              {servers.map((server) => (
                <button
                  key={server.id}
                  onClick={() => setActiveServer(server)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeServer?.id === server.id
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {server.name} ({server.quality})
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'download' && (
        <div className="p-6">
          <h3 className="text-lg font-bold text-white mb-4">روابط التحميل المباشر والسرعة القصوى:</h3>
          <div className="grid gap-3">
            {downloads.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-slate-950 p-4 rounded-xl border border-slate-800 hover:border-purple-500/50 transition-all"
              >
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-purple-500 animate-pulse"></span>
                  <div>
                    <h5 className="font-bold text-white">{item.server}</h5>
                    <p className="text-xs text-slate-400">الجودة: {item.quality} | الحجم: {item.size}</p>
                  </div>
                </div>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-lg text-sm shadow-lg shadow-purple-600/20 transition-all"
                >
                  تحميل الآن 🚀
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};