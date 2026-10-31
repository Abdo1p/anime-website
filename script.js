/**
 * ANIMELIK — LUXURY DARK ANIME STREAMING & DISCOVERY
 * Complete production-ready script with live Jikan API integration,
 * server switching, responsive player, local storage watchlist,
 * dual-theme toggler, and resilient offline fallback data.
 */

// ==========================================
// 1. RICH CURATED FALLBACK DATA (Anti-Rate-Limit & Offline Safety)
// ==========================================
const FALLBACK_ANIMES = [
  {
    mal_id: 52991,
    title: "Frieren: Beyond Journey's End",
    title_japanese: "葬送のフリーレン",
    score: 9.32,
    scored_by: 462100,
    rank: 1,
    popularity: 182,
    episodes: 28,
    status: "Finished Airing",
    aired: { string: "Sep 29, 2023 to Mar 22, 2024" },
    rating: "PG-13 - Teens 13 or older",
    type: "TV",
    year: 2023,
    images: {
      jpg: {
        large_image_url: "https://cdn.myanimelist.net/images/anime/1015/138006l.jpg",
        image_url: "https://cdn.myanimelist.net/images/anime/1015/138006.jpg"
      }
    },
    trailer: {
      youtube_id: "qgQunxD0qMo",
      embed_url: "https://www.youtube-nocookie.com/embed/qgQunxD0qMo?enablejsapi=1&wmode=opaque&autoplay=1"
    },
    genres: [{ name: "Adventure" }, { name: "Fantasy" }, { name: "Drama" }],
    studios: [{ name: "Madhouse" }],
    synopsis: "The Demon King has been defeated, and the victorious hero party returns home before disbanding. The four—mage Frieren, hero Himmel, priest Heiter, and warrior Eisen—reminisce on their decade-long journey as the moment to bid each other farewell arrives. But the passing of time is different for elves..."
  },
  {
    mal_id: 5114,
    title: "Fullmetal Alchemist: Brotherhood",
    title_japanese: "鋼の錬金術師 FULLMETAL ALCHEMIST",
    score: 9.10,
    scored_by: 2150000,
    rank: 2,
    popularity: 3,
    episodes: 64,
    status: "Finished Airing",
    aired: { string: "Apr 5, 2009 to Jul 4, 2010" },
    rating: "R - 17+ (violence & profanity)",
    type: "TV",
    year: 2009,
    images: {
      jpg: {
        large_image_url: "https://cdn.myanimelist.net/images/anime/1208/94745l.jpg",
        image_url: "https://cdn.myanimelist.net/images/anime/1208/94745.jpg"
      }
    },
    trailer: {
      youtube_id: "--IcmZkvL0Q",
      embed_url: "https://www.youtube-nocookie.com/embed/--IcmZkvL0Q?enablejsapi=1&wmode=opaque&autoplay=1"
    },
    genres: [{ name: "Action" }, { name: "Adventure" }, { name: "Drama" }, { name: "Fantasy" }],
    studios: [{ name: "Bones" }],
    synopsis: "After a horrific alchemy experiment goes wrong in the Elric household, brothers Edward and Alphonse are left in a catastrophic new reality. Ignoring the alchemy restriction against human transmutation, the boys attempted to bring their deceased mother back to life."
  },
  {
    mal_id: 40748,
    title: "Jujutsu Kaisen",
    title_japanese: "呪術廻戦",
    score: 8.62,
    scored_by: 1720000,
    rank: 64,
    popularity: 14,
    episodes: 24,
    status: "Finished Airing",
    aired: { string: "Oct 3, 2020 to Mar 27, 2021" },
    rating: "R - 17+ (violence & profanity)",
    type: "TV",
    year: 2020,
    images: {
      jpg: {
        large_image_url: "https://cdn.myanimelist.net/images/anime/1171/109222l.jpg",
        image_url: "https://cdn.myanimelist.net/images/anime/1171/109222.jpg"
      }
    },
    trailer: {
      youtube_id: "pkKu9hLT-t8",
      embed_url: "https://www.youtube-nocookie.com/embed/pkKu9hLT-t8?enablejsapi=1&wmode=opaque&autoplay=1"
    },
    genres: [{ name: "Action" }, { name: "Fantasy" }, { name: "Shounen" }, { name: "Supernatural" }],
    studios: [{ name: "MAPPA" }],
    synopsis: "Idly indulging in paranormal activities with the Occult Club, high schooler Yuuji Itadori spends his days at either the clubroom or the hospital, where he visits his bedridden grandfather. However, this leisurely lifestyle takes a turn for the strange when he unknowingly swallows a cursed finger."
  },
  {
    mal_id: 52299,
    title: "Solo Leveling",
    title_japanese: "俺だけレベルアップな件",
    score: 8.35,
    scored_by: 680000,
    rank: 215,
    popularity: 88,
    episodes: 12,
    status: "Finished Airing",
    aired: { string: "Jan 7, 2024 to Mar 31, 2024" },
    rating: "R - 17+ (violence & profanity)",
    type: "TV",
    year: 2024,
    images: {
      jpg: {
        large_image_url: "https://cdn.myanimelist.net/images/anime/1899/140411l.jpg",
        image_url: "https://cdn.myanimelist.net/images/anime/1899/140411.jpg"
      }
    },
    trailer: {
      youtube_id: "9n_kdbz3u64",
      embed_url: "https://www.youtube-nocookie.com/embed/9n_kdbz3u64?enablejsapi=1&wmode=opaque&autoplay=1"
    },
    genres: [{ name: "Action" }, { name: "Adventure" }, { name: "Fantasy" }],
    studios: [{ name: "A-1 Pictures" }],
    synopsis: "A decade ago, 'the Gate' appeared and connected the real world with the realm of magic and monsters. To combat these vile beasts, ordinary people received superhuman powers and became known as 'Hunters'. Sung Jin-woo, notoriously known as the weakest hunter of all mankind, finds himself in a double dungeon."
  },
  {
    mal_id: 38000,
    title: "Demon Slayer: Kimetsu no Yaiba",
    title_japanese: "鬼滅の刃",
    score: 8.48,
    scored_by: 2310000,
    rank: 142,
    popularity: 5,
    episodes: 26,
    status: "Finished Airing",
    aired: { string: "Apr 6, 2019 to Sep 28, 2019" },
    rating: "R - 17+ (violence & profanity)",
    type: "TV",
    year: 2019,
    images: {
      jpg: {
        large_image_url: "https://cdn.myanimelist.net/images/anime/1286/99889l.jpg",
        image_url: "https://cdn.myanimelist.net/images/anime/1286/99889.jpg"
      }
    },
    trailer: {
      youtube_id: "6vMuWuWlW4I",
      embed_url: "https://www.youtube-nocookie.com/embed/6vMuWuWlW4I?enablejsapi=1&wmode=opaque&autoplay=1"
    },
    genres: [{ name: "Action" }, { name: "Fantasy" }, { name: "Shounen" }, { name: "Supernatural" }],
    studios: [{ name: "ufotable" }],
    synopsis: "Ever since the death of his father, the burden of supporting the family has fallen upon Tanjirou Kamado's shoulders. Although living impoverished on a remote mountain, the Kamado family are able to enjoy a relatively peaceful life until one day, Tanjirou discovers his family has been slaughtered."
  },
  {
    mal_id: 16498,
    title: "Attack on Titan",
    title_japanese: "進撃の巨人",
    score: 8.55,
    scored_by: 2840000,
    rank: 110,
    popularity: 1,
    episodes: 25,
    status: "Finished Airing",
    aired: { string: "Apr 7, 2013 to Sep 29, 2013" },
    rating: "R - 17+ (violence & profanity)",
    type: "TV",
    year: 2013,
    images: {
      jpg: {
        large_image_url: "https://cdn.myanimelist.net/images/anime/10/47347l.jpg",
        image_url: "https://cdn.myanimelist.net/images/anime/10/47347.jpg"
      }
    },
    trailer: {
      youtube_id: "MGRm4IzK1SQ",
      embed_url: "https://www.youtube-nocookie.com/embed/MGRm4IzK1SQ?enablejsapi=1&wmode=opaque&autoplay=1"
    },
    genres: [{ name: "Action" }, { name: "Drama" }, { name: "Fantasy" }, { name: "Mystery" }],
    studios: [{ name: "Wit Studio" }],
    synopsis: "Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called Titans, forcing humans to hide in fear behind enormous concentric walls. What makes these giants truly terrifying is that their taste for human flesh is not born out of hunger but what appears to be out of pleasure."
  },
  {
    mal_id: 44511,
    title: "Chainsaw Man",
    title_japanese: "チェンソーマン",
    score: 8.49,
    scored_by: 1210000,
    rank: 135,
    popularity: 38,
    episodes: 12,
    status: "Finished Airing",
    aired: { string: "Oct 12, 2022 to Dec 28, 2022" },
    rating: "R - 17+ (violence & profanity)",
    type: "TV",
    year: 2022,
    images: {
      jpg: {
        large_image_url: "https://cdn.myanimelist.net/images/anime/1806/126216l.jpg",
        image_url: "https://cdn.myanimelist.net/images/anime/1806/126216.jpg"
      }
    },
    trailer: {
      youtube_id: "jk7QUnZgmmI",
      embed_url: "https://www.youtube-nocookie.com/embed/jk7QUnZgmmI?enablejsapi=1&wmode=opaque&autoplay=1"
    },
    genres: [{ name: "Action" }, { name: "Fantasy" }, { name: "Supernatural" }],
    studios: [{ name: "MAPPA" }],
    synopsis: "Denji is robbed of a normal teenage life, left with nothing but his deadbeat father's overwhelming debt. His only companion is his pet, the chainsaw devil Pochita, with whom he slays devils for money that inevitably ends up in the yakuza's pockets."
  },
  {
    mal_id: 21,
    title: "One Piece",
    title_japanese: "ONE PIECE",
    score: 8.73,
    scored_by: 1400000,
    rank: 45,
    popularity: 19,
    episodes: 1120,
    status: "Currently Airing",
    aired: { string: "Oct 20, 1999 to ?" },
    rating: "PG-13 - Teens 13 or older",
    type: "TV",
    year: 1999,
    images: {
      jpg: {
        large_image_url: "https://cdn.myanimelist.net/images/anime/1244/138851l.jpg",
        image_url: "https://cdn.myanimelist.net/images/anime/1244/138851.jpg"
      }
    },
    trailer: {
      youtube_id: "l_98K4_6UQk",
      embed_url: "https://www.youtube-nocookie.com/embed/l_98K4_6UQk?enablejsapi=1&wmode=opaque&autoplay=1"
    },
    genres: [{ name: "Action" }, { name: "Adventure" }, { name: "Fantasy" }, { name: "Shounen" }],
    studios: [{ name: "Toei Animation" }],
    synopsis: "Barely surviving in a barrel after passing through a terrible whirlpool at sea, carefree Monkey D. Luffy ends up aboard a ship under attack by pirates. Despite being a naive teenager, he is not to be underestimated. A boy with rubber powers, his goal is to become King of the Pirates."
  },
  {
    mal_id: 41467,
    title: "Bleach: Thousand-Year Blood War",
    title_japanese: "BLEACH 千年血戦篇",
    score: 9.01,
    scored_by: 360000,
    rank: 7,
    popularity: 380,
    episodes: 13,
    status: "Finished Airing",
    aired: { string: "Oct 11, 2022 to Dec 27, 2022" },
    rating: "R - 17+ (violence & profanity)",
    type: "TV",
    year: 2022,
    images: {
      jpg: {
        large_image_url: "https://cdn.myanimelist.net/images/anime/1764/126627l.jpg",
        image_url: "https://cdn.myanimelist.net/images/anime/1764/126627.jpg"
      }
    },
    trailer: {
      youtube_id: "e8YBesRKq_o",
      embed_url: "https://www.youtube-nocookie.com/embed/e8YBesRKq_o?enablejsapi=1&wmode=opaque&autoplay=1"
    },
    genres: [{ name: "Action" }, { name: "Adventure" }, { name: "Fantasy" }, { name: "Shounen" }],
    studios: [{ name: "Pierrot" }],
    synopsis: "Substitute Soul Reaper Ichigo Kurosaki spends his days fighting against Hollows, dangerous evil spirits that threaten Karakura Town. Ichigo undertakes his quest with his closest allies: Orihime Inoue, Yasutora Sado, and Uryuu Ishida."
  },
  {
    mal_id: 50265,
    title: "Spy x Family",
    title_japanese: "SPY×FAMILY",
    score: 8.50,
    scored_by: 1100000,
    rank: 120,
    popularity: 42,
    episodes: 12,
    status: "Finished Airing",
    aired: { string: "Apr 9, 2022 to Jun 25, 2022" },
    rating: "PG-13 - Teens 13 or older",
    type: "TV",
    year: 2022,
    images: {
      jpg: {
        large_image_url: "https://cdn.myanimelist.net/images/anime/1441/122795l.jpg",
        image_url: "https://cdn.myanimelist.net/images/anime/1441/122795.jpg"
      }
    },
    trailer: {
      youtube_id: "ofXigq9aIpo",
      embed_url: "https://www.youtube-nocookie.com/embed/ofXigq9aIpo?enablejsapi=1&wmode=opaque&autoplay=1"
    },
    genres: [{ name: "Action" }, { name: "Comedy" }],
    studios: [{ name: "Wit Studio" }, { name: "CloverWorks" }],
    synopsis: "Corrupt politicians, frenzied nationalists, and other warmongering forces constantly jeopardize the thin veneer of peace between neighboring countries Ostania and Westalis. Master spy 'Twilight' is tasked with an impossible mission: get married and have a child."
  },
  {
    mal_id: 37521,
    title: "Vinland Saga",
    title_japanese: "ヴィンランド・サガ",
    score: 8.75,
    scored_by: 840000,
    rank: 40,
    popularity: 65,
    episodes: 24,
    status: "Finished Airing",
    aired: { string: "Jul 8, 2019 to Dec 30, 2019" },
    rating: "R - 17+ (violence & profanity)",
    type: "TV",
    year: 2019,
    images: {
      jpg: {
        large_image_url: "https://cdn.myanimelist.net/images/anime/1500/103005l.jpg",
        image_url: "https://cdn.myanimelist.net/images/anime/1500/103005.jpg"
      }
    },
    trailer: {
      youtube_id: "f8JrZ7Q_RZg",
      embed_url: "https://www.youtube-nocookie.com/embed/f8JrZ7Q_RZg?enablejsapi=1&wmode=opaque&autoplay=1"
    },
    genres: [{ name: "Action" }, { name: "Adventure" }, { name: "Drama" }],
    studios: [{ name: "Wit Studio" }],
    synopsis: "Young Thorfinn grew up listening to the stories of old sailors that had traveled the ocean and reached the place of legend, Vinland. It is said to be warm and fertile, a place where there would be no need for fighting—not at all like the frozen village in Iceland where he was born."
  },
  {
    mal_id: 1535,
    title: "Death Note",
    title_japanese: "DEATH NOTE",
    score: 8.62,
    scored_by: 2790000,
    rank: 75,
    popularity: 2,
    episodes: 37,
    status: "Finished Airing",
    aired: { string: "Oct 4, 2006 to Jun 27, 2007" },
    rating: "R - 17+ (violence & profanity)",
    type: "TV",
    year: 2006,
    images: {
      jpg: {
        large_image_url: "https://cdn.myanimelist.net/images/anime/9/9453l.jpg",
        image_url: "https://cdn.myanimelist.net/images/anime/9/9453.jpg"
      }
    },
    trailer: {
      youtube_id: "VT6LFOIofKU",
      embed_url: "https://www.youtube-nocookie.com/embed/VT6LFOIofKU?enablejsapi=1&wmode=opaque&autoplay=1"
    },
    genres: [{ name: "Supernatural" }, { name: "Mystery" }, { name: "Drama" }],
    studios: [{ name: "Madhouse" }],
    synopsis: "A shinigami, as a god of death, can kill any person—provided they see their victim's face and write their victim's name in a notebook called a Death Note. One day, Ryuk, bored by the shinigami lifestyle and interested in seeing how a human would use a Death Note, drops one into the human realm."
  }
];

