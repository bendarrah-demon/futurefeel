# futurefeel.co

The Future Feel website: calm apps for busy lives, built in public.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check and build to dist/
```

## Where things live

- `src/content/site.ts`: all page copy, apps, notes and contact details. Edit words here, not in the pages.
- `src/content/model.ts`: the figure-of-eight model.
- `src/pages/`: one file per page (Home, Kin, Apps, Notes, Purpose, Sources, About, Privacy, NotFound).
- `src/components/`: the mark, buttons, the Kin week strip, the figure of eight, the follow form.
- `src/index.css`: brand tokens (see `../brand/guidelines.md`).
- `vercel.json`: redirects from old addresses and deep-link support.

## Writing a note

Add an entry to the top of `notes` in `src/content/site.ts` with a `slug`, `date` (YYYY-MM-DD), `title`, `summary` and `body` paragraphs. It appears on the home page and at `/notes/<slug>`.

## Switching on the email sign-up

Set `community.formAction` in `src/content/site.ts` to your newsletter service's form endpoint. Until then, "Follow the build" opens an email.
