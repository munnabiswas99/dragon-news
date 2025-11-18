# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Dragoon News is a responsive front-end web application built with React that delivers real-time news articles across topics, with user authentication for personalized access. Built with modern web technologies (Vite, Tailwind, DaisyUI) and Firebase Authentication.

## Features
- Responsive UI (desktop + mobile)
- Real-time article listing and detail views
- Firebase Authentication (email/password + providers)
- Tailwind CSS + DaisyUI for styling
- Fast dev feedback with Vite

## Quick start

Install dependencies:

```powershell
npm install
```

Run the dev server:

```powershell
npm run dev
```

Build for production:

```powershell
npm run build
npm run preview
```

## Project structure (important files)
- index.html — app shell
- vite.config.js — Vite config and plugins
- src/App.jsx — main React component
- src/index.css — Tailwind / DaisyUI imports
- src/firebase/** — Firebase init and auth helpers
- screenshots/ — UI screenshots (4 images you added)

## Screenshots

Images are located in the screenshots/ folder. Replace names below if your files differ.

![Home screen](assets/screenshots/auth-layout-login.png)
![Article list](assets/screenshots/auth-layout-register.png)
![Article detail](assets/screenshots/home-layout.png)
![Mobile view](assets/screenshots/news-details-layout.png)

Use HTML for fixed width:

<img src="screenshots/screen1.png" alt="Home screen" width="720"/>

## Firebase setup (local)
1. Create a Firebase project and enable Authentication.
2. Copy config to src/firebase/config.js (or .env and load in code).
3. Example .env (add to .gitignore):

```
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
VITE_FIREBASE_PROJECT_ID=your_project
```

## Contributing
1. Create a branch: git checkout -b feat/your-change
2. Commit small changes with clear messages
3. Open a PR and request review

## Commit screenshots (PowerShell)

```powershell
git add screenshots/*
git add README.md
git commit -m "Add UI screenshots and update README"
git push
```

## License
Add a LICENSE file (e.g., MIT) or update this section to reflect your chosen license.
