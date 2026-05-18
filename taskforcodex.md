# Portfolio Website Plan - Industrial Software Engineer

## Tujuan Utama

Buat portfolio website profesional berdasarkan project nyata yang ada di `C:\laragon\www`.

Portfolio harus memposisikan pemilik sebagai:

- Industrial Software Engineer
- Manufacturing Digitalization Developer
- Operations Systems Developer
- Internal Enterprise Application Developer
- MES-like / Production Monitoring System Builder

Portfolio tidak boleh terlihat seperti template fresh graduate, portfolio CRUD biasa, atau generic web developer portfolio.

## Project Yang Akan Dianalisis

Scan dan analisis project berikut:

- `kasakata-cmb`
- `kasakata-gw`
- `kasakata-oee`
- `kasakata-pdr`
- `kasakata_am`
- `K-Maint`
- `lab-dispatch-system`
- `mixing`

## Prinsip Penting

Semua isi portfolio harus berdasarkan project nyata yang ditemukan di folder project.

Yang boleh dilakukan:

- Membaca struktur folder dan kode.
- Mengidentifikasi framework, database, routes, controller, model, migration, view, asset, dan integrasi.
- Mengambil kesimpulan profesional dari nama file, struktur aplikasi, route, model, dashboard, dan istilah bisnis yang ditemukan.
- Menulis ulang deskripsi agar terdengar business-oriented dan portfolio-ready.
- Menggunakan screenshot atau asset yang memang ditemukan di project.

Yang tidak boleh dilakukan:

- Membuat project fiktif.
- Mengklaim fitur yang tidak ada indikasinya di kode.
- Membuat angka impact palsu yang terlalu spesifik.
- Menampilkan semua project kalau tidak semuanya kuat untuk portfolio.

Jika informasi kurang lengkap, gunakan phrasing yang aman seperti:

- "Designed to support..."
- "Indicates workflow for..."
- "Code structure suggests..."
- "Used as an internal system for..."

## Tahap Eksekusi

### 1. Project Discovery

Untuk setiap project, identifikasi:

- Nama project
- Framework / tech stack
- Bahasa pemrograman
- Database yang digunakan
- Struktur aplikasi
- Routing
- Controller / service layer
- Model / entity utama
- Migration / schema database
- View / frontend pages
- Asset, screenshot, image, atau dashboard preview
- Library chart, export, barcode, PDF, Excel, queue, scheduler, API, atau integration jika ada

Jika project berbasis Laravel, baca:

- `routes/web.php`
- `routes/api.php`
- `app/Http/Controllers`
- `app/Models`
- `database/migrations`
- `resources/views`
- `public`
- `config`
- `composer.json`
- file JavaScript / CSS / dashboard-related assets

### 2. Feature And Business Analysis

Untuk setiap project, buat ringkasan:

- Fitur utama
- Business use case
- Workflow operasional
- Peran user dalam sistem
- Data yang dikelola
- Dashboard atau reporting yang tersedia
- API integration
- Automation features
- Barcode / traceability features
- Production monitoring features
- Tingkat kompleksitas
- Nilai bisnis untuk perusahaan

Fokus analisis pada konteks:

- Manufacturing systems
- Production monitoring
- Industrial digitalization
- MES-like workflows
- Operational dashboards
- Internal enterprise applications
- Maintenance systems
- Lab / dispatch workflows
- Raw material traceability
- Production reporting

### 3. Project Selection

Jangan tampilkan semua project di portfolio utama.

Pilih project yang paling kuat berdasarkan kriteria:

- Kompleksitas aplikasi
- Dampak bisnis
- Relevansi manufacturing / operations
- Kualitas visual dashboard
- Kedalaman workflow
- Bukti skill engineering
- Ada database schema yang jelas
- Ada reporting, monitoring, automation, barcode, atau integration

Prioritaskan project yang menunjukkan:

- Production monitoring
- OEE / performance tracking
- Maintenance management
- Lab dispatch workflow
- Mixing / production process
- Barcode atau raw material traceability
- Dashboard analytics
- Workflow approval / operational process
- Enterprise internal system

Target portfolio utama:

- 3 sampai 5 featured projects
- Project lain boleh masuk sebagai "Additional Systems" jika relevan

### 4. Case Study Generation

Untuk setiap featured project, buat case study dengan struktur:

- Project Title
- Short Positioning Statement
- Business Problem
- Solution
- Key Features
- Tech Stack
- System Workflow
- Architecture Highlights
- Engineering Challenges
- Business Impact
- Screenshot / Gallery Section

Gaya penulisan harus business-oriented.

Hindari deskripsi seperti:

- "CRUD data user"
- "Membuat halaman admin"
- "Menggunakan Laravel dan MySQL"

Gunakan gaya seperti:

- "Centralized production data into a single operational dashboard."
- "Reduced manual tracking by digitizing daily reporting workflow."
- "Improved traceability across production and material movement."
- "Enabled faster decision-making through real-time operational summaries."

Impact metrics boleh berupa kualitatif jika tidak ada angka asli, misalnya:

- Reduced manual tracking
- Improved traceability
- Faster reporting
- Reduced production errors
- Centralized monitoring
- Better operational visibility
- Standardized workflow execution

Jangan membuat angka seperti "reduced errors by 40%" kecuali ada bukti nyata di project.

