# Mohamed Hesham Ismael Ibrahim — Portfolio Website

A modern, high-performance, and responsive personal portfolio website engineered with **Next.js 16**, **TypeScript**, and **Tailwind CSS**. Designed specifically for **Mohamed Hesham Ismael Ibrahim**, Cross-Platform Mobile Application Developer (Flutter & Dart), Computer Science Graduate from Ain Shams University, and Information Technology Institute (ITI) Certified Trainee.

---

## 🚀 Live Demo & Repository
- **Local Dev Server:** `http://localhost:3000`
- **GitHub Profile:** [MohamedH19](https://github.com/MohamedH19)
- **LinkedIn Profile:** [Mohamed Hesham](https://www.linkedin.com/in/mohamed-hesham-444ab7214)

---

## 🎨 Visual Identity & Design Decisions

- **Color Palette:**
  - **Primary Base:** Cosmic Deep Navy (`#070d1e`, `#0b152d`)
  - **Text & Foreground:** Crisp Pure White (`#f8fafc`, `#ffffff`) & Slate (`#94a3b8`)
  - **Accent & Highlights:** Electric Amber / Gold Yellow (`#facc15`, `#eab308`)
  - **Secondary Accents:** Sky / Cyan (`#38bdf8`) & Emerald for verification tags (`#10b981`)
- **Theme Support:** Dark Theme (default) with smooth toggle to Light Theme.
- **Aesthetic Direction:** Modern Developer SaaS / Dark Futuristic / Swiss clarity with subtle glassmorphic backdrop filters, grid lines, and glowing neon accents.
- **Typography:** Modern clean sans-serif typography with high readability and monospace tags for technical terms.
- **Responsive Layout:** 100% fluid scaling across mobile phones (375px+), tablets, laptops, and large desktop screens without horizontal overflow.

---

## 📱 Sections & Key Features

1. **Responsive Navbar:**
   - Sticky backdrop-blur navigation with brand initials, section indicators, Dark/Light theme toggle, and mobile navigation drawer.
2. **Hero Section:**
   - Clear value proposition: Cross-Platform Mobile Developer (Flutter & Dart).
   - Real photo asset: `Professional-ME.jpg`.
   - Floating tech pills (Flutter 3.x, Riverpod, Clean Architecture).
   - "Available for Hire" live indicator.
   - Quick CTAs: "View My Projects", "Download CV", and "Let's Talk".
3. **About Section:**
   - Professional bio, career goals, personal strengths, and engineering philosophy.
   - Verified credentials card (Ain Shams University CS Degree & ITI Certification).
4. **Skills Matrix:**
   - Categorized skills: Mobile & Frontend, Backend & Cloud, Programming Languages, Databases, Tools & DevOps, and Architecture.
   - Interactive category filter tabs and real-time search input.
   - Authentic skill levels without misleading percentage bars.
5. **Featured Projects & Case Studies:**
   - **WiseWallet:** Personal Finance & Expense Tracker with Flutter, Riverpod, and Firebase.
   - **Weather App:** Dynamic Real-Time Weather Application with REST API integration.
   - **FitFlow Companion:** Cross-Platform Health & Workout Tracking Application.
   - **Interactive Case Study Modal:** Full-screen dialog with problem, solution, architecture blueprint, feature checklist, challenges, and links.
6. **Career & Training Pathway:**
   - ITI (Information Technology Institute) Intensive Flutter Developer Trainee.
   - Freelance & Client Mobile Engineering.
   - Ain Shams University Academic Computer Science Milestones.
7. **Education & Certifications:**
   - Ain Shams University Bachelor of Computer Science degree overview & coursework.
   - Information Technology Institute (ITI) Flutter Certification.
   - **Interactive Certificate Lightbox Modal** with high-resolution preview and download button.
8. **Specialized Services:**
   - Cross-Platform Mobile App Development.
   - Mobile UI/UX Implementation (Material 3 & Cupertino).
   - API & Cloud Backend Integration (Node.js, Express, Firebase).
   - App Optimization & Code Refactoring.
9. **Contact & Social Hub:**
   - Interactive contact form with live validation.
   - One-click copy buttons for email (`mh28321@gmail.com`) and phone (`+201012981220`).
   - Direct WhatsApp chat link (`wa.me/201012981220`) and LinkedIn / GitHub links.
10. **Footer:**
    - Identity, quick links, copyright notice, and back-to-top smooth scrolling button.

---

## 📁 Project Structure

```
├── Assests/                                # Original assets provided
│   ├── Professional-ME.jpg                 # Profile picture
│   ├── ProfessionalTraining-Flutter-ITI-Experince.jpg
│   ├── WiseWallet-Professional-App-Experience.png
│   └── ProfesscionalWeatherApp-project-experince.png
├── public/
│   ├── assets/                             # Static public assets
│   │   ├── Professional-ME.jpg             # Active profile avatar
│   │   ├── ProfessionalTraining-Flutter-ITI-Experince.jpg
│   │   ├── WiseWallet-Professional-App-Experience.png
│   │   ├── ProfesscionalWeatherApp-project-experince.png
│   │   └── fitflow-project.jpg
│   ├── robots.txt                          # Search engine crawling rules
│   └── sitemap.xml                         # XML Sitemap for indexing
├── src/
│   ├── app/
│   │   ├── globals.css                     # Custom styles, theme tokens, scrollbar
│   │   ├── layout.tsx                      # Root layout, fonts, and OpenGraph SEO
│   │   └── page.tsx                        # Homepage assembling all sections
│   ├── components/
│   │   ├── About.tsx                       # About section
│   │   ├── CertificateModal.tsx            # Lightbox modal for ITI certificate
│   │   ├── Contact.tsx                     # Validated contact form & quick channels
│   │   ├── Education.tsx                   # Ain Shams Degree & ITI Certification
│   │   ├── Experience.tsx                  # Career and training timeline
│   │   ├── Footer.tsx                      # Brand footer & back to top
│   │   ├── Hero.tsx                        # Hero section with avatar & CTAs
│   │   ├── Icons.tsx                       # Custom SVGs for GitHub, LinkedIn, WhatsApp
│   │   ├── Navbar.tsx                      # Responsive navbar & theme toggle
│   │   ├── ProjectModal.tsx                # Case study breakdown modal
│   │   ├── Projects.tsx                    # Featured projects showcase & filter
│   │   ├── Services.tsx                    # Services and deliverables
│   │   └── Skills.tsx                      # Categorized skills matrix & search
│   ├── context/
│   │   └── ThemeContext.tsx                # Dark / Light theme state & localStorage
│   └── data/
│       └── portfolioData.ts                # Centralized source of truth data
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🛠️ Getting Started

### 1. Installation
Install all dependencies using npm:
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

### 3. Build for Production
```bash
npm run build
```
This generates a production build optimized with Next.js Turbopack.

### 4. Start Production Server
```bash
npm run start
```

---

## 🌐 Deployment Instructions

### Deploy to Vercel (Recommended)
1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "Complete portfolio website for Mohamed Hesham"
   git push origin main
   ```
2. Log into [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository `Portofolio`.
4. Vercel will automatically detect **Next.js** and build settings (`npm run build`).
5. Click **Deploy**.

### Form Integration (Optional Backend)
The contact form currently features full client-side validation and feedback states. To connect it to live email delivery:
- **Option A (Formspree):** Add your Formspree endpoint URL into the form submission in `src/components/Contact.tsx`.
- **Option B (Resend / Next.js API):** Create a route handler at `src/app/api/contact/route.ts` with your `RESEND_API_KEY`.
