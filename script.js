let animeList = [];
let currentAnime = null;
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// جلب الأنميات من Jikan API عند فتح الموقع
async function fetchAnime() {
    try {
        const response = await fetch('https://api.jikan.moe/v4/top/anime');
        const data = await response.json();
        animeList = data.data;
        renderGrid(animeList);
        if(animeList.length > 0) {
            selectAnime(animeList[0].mal_id);
        }
    } catch (error) {
        document.getElementById('animeGrid').innerHTML = '<p style="color:red; text-align:center; grid-column:span 2;">خطأ في الاتصال بسيرفر الأنمي.</p>';
    }
}

function renderGrid(data) {
    const grid = document.getElementById('animeGrid');
    grid.innerHTML = '';
    data.forEach(anime => {
        grid.innerHTML += `
            <div class="anime-card" onclick="selectAnime(${anime.mal_id})">
                <div class="anime-poster-wrapper">
                    <span class="anime-badge">⭐ ${anime.score || 'N/A'}</span>
                    <img src="${anime.images.jpg.image_url}" alt="${anime.title}">
                </div>
                <div class="anime-details">
                    <div class="anime-name">${anime.title}</div>
                    <div class="anime-genres">${anime.type || 'TV'} (${anime.year || 'مستمر'})</div>
                </div>
            </div>
        `;
    });
}

function selectAnime(id) {
    currentAnime = animeList.find(a => a.mal_id === id);
    if(!currentAnime) return;

    document.getElementById('activeTitle').innerText = currentAnime.title;
    document.getElementById('activeDescription').innerText = currentAnime.synopsis ? currentAnime.synopsis.substring(0, 200) + '...' : 'لا توجد قصة متاحة.';
    document.getElementById('sidebarAnimeName').innerText = currentAnime.title_japanese || currentAnime.title;
    
    // عرض الفيديو التعريفي (Trailer) إن وجد
    if(currentAnime.trailer && currentAnime.trailer.embed_url) {
        document.getElementById('mainPlayer').src = currentAnime.trailer.embed_url;
    } else {
        document.getElementById('mainPlayer').src = 'https://www.youtube.com/embed/t1H4hT_8Z1Y';
    }

    // تفاصيل جانبية
    document.getElementById('episodesListContainer').innerHTML = `
        <p><b>التصنيف العمري:</b> ${currentAnime.rating || 'غير متوفر'}</p><br>
        <p><b>عدد الحلقات:</b> ${currentAnime.episodes || 'غير محدد'}</p><br>
        <p><b>الحالة:</b> ${currentAnime.status}</p><br>
        <p><b>التقييم العالمي:</b> ⭐ ${currentAnime.score}</p>
    `;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// البحث في الأنميات
async function handleSearch(e) {
    if(e.key === 'Enter') {
        const query = document.getElementById('searchInput').value;
        if(!query) return;
        try {
            const res = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&limit=12`);
            const data = await res.json();
            animeList = data.data;
            renderGrid(animeList);
        } catch(err) {
            console.log(err);
        }
    }
}

function toggleTheme() {
    document.body.classList.toggle('light-mode');
    const btn = document.getElementById('themeToggleBtn');
    if (document.body.classList.contains('light-mode')) {
        btn.innerHTML = '☀️';
        localStorage.setItem('theme', 'light');
    } else {
        btn.innerHTML = '🌙';
        localStorage.setItem('theme', 'dark');
    }
}

function toggleFavorite() {
    if(!currentAnime) return;
    alert(`تمت إضافة ${currentAnime.title} إلى المفضلة بنجاح!`);
}

window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-mode');
        document.getElementById('themeToggleBtn').innerHTML = '☀️';
    }
    fetchAnime();
});
