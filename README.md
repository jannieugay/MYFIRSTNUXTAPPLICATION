# My First Nuxt Application — Jannie Ugay

Personal portfolio and profile web application built with **Nuxt 4**, **Vue 3**, and **Tailwind CSS**, styled using the custom **"Subtle Elegance"** color palette (`#020403`, `#141413`, `#1A2324`, `#5F2E1B`).

---

## 👨‍💻 About Me

- **Name**: Jannie Ugay
- **Status**: BS Information Technology Student at **Caraga State University** (2024 – Present)
- **Email**: ugayjannie@gmail.com
- **Phone**: +63 938 696 0401
- **Focus**: Python, C Programming, SQL & Databases, Web Technologies (HTML/CSS/Vue/Nuxt), Networking, and Problem Solving.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: [Nuxt 4](https://nuxt.com/) (Vue 3 Composition API with `<script setup lang="ts">`)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with `@nuxtjs/tailwindcss`
- **Routing**: File-based routing (`app/pages/index.vue` and `app/pages/profile.vue`)
- **Structure**:
  - `app/pages/`: Page routes (`/` and `/profile`)
  - `app/components/`: Reusable, auto-imported UI components (`AppNavbar`, `AppFooter`, `SkillBadge`, `StatCard`)
  - `app/layouts/`: Persistent application shell (`default.vue`)
  - `public/`: Static assets (`jannie-ugay.jpg`, etc.)

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
npm run preview
```
