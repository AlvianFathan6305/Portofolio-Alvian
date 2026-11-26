/* ==========================================================================
   ALVIAN RIZKYA FATHAN — PORTFOLIO INTERACTIVITY (Pure Vanilla JavaScript)
   ========================================================================== */

(() => {
  "use strict";

  // 1. Bilingual Dictionary (ID & EN)
  const translations = {
    id: {
      nav_home: "Beranda",
      nav_about: "Tentang",
      nav_org: "Organisasi",
      nav_skills: "Keahlian",
      nav_projects: "Proyek",
      nav_contact: "Kontak",
      hero_status: "Terbuka untuk Magang, Proyek & Kolaborasi",
      hero_greeting: "// Halo, perkenalkan saya",
      hero_role_prefix: "Fokus di bidang",
      hero_desc:
        "Mahasiswa S1 Teknik Informatika di <strong>Universitas Mercu Buana</strong> (IPK 3.64/4.00) dengan antusiasme tinggi pada pengembangan aplikasi web, arsitektur database, dan jaringan komputer, serta berpengalaman memimpin kepanitiaan & organisasi mahasiswa di <strong>DPM</strong> dan <strong>BEM Fasilkom</strong>.",
      btn_explore_org: "Lihat Jejak Organisasi",
      btn_download_cv: "Unduh CV",
      btn_contact_me: "Hubungi Saya",
      badge_focus_label: "Spesialisasi",
      stat_gpa: "IPK Teknik Informatika",
      stat_committee: "Anggota Panitia Pemilu Raya Dipimpin",
      stat_programs: "Program Kerja Organisasi Diawasi",
      stat_participants: "Peserta Event Didukung",
      about_tag: "Profil & Pendidikan",
      about_title: "Menggabungkan Rekayasa Sistem & Kepemimpinan",
      about_sub:
        "Berfokus membangun sistem backend yang andal, infrastruktur jaringan yang terukur, serta kolaborasi tim yang berdampak nyata di lingkungan akademik maupun organisasi.",
      about_who_title: "Tentang Saya",
      about_p1:
        "Saya adalah mahasiswa S1 Teknik Informatika di <strong>Universitas Mercu Buana</strong>, Jakarta Selatan, dengan ketertarikan mendalam pada <strong>Backend Development</strong>, <strong>Web Development</strong>, dan <strong>Computer Networking</strong>.",
      about_p2:
        "Melalui berbagai proyek akademik, saya terbiasa merancang aplikasi berbasis web menggunakan <em>Laravel</em> dan <em>Node.js</em>, mengelola database relasional (<em>MySQL/SQL</em>), serta mengimplementasikan konfigurasi dan troubleshooting jaringan komputer. Di luar kelas, saya aktif mengasah kepemimpinan, komunikasi, dan manajemen acara melalui <strong>BEM</strong> dan <strong>DPM Fasilkom Mercu Buana</strong>.",
      edu_period: "Sep 2023 – Sep 2027 (Target)",
      edu_degree: "S1 Teknik Informatika • IPK 3.64 / 4.00",
      edu_pt1: "Mengembangkan aplikasi berbasis web menggunakan bahasa pemrograman dan framework modern.",
      edu_pt2: "Mempelajari dan mengimplementasikan konsep jaringan komputer, termasuk konfigurasi jaringan dan troubleshooting.",
      edu_pt3: "Mengerjakan proyek akademik mencakup pemrograman, basis data, kecerdasan buatan (AI), dan rekayasa perangkat lunak.",
      edu_pt4: "Berpartisipasi aktif dalam organisasi kemahasiswaan untuk membangun kepemimpinan, kerja tim, dan problem-solving.",
      org_tag: "Riwayat Organisasi",
      org_title: "Pengalaman Organisasi & Kepemimpinan",
      org_sub:
        "Jejak kontribusi aktif di lingkungan Fakultas Ilmu Komputer Universitas Mercu Buana dalam pengawasan organisasi, pengembangan minat bakat, dan kepemimpinan kepanitiaan strategis.",
      dpm_role: "Staff of Supervision Division (Divisi Pengawasan)",
      dpm_date: "Sep 2025 – Sekarang",
      dpm_chair_badge: "Ketua Pelaksana Pemilu Raya 2026 (Chairperson of General Election Committee)",
      dpm_pt1:
        "Memantau dan mengevaluasi <strong>10+ program kerja organisasi mahasiswa</strong> untuk memastikan kepatuhan terhadap regulasi yang berlaku.",
      dpm_pt2:
        "Mengawasi langsung <strong>10+ kegiatan kemahasiswaan</strong> serta menyusun rekomendasi strategis guna peningkatan kualitas program.",
      dpm_pt3:
        "Menjabat sebagai <strong>Chairperson of the 2026 General Election Committee (Ketua Pelaksana Pemilu Raya 2026)</strong>, memimpin <strong>15+ anggota panitia</strong> dalam perencanaan hingga pelaksanaan pemilihan umum mahasiswa.",
      bem_role: "Staff of Student Interests and Talents Department",
      bem_pt1:
        "Mengkoordinasikan <strong>5+ kegiatan kemahasiswaan</strong> yang berfokus pada pengembangan minat, bakat, dan kreativitas mahasiswa Fasilkom.",
      bem_pt2:
        "Berkolaborasi dengan <strong>Highschoolfest 2024</strong> sebagai <em>media partner</em> sekaligus berperan sebagai <em>volunteer</em> dalam mendukung operasional acara bagi <strong>200+ peserta</strong>.",
      bem_pt3:
        "Bekerja sama dengan <strong>10+ anggota kepanitiaan</strong> dan perwakilan organisasi mahasiswa untuk menyukseskan berbagai program serta acara fakultas.",
      skills_tag: "Keahlian & Kompetensi",
      skills_title: "Tech Stack, Jaringan & Soft Skills",
      skills_sub:
        "Kombinasi kemampuan teknis di sisi server & infrastruktur jaringan dengan kemampuan interpersonal dari pengalaman organisasi nyata.",
      skill_cat1_title: "Backend & Web Development",
      skill_cat1_desc: "Pengembangan aplikasi web modern, logika sisi server, REST API, dan manajemen basis data relasional.",
      skill_cat2_title: "Computer Networking",
      skill_cat2_desc: "Perancangan topologi, pengalamatan jaringan, layanan protokol inti, serta analisis & troubleshooting.",
      skill_cat3_title: "Leadership & Soft Skills",
      skill_cat3_desc: "Kemampuan manajerial dan kolaborasi tim yang teruji di BEM, DPM, serta kepanitiaan tingkat fakultas.",
      proj_tag: "Karya & Eksplorasi",
      proj_title: "Fokus Proyek & Repositori GitHub",
      proj_sub:
        "Implementasi proyek akademik dan eksplorasi mandiri di bidang Backend Web, Sistem Informasi, dan Jaringan Komputer.",
      filter_all: "Semua",
      proj1_title: "RESTful Web & Management System",
      proj1_desc:
        "Pengembangan aplikasi web terstruktur menggunakan Laravel & Node.js dengan autentikasi berlapis, arsitektur MVC, dan manajemen relasi database MySQL.",
      proj2_title: "Enterprise LAN/WAN Infrastructure Lab",
      proj2_desc:
        "Simulasi, konfigurasi, dan troubleshooting topologi jaringan LAN/WAN mencakup pengalamatan TCP/IP, layanan otomatis DHCP Server, dan resolusi domain DNS.",
      proj3_title: "Student Election & Program Portal",
      proj3_desc:
        "Inisiatif digitalisasi pencatatan program kerja serta tata kelola administrasi pemilihan mahasiswa yang transparan, responsif, dan terukur.",
      gh_live_title: "Repositori Publik GitHub (@AlvianFathan6305)",
      gh_live_sub: "Tersinkronisasi otomatis secara real-time dengan akun GitHub resmi saya.",
      gh_visit_btn: "Buka Profil GitHub",
      contact_tag: "Jejaring & Kontak",
      contact_title: "Mari Terhubung & Berkolaborasi!",
      contact_sub:
        "Ikuti aktivitas saya di media sosial atau kirim pesan langsung untuk diskusi proyek web, jaringan, maupun kolaborasi organisasi.",
      direct_title: "Kontak Langsung",
      direct_desc:
        "Tertarik mengajak magang, berdiskusi seputar pengembangan backend & jaringan, atau berkolaborasi kegiatan? Jangan ragu menghubungi saya melalui kanal berikut.",
      loc_label: "Domisili",
      form_name: "Nama Lengkap",
      form_email: "Alamat Email",
      form_subject: "Subjek",
      form_msg: "Pesan",
      form_submit: "Kirim Pesan Sekarang"
    },
    en: {
      nav_home: "Home",
      nav_about: "About",
      nav_org: "Organizations",
      nav_skills: "Skills",
      nav_projects: "Projects",
      nav_contact: "Contact",
      hero_status: "Available for Internships, Projects & Collaboration",
      hero_greeting: "// Hello, my name is",
      hero_role_prefix: "Passionate about",
      hero_desc:
        "Informatics Engineering undergraduate at <strong>Universitas Mercu Buana</strong> (GPA 3.64/4.00) with strong interests in Backend Development, Web Applications, and Computer Networking, backed by active leadership in <strong>DPM</strong> and <strong>BEM Fasilkom</strong>.",
      btn_explore_org: "Explore Leadership Track",
      btn_download_cv: "Download CV",
      btn_contact_me: "Get in Touch",
      badge_focus_label: "Core Focus",
      stat_gpa: "Informatics GPA",
      stat_committee: "Election Committee Members Led",
      stat_programs: "Student Org Programs Supervised",
      stat_participants: "Event Participants Supported",
      about_tag: "Profile & Education",
      about_title: "Bridging System Engineering & Student Leadership",
      about_sub:
        "Dedicated to crafting reliable backend architectures, resilient computer networks, and impactful organizational collaborations.",
      about_who_title: "About Me",
      about_p1:
        "I am an Informatics Engineering student at <strong>Universitas Mercu Buana</strong>, South Jakarta, with deep interests in <strong>Backend Development</strong>, <strong>Web Development</strong>, and <strong>Computer Networking</strong>.",
      about_p2:
        "Through academic and practical projects, I build web applications with <em>Laravel</em> and <em>Node.js</em>, manage relational databases (<em>MySQL/SQL</em>), and configure/troubleshoot network infrastructures. Beyond code, I sharpen my leadership, teamwork, and event governance in <strong>BEM</strong> and <strong>DPM Fasilkom Mercu Buana</strong>.",
      edu_period: "Sep 2023 – Sep 2027 (Expected)",
      edu_degree: "Bachelor of Informatics Engineering • GPA 3.64 / 4.00",
      edu_pt1: "Developed web-based applications using modern programming languages and frameworks.",
      edu_pt2: "Learned and implemented computer networking concepts, including network configuration and troubleshooting.",
      edu_pt3: "Worked on academic projects involving programming, databases, artificial intelligence, and software development.",
      edu_pt4: "Actively participated in student organizations, developing leadership, teamwork, communication, and problem-solving skills.",
      org_tag: "Organisational Experience",
      org_title: "Leadership & Organizational Track Record",
      org_sub:
        "Active governance, supervision, and event leadership within the Faculty of Computer Science at Universitas Mercu Buana.",
      dpm_role: "Staff of Supervision Division",
      dpm_date: "Sep 2025 – Present",
      dpm_chair_badge: "Chairperson of the 2026 General Election Committee",
      dpm_pt1:
        "Monitored and evaluated <strong>10+ student organization work programs</strong> to ensure compliance with established regulations.",
      dpm_pt2:
        "Supervised <strong>10+ organizational activities</strong> and provided actionable recommendations for program improvement.",
      dpm_pt3:
        "Served as <strong>Chairperson of the 2026 General Election Committee</strong>, leading <strong>15+ committee members</strong> in planning and executing the student election.",
      bem_role: "Staff of Student Interests and Talents Department",
      bem_pt1:
        "Coordinated <strong>5+ student activities</strong> related to student interests, talents, and creativity.",
      bem_pt2:
        "Collaborated with <strong>Highschoolfest 2024</strong> as a media partner and served as a volunteer, supporting event operations for <strong>200+ participants</strong>.",
      bem_pt3:
        "Worked with <strong>10+ committee members</strong> and student organization representatives to successfully conduct events and programs.",
      skills_tag: "Skills & Competencies",
      skills_title: "Tech Stack, Networking & Soft Skills",
      skills_sub:
        "Combining backend & network engineering fundamentals with proven organizational leadership.",
      skill_cat1_title: "Backend & Web Development",
      skill_cat1_desc: "Modern web apps, server-side logic, RESTful services, and relational database design.",
      skill_cat2_title: "Computer Networking",
      skill_cat2_desc: "Network topology setup, IP addressing, core network services, and systematic troubleshooting.",
      skill_cat3_title: "Leadership & Soft Skills",
      skill_cat3_desc: "Interpersonal and managerial capabilities honed across BEM, DPM, and faculty-wide committees.",
      proj_tag: "Projects & Repositories",
      proj_title: "Featured Domains & GitHub Repositories",
      proj_sub:
        "Academic projects and hands-on explorations across Backend Web Development, Databases, and Computer Networking.",
      filter_all: "All",
      proj1_title: "RESTful Web & Management System",
      proj1_desc:
        "Structured web application built with Laravel & Node.js featuring authentication, MVC architecture, and relational MySQL database design.",
      proj2_title: "Enterprise LAN/WAN Infrastructure Lab",
      proj2_desc:
        "Simulation, configuration, and troubleshooting of LAN/WAN topologies covering TCP/IP addressing, automated DHCP, and DNS resolution.",
      proj3_title: "Student Election & Program Portal",
      proj3_desc:
        "Digital workflow initiative for transparent student election administration and organizational work-program monitoring.",
      gh_live_title: "Public GitHub Repositories (@AlvianFathan6305)",
      gh_live_sub: "Automatically synced in real time from my official GitHub profile.",
      gh_visit_btn: "Visit GitHub Profile",
      contact_tag: "Socials & Contact",
      contact_title: "Let's Connect & Collaborate!",
      contact_sub:
        "Follow my journey across social media or send a direct message for internships, web/networking projects, or organizational collaborations.",
      direct_title: "Direct Channels",
      direct_desc:
        "Looking for a dedicated Backend/Networking intern or project collaborator? Feel free to reach out anytime.",
      loc_label: "Location",
      form_name: "Full Name",
      form_email: "Email Address",
      form_subject: "Subject",
      form_msg: "Message",
      form_submit: "Send Message"
    }
  };

  let currentLang = localStorage.getItem("alvian_lang") || "id";

  // 2. Theme Toggle (Dark / Light)
  const htmlEl = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");
  const savedTheme = localStorage.getItem("alvian_theme") || "dark";

  function applyTheme(theme) {
    htmlEl.setAttribute("data-theme", theme);
    themeIcon.textContent = theme === "dark" ? "☀️" : "🌙";
    localStorage.setItem("alvian_theme", theme);
  }
  applyTheme(savedTheme);

  themeToggle.addEventListener("click", () => {
    const next = htmlEl.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
  });

  // 3. Language Switcher
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
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });
  }
  applyLanguage(currentLang);

  langToggle.addEventListener("click", () => {
    applyLanguage(currentLang === "id" ? "en" : "id");
  });

  // 4. Navbar Scroll, Progress Bar & Mobile Menu
  const navbar = document.getElementById("navbar");
  const scrollProgress = document.getElementById("scrollProgress");
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const sections = document.querySelectorAll("main section[id]");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });

  window.addEventListener(
    "scroll",
    () => {
      const scrollY = window.scrollY;
      navbar.classList.toggle("scrolled", scrollY > 24);

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
      scrollProgress.style.width = `${pct}%`;

      // Active section spy
      let currentId = "home";
      sections.forEach((sec) => {
        if (scrollY >= sec.offsetTop - 160) {
          currentId = sec.id;
        }
      });
      navLinks.querySelectorAll("a").forEach((a) => {
        a.classList.toggle("active", a.getAttribute("href") === `#${currentId}`);
      });
    },
    { passive: true }
  );

  // 5. Typewriter Role Animation
  const roles = [
    "Backend Development",
    "Web Development",
    "Computer Networking",
    "Laravel & Node.js",
    "Student Leadership"
  ];
  const typewriterEl = document.getElementById("typewriter");
  let roleIdx = 0;
  let charIdx = 0;
  let deleting = false;

  function tickTypewriter() {
    const word = roles[roleIdx];
    if (!deleting) {
      charIdx++;
      typewriterEl.textContent = word.slice(0, charIdx);
      if (charIdx === word.length) {
        deleting = true;
        setTimeout(tickTypewriter, 1900);
        return;
      }
      setTimeout(tickTypewriter, 75);
    } else {
      charIdx--;
      typewriterEl.textContent = word.slice(0, charIdx);
      if (charIdx === 0) {
        deleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        setTimeout(tickTypewriter, 320);
        return;
      }
      setTimeout(tickTypewriter, 40);
    }
  }
  tickTypewriter();

  // 6. Interactive Developer Terminal
  const terminalOutput = document.getElementById("terminalOutput");
  const terminalCommands = {
    whoami: `
      <div class="cmd-line"><span class="cmd-prompt">alvian@mercubuana:~$</span> whoami --verbose</div>
      <div>{</div>
      <div>&nbsp;&nbsp;<span class="json-key">"name"</span>: <span class="json-str">"Alvian Rizkya Fathan"</span>,</div>
      <div>&nbsp;&nbsp;<span class="json-key">"university"</span>: <span class="json-str">"Universitas Mercu Buana"</span>,</div>
      <div>&nbsp;&nbsp;<span class="json-key">"major"</span>: <span class="json-str">"Informatics Engineering"</span>,</div>
      <div>&nbsp;&nbsp;<span class="json-key">"gpa"</span>: <span class="json-num">3.64</span>,</div>
      <div>&nbsp;&nbsp;<span class="json-key">"location"</span>: <span class="json-str">"Jakarta Selatan, ID"</span>,</div>
      <div>&nbsp;&nbsp;<span class="json-key">"leadership"</span>: [<span class="json-str">"DPM Fasilkom"</span>, <span class="json-str">"BEM Fasilkom"</span>]</div>
      <div>}</div>
    `,
    stack: `
      <div class="cmd-line"><span class="cmd-prompt">alvian@mercubuana:~$</span> cat stack.json</div>
      <div>{</div>
      <div>&nbsp;&nbsp;<span class="json-key">"backend"</span>: [<span class="json-str">"Laravel"</span>, <span class="json-str">"Node.js"</span>],</div>
      <div>&nbsp;&nbsp;<span class="json-key">"database"</span>: [<span class="json-str">"MySQL"</span>, <span class="json-str">"SQL"</span>],</div>
      <div>&nbsp;&nbsp;<span class="json-key">"frontend"</span>: [<span class="json-str">"HTML5"</span>, <span class="json-str">"CSS3"</span>, <span class="json-str">"JavaScript"</span>],</div>
      <div>&nbsp;&nbsp;<span class="json-key">"deployment"</span>: [<span class="json-str">"GitHub"</span>, <span class="json-str">"Netlify"</span>]</div>
      <div>}</div>
    `,
    network: `
      <div class="cmd-line"><span class="cmd-prompt">alvian@mercubuana:~$</span> ifconfig --skills</div>
      <div>eth0: flags=4163&lt;UP,BROADCAST,RUNNING&gt; mtu 1500</div>
      <div>&nbsp;&nbsp;protocols : <span class="json-str">TCP/IP, DNS, DHCP</span></div>
      <div>&nbsp;&nbsp;topology  : <span class="json-str">LAN / WAN Configuration</span></div>
      <div>&nbsp;&nbsp;diagnostic: <span class="json-num">Network Troubleshooting [OK]</span></div>
      <div>&nbsp;&nbsp;status    : <span class="json-num">0% packet loss — Ready for production</span></div>
    `,
    contact: `
      <div class="cmd-line"><span class="cmd-prompt">alvian@mercubuana:~$</span> ping alvian</div>
      <div>PING alvianrizkyafathan (Jakarta Selatan): 56 data bytes</div>
      <div>&nbsp;&nbsp;email     : <span class="json-str">alvianfathan6305@gmail.com</span></div>
      <div>&nbsp;&nbsp;github    : <span class="json-str">github.com/AlvianFathan6305</span></div>
      <div>&nbsp;&nbsp;linkedin  : <span class="json-str">linkedin.com/in/alvianrizkyafathan</span></div>
      <div>&nbsp;&nbsp;instagram : <span class="json-str">@alvianfathann</span> | tiktok: <span class="json-str">@alvianfathan</span></div>
    `
  };

  function renderTerminal(cmdKey) {
    terminalOutput.innerHTML = terminalCommands[cmdKey] || terminalCommands.whoami;
  }
  renderTerminal("whoami");

  document.querySelectorAll(".term-cmd-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".term-cmd-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderTerminal(btn.getAttribute("data-cmd"));
    });
  });

  // 7. Project Category Filter
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-filter");

      projectCards.forEach((card) => {
        const match = filter === "all" || card.getAttribute("data-category") === filter;
        card.style.display = match ? "flex" : "none";
      });
    });
  });

  // 8. Live GitHub Repositories Fetcher (@AlvianFathan6305)
  const githubGrid = document.getElementById("githubReposGrid");

  async function loadGitHubRepos() {
    try {
      const res = await fetch("https://api.github.com/users/AlvianFathan6305/repos?sort=updated&per_page=6");
      if (!res.ok) throw new Error("GitHub API unavailable");
      const repos = await res.json();

      if (!Array.isArray(repos) || repos.length === 0) {
        githubGrid.innerHTML = `
          <a href="https://github.com/AlvianFathan6305" target="_blank" rel="noopener noreferrer" class="repo-mini-card">
            <div class="repo-mini-name">AlvianFathan6305 / portfolio-alvian</div>
            <div class="repo-mini-desc">Repositori resmi web portfolio pribadi menggunakan HTML, CSS, dan JavaScript yang dideploy di Netlify.</div>
            <div class="repo-mini-meta"><span>● HTML/CSS/JS</span><span>★ GitHub</span></div>
          </a>
        `;
        return;
      }

      githubGrid.innerHTML = repos
        .map(
          (repo) => `
          <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="repo-mini-card">
            <div>
              <div class="repo-mini-name">${repo.name}</div>
              <div class="repo-mini-desc">${
                repo.description
                  ? repo.description.slice(0, 95) + (repo.description.length > 95 ? "..." : "")
                  : "Repository proyek kode sumber oleh Alvian Rizkya Fathan."
              }</div>
            </div>
            <div class="repo-mini-meta">
              <span>● ${repo.language || "Code"}</span>
              <span>★ ${repo.stargazers_count || 0}</span>
              <span>⑂ ${repo.forks_count || 0}</span>
            </div>
          </a>
        `
        )
        .join("");
    } catch {
      githubGrid.innerHTML = `
        <a href="https://github.com/AlvianFathan6305" target="_blank" rel="noopener noreferrer" class="repo-mini-card">
          <div class="repo-mini-name">@AlvianFathan6305</div>
          <div class="repo-mini-desc">Klik untuk menjelajahi seluruh kode sumber, proyek web backend, dan repositori langsung di GitHub.</div>
          <div class="repo-mini-meta"><span>● GitHub Profile</span><span>↗ Buka</span></div>
        </a>
      `;
    }
  }
  loadGitHubRepos();

  // 9. Scroll Reveal & Number Counter Animation
  const revealEls = document.querySelectorAll(".reveal");
  let countersStarted = false;

  function animateCounters() {
    if (countersStarted) return;
    countersStarted = true;
    document.querySelectorAll(".stat-number").forEach((el) => {
      const target = parseFloat(el.getAttribute("data-target"));
      const decimals = parseInt(el.getAttribute("data-decimals") || "0", 10);
      const suffix = el.getAttribute("data-suffix") || "";
      const duration = 1400;
      const startTime = performance.now();

      function update(now) {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const val = (target * eased).toFixed(decimals);
        el.textContent = `${val}${suffix}`;
        if (progress < 1) requestAnimationFrame(update);
      }
      requestAnimationFrame(update);
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          if (entry.target.classList.contains("stats-ribbon")) {
            animateCounters();
          }
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealEls.forEach((el) => observer.observe(el));

  // 10. Spotlight Card Hover & Subtle 3D Tilt on Profile Card
  document.querySelectorAll(".spotlight-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
      card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    });
  });

  const tiltCard = document.getElementById("tiltCard");
  if (tiltCard && window.matchMedia("(pointer: fine)").matches) {
    tiltCard.addEventListener("mousemove", (e) => {
      const rect = tiltCard.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      tiltCard.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-4px)`;
    });
    tiltCard.addEventListener("mouseleave", () => {
      tiltCard.style.transform = "";
    });
  }

  // 11. Contact Form Handler (Netlify Forms + Graceful Mailto Fallback)
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
      });

      if (res.ok && window.location.protocol.startsWith("http")) {
        formStatus.textContent =
          currentLang === "id"
            ? "✅ Terima kasih! Pesan Anda berhasil dikirim."
            : "✅ Thank you! Your message has been sent.";
        contactForm.reset();
        return;
      }
      throw new Error("Local or static host");
    } catch {
      const mailtoUrl = `mailto:alvianfathan6305@gmail.com?subject=${encodeURIComponent(
        `[Portfolio] ${subject}`
      )}&body=${encodeURIComponent(`Halo Alvian,\n\nNama: ${name}\nEmail: ${email}\n\n${message}`)}`;
      window.location.href = mailtoUrl;
      formStatus.textContent =
        currentLang === "id"
          ? "✉️ Membuka aplikasi email untuk mengirim pesan ke Alvian..."
          : "✉️ Opening your email client to message Alvian...";
    }
  });

  // 12. Footer Dynamic Year
  document.getElementById("currentYear").textContent = new Date().getFullYear();

  // 13. Interactive Network Nodes Canvas (Honoring Computer Networking Interest)
  const canvas = document.getElementById("network-canvas");
  const ctx = canvas.getContext("2d");
  let nodes = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const count = Math.min(Math.floor((canvas.width * canvas.height) / 26000), 52);
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.42,
      vy: (Math.random() - 0.5) * 0.42,
      r: Math.random() * 1.8 + 1
    }));
  }

  function drawNetwork() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const isLight = htmlEl.getAttribute("data-theme") === "light";
    const dotColor = isLight ? "rgba(2, 132, 199, 0.45)" : "rgba(56, 189, 248, 0.55)";
    const lineRGB = isLight ? "2, 132, 199" : "56, 189, 248";

    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
      if (n.y < 0 || n.y > canvas.height) n.vy *= -1;

      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = dotColor;
      ctx.fill();

      for (let j = i + 1; j < nodes.length; j++) {
        const m = nodes[j];
        const dx = n.x - m.x;
        const dy = n.y - m.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 135) {
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(m.x, m.y);
          ctx.strokeStyle = `rgba(${lineRGB}, ${(1 - dist / 135) * 0.18})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(drawNetwork);
  }

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();
  drawNetwork();
})();
