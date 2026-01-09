// Ambil elemen dari HTML
const tombolMulai = document.getElementById('tombolMulai');
const gameContainer = document.getElementById('game-container');

// Fungsi saat tombol diklik
tombolMulai.addEventListener('click', function() {
    // Ganti konten game container saat tombol diklik
    gameContainer.innerHTML = '<h2>Game Sedang Berjalan... (Simulasi)</h2><p>Ini adalah JavaScript yang mengontrol game sederhana.</p>';
    console.log('Tombol Mulai Diklik!');
});

// Contoh interaksi lain
console.log('File JavaScript Dimuat!');
