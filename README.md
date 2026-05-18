# 📰 Dragoon News

Dragoon News is a modern, responsive front-end web application built with **React** that delivers real-time news articles across a variety of categories. It features smooth UI navigation, infinite marquee text tracks for trending news, and complete social and traditional user authentication using **Firebase**.

---

## 🚀 Key Features

* **Dynamic Layout Architecture**: Three specialized layout templates (**Home Layout**, **News-Details Layout**, and **Auth Layout**) optimized for scannability and structure.
* **Real-time Streaming Content**: Fetches real-time articles, categorizes them dynamically, and populates individual category routes smoothly.
* **⚡ Live Ticker**: An automated, infinite-sliding header ticker powered by `react-fast-marquee` displaying exclusively filtered trending news headlines.
* **Secure Authentication Stack**: Complete email/password registration, password recovery configuration, and one-click social authentication popups via **Google** and **GitHub**.
* **Smart Multi-Provider Prevention**: Built-in protection handling account linking conflicts across shared email profiles.
* **Responsive UI/UX Engine**: Styled natively using **Tailwind CSS** and customized Poppins typography for desktop, tablet, and mobile platforms.

---

## 📁 Project Layout & Architecture

The application is structured cleanly around three foundational multi-tier layouts:

### 1. Home / News Layout
A triple-column responsive layout template dividing navigation, dynamic categorizations, and detailed interactive user panels:
* **Header Stack**: Features branding elements, date stamps, the dynamic trending marquee ticker (`<LatestNews />`), and the main `<NavBar />`.
* **Left Column (3/12 Space)**: Lists all available news categories via structural data links that automatically filter the primary container stream.
* **Center Section (6/12 Space)**: Tracks dynamic route changes via a structured React Router `<Outlet />` wrapper to serve category-filtered news streams with responsive loading boundaries.
* **Right Column (3/12 Space)**: Dynamic utility column containing custom authentication panels, quick social log-in widgets (`<SocialLogin />`), and promotional slots.

### 2. News-Details Layout
A focused, full-width content viewing page that reads parameters cleanly via route boundaries. Contains high-resolution featured card images, detailed content spacing, justified typography layout schemes, and clean fallback navigation buttons.

### 3. Auth Layout
A centralized, distraction-free template dedicated purely to user account management. Serves optimized, clean, minimalistic card variations for both account creation and access operations.

---