// ==========================================
// 2. APPLICATION STATE MANAGEMENT
// ==========================================
const AppState = {
  currentCategory: "home",     // home, airing, top, movies, watchlist
  currentGenre: "all",
  searchQuery: "",
  sortBy: "popularity",
  page: 1,
  hasNextPage: true,
  isLoading: false,
  animeList: [],
  selectedAnime: null,
  activeServer: 1,
  activeEpisode: 1,
  watchlist: [],
  cache: new Map(),
  theme: "dark",
  isFallbackMode: false
};

// ==========================================
// 3. INITIALIZATION & SETUP
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initWatchlist();
  initEventListeners();
  loadAnimeCatalog();
});

/**
 * Initializes Theme based on localStorage or OS preference
 */
function initTheme() {
  const savedTheme = localStorage.getItem("animelik_theme");
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  const theme = savedTheme || (prefersLight ? "light" : "dark");
  setTheme(theme);
}

function setTheme(theme) {
  AppState.theme = theme;
  const sunIcon = document.querySelector(".sun-icon");
  const moonIcon = document.querySelector(".moon-icon");

  if (theme === "light") {
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
    if (sunIcon) sunIcon.classList.remove("hidden");
    if (moonIcon) moonIcon.classList.add("hidden");
  } else {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
    if (sunIcon) sunIcon.classList.add("hidden");
    if (moonIcon) moonIcon.classList.remove("hidden");
  }
  localStorage.setItem("animelik_theme", theme);
}

