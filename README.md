# Lepuski Bar & Nightclub

One-page website for Lepuski Bar & Nightclub — Bar, Nightclub, and Karaoke.

**Project context & decisions**: See [CONTEXT.md](CONTEXT.md) for decisions made so far and a log for future decisions.

## Run locally

Open `index.html` in a browser, or use a simple static server:

```bash
npx serve .
```

Then visit `http://localhost:3000` (or the URL shown).

## Run tests

Install dependencies and run HTML, CSS, and JS checks:

```bash
npm install
npm test
```

Run before every push so CI stays green.

## Replace images and favicon later

- **Images**: Add `bar.jpg`, `nightclub.jpg`, `karaoke.jpg` (and optional `hero.jpg`) into an `images/` folder. Update `index.html` to use `images/bar.jpg` etc. instead of Unsplash URLs. Recommended size for section images: 1200×800px.
- **Favicon**: Add your favicon file (e.g. `favicon.ico` or `favicon.png`) and add in `<head>`:  
  `<link rel="icon" href="favicon.ico" type="image/x-icon">`

## Git + Vercel

1. Initialize Git: `git init`, add `.gitignore`, then `git add .` and `git commit -m "Initial commit"`.
2. Create a new repository on GitHub, then:  
   `git remote add origin <repo-URL>`  
   `git branch -M main`  
   `git push -u origin main`
3. In [Vercel](https://vercel.com): **Add New** → **Project** → **Import** your GitHub repo → Deploy. Every push to `main` will auto-deploy.
