(() => {
  "use strict";

  const translations = {
    id: {
      nav_focus: "Fokus",
      nav_about: "Pendidikan",
      nav_org: "Organisasi",
      nav_projects: "Studi Kasus",
      nav_skills: "Keahlian",
      nav_contact: "Kontak",
      nav_cv: "CV (PDF)",
      hero_status: "Terbuka untuk Magang & Posisi Entry-Level · Jakarta",
      hero_role: "Backend Web Development & Computer Networking",
      hero_lead:
        "Mahasiswa tingkat akhir Teknik Informatika di <em>Universitas Mercu Buana</em> (IPK 3.64/4.00). Saya merancang sistem backend berbasis Laravel & Node.js, struktur basis data SQL yang terukur, serta konfigurasi infrastruktur jaringan TCP/IP—didukung rekam jejak kepemimpinan nyata di tingkat fakultas.",
      btn_explore: "Lihat Studi Kasus Teknis",
      btn_cv: "Unduh CV",
      stat_gpa: "IPK Kumulatif (Skala 4.00)",
      stat_team: "Panitia Pemilu Raya Dipimpin",
      stat_prog: "Program Kerja Diaudit & Diawasi",
      stat_event: "Peserta Event Terkelola",
      sec_focus: "Tiga Pilar Kompetensi",
      focus_intro:
        "Kombinasi yang saling melengkapi antara pengembangan aplikasi sisi server, pemahaman infrastruktur jaringan tempat aplikasi berjalan, serta ketertiban manajemen tim.",
      p1_title: "Rekayasa Backend & Database",
      p1_desc:
        "Membangun logika bisnis sisi server dengan struktur MVC di Laravel dan layanan asinkron di Node.js, didukung skema tabel relasional MySQL yang ter-normalisasi dan aman.",
      p2_title: "Infrastruktur & Diagnostik Jaringan",
      p2_desc:
        "Memahami cara kerja komunikasi data mulai dari pengalamatan IPv4/subnetting, perancangan LAN/WAN, otomasi DHCP & DNS, hingga penelusuran kendala konektivitas secara sistematis.",
      p3_title: "Tata Kelola & Kepemimpinan Tim",
      p3_desc:
        "Terbiasa memimpin jalannya kepanitiaan strategis, mengawasi kepatuhan program kerja terhadap regulasi, serta menjaga komunikasi efektif antar-pemangku kepentingan.",
      sec_about: "Pendidikan & Latar Belakang",
      about_p1:
        "Sebagai mahasiswa Teknik Informatika, saya percaya bahwa pengembang perangkat lunak yang baik tidak hanya menulis kode yang berjalan, tetapi juga memahami bagaimana data disimpan secara efisien di basis data dan ditransmisikan melalui jaringan.",
      about_p2:
        "Selama masa studi di Universitas Mercu Buana, saya menjaga konsistensi akademik sembari mengambil peran aktif di lembaga eksekutif (BEM) dan legislatif/pengawasan (DPM) fakultas—melatih ketelitian analisis sekaligus kedisiplinan eksekusi di lapangan.",
      edu_degree: "S1 Teknik Informatika (Bachelor of Informatics Engineering) · IPK 3.64 / 4.00",
      edu_period: "Sep 2023 – Sep 2027 (Target)",
      cw_label: "Fokus Studi:",
      edu_pt1: "Merancang dan mengimplementasikan aplikasi web dinamis dengan pemisahan logika backend, frontend, dan relasi database.",
      edu_pt2: "Mempraktikkan perancangan topologi jaringan komputer, pengalamatan IP, layanan server dasar, serta analisis gangguan jaringan.",
      edu_pt3: "Menyelesaikan proyek kolaboratif rekayasa perangkat lunak, pengolahan basis data SQL, dan pengenalan kecerdasan buatan.",
      sec_org: "Riwayat Organisasi",
      org_hint:
        "Progresi tanggung jawab dari eksekusi program di BEM hingga fungsi pengawasan & pimpinan kepanitiaan di DPM.",
      dpm_date: "Sep 2025 – Sep 2026",
      dpm_role: "Staff of Supervision Division & Ketua Pelaksana Pemilu Raya 2026",
      dpm_impact_label: "Pencapaian Utama",
      dpm_impact_text:
        "Dipercaya memimpin 15+ anggota panitia sebagai Ketua Pelaksana Pemilu Raya Mahasiswa 2026 sekaligus mengaudit kepatuhan regulasi pada 10+ program kerja organisasi fakultas.",
      dpm_pt1:
        "Memantau dan mengevaluasi ketercapaian 10+ program kerja organisasi mahasiswa terhadap standar regulasi yang telah ditetapkan.",
      dpm_pt2:
        "Melakukan supervisi langsung pada 10+ aktivitas kemahasiswaan dan menyusun rekomendasi perbaikan berbasis temuan evaluasi di lapangan.",
      dpm_pt3:
        "Bertanggung jawab penuh atas perencanaan alur, pembagian tugas 15+ panitia, serta kelancaran operasional Pemilihan Umum Raya 2026 tingkat fakultas.",
      bem_role: "Staff of Student Interests and Talents Department",
      bem_impact_label: "Pencapaian Utama",
      bem_impact_text:
        "Mengelola eksekusi 5+ program pengembangan bakat mahasiswa serta mendukung kelancaran operasional kolaborasi eksternal Highschoolfest 2024 bagi 200+ peserta.",
      bem_pt1:
        "Merancang dan mengkoordinasikan 5+ kegiatan kemahasiswaan di bidang penyaluran minat, bakat, dan kreativitas mahasiswa.",
      bem_pt2:
        "Menjalin kolaborasi media partner bersama Highschoolfest 2024 dan terjun langsung dalam tim operasional lapangan untuk melayani 200+ peserta.",
      bem_pt3:
        "Berkoordinasi aktif dengan 10+ rekan kepanitiaan lintas divisi dan perwakilan himpunan mahasiswa agar setiap agenda berjalan tepat waktu.",
      sec_projects: "Studi Kasus & Kode",
      proj_hint:
        'Klik "Rincian Arsitektur" pada tiap kartu untuk membaca alur masalah, pendekatan teknis, dan hasilnya.',
      filter_all: "Semua",
      btn_case_open: "Rincian Arsitektur",
      btn_case_close: "Tutup Rincian",
      case_prob_label: "Permasalahan",
      case_sol_label: "Pendekatan & Logika Teknis",
      proj1_title: "Sistem Informasi & Manajemen Data Berbasis Web (MVC)",
      proj1_desc:
        "Pengembangan aplikasi pengelolaan data terpusat dengan autentikasi berlapis, validasi input sisi server, dan relasi tabel MySQL yang terstruktur.",
      proj1_prob:
        "Pencatatan data yang tidak terstandarisasi menyulitkan pencarian riwayat, rawan duplikasi entri, dan tidak memiliki pembagian hak akses pengguna.",
      proj1_sol:
        "Mendesain skema relasional (Primary/Foreign Key) di MySQL, memisahkan rute, controller, dan model menggunakan pola MVC Laravel, serta menerapkan middleware autentikasi dan sanitasi form request.",
      proj2_title: "Perancangan Topologi Multi-Segmen LAN/WAN & Layanan Inti",
      proj2_desc:
        "Implementasi dan simulasi arsitektur jaringan tersegmen dengan pembagian subnet efisien, otomasi distribusi IP, serta prosedur diagnostik gangguan.",
      proj2_prob:
        "Jaringan skala beberapa divisi yang berada dalam satu broadcast domain tunggal rentan mengalami tabrakan IP statis dan sulit dilacak saat terjadi putus koneksi.",
      proj2_sol:
        "Menghitung alokasi blok IPv4 sesuai kapasitas tiap segmen, menghubungkan antar-jaringan melalui perutean LAN/WAN, mengaktifkan DHCP pool terpusat dan resolusi nama DNS, lalu memvalidasi jalur paket end-to-end.",
      proj3_title: "Layanan API Node.js & Web Portfolio Statis Berperforma Tinggi",
      proj3_desc:
        "Eksplorasi komunikasi data asinkron berbasis JSON di Node.js serta pengembangan web portofolio mandiri tanpa beban library eksternal dengan alur CI/CD otomatis ke Netlify.",
      proj3_prob:
        "Banyak situs portofolio menjadi lambat di perangkat seluler akibat ketergantungan framework besar dan harus di-build ulang setiap ada pembaruan repositori GitHub.",
      proj3_sol:
        "Menggunakan HTML/CSS/JS murni berarsitektur modular, menarik data repositori secara dinamis lewat GitHub REST API menggunakan async/await, dan menghubungkan branch utama GitHub langsung ke pipeline produksi Netlify.",
      gh_heading: "Sinkronisasi Repositori GitHub",
      sec_skills: "Peta Keahlian",
      skill_hint: "Pilih salah satu keahlian untuk melihat konteks penggunaannya secara spesifik.",
      skill_cat1: "Backend & Web",
      skill_cat2: "Jaringan Komputer",
      skill_cat3: "Manajerial & Tim",
      sec_contact: "Kontak",
      contact_heading: "Mari Berdiskusi",
      contact_intro:
        "Saya terbuka untuk kesempatan magang (internship), posisi junior di bidang Backend / Jaringan Komputer, maupun kolaborasi proyek web. Pesan dari formulir di samping akan langsung terkirim ke inbox email saya.",
      btn_copy: "Salin",
      form_name: "Nama Lengkap",
      form_email: "Alamat Email",
      form_subject: "Subjek Keperluan",
      form_msg: "Pesan",
      form_submit: "Kirim Pesan"
    },
    en: {
      nav_focus: "Focus",
      nav_about: "Education",
      nav_org: "Leadership",
      nav_projects: "Case Studies",
      nav_skills: "Skills",
      nav_contact: "Contact",
      nav_cv: "CV (PDF)",
      hero_status: "Open to Internships & Entry-Level Roles · Jakarta",
      hero_role: "Backend Web Development & Computer Networking",
      hero_lead:
        "Senior-year Informatics Engineering student at <em>Universitas Mercu Buana</em> (GPA 3.64/4.00). I build structured backend applications with Laravel & Node.js, relational SQL schemas, and TCP/IP network configurations—backed by hands-on faculty governance leadership.",
      btn_explore: "View Technical Case Studies",
      btn_cv: "Download CV",
      stat_gpa: "Cumulative GPA (4.00 Scale)",
      stat_team: "Election Committee Members Led",
      stat_prog: "Org Work Programs Audited",
      stat_event: "Event Participants Supported",
      sec_focus: "Core Engineering Pillars",
      focus_intro:
        "A cohesive intersection between building server-side web systems, understanding the underlying network infrastructure they run on, and leading structured teams.",
      p1_title: "Backend & Database Engineering",
      p1_desc:
        "Building clean MVC server logic with Laravel and asynchronous services in Node.js, backed by normalized, reliable MySQL relational schemas.",
      p2_title: "Network Infrastructure & Diagnostics",
      p2_desc:
        "Practical command over IPv4 subnetting, LAN/WAN routing topologies, automated DHCP & DNS services, and systematic connectivity troubleshooting.",
      p3_title: "Governance & Team Leadership",
      p3_desc:
        "Proven track record leading high-stakes student committees, auditing organizational compliance, and maintaining clear cross-team communication.",
      sec_about: "Education & Background",
      about_p1:
        "As an Informatics Engineering student, I believe strong software engineering goes beyond writing application code—it requires understanding how data is modeled in databases and transported reliably across networks.",
      about_p2:
        "Throughout my studies at Universitas Mercu Buana, I have maintained strong academic performance while serving in both executive (BEM) and supervisory (DPM) student bodies—sharpening analytical rigor alongside operational discipline.",
      edu_degree: "Bachelor of Informatics Engineering (S1) · GPA 3.64 / 4.00",
      edu_period: "Sep 2023 – Sep 2027 (Expected)",
      cw_label: "Key Coursework:",
      edu_pt1: "Designed and implemented dynamic web applications separating backend logic, frontend presentation, and relational SQL storage.",
      edu_pt2: "Configured computer network topologies, IP addressing schemes, core network services, and systematic fault diagnostics.",
      edu_pt3: "Completed collaborative projects spanning software engineering, database systems, and artificial intelligence fundamentals.",
      sec_org: "Leadership Track",
      org_hint:
        "Clear progression from program execution in BEM to regulatory supervision and election committee leadership in DPM.",
      dpm_date: "Sep 2025 – Sep 2026",
      dpm_role: "Staff of Supervision Division & Chairperson of 2026 General Election Committee",
      dpm_impact_label: "Key Impact",
      dpm_impact_text:
        "Entrusted to lead 15+ committee members as Chairperson of the 2026 Student General Election while auditing regulatory compliance across 10+ faculty organization programs.",
      dpm_pt1:
        "Monitored and evaluated 10+ student organization work programs against established governance regulations.",
      dpm_pt2:
        "Supervised 10+ student activities directly and delivered structured evaluation reports for continuous program improvement.",
      dpm_pt3:
        "Directed end-to-end planning, role delegation across 15+ staff, and live execution of the 2026 faculty-wide student election.",
      bem_role: "Staff of Student Interests and Talents Department",
      bem_impact_label: "Key Impact",
      bem_impact_text:
        "Coordinated 5+ student talent initiatives and supported live event operations for 200+ participants during Highschoolfest 2024.",
      bem_pt1:
        "Planned and coordinated 5+ student programs centered on developing interests, talents, and creative initiatives.",
      bem_pt2:
        "Partnered with Highschoolfest 2024 as media partner and field operations volunteer serving 200+ attendees.",
      bem_pt3:
        "Collaborated across 10+ committee members and student organization representatives to deliver faculty events on schedule.",
      sec_projects: "Case Studies & Code",
      proj_hint:
        'Click "Architecture Breakdown" on any project to inspect the problem statement, technical approach, and logic.',
      filter_all: "All",
      btn_case_open: "Architecture Breakdown",
      btn_case_close: "Hide Breakdown",
      case_prob_label: "Problem Statement",
      case_sol_label: "Technical Approach & Logic",
      proj1_title: "Web-Based Information & Data Management System (MVC)",
      proj1_desc:
        "Centralized web application featuring role-based authentication, server-side validation, and normalized MySQL relational schemas.",
      proj1_prob:
        "Unstructured manual record-keeping caused data duplication, slow historical lookups, and lacked access-level separation.",
      proj1_sol:
        "Modeled relational tables with foreign-key constraints in MySQL, separated routing, controllers, and models via Laravel MVC, and enforced middleware authentication with strict request validation.",
      proj2_title: "Multi-Segment LAN/WAN Topology & Core Network Services",
      proj2_desc:
        "Segmented network architecture simulation implementing efficient IPv4 subnetting, automated DHCP/DNS services, and diagnostic workflows.",
      proj2_prob:
        "Flat single-broadcast networks across multiple departments risk static IP conflicts and make isolating connectivity failures difficult.",
      proj2_sol:
        "Calculated subnet allocations per segment, configured inter-VLAN/LAN-WAN routing, deployed centralized DHCP pools and internal DNS resolution, and verified end-to-end packet paths.",
      proj3_title: "Asynchronous Node.js Services & Zero-Dependency Web Portfolio",
      proj3_desc:
        "Lightweight JSON API exploration in Node.js alongside a fast, framework-free portfolio integrated with GitHub REST API and Netlify CI/CD.",
      proj3_prob:
        "Heavy frontend bundles degrade mobile load performance, while hardcoded project lists go stale whenever new repositories are pushed.",
      proj3_sol:
        "Engineered modular plain HTML/CSS/JS, fetched live repository metadata asynchronously from the GitHub REST API, and wired automated deployments from GitHub main to Netlify.",
      gh_heading: "Live GitHub Repository Sync",
      sec_skills: "Skills Matrix",
      skill_hint: "Select any skill pill below to view specific engineering or leadership context.",
      skill_cat1: "Backend & Web",
      skill_cat2: "Computer Networking",
      skill_cat3: "Leadership & Operations",
      sec_contact: "Contact",
      contact_heading: "Let's Connect",
      contact_intro:
        "Available for internship opportunities, entry-level Backend or Network Engineering roles, and web project collaborations. Form submissions go straight to my email inbox.",
      btn_copy: "Copy",
      form_name: "Full Name",
      form_email: "Email Address",
      form_subject: "Subject",
      form_msg: "Message",
      form_submit: "Send Message"
    }
  };

  const skillDescriptions = {
    Laravel: {
      id: "Digunakan untuk merancang arsitektur aplikasi web berpola MVC, autentikasi & otorisasi pengguna, validasi request, serta pengelolaan relasi database Eloquent/MySQL.",
      en: "Used to architect MVC web applications, user authentication/authorization, request validation, and relational MySQL integration."
    },
    "Node.js": {
      id: "Runtime JavaScript sisi server untuk membangun REST endpoint ringan, pemrosesan data JSON asinkron, dan modularisasi logika backend.",
      en: "Server-side JavaScript runtime for building lightweight REST endpoints, asynchronous JSON processing, and modular backend services."
    },
    MySQL: {
      id: "Perancangan skema database relasional ter-normalisasi, pengaturan indeks & foreign key, serta pemeliharaan integritas data aplikasi.",
      en: "Normalized relational schema design, primary/foreign-key indexing, and reliable transactional data storage."
    },
    SQL: {
      id: "Penyusunan query relasional (JOIN multi-tabel, agregasi, pengelompokan, dan filtering) untuk kebutuhan fitur maupun laporan sistem.",
      en: "Writing structured relational queries (multi-table JOINs, aggregations, filtering) for application features and reporting."
    },
    "HTML5 & CSS3": {
      id: "Penulisan markup semantik aksesibel dan sistem layout responsif modern (CSS Grid, Flexbox, Custom Properties) untuk desktop & seluler.",
      en: "Semantic, accessible markup paired with responsive CSS Grid/Flexbox layouts optimized across desktop and mobile viewports."
    },
    JavaScript: {
      id: "Pengelolaan state antarmuka berbasis DOM, konsumsi REST API menggunakan Fetch/async-await, dan transisi UI ringan tanpa ketergantungan framework.",
      en: "Clean DOM state management, asynchronous REST API consumption, and responsive UI interactions in modern ES6+."
    },
    Git: {
      id: "Manajemen riwayat kode sumber menggunakan percabangan Git, dokumentasi repositori GitHub, dan integrasi auto-deploy ke Netlify.",
      en: "Version control workflows with Git, GitHub repository management, and automated CI/CD deployment pipelines on Netlify."
    },
    "TCP/IP": {
      id: "Pemahaman mendalam atas pengalamatan IPv4, perhitungan subnetting/VLSM, serta alur enkapsulasi paket pada layer jaringan & transpor.",
      en: "Solid grasp of IPv4 addressing, subnetting calculations, and packet communication across network and transport layers."
    },
    "LAN / WAN": {
      id: "Konfigurasi segmentasi jaringan lokal dan penghubungan antar-jaringan menggunakan perangkat switch serta perutean router.",
      en: "Configuration of segmented local networks and inter-network routing across switches and routers."
    },
    DNS: {
      id: "Pengaturan pemetaan nama domain ke alamat IP (A/CNAME/NS records) baik pada simulasi server jaringan maupun manajemen domain produksi.",
      en: "Configuring domain-to-IP resolution records across local network labs and production DNS management."
    },
    DHCP: {
      id: "Otomasi pendistribusian alamat IP dinamis, subnet mask, default gateway, dan DNS server untuk mencegah konflik IP pada klien.",
      en: "Automated dynamic IP pool allocation, gateway assignment, and address lease management for client hosts."
    },
    Troubleshooting: {
      id: "Isolasi masalah jaringan secara runtut dari layer fisik hingga aplikasi menggunakan ping, traceroute, pemeriksaan IP/tabel routing, dan uji port.",
      en: "Methodical fault isolation across layers using ping, traceroute, interface diagnostics, and routing table verification."
    },
    Leadership: {
      id: "Memimpin 15+ panitia sebagai Ketua Pelaksana Pemilu Raya 2026, menetapkan timeline kerja, pembagian peran, dan pengambilan keputusan.",
      en: "Directed 15+ committee members as Chairperson of the 2026 Student General Election, overseeing timelines and critical decisions."
    },
    Teamwork: {
      id: "Kolaborasi efektif bersama rekan satu divisi maupun lintas himpunan mahasiswa di lingkungan BEM dan DPM Fasilkom.",
      en: "Cross-functional teamwork across faculty committees, student executives (BEM), and supervisory boards (DPM)."
    },
    Communication: {
      id: "Menyusun laporan evaluasi pengawasan program kerja secara objektif serta bernegosiasi dengan pihak eksternal/media partner.",
      en: "Delivering clear supervisory audit feedback at DPM and coordinating smoothly with external event partners."
    },
    "Problem Solving": {
      id: "Mengurai akar masalah secara logis—baik saat men-debug error query/jaringan maupun saat mengatasi kendala teknis acara di lapangan.",
      en: "Breaking down root causes logically across backend/network debugging and live organizational problem-solving."
    },
    "Time Management": {
      id: "Menjaga performa akademik (IPK 3.64) tetap stabil sembari menjalankan amanah pengawasan organisasi dan kepanitiaan fakultas.",
      en: "Sustaining a 3.64 GPA in Informatics Engineering alongside active supervisory and committee leadership roles."
    },
    "Event Management": {
      id: "Merancang konsep teknis acara, alur registrasi peserta, hingga koordinasi hari-H untuk kegiatan berskala 200+ partisipan.",
      en: "End-to-end event planning,rundown coordination, and on-site execution for programs serving 200+ participants."
    }
  };

  const htmlEl = document.documentElement;
  let currentLang = localStorage.getItem("alvian_lang") || "id";
  let activeSkill = "Laravel";

  // 1. Theme Toggle
  const themeToggle = document.getElementById("themeToggle");
  const iconSun = document.getElementById("iconSun");
  const iconMoon = document.getElementById("iconMoon");
  const savedTheme = localStorage.getItem("alvian_theme") || "dark";

  function applyTheme(theme) {
    htmlEl.setAttribute("data-theme", theme);
    iconSun.style.display = theme === "dark" ? "block" : "none";
    iconMoon.style.display = theme === "dark" ? "none" : "block";
    localStorage.setItem("alvian_theme", theme);
  }
  applyTheme(savedTheme);

  themeToggle.addEventListener("click", () => {
    applyTheme(htmlEl.getAttribute("data-theme") === "dark" ? "light" : "dark");
  });

  // 2. Interactive Case Study Architecture Drawers
  function updateCaseButtonsLanguage() {
    const dict = translations[currentLang];
    document.querySelectorAll(".case-toggle").forEach((btn) => {
      const expanded = btn.getAttribute("aria-expanded") === "true";
      const span = btn.querySelector("span");
      if (span) {
        span.textContent = expanded ? dict.btn_case_close : dict.btn_case_open;
      }
    });
  }

  document.querySelectorAll(".case-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const expanded = btn.getAttribute("aria-expanded") === "true";
      const nextState = !expanded;
      btn.setAttribute("aria-expanded", String(nextState));
      const details = btn.nextElementSibling;
      if (details) {
        details.hidden = !nextState;
      }
      updateCaseButtonsLanguage();
    });
  });

  // 3. Interactive Skill Pills Explorer
  const skillDetailBox = document.getElementById("skillDetailBox");
  const skillDetailName = document.getElementById("skillDetailName");
  const skillDetailCat = document.getElementById("skillDetailCat");
  const skillDetailDesc = document.getElementById("skillDetailDesc");
  const skillPills = document.querySelectorAll(".skill-pill");

  function renderSkillDetail(skillKey, catLabel) {
    activeSkill = skillKey;
    const info = skillDescriptions[skillKey];
    if (!info || !skillDetailName || !skillDetailDesc) return;
    skillDetailBox.style.opacity = "0.45";
    setTimeout(() => {
      skillDetailName.textContent = skillKey;
      if (skillDetailCat && catLabel) skillDetailCat.textContent = catLabel;
      skillDetailDesc.textContent = info[currentLang] || info.id;
      skillDetailBox.style.opacity = "1";
    }, 90);
  }

  skillPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      skillPills.forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      renderSkillDetail(pill.getAttribute("data-skill"), pill.getAttribute("data-cat"));
    });
  });

  // 4. Language Toggle
  const langToggle = document.getElementById("langToggle");
  const langLabel = document.getElementById("langLabel");

  function applyLanguage(lang) {
    currentLang = lang;
    htmlEl.setAttribute("lang", lang);
    langLabel.textContent = lang.toUpperCase();
    localStorage.setItem("alvian_lang", lang);

    const dict = translations[lang];
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.innerHTML = dict[key];
    });

    if (skillDescriptions[activeSkill] && skillDetailDesc) {
      skillDetailDesc.textContent = skillDescriptions[activeSkill][lang];
    }
    updateCaseButtonsLanguage();
  }
  applyLanguage(currentLang);

  langToggle.addEventListener("click", () => {
    applyLanguage(currentLang === "id" ? "en" : "id");
  });

  // 5. Mobile Menu, Reading Progress Bar & Active Section Spy
  const menuToggle = document.getElementById("menuToggle");
  const iconMenu = document.getElementById("iconMenu");
  const iconClose = document.getElementById("iconClose");
  const navLinks = document.getElementById("navLinks");
  const scrollBar = document.getElementById("scrollBar");
  const sections = document.querySelectorAll("main section[id]");

  function setMenuOpen(isOpen) {
    navLinks.classList.toggle("open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    if (iconMenu && iconClose) {
      iconMenu.style.display = isOpen ? "none" : "block";
      iconClose.style.display = isOpen ? "block" : "none";
    }
  }

  menuToggle.addEventListener("click", () => {
    setMenuOpen(!navLinks.classList.contains("open"));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });

  document.addEventListener("click", (e) => {
    if (
      navLinks.classList.contains("open") &&
      !navLinks.contains(e.target) &&
      !menuToggle.contains(e.target)
    ) {
      setMenuOpen(false);
    }
  });

  window.addEventListener(
    "scroll",
    () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollBar) {
        scrollBar.style.width = docHeight > 0 ? `${(scrollTop / docHeight) * 100}%` : "0%";
      }

      let activeId = "";
      sections.forEach((sec) => {
        if (scrollTop >= sec.offsetTop - 160) {
          activeId = sec.id;
        }
      });
      navLinks.querySelectorAll("a").forEach((a) => {
        a.classList.toggle("active", a.getAttribute("href") === `#${activeId}`);
      });
    },
    { passive: true }
  );

  // 6. Smooth Scroll Reveal & Metric Counter Animation
  const revealEls = document.querySelectorAll(".reveal");
  let countersAnimated = false;

  function runCounters() {
    if (countersAnimated) return;
    countersAnimated = true;
    document.querySelectorAll(".metric-val").forEach((el) => {
      const target = parseFloat(el.getAttribute("data-count"));
      const decimals = parseInt(el.getAttribute("data-decimals") || "0", 10);
      const suffix = el.getAttribute("data-suffix") || "";
      const duration = 1100;
      const start = performance.now();

      function step(now) {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = `${(target * eased).toFixed(decimals)}${suffix}`;
        if (t < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            if (entry.target.classList.contains("metrics-strip")) {
              runCounters();
            }
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  // 7. Smooth Project Category Filter
  const filterTabs = document.querySelectorAll(".filter-tab");
  const workItems = document.querySelectorAll(".work-item");

  filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      filterTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      const filter = tab.getAttribute("data-filter");

      workItems.forEach((item) => {
        const show = filter === "all" || item.getAttribute("data-category") === filter;
        item.style.display = show ? "block" : "none";
      });
    });
  });

  // 8. One-Click Copy Email Button
  const copyEmailBtn = document.getElementById("copyEmailBtn");
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText("alvianfathan6305@gmail.com");
        copyEmailBtn.classList.add("copied");
        copyEmailBtn.textContent = currentLang === "id" ? "Tersalin ✓" : "Copied ✓";
        setTimeout(() => {
          copyEmailBtn.classList.remove("copied");
          copyEmailBtn.textContent = translations[currentLang].btn_copy;
        }, 2000);
      } catch {
        window.location.href = "mailto:alvianfathan6305@gmail.com";
      }
    });
  }

  // 9. GitHub Repositories Index
  const githubGrid = document.getElementById("githubReposGrid");

  async function loadGitHubRepos() {
    try {
      const res = await fetch("https://api.github.com/users/AlvianFathan6305/repos?sort=updated&per_page=6");
      if (!res.ok) throw new Error("Request failed");
      const repos = await res.json();

      if (!Array.isArray(repos) || repos.length === 0) {
        githubGrid.innerHTML = `
          <a href="https://github.com/AlvianFathan6305" target="_blank" rel="noopener noreferrer" class="repo-row">
            <div>
              <div class="repo-title">AlvianFathan6305</div>
              <div class="repo-desc">Lihat repositori kode sumber langsung di profil GitHub.</div>
            </div>
            <span class="repo-lang">GitHub ↗</span>
          </a>
        `;
        return;
      }

      githubGrid.innerHTML = repos
        .map(
          (repo) => `
          <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="repo-row">
            <div>
              <div class="repo-title">${repo.name}</div>
              ${repo.description ? `<div class="repo-desc">${repo.description}</div>` : ""}
            </div>
            <span class="repo-lang">${repo.language || "Repo"} ↗</span>
          </a>
        `
        )
        .join("");
    } catch {
      githubGrid.innerHTML = `
        <a href="https://github.com/AlvianFathan6305" target="_blank" rel="noopener noreferrer" class="repo-row">
          <div>
            <div class="repo-title">github.com/AlvianFathan6305</div>
            <div class="repo-desc">Buka halaman profil GitHub untuk melihat repositori terbaru.</div>
          </div>
          <span class="repo-lang">Buka ↗</span>
        </a>
      `;
    }
  }
  loadGitHubRepos();

  // 10. Contact Form (Direct to alvianfathan6305@gmail.com via FormSubmit + Netlify Forms backup)
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = currentLang === "id" ? "Mengirim..." : "Sending...";
    formStatus.textContent = "";

    const formData = new FormData(contactForm);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    try {
      if (window.location.hostname.endsWith("netlify.app") || window.location.protocol.startsWith("http")) {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString()
        }).catch(() => {});
      }

      const res = await fetch("https://formsubmit.co/ajax/alvianfathan6305@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          Nama: name,
          Email: email,
          _replyto: email,
          _subject: `[Portfolio Alvianfathan] ${subject}`,
          Pesan: message,
          _template: "table"
        })
      });

      if (!res.ok) throw new Error("Email endpoint unavailable");

      formStatus.textContent =
        currentLang === "id"
          ? "Pesan berhasil dikirim ke alvianfathan6305@gmail.com."
          : "Message sent directly to alvianfathan6305@gmail.com.";
      contactForm.reset();
    } catch {
      const mailto = `mailto:alvianfathan6305@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(`Nama: ${name}\nEmail: ${email}\n\n${message}`)}`;
      window.location.href = mailto;
      formStatus.textContent =
        currentLang === "id"
          ? "Membuka aplikasi email menuju alvianfathan6305@gmail.com..."
          : "Opening email client to alvianfathan6305@gmail.com...";
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalBtnText;
    }
  });

  document.getElementById("currentYear").textContent = new Date().getFullYear();
})();