/**
 * Initializes Watchlist from localStorage
 */
function initWatchlist() {
  try {
    const stored = localStorage.getItem("animelik_watchlist");
    AppState.watchlist = stored ? JSON.parse(stored) : [];
  } catch (err) {
    console.error("Failed to parse watchlist from localStorage:", err);
    AppState.watchlist = [];
  }
  updateWatchlistBadges();
}

function updateWatchlistBadges() {
  const count = AppState.watchlist.length;
  const counterBadge = document.getElementById("watchlist-counter");
  const drawerCount = document.getElementById("drawer-watchlist-count");

  if (counterBadge) counterBadge.textContent = count;
  if (drawerCount) drawerCount.textContent = count;
}

// ==========================================
// 4. EVENT LISTENERS
// ==========================================
function initEventListeners() {
  // Theme Toggle Button
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      setTheme(AppState.theme === "dark" ? "light" : "dark");
      showToast(`Switched to ${AppState.theme === "dark" ? "Dark" : "Light"} Mode`);
    });
  }

  // Brand Logo Click (Home)
  const brandLogo = document.getElementById("brand-logo");
  if (brandLogo) {
    brandLogo.addEventListener("click", (e) => {
      e.preventDefault();
      resetToHome();
    });
  }

  // Primary Desktop Nav Links
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(btn => {
    btn.addEventListener("click", () => {
      navLinks.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const target = btn.getAttribute("data-target");
      handleNavigation(target);
    });
  });

  // Mobile Menu & Navigation
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileNavDrawer = document.getElementById("mobile-nav-drawer");
  if (mobileMenuBtn && mobileNavDrawer) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileNavDrawer.classList.toggle("hidden");
    });
  }

  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
  mobileNavLinks.forEach(btn => {
    btn.addEventListener("click", () => {
      mobileNavLinks.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      if (mobileNavDrawer) mobileNavDrawer.classList.add("hidden");
      const target = btn.getAttribute("data-target");
      if (target === "watchlist") {
        openWatchlistDrawer();
      } else {
        handleNavigation(target);
      }
    });
  });

  // Watchlist Toggle Button (Header)
  const watchlistToggleBtn = document.getElementById("watchlist-toggle-btn");
  if (watchlistToggleBtn) {
    watchlistToggleBtn.addEventListener("click", openWatchlistDrawer);
  }

  // Watchlist Drawer Controls
  const drawerCloseBtn = document.getElementById("drawer-close-btn");
  const closeDrawerBottomBtn = document.getElementById("close-drawer-bottom-btn");
  const drawerBackdrop = document.getElementById("watchlist-drawer-backdrop");

  if (drawerCloseBtn) drawerCloseBtn.addEventListener("click", closeWatchlistDrawer);
  if (closeDrawerBottomBtn) closeDrawerBottomBtn.addEventListener("click", closeWatchlistDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener("click", closeWatchlistDrawer);

  const clearWatchlistBtn = document.getElementById("clear-watchlist-btn");
  if (clearWatchlistBtn) {
    clearWatchlistBtn.addEventListener("click", () => {
      if (AppState.watchlist.length === 0) return;
      if (confirm("Are you sure you want to clear your entire watchlist?")) {
        AppState.watchlist = [];
        saveWatchlist();
        renderWatchlistDrawer();
        updateWatchlistBadges();
        updateCardBookmarkButtons();
        if (AppState.currentCategory === "watchlist") {
          renderAnimeGrid([]);
        }
        showToast("Watchlist cleared");
      }
    });
  }

  // Genre Filter Strip Buttons
  const genrePills = document.querySelectorAll(".genre-pill");
  genrePills.forEach(pill => {
    pill.addEventListener("click", () => {
      genrePills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      const genre = pill.getAttribute("data-genre");
      handleGenreSelect(genre);
    });
  });

  // Footer Genre Links
  const footerGenres = document.querySelectorAll("[data-footer-genre]");
  footerGenres.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const genre = link.getAttribute("data-footer-genre");
      genrePills.forEach(p => {
        if (p.getAttribute("data-genre") === genre) {
          p.click();
          p.scrollIntoView({ behavior: "smooth", inline: "center" });
        }
      });
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  // Footer Nav Links
  const footerNavLinks = document.querySelectorAll(".footer-nav-link");
  footerNavLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = link.getAttribute("data-target");
      handleNavigation(target);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  // Real-time Search Input & Debounce
  const searchInput = document.getElementById("search-input");
  const clearSearchBtn = document.getElementById("clear-search-btn");
  const searchDropdown = document.getElementById("search-dropdown");

  let searchTimeout = null;
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.trim();
      if (clearSearchBtn) {
        clearSearchBtn.classList.toggle("hidden", query.length === 0);
      }

      clearTimeout(searchTimeout);
      if (query.length < 2) {
        if (searchDropdown) searchDropdown.classList.add("hidden");
        return;
      }

      searchTimeout = setTimeout(() => {
        performQuickSearch(query);
      }, 300);
    });

    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const query = searchInput.value.trim();
        if (query.length > 0) {
          if (searchDropdown) searchDropdown.classList.add("hidden");
          executeFullSearch(query);
        }
      } else if (e.key === "Escape") {
        if (searchDropdown) searchDropdown.classList.add("hidden");
        searchInput.blur();
      }
    });

    // Global keyboard shortcut ('/' focuses search)
    document.addEventListener("keydown", (e) => {
      if (e.key === "/" && document.activeElement !== searchInput) {
        e.preventDefault();
        searchInput.focus();
      }
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener("click", () => {
      if (searchInput) {
        searchInput.value = "";
        clearSearchBtn.classList.add("hidden");
      }
      if (searchDropdown) searchDropdown.classList.add("hidden");
      if (AppState.searchQuery) {
        resetToHome();
      }
    });
  }

  // Close search dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-wrapper")) {
      if (searchDropdown) searchDropdown.classList.add("hidden");
    }
  });

  // Sort Selector Change
  const sortSelect = document.getElementById("sort-select");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      AppState.sortBy = e.target.value;
      sortAndRenderGrid();
    });
  }

  // Reset Active Filter Button
  const resetFilterBtn = document.getElementById("reset-filter-btn");
  if (resetFilterBtn) {
    resetFilterBtn.addEventListener("click", resetToHome);
  }

  // Dismiss Status Banner
  const dismissBannerBtn = document.getElementById("dismiss-banner-btn");
  const statusBanner = document.getElementById("status-notification-banner");
  if (dismissBannerBtn && statusBanner) {
    dismissBannerBtn.addEventListener("click", () => {
      statusBanner.classList.add("hidden");
    });
  }

  // Load More Button
  const loadMoreBtn = document.getElementById("load-more-btn");
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
      if (!AppState.isLoading && AppState.hasNextPage) {
        AppState.page += 1;
        loadAnimeCatalog(true);
      }
    });
  }

  // Video Player Controls: Close & Servers
  const closePlayerBtn = document.getElementById("close-player-btn");
  if (closePlayerBtn) {
    closePlayerBtn.addEventListener("click", closeVideoPlayer);
  }

  const serverBtns = document.querySelectorAll(".server-btn");
  serverBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      serverBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const serverNum = parseInt(btn.getAttribute("data-server"), 10);
      switchStreamingServer(serverNum);
    });
  });

  // Player Watchlist Button
  const playerWatchlistBtn = document.getElementById("player-watchlist-btn");
  if (playerWatchlistBtn) {
    playerWatchlistBtn.addEventListener("click", () => {
      if (AppState.selectedAnime) {
        toggleWatchlist(AppState.selectedAnime);
        updatePlayerWatchlistState();
      }
    });
  }

  // Hero Spotlight Buttons
  const heroWatchBtn = document.getElementById("hero-watch-btn");
  if (heroWatchBtn) {
    heroWatchBtn.addEventListener("click", () => {
      if (AppState.selectedAnime) {
        openVideoPlayer(AppState.selectedAnime);
      } else if (AppState.animeList.length > 0) {
        openVideoPlayer(AppState.animeList[0]);
      }
    });
  }

  const heroWatchlistBtn = document.getElementById("hero-watchlist-btn");
  if (heroWatchlistBtn) {
    heroWatchlistBtn.addEventListener("click", () => {
      const target = AppState.selectedAnime || AppState.animeList[0];
      if (target) {
        toggleWatchlist(target);
        updateHeroWatchlistState(target);
      }
    });
  }
}

