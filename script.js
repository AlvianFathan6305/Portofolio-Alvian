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
      form_name: "Name",
      form_email: "Email",
      form_subject: "Subject",
      form_msg: "Message",
      form_submit: "Send Message"
    }
  };

  const htmlEl = document.documentElement;
  let currentLang = localStorage.getItem("alvian_lang") || "id";

  // Theme Toggle
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

  // Language Toggle
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
  }
  applyLanguage(currentLang);

  langToggle.addEventListener("click", () => {
    applyLanguage(currentLang === "id" ? "en" : "id");
  });

  // Mobile Menu & Active Section
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
      let activeId = "";
      sections.forEach((sec) => {
        if (window.scrollY >= sec.offsetTop - 140) {
          activeId = sec.id;
        }
      });
      navLinks.querySelectorAll("a").forEach((a) => {
        a.classList.toggle("active", a.getAttribute("href") === `#${activeId}`);
      });
    },
    { passive: true }
  );

  // Project Filter
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

  // GitHub Repositories Index
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

  // Contact Form (Direct to alvianfathan6305@gmail.com via FormSubmit + Netlify Forms backup + Mailto fallback)
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
      // 1. Save backup to Netlify Forms when hosted on Netlify (non-blocking)
      if (window.location.hostname.endsWith("netlify.app") || window.location.protocol.startsWith("http")) {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString()
        }).catch(() => {});
      }

      // 2. Send directly to Gmail inbox (alvianfathan6305@gmail.com)
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
