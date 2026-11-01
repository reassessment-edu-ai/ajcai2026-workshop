# Assessment in the Age of AI — AJCAI 2026 Workshop

Website for the workshop *Assessment in the Age of AI: Designing Valid, Human-Centred Assessment with Generative AI and Agents*, accepted at [AJCAI 2026](https://ajcai26.org/) (Auckland, New Zealand, 27–30 November 2026).

## Organisers

Sichao Li (University of Sydney) · Mary Lou Maher (University of Sydney) · Yan Zhang (Charles Darwin University) · Junda Lu (Western Sydney University) · Zhengyi Yang (University of Sydney)

## Website structure

This is a static, multi-page website for GitHub Pages. No build step is required.

- `index.html` — About the workshop (home)
- `themes.html` — Three perspectives
- `questions.html` — Key questions
- `program.html` — Program
- `speakers.html` — Invited speakers
- `audience.html` — Audience and shared framework
- `organisers.html` — Organisers
- `contact.html` — Attending and contact
- `styles.css` — Shared styles for all pages
- `legacy-links.js` — Redirects old homepage section links to their new pages

Each page contains the same main navigation. When changing navigation, update all eight HTML files. Page links and assets use relative paths so the site works under the GitHub Pages project path.

To preview locally, run `python3 -m http.server 8000` from this directory and open `http://localhost:8000/`.