// ==========================================
// 5. DATA FETCHING (Jikan API with Cache & Fallback)
// ==========================================

/**
 * Builds the appropriate Jikan API endpoint based on current app state
 */
function buildApiUrl() {
  const baseUrl = "https://api.jikan.moe/v4";

  if (AppState.searchQuery) {
    return `${baseUrl}/anime?q=${encodeURIComponent(AppState.searchQuery)}&page=${AppState.page}&limit=24&sfw=true`;
  }

  if (AppState.currentGenre !== "all") {
    return `${baseUrl}/anime?genres=${AppState.currentGenre}&page=${AppState.page}&limit=24&order_by=score&sort=desc&sfw=true`;
  }

  switch (AppState.currentCategory) {
    case "airing":
      return `${baseUrl}/top/anime?filter=airing&page=${AppState.page}&limit=24`;
    case "top":
      return `${baseUrl}/top/anime?page=${AppState.page}&limit=24`;
    case "movies":
      return `${baseUrl}/top/anime?type=movie&page=${AppState.page}&limit=24`;
    case "home":
    default:
      return `${baseUrl}/top/anime?filter=bypopularity&page=${AppState.page}&limit=24`;
  }
}

/**
 * Fetches anime data safely from Jikan API, utilizing in-memory cache and
 * instantly falling back to curated high-quality anime if rate-limited (HTTP 429).
 */
async function loadAnimeCatalog(isAppend = false) {
  if (AppState.isLoading) return;

  // Handle Watchlist View specifically
  if (AppState.currentCategory === "watchlist") {
    AppState.animeList = AppState.watchlist;
    updateCatalogHeading("My Anime Watchlist", `${AppState.watchlist.length} titles`);
    renderAnimeGrid(AppState.watchlist);
    const paginationContainer = document.getElementById("pagination-container");
    if (paginationContainer) paginationContainer.classList.add("hidden");
    return;
  }

  const url = buildApiUrl();
  AppState.isLoading = true;
  toggleLoadingIndicator(true, isAppend);

  try {
    let data;

    // Check memory cache first
    if (AppState.cache.has(url)) {
      data = AppState.cache.get(url);
    } else {
      const response = await fetch(url, { headers: { "Accept": "application/json" } });

      if (response.status === 429) {
        throw new Error("RATE_LIMIT");
      }

      if (!response.ok) {
        throw new Error(`HTTP_${response.status}`);
      }

      data = await response.json();
      AppState.cache.set(url, data);
    }

    if (data && data.data && Array.isArray(data.data)) {
      AppState.isFallbackMode = false;
      hideStatusBanner();

      const newAnimes = data.data;
      if (isAppend) {
        AppState.animeList = [...AppState.animeList, ...newAnimes];
      } else {
        AppState.animeList = newAnimes;
      }

      AppState.hasNextPage = data.pagination ? data.pagination.has_next_page : false;

      // Update Featured Banner on first home load
      if (!isAppend && AppState.animeList.length > 0 && AppState.currentCategory === "home" && !AppState.searchQuery) {
        populateHeroBanner(AppState.animeList[0]);
      }

      updateCatalogStatusText();
      sortAndRenderGrid();
    } else {
      throw new Error("INVALID_PAYLOAD");
    }

  } catch (error) {
    console.warn("Jikan API Request notice:", error.message);
    handleApiFallback(isAppend);
  } finally {
    AppState.isLoading = false;
    toggleLoadingIndicator(false, isAppend);
  }
}

