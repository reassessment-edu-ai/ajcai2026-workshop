# Assessment in the Age of AI — AJCAI 2026 Workshop

Website for the half-day workshop *Assessment in the Age of AI: Designing Valid, Human-Centred Assessment with Generative AI and Agents*, accepted at [AJCAI 2026](https://ajcai26.org/) (Auckland, New Zealand, 27–30 November 2026).

The site is a single self-contained `index.html` — no build step, no dependencies, no JavaScript.

## Publishing on GitHub Pages

1. Create a new repository (e.g. `ajcai2026-assessment-workshop`) and push these files to the default branch.
2. In the repo, go to **Settings → Pages**.
3. Under **Source**, choose **Deploy from a branch**; set branch to `main` and folder to `/ (root)`. Save.
4. The site appears at `https://<username>.github.io/<repo-name>/` within a minute or two.

To use a custom domain, add a `CNAME` file containing the domain and point a DNS CNAME record at `<username>.github.io`.

`.nojekyll` is included so GitHub serves the files as-is rather than running them through Jekyll.

## Editing

Everything lives in `index.html`. The styles are in one `<style>` block at the top; content is plain HTML below it. Common edits:

- **Colours** — the `:root` block near the top defines the palette; `--accent` is the teal used for headings and highlights. A dark-mode variant follows it.
- **Program table** — search for `id="program"`. Each row is `<td class="time">` plus a session cell.
- **Speakers** — search for `id="speakers"`. Copy a `<div class="person">` block to add one.
- **Status badges** — `<span class="tbd">To be confirmed</span>` renders the small pill; the confirmed badge on Zhigang Lu uses an inline green override.

## Placeholders to fill in

These are marked TBC on the page and should be updated as details firm up:

- [ ] Exact workshop date and room within the AJCAI 2026 programme (currently "to be confirmed" in the header and program note)
- [ ] Invited Talk 1–4 — speaker names and titles in the program table
- [ ] Danny Liu and Elliot Varoy — confirm and add talk titles/bios
- [ ] Technical Forum case presenters, once invited
- [ ] Panellist names for the structured panel
- [ ] Direct registration link, if AJCAI provides a workshop-specific one

Note: the proposal lists Elliot Varoy under the University of Sydney — worth double-checking the affiliation before the page goes public.

## Organisers

Sichao Li (University of Sydney) · Mary Lou Maher (University of Sydney) · Yan Zhang (Charles Darwin University) · Junda Lu (Western Sydney University) · Zhengyi Yang (University of Sydney)

Contact: sichao.li@usyd.edu.au
