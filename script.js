(() => {
  "use strict";

  const translations = {
    id: {
      nav_about: "Profil",
      nav_org: "Organisasi",
      nav_skills: "Keahlian",
      nav_projects: "Proyek",
      nav_contact: "Kontak",
      hero_eyebrow: "Jakarta Selatan, Indonesia · Teknik Informatika",
      hero_lead:
        "Mahasiswa Teknik Informatika di <em>Universitas Mercu Buana</em> yang mendalami pengembangan backend, aplikasi web, dan jaringan komputer, sekaligus aktif berorganisasi di DPM dan BEM Fasilkom.",
      btn_cv: "Unduh CV (PDF)",
      btn_contact: "Hubungi Saya",
      stat_gpa: "IPK Saat Ini (skala 4.00)",
      stat_team: "Anggota Panitia Pemilu Dipimpin",
      stat_prog: "Program Kerja Diawasi di DPM",
      stat_event: "Peserta Event Didukung",
      sec_about: "Profil & Pendidikan",
      about_p1:
        "Saya menempuh studi S1 Teknik Informatika di Universitas Mercu Buana sejak 2023. Fokus utama saya berada pada pembuatan sistem di sisi server (backend), pengelolaan basis data relasional, serta instalasi dan pemecahan masalah jaringan komputer.",
      about_p2:
        "Selain kegiatan perkuliahan dan pengerjaan proyek akademik menggunakan Laravel, Node.js, dan MySQL, saya terbiasa bekerja dalam tim serta mengelola jalannya program organisasi mahasiswa di tingkat fakultas melalui BEM dan DPM Fasilkom.",
      edu_degree: "Sarjana Teknik Informatika (S1) — IPK 3.64 / 4.00",
      edu_period: "Sep 2023 – Sep 2027 (Target)",
      edu_pt1: "Mengembangkan aplikasi berbasis web menggunakan bahasa pemrograman dan kerangka kerja modern.",
      edu_pt2: "Mempelajari serta mempraktikkan konsep jaringan komputer, termasuk konfigurasi dan troubleshooting jaringan.",
      edu_pt3: "Menyelesaikan proyek akademik yang mencakup pemrograman, basis data, kecerdasan buatan, dan pengembangan perangkat lunak.",
      edu_pt4: "Aktif terlibat dalam organisasi mahasiswa untuk melatih kepemimpinan, komunikasi, dan pemecahan masalah.",
      sec_org: "Riwayat Organisasi",
      dpm_date: "Sep 2025 – Sekarang",
      dpm_role: "Staff of Supervision Division · Ketua Pelaksana Pemilu Raya 2026",
      dpm_pt1:
        "Memantau dan mengevaluasi lebih dari 10 program kerja organisasi mahasiswa agar berjalan sesuai regulasi yang berlaku.",
      dpm_pt2:
        "Mengawasi pelaksanaan lebih dari 10 kegiatan kemahasiswaan serta memberikan catatan evaluasi untuk perbaikan program.",
      dpm_pt3:
        "Menjabat sebagai Ketua Pelaksana Pemilu Raya 2026 (Chairperson of the 2026 General Election Committee), memimpin lebih dari 15 anggota panitia dari tahap perencanaan hingga pelaksanaan pemilihan mahasiswa.",
      bem_role: "Staff of Student Interests and Talents Department",
      bem_pt1:
        "Mengkoordinasikan lebih dari 5 kegiatan mahasiswa yang berkaitan dengan penyaluran minat, bakat, dan kreativitas.",
      bem_pt2:
        "Bekerja sama dengan Highschoolfest 2024 sebagai media partner sekaligus relawan operasional acara yang diikuti lebih dari 200 peserta.",
      bem_pt3:
        "Berkolaborasi dengan lebih dari 10 rekan panitia dan perwakilan organisasi mahasiswa dalam menyelenggarakan agenda fakultas.",
      sec_skills: "Keahlian",
      skill_hint: "Ketuk item keahlian untuk melihat detail penerapannya.",
      skill_cat1: "Backend & Web",
      skill_cat2: "Jaringan Komputer",
      skill_cat3: "Non-Teknis & Organisasi",
      sec_projects: "Proyek & Kode",
      filter_all: "Semua",
      proj1_title: "Pengembangan Aplikasi Web & Basis Data",
      proj1_desc:
        "Pengerjaan proyek aplikasi web akademik yang berfokus pada perancangan skema relasi database SQL, autentikasi pengguna, dan pengelolaan endpoint backend.",
      proj2_title: "Konfigurasi Topologi LAN/WAN & Layanan Jaringan",
      proj2_desc:
        "Praktikum dan simulasi perancangan pengalamatan IP, pembagian jaringan lokal maupun antarsegmen, pengaturan DHCP/DNS server, serta pengujian konektivitas.",
      proj3_title: "Web Portfolio Pribadi",
      proj3_desc:
        "Situs dokumentasi profil, riwayat organisasi, dan repositori kode sumber yang dirancang ringan tanpa framework dan di-deploy melalui GitHub & Netlify.",
      gh_heading: "Repositori Publik GitHub",
      sec_contact: "Kontak",
      contact_intro:
        "Untuk keperluan magang, diskusi proyek web/jaringan, atau kerja sama kegiatan, silakan hubungi saya melalui email, WhatsApp, atau kanal media sosial berikut.",
      btn_copy: "Salin",
      form_name: "Nama",
      form_email: "Email",
      form_subject: "Subjek",
      form_msg: "Pesan",
      form_submit: "Kirim Pesan"
    },
    en: {
      nav_about: "Profile",
      nav_org: "Organizations",
      nav_skills: "Skills",
      nav_projects: "Projects",
      nav_contact: "Contact",
      hero_eyebrow: "South Jakarta, Indonesia · Informatics Engineering",
      hero_lead:
        "Undergraduate Informatics Engineering student at <em>Universitas Mercu Buana</em> focusing on backend systems, web applications, and computer networking, with active organizational roles in DPM and BEM Fasilkom.",
      btn_cv: "Download CV (PDF)",
      btn_contact: "Get in Touch",
      stat_gpa: "Current GPA (out of 4.00)",
      stat_team: "Election Committee Members Led",
      stat_prog: "Student Org Programs Supervised",
      stat_event: "Event Participants Supported",
      sec_about: "Profile & Education",
      about_p1:
        "I have been pursuing a Bachelor's degree in Informatics Engineering at Universitas Mercu Buana since 2023. My primary focus is building server-side web applications, designing relational databases, and configuring computer networks.",
      about_p2:
        "Alongside coursework and academic projects built with Laravel, Node.js, and MySQL, I actively participate in faculty-level student governance and event operations through BEM and DPM Fasilkom.",
      edu_degree: "Bachelor of Informatics Engineering — GPA 3.64 / 4.00",
      edu_period: "Sep 2023 – Sep 2027 (Expected)",
      edu_pt1: "Developed web-based applications using modern programming languages and frameworks.",
      edu_pt2: "Learned and implemented computer networking concepts, including network configuration and troubleshooting.",
      edu_pt3: "Worked on academic projects involving programming, databases, artificial intelligence, and software development.",
      edu_pt4: "Actively participated in student organizations, developing leadership, teamwork, communication, and problem-solving skills.",
      sec_org: "Organizations",
      dpm_date: "Sep 2025 – Present",
      dpm_role: "Staff of Supervision Division · Chairperson of 2026 General Election Committee",
      dpm_pt1:
        "Monitored and evaluated 10+ student organization work programs to ensure compliance with established regulations.",
      dpm_pt2:
        "Supervised 10+ organizational activities and provided recommendations for program improvement.",
      dpm_pt3:
        "Served as Chairperson of the 2026 General Election Committee, leading 15+ committee members in planning and executing the student election.",
      bem_role: "Staff of Student Interests and Talents Department",
      bem_pt1:
        "Coordinated 5+ student activities related to interests, talents, and creativity.",
      bem_pt2:
        "Collaborated with Highschoolfest 2024 as a media partner and served as a volunteer, supporting event operations for 200+ participants.",
      bem_pt3:
        "Worked with 10+ committee members and student organization representatives to successfully conduct events and programs.",
      sec_skills: "Skills",
      skill_hint: "Click any skill below to inspect how I apply it.",
      skill_cat1: "Backend & Web",
      skill_cat2: "Computer Networking",
      skill_cat3: "Soft Skills",
      sec_projects: "Projects & Code",
      filter_all: "All",
      proj1_title: "Web Application & Relational Database Projects",
      proj1_desc:
        "Academic web engineering projects centered around SQL schema design, user authentication, and server-side application logic.",
      proj2_title: "LAN/WAN Topology & Network Services Lab",
      proj2_desc:
        "Hands-on configuration of TCP/IP addressing, local and wide-area routing, DHCP/DNS services, and systematic connectivity troubleshooting.",
      proj3_title: "Personal Portfolio Website",
      proj3_desc:
        "Lightweight static portfolio documenting organizational experience and public repositories, built with plain HTML, CSS, and JavaScript.",
      gh_heading: "Public GitHub Repositories",
      sec_contact: "Contact",
      contact_intro:
        "For internship opportunities, backend/networking project discussions, or organizational collaborations, feel free to reach out via email, WhatsApp, or social channels.",
      btn_copy: "Copy",
      form_name: "Name",
      form_email: "Email",
      form_subject: "Subject",
      form_msg: "Message",
      form_submit: "Send Message"
    }
  };

  // Interactive Skill Descriptions (ID & EN)
  const skillDescriptions = {
    Laravel: {
      id: "Digunakan untuk membangun backend aplikasi web berpola MVC, autentikasi pengguna, routing endpoint, dan integrasi database MySQL.",
      en: "Used to build MVC web backends, user authentication flows, clean routing, and relational MySQL database integration."
    },
    "Node.js": {
      id: "Lingkungan runtime JavaScript sisi server untuk membuat layanan API ringan, pengelolaan request asinkron, dan logika aplikasi web.",
      en: "Server-side JavaScript runtime used for lightweight REST APIs, asynchronous request handling, and backend logic."
    },
    MySQL: {
      id: "Perancangan skema tabel relasional, foreign key, normalisasi data, serta optimasi penyimpanan data pada proyek aplikasi web.",
      en: "Relational database schema design, normalization, foreign-key integrity, and structured data persistence for web apps."
    },
    SQL: {
      id: "Penulisan query terstruktur (JOIN, agregasi, filtering, dan sub-query) untuk pengolahan maupun pelaporan data aplikasi.",
      en: "Structured querying (JOINs, aggregations, filtering, and subqueries) to retrieve and analyze application data."
    },
    "HTML5 & CSS3": {
      id: "Penyusunan struktur semantik halaman web dan tata letak responsif yang nyaman diakses baik di layar desktop maupun handphone.",
      en: "Semantic markup and responsive layouts engineered for clarity and comfort across desktop and mobile screens."
    },
    JavaScript: {
      id: "Pengembangan antarmuka interaktif berbasis DOM, integrasi REST API (fetch), serta validasi formulir tanpa ketergantungan library berat.",
      en: "DOM-driven UI interactivity, asynchronous REST API integration, and client-side state handling in plain ES6+."
    },
    Git: {
      id: "Pengelolaan versi kode sumber, kolaborasi repositori di GitHub, serta alur deployment otomatis ke Netlify.",
      en: "Source version control, GitHub repository management, and continuous deployment pipelines connected to Netlify."
    },
    "TCP/IP": {
      id: "Pemahaman model lapisan protokol jaringan, pengalamatan IPv4, subnetting, dan analisis komunikasi paket antarpiranti.",
      en: "Practical understanding of IPv4 addressing, subnetting, packet routing, and core transport/network layer protocols."
    },
    "LAN / WAN": {
      id: "Perancangan dan simulasi topologi jaringan lokal maupun antarsegmen menggunakan switch dan router.",
      en: "Design and configuration of local and wide-area network topologies across switches, routers, and segmented subnets."
    },
    DNS: {
      id: "Konfigurasi sistem resolusi nama domain ke alamat IP serta pengelolaan record domain pada server maupun layanan hosting.",
      en: "Configuration of domain name resolution services and DNS records across local lab servers and cloud hosts."
    },
    DHCP: {
      id: "Pengaturan distribusi alamat IP dinamis, gateway, dan alokasi IP pool otomatis bagi perangkat klien di dalam jaringan.",
      en: "Automated IP pool allocation, default gateway assignment, and lease management for networked client devices."
    },
    Troubleshooting: {
      id: "Identifikasi kendala konektivitas jaringan menggunakan pengujian ping, traceroute, pemeriksaan tabel routing, dan verifikasi konfigurasi.",
      en: "Systematic diagnosis of connectivity issues through ping, route inspection, interface checks, and IP verification."
    },
    Leadership: {
      id: "Teruji memimpin 15+ anggota panitia sebagai Ketua Pelaksana Pemilu Raya Fasilkom 2026 dari perencanaan hingga hari pemilihan.",
      en: "Proven by leading 15+ committee members as Chairperson of the 2026 Student General Election from planning to execution."
    },
    Teamwork: {
      id: "Terbiasa bekerja lintas divisi bersama rekan kepanitiaan, pengurus BEM, DPM, dan perwakilan himpunan mahasiswa.",
      en: "Experienced collaborating across student departments, committees, and faculty organization representatives."
    },
    Communication: {
      id: "Menyampaikan hasil evaluasi pengawasan program kerja di DPM serta menjembatani koordinasi pihak internal maupun media partner.",
      en: "Clear reporting of program evaluations at DPM and effective coordination with internal teams and external partners."
    },
    "Problem Solving": {
      id: "Menyelesaikan kendala teknis kode/jaringan maupun kendala operasional lapangan secara terstruktur dan tenang.",
      en: "Methodical troubleshooting across both technical debugging/networking labs and live organizational operations."
    },
    "Time Management": {
      id: "Menjaga keseimbangan antara target akademik Teknik Informatika (IPK 3.64) dengan tanggung jawab aktif di organisasi fakultas.",
      en: "Balancing Informatics Engineering coursework (3.64 GPA) alongside active leadership responsibilities in DPM & BEM."
    },
    "Event Management": {
      id: "Mengkoordinasikan 5+ agenda minat bakat mahasiswa serta mendukung operasional acara dengan lebih dari 200 peserta.",
      en: "Coordinating 5+ student talent programs and supporting live event operations for 200+ participants."
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

  // 2. Interactive Skill Pills Explorer
  const skillDetailBox = document.getElementById("skillDetailBox");
  const skillDetailName = document.getElementById("skillDetailName");
  const skillDetailDesc = document.getElementById("skillDetailDesc");
  const skillPills = document.querySelectorAll(".skill-pill");

  function renderSkillDetail(skillKey) {
    activeSkill = skillKey;
    const info = skillDescriptions[skillKey];
    if (!info || !skillDetailName || !skillDetailDesc) return;
    skillDetailBox.style.opacity = "0.45";
    setTimeout(() => {
      skillDetailName.textContent = skillKey;
      skillDetailDesc.textContent = info[currentLang] || info.id;
      skillDetailBox.style.opacity = "1";
    }, 90);
  }

  skillPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      skillPills.forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      renderSkillDetail(pill.getAttribute("data-skill"));
    });
  });

  // 3. Language Toggle
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

    if (skillDescriptions[activeSkill]) {
      skillDetailDesc.textContent = skillDescriptions[activeSkill][lang];
    }
  }
  applyLanguage(currentLang);

  langToggle.addEventListener("click", () => {
    applyLanguage(currentLang === "id" ? "en" : "id");
  });

  // 4. Mobile Menu, Reading Progress Bar & Active Section Spy
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

  // 5. Smooth Scroll Reveal & Metric Counter Animation
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

  // 6. Smooth Project Category Filter
  const filterTabs = document.querySelectorAll(".filter-tab");
  const workItems = document.querySelectorAll(".work-item");

  filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      filterTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      const filter = tab.getAttribute("data-filter");

      workItems.forEach((item) => {
        const show = filter === "all" || item.getAttribute("data-category") === filter;
        if (show) {
          item.style.display = "block";
          requestAnimationFrame(() => {
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
          });
        } else {
          item.style.display = "none";
          item.style.opacity = "0";
        }
      });
    });
  });

  // 7. One-Click Copy Email Button
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

  // 8. GitHub Repositories Index
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

  // 9. Contact Form (Direct to alvianfathan6305@gmail.com via FormSubmit + Netlify Forms backup)
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