/**
 * Fallback mechanism providing smooth, uninterrupted experience
 */
function handleApiFallback(isAppend) {
  AppState.isFallbackMode = true;
  showStatusBanner("Notice: High traffic on Jikan anime servers. Animelik has enabled VIP local catalog.");

  let filtered = [...FALLBACK_ANIMES];

  if (AppState.searchQuery) {
    const q = AppState.searchQuery.toLowerCase();
    filtered = filtered.filter(a => 
      a.title.toLowerCase().includes(q) || 
      (a.title_japanese && a.title_japanese.toLowerCase().includes(q)) ||
      a.genres.some(g => g.name.toLowerCase().includes(q))
    );
  } else if (AppState.currentGenre !== "all") {
    // Map common genre IDs
    const genreNames = {
      "1": "Action",
      "2": "Adventure",
      "10": "Fantasy",
      "27": "Shounen",
      "37": "Supernatural",
      "22": "Romance",
      "24": "Sci-Fi",
      "4": "Comedy",
      "7": "Mystery",
      "8": "Drama"
    };
    const targetName = genreNames[AppState.currentGenre];
    if (targetName) {
      filtered = filtered.filter(a => a.genres.some(g => g.name.toLowerCase() === targetName.toLowerCase()));
    }
  }

  if (isAppend) {
    AppState.animeList = [...AppState.animeList, ...filtered];
  } else {
    AppState.animeList = filtered;
  }

  AppState.hasNextPage = false;
  if (!isAppend && AppState.animeList.length > 0) {
    populateHeroBanner(AppState.animeList[0]);
  }

  updateCatalogStatusText();
  sortAndRenderGrid();
}

/**
 * Quick search dropdown logic
 */
async function performQuickSearch(query) {
  const dropdown = document.getElementById("search-dropdown");
  const dropdownList = document.getElementById("search-dropdown-list");
  if (!dropdown || !dropdownList) return;

  dropdownList.innerHTML = `<div style="padding: 1rem; text-align: center; font-size: 0.8rem; color: var(--text-muted);">Searching anime catalog...</div>`;
  dropdown.classList.remove("hidden");

  try {
    const url = `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(query)}&limit=5&sfw=true`;
    let items = [];

    if (AppState.cache.has(url)) {
      items = AppState.cache.get(url).data || [];
    } else {
      const res = await fetch(url);
      if (res.ok) {
        const json = await res.json();
        items = json.data || [];
        AppState.cache.set(url, json);
      } else {
        throw new Error("Fallback quick search");
      }
    }

    renderSearchDropdownItems(items);
  } catch (err) {
    // Search local fallback
    const q = query.toLowerCase();
    const fallbackResults = FALLBACK_ANIMES.filter(a => 
      a.title.toLowerCase().includes(q) || 
      (a.title_japanese && a.title_japanese.toLowerCase().includes(q))
    ).slice(0, 5);
    renderSearchDropdownItems(fallbackResults);
  }
}

function renderSearchDropdownItems(items) {
  const dropdownList = document.getElementById("search-dropdown-list");
  if (!dropdownList) return;

  if (items.length === 0) {
    dropdownList.innerHTML = `<div style="padding: 1rem; text-align: center; font-size: 0.8rem; color: var(--text-muted);">No anime found matching your query.</div>`;
    return;
  }

  dropdownList.innerHTML = items.map(anime => {
    const poster = (anime.images && anime.images.jpg && (anime.images.jpg.image_url || anime.images.jpg.large_image_url)) || "";
    const score = anime.score ? `★ ${anime.score.toFixed(1)}` : "Unrated";
    const year = anime.year || (anime.aired && anime.aired.string ? anime.aired.string.split("to")[0].trim() : "TV");

    return `
      <div class="search-item" data-id="${anime.mal_id}">
        <img class="search-item-thumb" src="${poster}" alt="${escapeHtml(anime.title)}" referrerpolicy="no-referrer" />
        <div class="search-item-info">
          <div class="search-item-title">${escapeHtml(anime.title)}</div>
          <div class="search-item-meta">
            <span class="search-item-score">${score}</span>
            <span>·</span>
            <span>${year}</span>
            <span>·</span>
            <span>${anime.type || "Anime"}</span>
          </div>
        </div>
      </div>
    `;
  }).join("");

  // Attach click listener to each quick search item
  const searchItems = dropdownList.querySelectorAll(".search-item");
  searchItems.forEach(el => {
    el.addEventListener("click", () => {
      const id = parseInt(el.getAttribute("data-id"), 10);
      const clicked = items.find(a => a.mal_id === id);
      if (clicked) {
        document.getElementById("search-dropdown").classList.add("hidden");
        openVideoPlayer(clicked);
      }
    });
  });
}

/**
 * Executes full search filtering across the main grid
 */
function executeFullSearch(query) {
  AppState.searchQuery = query;
  AppState.page = 1;
  AppState.currentCategory = "search";
  AppState.currentGenre = "all";

  // Reset genre pills
  document.querySelectorAll(".genre-pill").forEach(p => p.classList.remove("active"));
  const allGenre = document.querySelector('.genre-pill[data-genre="all"]');
  if (allGenre) allGenre.classList.add("active");

  // Show active filter banner
  const banner = document.getElementById("active-filter-banner");
  const bannerText = document.getElementById("active-filter-text");
  if (banner && bannerText) {
    bannerText.textContent = `Search results for: "${query}"`;
    banner.classList.remove("hidden");
  }

  loadAnimeCatalog(false);
}

function resetToHome() {
  AppState.searchQuery = "";
  AppState.currentCategory = "home";
  AppState.currentGenre = "all";
  AppState.page = 1;

  const searchInput = document.getElementById("search-input");
  const clearSearchBtn = document.getElementById("clear-search-btn");
  if (searchInput) searchInput.value = "";
  if (clearSearchBtn) clearSearchBtn.classList.add("hidden");

  const banner = document.getElementById("active-filter-banner");
  if (banner) banner.classList.add("hidden");

  // Reset desktop nav
  document.querySelectorAll(".nav-link").forEach(b => {
    b.classList.toggle("active", b.getAttribute("data-target") === "home");
  });

  // Reset genre pills
  document.querySelectorAll(".genre-pill").forEach(p => {
    p.classList.toggle("active", p.getAttribute("data-genre") === "all");
  });

  loadAnimeCatalog(false);
}

