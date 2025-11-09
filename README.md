# Personal Portfolio — React + Tailwind CSS

A clean, modern, and fully responsive personal portfolio template built with **React** and **Tailwind CSS**. Ideal for showcasing your projects, skills, and contact information. This README explains how to set up, customize, and deploy the portfolio.

---

## 🚀 Features

* Responsive layout (mobile-first) using Tailwind CSS utility classes
* Component-based architecture with React
* Projects section with live demo & GitHub links
* Skills section
* Contact form (static or connected to an email service)
* Smooth scrolling and subtle animations
* SEO-friendly metadata
* Accessibility-friendly markup
---

## 🧰 Tech Stack

* React (Create React App / Vite — recommended)
* Tailwind CSS
* PostCSS
---

## 📁 Project Structure (suggested)

```
my-portfolio/
├─ public/
│  └─ index.html
├─ src/
│  ├─ assets/            # images, icons, svgs
│  ├─ components/        # Hero, About, Projects, Skills, Contact
│  ├─ styles/            # tailwind.css (imports), globals
│  ├─ App.jsx
│  └─ main.jsx
├─ tailwind.config.js
├─ postcss.config.js
├─ package.json
└─ README.md
```

---

## ⚙️ Setup (Vite + React recommended)

### 1) Create project (Vite)

```bash
npm create vite@latest my-portfolio -- --template react
cd my-portfolio
```

### 2) Install dependencies

```bash
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 3) Configure Tailwind

`tailwind.config.js`

```js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Create `src/styles/tailwind.css` and add:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Import the CSS in `main.jsx`:

```js
import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/tailwind.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

### 4) Start dev server

```bash
npm run dev
```

---

## 🧩 Example Components

### Navbar (responsive)

* Mobile hamburger menu
* Smooth scroll to sections
* Active link highlighting

### Hero

* Short intro, title, CTA buttons (View Projects, Contact)
* Optional profile picture or animated background

### Projects grid

* Cards with image, short description, tech stack, repo & demo links
* Modal or route to project detail page

### Contact

* Simple contact form (Name, Email, Message)
---

## 🎨 Styling Tips

* Use Tailwind’s utility classes for spacing, layout and responsive rules: `sm:`, `md:`, `lg:`, `xl:`
* Keep a small set of custom colors in `tailwind.config.js` to maintain brand consistency
* Use `@apply` in component-specific CSS only when it improves readability
* Use `aspect-w` / `aspect-h` utilities or `object-cover` for images

---

## 🔒 Security & Performance

* Lazy-load images and components
* Use optimised images (WebP) and `loading="lazy"`
* Minify and tree-shake for production (handled by Vite)
---

## 📦 Deployment

Deploy to any static hosting provider (recommended):

* Vercel (easy Vite integration)
* Netlify
* GitHub Pages

Build command:

```bash
npm run build
```

---

## 🔁 Customization Checklist

* [ ] Replace placeholder content with your name, bio, and picture
* [ ] Add projects with images, descriptions, and links
* [ ] Update skills with relevant technologies
* [ ] Configure contact form integration or add an email address
* [ ] Choose and apply color palette and fonts (Google Fonts)
* [ ] Test on mobile and desktop

---

## 🧾 License

This project is licensed under the MIT License. Feel free to use the template and adapt it for personal use.

---

## 🙏 Credits

* Built with ❤️ using React and Tailwind CSS
* Icons: Heroicons / Font Awesome

---