### 5. Skill Mapping

Dari seluruh project yang dianalisis, buat skill mapping otomatis.

Skill yang perlu dicari:

- Laravel
- PHP
- MySQL
- JavaScript
- Tailwind / Bootstrap
- Dashboard Analytics
- MES-like Systems
- Manufacturing Workflow
- Barcode Systems
- Reporting Systems
- API Integration
- Production Monitoring
- Internal Enterprise Systems
- Maintenance Management
- Lab Workflow
- Data Export / PDF / Excel
- Authentication / Role Access

Skill ditampilkan berdasarkan evidence dari kode, bukan daftar generic.

Setiap skill idealnya punya konteks, contoh:

- `Laravel` - used across multiple internal manufacturing applications.
- `Dashboard Analytics` - found in OEE, reporting, or monitoring views.
- `Barcode / Traceability` - found in raw material or production movement workflows.

### 6. Screenshot And Asset Detection

Cari asset visual di:

- `public`
- `storage`
- `resources`
- `assets`
- `images`
- `img`
- `screenshots`
- folder upload atau dashboard preview

Gunakan asset yang ditemukan sebagai:

- Project gallery
- Dashboard preview
- Case study visual
- Background detail section

Jika tidak ada screenshot yang layak:

- Buat placeholder visual berbasis UI mock/dashboard style yang jelas diberi konteks sebagai preview layout, bukan bukti screenshot real.
- Jangan menyebut placeholder sebagai screenshot aplikasi asli.

### 7. Portfolio Website Structure

Website harus terdiri dari:

- Homepage
- About section
- Featured projects
- Project detail pages
- Tech stack section
- Skill mapping section
- Impact metrics section
- Project timeline
- Contact section
- Downloadable resume section

Recommended page structure:

- `/`
- `/projects`
- `/projects/[slug]`
- `/about`
- `/resume`
- `/contact`

### 8. Recommended Tech Stack

Gunakan salah satu:

- Next.js + Tailwind CSS
- React + Vite + Tailwind CSS
- Laravel + Blade + Tailwind CSS

Preferensi utama:

- Next.js + Tailwind CSS jika ingin portfolio modern, component-based, SEO-friendly, dan mudah dibuat project detail pages.

Alternatif:

- Laravel + Tailwind jika ingin tetap dekat dengan ekosistem project yang dianalisis.

Final choice harus mengikuti kondisi folder, dependency yang tersedia, dan kemudahan menjalankan project secara lokal.

### 9. Visual Direction

Gaya visual:

- Industrial tech
- Modern SaaS
- Executive dashboard
- Enterprise software
- Clean, sharp, professional

Elemen UI:

- Dark / light professional theme
- Responsive layout
- Smooth subtle animation
- Card-based project showcase
- Dashboard-inspired aesthetic
- Modern typography
- Clean spacing
- Tech stack badges
- Timeline
- Case study layout

Hindari:

- Template portfolio fresh graduate
- Hero terlalu generic
- Skill bar kosong tanpa konteks
- Warna terlalu playful
- Deskripsi CRUD biasa
- Screenshot palsu

### 10. Content Tone

Tone portfolio:

- Confident
- Technical but business-aware
- Operationally mature
- Focused on impact
- Suitable for manufacturing / enterprise audience

Contoh positioning:

> I build internal software systems for manufacturing operations, production visibility, maintenance workflows, and enterprise process digitalization.

Contoh hero direction:

> Industrial Software Engineer building production monitoring, workflow automation, and operational dashboard systems for manufacturing environments.

### 11. Deliverables

Output akhir yang harus dibuat:

- Portfolio website source code
- Homepage
- Featured project cards
- Project detail pages
- Case study content generated from real projects
- Skill mapping from analyzed projects
- Impact metric section
- Resume download section
- Contact section
- Reusable components
- Responsive styling
- SEO metadata
- Local run instructions

### 12. Working Order

Kerjakan secara bertahap:

1. Scan semua folder project.
2. Buat inventory project.
3. Analisis framework, database, route, controller, model, migration, view, asset.
4. Buat project scoring.
5. Pilih 3 sampai 5 project terbaik.
6. Generate case study berbasis evidence.
7. Tentukan stack portfolio.
8. Buat struktur website.
9. Implement homepage.
10. Implement featured projects.
11. Implement project detail pages.
12. Implement skill mapping dan impact metrics.
13. Tambahkan screenshot/gallery jika tersedia.
14. Tambahkan resume dan contact section.
15. Jalankan build/test/dev server.
16. Review tampilan responsive.
17. Rapikan final copywriting.

## Output Analisis Yang Harus Dibuat Sebelum Coding

Sebelum membangun website, buat file analisis seperti:

- `portfolio-project-audit.md`
- `portfolio-content-plan.md`

Isi `portfolio-project-audit.md`:

- Semua project yang discan
- Evidence file yang ditemukan
- Framework dan database
- Fitur utama
- Business use case
- Screenshot / asset candidate
- Skor portfolio

Isi `portfolio-content-plan.md`:

- Project terpilih
- Case study draft
- Skill mapping
- Impact metrics
- Struktur halaman
- Visual direction
- Copywriting final

Setelah dua dokumen ini jelas, lanjut implementasi portfolio.