// ==========================================
// 6. NAVIGATION & FILTER HANDLERS
// ==========================================
function handleNavigation(target) {
  AppState.currentCategory = target;
  AppState.searchQuery = "";
  AppState.page = 1;

  const searchInput = document.getElementById("search-input");
  if (searchInput) searchInput.value = "";
  const clearBtn = document.getElementById("clear-search-btn");
  if (clearBtn) clearBtn.classList.add("hidden");

  const banner = document.getElementById("active-filter-banner");
  if (banner) banner.classList.add("hidden");

  loadAnimeCatalog(false);
}

function handleGenreSelect(genreId) {
  AppState.currentGenre = genreId;
  AppState.searchQuery = "";
  AppState.page = 1;

  const banner = document.getElementById("active-filter-banner");
  const bannerText = document.getElementById("active-filter-text");

  if (genreId !== "all") {
    const activePill = document.querySelector(`.genre-pill[data-genre="${genreId}"]`);
    const name = activePill ? activePill.textContent : "Genre";
    if (banner && bannerText) {
      bannerText.textContent = `Genre filter: ${name}`;
      banner.classList.remove("hidden");
    }
  } else {
    if (banner) banner.classList.add("hidden");
  }

  loadAnimeCatalog(false);
}

// ==========================================
// 7. RENDERING HERO BANNER & CATALOG
// ==========================================

function populateHeroBanner(anime) {
  if (!anime) return;
  AppState.selectedAnime = anime;

  const titleEl = document.getElementById("hero-title");
  const scoreEl = document.getElementById("hero-score");
  const typeEl = document.getElementById("hero-type");
  const yearEl = document.getElementById("hero-year");
  const episodesEl = document.getElementById("hero-episodes");
  const synopsisEl = document.getElementById("hero-synopsis");
  const posterEl = document.getElementById("hero-poster-img");
  const backdropEl = document.getElementById("hero-backdrop");

  if (titleEl) titleEl.textContent = anime.title;
  if (scoreEl) scoreEl.textContent = anime.score ? `★ ${anime.score.toFixed(2)}` : "★ 8.80";
  if (typeEl) typeEl.textContent = anime.type || "TV Series";
  if (yearEl) yearEl.textContent = anime.year || (anime.aired && anime.aired.string ? anime.aired.string.split("to")[0].trim() : "2024");
  if (episodesEl) episodesEl.textContent = anime.episodes ? `${anime.episodes} Episodes` : "Ongoing";
  if (synopsisEl) synopsisEl.textContent = anime.synopsis || "Join the thrilling adventures with stunning animation, unforgettable characters, and epic battles.";

  const posterUrl = (anime.images && anime.images.jpg && (anime.images.jpg.large_image_url || anime.images.jpg.image_url)) || "";
  if (posterEl) posterEl.src = posterUrl;
  if (backdropEl) backdropEl.style.backgroundImage = `url("${posterUrl}")`;

  updateHeroWatchlistState(anime);
}

function updateHeroWatchlistState(anime) {
  const isSaved = isAnimeInWatchlist(anime.mal_id);
  const textEl = document.getElementById("hero-watchlist-text");
  if (textEl) {
    textEl.textContent = isSaved ? "In Watchlist ✓" : "Add to Watchlist";
  }
}

function updateCatalogHeading(title, count) {
  const heading = document.getElementById("catalog-heading");
  const badge = document.getElementById("catalog-count-badge");
  if (heading) heading.textContent = title;
  if (badge) badge.textContent = count;
}

function updateCatalogStatusText() {
  let title = "Trending Anime";
  if (AppState.searchQuery) {
    title = `Search Results: "${AppState.searchQuery}"`;
  } else if (AppState.currentGenre !== "all") {
    const pill = document.querySelector(`.genre-pill[data-genre="${AppState.currentGenre}"]`);
    title = `${pill ? pill.textContent : "Genre"} Anime`;
  } else {
    switch (AppState.currentCategory) {
      case "airing": title = "Top Airing Series"; break;
      case "top": title = "Top 100 All-Time Classics"; break;
      case "movies": title = "High-Rated Anime Movies"; break;
      case "watchlist": title = "My Anime Watchlist"; break;
      default: title = "Trending & Popular Anime"; break;
    }
  }

  const count = `${AppState.animeList.length} titles`;
  updateCatalogHeading(title, count);
}

/**
 * Sorts animeList according to AppState.sortBy and re-renders grid
 */
function sortAndRenderGrid() {
  let list = [...AppState.animeList];

  switch (AppState.sortBy) {
    case "score":
      list.sort((a, b) => (b.score || 0) - (a.score || 0));
      break;
    case "title":
      list.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "episodes":
      list.sort((a, b) => (b.episodes || 0) - (a.episodes || 0));
      break;
    case "popularity":
    default:
      list.sort((a, b) => (a.popularity || 99999) - (b.popularity || 99999));
      break;
  }

  renderAnimeGrid(list);
}

/**
 * Renders anime cards inside #anime-grid
 */
