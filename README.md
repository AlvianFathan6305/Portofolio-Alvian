# 🌐 Web Portfolio — Alvian Rizkya Fathan

Website portfolio pribadi resmi milik **Alvian Rizkya Fathan** — Mahasiswa S1 Teknik Informatika di **Universitas Mercu Buana** dengan fokus minat pada **Backend Development**, **Web Development**, dan **Computer Networking**, serta aktif berorganisasi di **DPM** dan **BEM Fasilkom Mercu Buana**.

Dibangun murni menggunakan **HTML5, CSS3, dan Vanilla JavaScript** tanpa framework eksternal sehingga ringan, cepat, responsif, dan siap langsung di-deploy ke **Netlify**.

---

## ✨ Fitur Utama

- **Desain Modern & Interaktif**: Glassmorphism Bento Grid, animasi kanvas topologi jaringan komputer, 3D tilt profile showcase, spotlight hover effect, dan scroll progress indicator.
- **Mode Gelap & Terang (Dark/Light Mode)**: Mendukung pergantian tema secara instan dengan penyimpanan preferensi otomatis.
- **Dukungan Dua Bahasa (ID / EN)**: Toggle Bahasa Indonesia dan Bahasa Inggris secara instan tanpa reload halaman.
- **Terminal Developer Interaktif**: Simulasi command-line (`whoami`, `cat stack.json`, `ifconfig --skills`, `ping alvian`).
- **Riwayat Organisasi & Pendidikan Lengkap**: Menampilkan rekam jejak di **DPM Fasilkom Mercu Buana** (termasuk Ketua Pelaksana Pemilu Raya 2026) dan **BEM Fasilkom Mercu Buana**.
- **Sinkronisasi GitHub Real-Time**: Mengambil daftar repositori publik terbaru dari `@AlvianFathan6305` menggunakan GitHub REST API.
- **Netlify Forms Ready**: Formulir kontak sudah terkonfigurasi dengan atribut `data-netlify="true"` serta dilengkapi konfigurasi header & caching di `netlify.toml`.

---

## 🔗 Tautan Resmi

- **Instagram**: [@alvianfathann](https://www.instagram.com/alvianfathann?avpt=Y3BlZzB1amZqYXNq&utm_source=qr)
- **GitHub**: [AlvianFathan6305](https://github.com/AlvianFathan6305)
- **TikTok**: [@alvianfathan](https://www.tiktok.com/@alvianfathan?_r=1&_t=ZS-9Bipgiedj2S)
- **LinkedIn**: [in/alvianrizkyafathan](https://www.linkedin.com/in/alvianrizkyafathan)

---

## 📁 Struktur Proyek

```text
weblog-alvian/
├── assets/
│   ├── profile.jpg                  # Foto profil Alvian Rizkya Fathan
│   └── CV-Alvian-Rizkya-Fathan.pdf  # File CV resmi yang dapat diunduh
├── index.html                       # Struktur utama halaman portfolio
├── style.css             # Desain visual, responsivitas, dan animasi CSS3
├── script.js             # Logika interaktif, i18n, terminal, kanvas & GitHub API
├── netlify.toml          # Konfigurasi otomatis deploy & security headers Netlify
├── .gitignore            # Daftar file yang diabaikan Git
└── README.md             # Dokumentasi repositori
```

---

## 🚀 Cara Upload ke GitHub & Deploy ke Netlify

### 1. Push ke Repository GitHub Baru
1. Buat repository baru di GitHub ([github.com/new](https://github.com/new)), misalnya dengan nama `portfolio-alvian` (biarkan kosong tanpa centang README).
2. Jalankan perintah berikut di terminal folder proyek ini:
   ```bash
   git remote add origin https://github.com/AlvianFathan6305/portfolio-alvian.git
   git branch -M main
   git push -u origin main
   ```

### 2. Deploy Otomatis di Netlify
1. Buka [app.netlify.com](https://app.netlify.com/) dan login menggunakan akun **GitHub** (`AlvianFathan6305`).
2. Klik **Add new site** → **Import an existing project** → pilih **GitHub**.
3. Pilih repository `portfolio-alvian`.
4. Pengaturan build akan terdeteksi otomatis dari `netlify.toml`:
   - **Build command**: *(kosongkan)*
   - **Publish directory**: `.`
5. Klik **Deploy site** — selesai! Setiap kali Anda melakukan `git push` ke GitHub, website di Netlify akan otomatis ter-update.
