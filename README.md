# The Green Dictate — Website (HPL Round 4, Deliverable 1)

Static, mobile-friendly site (plain HTML/CSS/JS, no build step). Works on GitHub Pages as-is.

## Structure

```
index.html            Home: name, logo, tagline, concept, CTAs
about.html            Brand story, vision, mission, theme, target customer, USP
menu.html             Sample menu, signature dish (The 2029 Table), signature beverage (The Impound)
gallery.html          Visuals + Round 3 Reel and photo slots
blog.html             Blog index
blog/story-behind-our-brand.html     Blog 1
blog/our-signature-experience.html   Blog 2
contact.html          Contact details, social links, Guest List form
assets/css|js|img     Styles, scripts, images
```

## Before you publish: replace these placeholders

1. **Email and social links**: search all `.html` files for `REPLACE` and put in your real email, Instagram, LinkedIn and Facebook URLs.
2. **Round 3 Reel**: open `gallery.html`, find the `id="reel"` block and follow the comment (self-hosted `assets/video/reel.mp4`, or an Instagram/YouTube embed).
3. **Round 3 photographs**: add them to `assets/img/` (e.g. `round3-01.jpg`) and replace the three `photo-slot` divs in `gallery.html` with `<img>` tags (include alt text).
4. **Guest-list form**: by default it opens an email draft to your team address. For a real form, create a free form at formspree.io and paste its URL into `data-endpoint=""` on the `<form id="guest-form">` in `contact.html`.
5. **Landing page (Deliverable 2)**: all "Join the First 100 Guest List" buttons currently go to `contact.html#guest-list`. When your landing page exists, change that link site-wide (it appears as the `LANDING` value).
6. Add a "Team responsibilities" note to your submission (the brief asks who owns the website, landing page, social, influencer and email).

## Publishing on GitHub Pages

1. Create a new public repository (e.g. `green-dictate`) on github.com.
2. Upload everything in this folder (drag and drop works; keep the folder structure), or:
   ```bash
   git init
   git add .
   git commit -m "Green Dictate website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/green-dictate.git
   git push -u origin main
   ```
3. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main`, folder `/ (root)` → Save**.
4. After about a minute your site is live at `https://YOUR-USERNAME.github.io/green-dictate/`.
5. Submit that URL, plus the two blog URLs:
   - `.../blog/story-behind-our-brand.html`
   - `.../blog/our-signature-experience.html`

## Compliance notes (from the brief)

- No opening dates, availability or booking promises are stated as fact; prices are labelled indicative.
- The form is an interest list, not a reservation.
- The AI-generated images are from the Round 1 report and are labelled as AI-generated concepts.
- Use only authorised photos, music and logos, and get consent for identifiable people in Round 3 content.