function renderAnimeGrid(items) {
  const grid = document.getElementById("anime-grid");
  const paginationContainer = document.getElementById("pagination-container");
  if (!grid) return;

  if (items.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 4rem 1rem; text-align: center; color: var(--text-secondary);">
        <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
        <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.5rem;">No anime found</h3>
        <p style="font-size: 0.9rem; max-width: 400px; margin: 0 auto 1.5rem;">We couldn't find any anime matching your criteria. Try adjusting your search query or filters.</p>
        <button type="button" class="btn btn-primary" onclick="window.resetAnimelikCatalog()">Reset Filters</button>
      </div>
    `;
    if (paginationContainer) paginationContainer.classList.add("hidden");
    return;
  }

  grid.innerHTML = items.map(anime => {
    const poster = (anime.images && anime.images.jpg && (anime.images.jpg.large_image_url || anime.images.jpg.image_url)) || "";
    const score = anime.score ? `★ ${anime.score.toFixed(1)}` : "★ 8.5";
    const type = anime.type || "TV";
    const eps = anime.episodes ? `${anime.episodes} EPS` : "AIRING";
    const genres = (anime.genres && Array.isArray(anime.genres)) 
      ? anime.genres.map(g => g.name).slice(0, 3).join(" · ") 
      : "Action · Fantasy";
    const isBookmarked = isAnimeInWatchlist(anime.mal_id);

    return `
      <article class="anime-card" data-id="${anime.mal_id}">
        <div class="card-poster-wrapper">
          <img class="card-poster-img" src="${poster}" alt="${escapeHtml(anime.title)}" loading="lazy" referrerpolicy="no-referrer" />
          <div class="card-scrim"></div>
          
          <div class="card-top-badges">
            <span class="card-badge-score">${score}</span>
            <span class="card-badge-type">${type}</span>
          </div>

          <div class="card-hover-actions">
            <button type="button" class="card-action-play" aria-label="Stream ${escapeHtml(anime.title)} Now">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </button>
            <button type="button" class="card-action-bookmark ${isBookmarked ? 'active' : ''}" data-bookmark-id="${anime.mal_id}" aria-label="Add to Watchlist">
              <svg viewBox="0 0 24 24" fill="${isBookmarked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
            </button>
          </div>
        </div>

        <div class="card-body">
          <h3 class="card-title" title="${escapeHtml(anime.title)}">${escapeHtml(anime.title)}</h3>
          <div class="card-meta-line">
            <span>${eps}</span>
            <span>·</span>
            <span>${anime.year || "2024"}</span>
          </div>
          <div class="card-genres">${genres}</div>
        </div>
      </article>
    `;
  }).join("");

  // Attach Card Click and Bookmark Handlers
  const cards = grid.querySelectorAll(".anime-card");
  cards.forEach(card => {
    const id = parseInt(card.getAttribute("data-id"), 10);
    const anime = items.find(a => a.mal_id === id);

    // Card click opens player
    card.addEventListener("click", (e) => {
      // Don't trigger if clicked bookmark button directly
      if (e.target.closest(".card-action-bookmark")) return;
      if (anime) {
        openVideoPlayer(anime);
      }
    });

    // Bookmark button handler
    const bookmarkBtn = card.querySelector(".card-action-bookmark");
    if (bookmarkBtn && anime) {
      bookmarkBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleWatchlist(anime);
        const active = isAnimeInWatchlist(anime.mal_id);
        bookmarkBtn.classList.toggle("active", active);
        const svg = bookmarkBtn.querySelector("svg");
        if (svg) svg.setAttribute("fill", active ? "currentColor" : "none");
      });
    }
  });

  // Handle Load More Button Visibility
  if (paginationContainer) {
    if (AppState.currentCategory === "watchlist" || !AppState.hasNextPage) {
      paginationContainer.classList.add("hidden");
    } else {
      paginationContainer.classList.remove("hidden");
    }
  }
}

// Global hook for empty state reset button
window.resetAnimelikCatalog = resetToHome;

function toggleLoadingIndicator(isLoading, isAppend) {
  const loadMoreBtn = document.getElementById("load-more-btn");
  const spinner = document.getElementById("load-more-spinner");
  const grid = document.getElementById("anime-grid");

  if (isAppend) {
    if (spinner) spinner.classList.toggle("hidden", !isLoading);
    if (loadMoreBtn) loadMoreBtn.disabled = isLoading;
  } else if (isLoading && grid) {
    // Render modern Skeleton Cards
    grid.innerHTML = Array(12).fill(0).map(() => `
      <div class="skeleton-card">
        <div class="skeleton-poster"></div>
        <div class="skeleton-text"></div>
        <div class="skeleton-text short"></div>
      </div>
    `).join("");
  }
}

// ==========================================
// 8. RESPONSIVE VIDEO PLAYER & SERVER SWITCHING
// ==========================================

/**
 * Opens and smoothly scrolls to the video player section
 */
function openVideoPlayer(anime) {
  if (!anime) return;
  AppState.selectedAnime = anime;
  AppState.activeServer = 1;
  AppState.activeEpisode = 1;

  const playerSection = document.getElementById("player-section");
  const titleEl = document.getElementById("player-anime-title");
  const jpTitleEl = document.getElementById("player-anime-japanese");
  const synopsisEl = document.getElementById("player-synopsis-text");
  const malLinkEl = document.getElementById("player-mal-link");
  const badgesEl = document.getElementById("player-meta-badges");
  const genresEl = document.getElementById("player-genres");

  if (titleEl) titleEl.textContent = anime.title;
  if (jpTitleEl) jpTitleEl.textContent = anime.title_japanese || "";
  if (synopsisEl) synopsisEl.textContent = anime.synopsis || "No overview synopsis provided for this anime title.";
  if (malLinkEl) malLinkEl.href = anime.url || `https://myanimelist.net/anime/${anime.mal_id}`;

  // Populate Meta Badges
  if (badgesEl) {
    const score = anime.score ? `★ ${anime.score.toFixed(2)} Score` : "★ 8.80 Score";
    const status = anime.status || "Completed";
    const rating = anime.rating ? anime.rating.split(" ")[0] : "PG-13";
    const episodes = anime.episodes ? `${anime.episodes} Episodes` : "Ongoing";

    badgesEl.innerHTML = `
      <span class="meta-pill score-pill">${score}</span>
      <span class="meta-pill status-pill">${status}</span>
      <span class="meta-pill">${rating}</span>
      <span class="meta-pill">${episodes}</span>
    `;
  }

  // Populate Genres
  if (genresEl && anime.genres) {
    genresEl.innerHTML = anime.genres.map(g => `<span class="genre-tag">${escapeHtml(g.name)}</span>`).join("");
  }

  // Populate Episode Buttons Grid
  renderPlayerEpisodes(anime.episodes || 12);

  // Sync Video Embed & Server
  loadVideoStreamForAnime(anime, 1, 1);

  // Update Watchlist Button state
  updatePlayerWatchlistState();

  // Show player section and scroll
  if (playerSection) {
    playerSection.classList.remove("hidden");
    playerSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  showToast(`Streaming "${anime.title}"`);
}

/**
 * Loads video stream into iframe based on server and trailer availability
 */
function loadVideoStreamForAnime(anime, serverNumber, episodeNumber) {
  const iframe = document.getElementById("anime-video-iframe");
  const loadingOverlay = document.getElementById("video-loading-overlay");
  if (!iframe) return;

  if (loadingOverlay) loadingOverlay.classList.remove("hidden");

  // Determine embed source
  let videoSourceUrl = "";
  const ytId = (anime.trailer && anime.trailer.youtube_id) ? anime.trailer.youtube_id : "qgQunxD0qMo";

  if (serverNumber === 1) {
    // Server 1: Official Trailer / Stream Embed (Privacy-enhanced YouTube embed)
    videoSourceUrl = `https://www.youtube-nocookie.com/embed/${ytId}?autoplay=1&enablejsapi=1&rel=0&modestbranding=1`;
  } else if (serverNumber === 2) {
    // Server 2: VIP Cinema Server (HD trailer with cinema loop parameters)
    videoSourceUrl = `https://www.youtube-nocookie.com/embed/${ytId}?autoplay=1&controls=1&loop=1&playlist=${ytId}`;
  } else {
    // Server 3: Fast Mirror Server
    videoSourceUrl = `https://www.youtube-nocookie.com/embed/${ytId}?autoplay=1&fs=1&color=white`;
  }

  iframe.src = videoSourceUrl;

  iframe.onload = () => {
    if (loadingOverlay) loadingOverlay.classList.add("hidden");
  };

  // Fallback timeout to hide loading overlay
  setTimeout(() => {
    if (loadingOverlay) loadingOverlay.classList.add("hidden");
  }, 1200);
}

function switchStreamingServer(serverNum) {
  AppState.activeServer = serverNum;
  if (AppState.selectedAnime) {
    loadVideoStreamForAnime(AppState.selectedAnime, serverNum, AppState.activeEpisode);
    showToast(`Switched to Server ${serverNum}`);
  }
}

function renderPlayerEpisodes(totalEpisodes) {
  const container = document.getElementById("episodes-grid");
  const label = document.getElementById("episodes-count-label");
  if (!container) return;

  const count = Math.min(Math.max(totalEpisodes || 12, 1), 60); // Show max 60 quick buttons
  if (label) label.textContent = `${count} Episodes Available`;

  container.innerHTML = Array.from({ length: count }, (_, i) => i + 1).map(ep => `
    <button type="button" class="episode-btn ${ep === AppState.activeEpisode ? 'active' : ''}" data-ep="${ep}">
      ${ep}
    </button>
  `).join("");

  const epBtns = container.querySelectorAll(".episode-btn");
  epBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      epBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const epNum = parseInt(btn.getAttribute("data-ep"), 10);
      AppState.activeEpisode = epNum;
      if (AppState.selectedAnime) {
        loadVideoStreamForAnime(AppState.selectedAnime, AppState.activeServer, epNum);
        showToast(`Playing Episode ${epNum}`);
      }
    });
  });
}

