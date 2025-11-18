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

## Design and Layout

1. Login Page
![Login Page](src/assets/screenshots/auth-layout-login.png)

2. Registration Page
![Registration Page](src/assets/screenshots/auth-layout-register.png)

3. Home Screen
![Home Screen](src/assets/screenshots/home-layout.png)

4. News Card
![News Card](src/assets/screenshots/news-details-layout.png)

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