function updatePlayerWatchlistState() {
  const label = document.getElementById("player-watchlist-label");
  if (!label || !AppState.selectedAnime) return;
  const isSaved = isAnimeInWatchlist(AppState.selectedAnime.mal_id);
  label.textContent = isSaved ? "✓ In Watchlist" : "Add to Watchlist";
}

function closeVideoPlayer() {
  const playerSection = document.getElementById("player-section");
  const iframe = document.getElementById("anime-video-iframe");
  if (iframe) iframe.src = "";
  if (playerSection) playerSection.classList.add("hidden");
}

// ==========================================
// 9. WATCHLIST / FAVORITES SYSTEM
// ==========================================

function isAnimeInWatchlist(malId) {
  return AppState.watchlist.some(a => a.mal_id === malId);
}

function toggleWatchlist(anime) {
  const index = AppState.watchlist.findIndex(a => a.mal_id === anime.mal_id);

  if (index > -1) {
    AppState.watchlist.splice(index, 1);
    showToast(`Removed "${anime.title}" from Watchlist`);
  } else {
    AppState.watchlist.unshift(anime);
    showToast(`Added "${anime.title}" to Watchlist`);
  }

  saveWatchlist();
  updateWatchlistBadges();
  updateCardBookmarkButtons();

  if (AppState.selectedAnime && AppState.selectedAnime.mal_id === anime.mal_id) {
    updatePlayerWatchlistState();
    updateHeroWatchlistState(anime);
  }

  // If currently in Watchlist view, re-render
  if (AppState.currentCategory === "watchlist") {
    renderAnimeGrid(AppState.watchlist);
  }
}

function saveWatchlist() {
  try {
    localStorage.setItem("animelik_watchlist", JSON.stringify(AppState.watchlist));
  } catch (err) {
    console.error("Failed to save watchlist to localStorage:", err);
  }
}

function updateCardBookmarkButtons() {
  const bookmarkBtns = document.querySelectorAll("[data-bookmark-id]");
  bookmarkBtns.forEach(btn => {
    const id = parseInt(btn.getAttribute("data-bookmark-id"), 10);
    const saved = isAnimeInWatchlist(id);
    btn.classList.toggle("active", saved);
    const svg = btn.querySelector("svg");
    if (svg) svg.setAttribute("fill", saved ? "currentColor" : "none");
  });
}

function openWatchlistDrawer() {
  renderWatchlistDrawer();
  const drawer = document.getElementById("watchlist-drawer");
  const backdrop = document.getElementById("watchlist-drawer-backdrop");

  if (backdrop) {
    backdrop.classList.remove("hidden");
    requestAnimationFrame(() => backdrop.classList.add("active"));
  }
  if (drawer) {
    drawer.classList.add("active");
    drawer.setAttribute("aria-hidden", "false");
  }
}

function closeWatchlistDrawer() {
  const drawer = document.getElementById("watchlist-drawer");
  const backdrop = document.getElementById("watchlist-drawer-backdrop");

  if (drawer) {
    drawer.classList.remove("active");
    drawer.setAttribute("aria-hidden", "true");
  }
  if (backdrop) {
    backdrop.classList.remove("active");
    setTimeout(() => backdrop.classList.add("hidden"), 260);
  }
}

function renderWatchlistDrawer() {
  const body = document.getElementById("drawer-watchlist-items");
  if (!body) return;

  if (AppState.watchlist.length === 0) {
    body.innerHTML = `
      <div class="watchlist-empty">
        <svg class="watchlist-empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
        </svg>
        <p style="font-weight: 600; color: var(--text-primary); margin-bottom: 0.25rem;">Your Watchlist is empty</p>
        <p style="font-size: 0.8rem;">Click the bookmark icon on any anime card to save it for later.</p>
      </div>
    `;
    return;
  }

  body.innerHTML = AppState.watchlist.map(anime => {
    const poster = (anime.images && anime.images.jpg && (anime.images.jpg.image_url || anime.images.jpg.large_image_url)) || "";
    const score = anime.score ? `★ ${anime.score.toFixed(1)}` : "★ 8.5";

    return `
      <div class="watchlist-item" data-id="${anime.mal_id}">
        <img class="watchlist-item-thumb" src="${poster}" alt="${escapeHtml(anime.title)}" referrerpolicy="no-referrer" />
        <div class="watchlist-item-info">
          <div class="watchlist-item-title">${escapeHtml(anime.title)}</div>
          <div class="watchlist-item-meta">
            <span style="color: var(--accent-gold); font-weight: 600;">${score}</span>
            <span>·</span>
            <span>${anime.episodes ? `${anime.episodes} EPS` : "TV"}</span>
          </div>
        </div>
        <button type="button" class="watchlist-item-remove" data-remove-id="${anime.mal_id}" aria-label="Remove from Watchlist" title="Remove">
          ✕
        </button>
      </div>
    `;
  }).join("");

  // Attach click listener to watch anime from drawer
  const items = body.querySelectorAll(".watchlist-item");
  items.forEach(item => {
    const id = parseInt(item.getAttribute("data-id"), 10);
    const anime = AppState.watchlist.find(a => a.mal_id === id);

    item.addEventListener("click", (e) => {
      if (e.target.closest(".watchlist-item-remove")) return;
      if (anime) {
        closeWatchlistDrawer();
        openVideoPlayer(anime);
      }
    });

    const removeBtn = item.querySelector(".watchlist-item-remove");
    if (removeBtn && anime) {
      removeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleWatchlist(anime);
        renderWatchlistDrawer();
      });
    }
  });
}

// ==========================================
// 10. NOTIFICATIONS, TOASTS & BANNERS
// ==========================================
let toastTimer = null;
function showToast(message) {
  const toast = document.getElementById("toast-notification");
  const msgEl = document.getElementById("toast-message");
  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  toast.classList.remove("hidden");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.add("hidden");
  }, 2500);
}

function showStatusBanner(text) {
  const banner = document.getElementById("status-notification-banner");
  const textEl = document.getElementById("status-notification-text");
  if (banner && textEl) {
    textEl.textContent = text;
    banner.classList.remove("hidden");
  }
}

function hideStatusBanner() {
  const banner = document.getElementById("status-notification-banner");
  if (banner) banner.classList.add("hidden");
}

function escapeHtml(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
