import { Link } from "react-router-dom";
import { siteContent } from "../content/site";
import { OverlapMark } from "../components/Brand";
import { Container, Eyebrow, ButtonLink, Arrow, StagePill } from "../components/ui";
import { WeekStrip } from "../components/WeekStrip";
import { FigureEight } from "../components/FigureEight";
import { Promises } from "../components/Promises";
import { NoteDate } from "../components/NoteDate";
import { model } from "../content/model";

export function Home() {
  const { home, apps, notes, contact } = siteContent;
  const latest = notes.slice(0, 2);

  return (
    <>
      <title>{home.title}</title>

      {/* Hero */}
      <section className="overflow-hidden">
        <Container className="grid items-center gap-10 pt-14 pb-16 sm:pt-20 md:grid-cols-[1.35fr_1fr] md:pb-24">
          <div>
            <Eyebrow className="mb-6">{home.eyebrow}</Eyebrow>
            <h1 className="text-5xl font-semibold tracking-tight text-ink text-balance sm:text-6xl lg:text-7xl lg:leading-[1.02]">
              {home.headline}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-soft text-pretty sm:text-xl">{home.sub}</p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <ButtonLink to={home.primary.href}>
                {home.primary.label} <Arrow />
              </ButtonLink>
              <ButtonLink to={home.secondary.href} variant="secondary">
                {home.secondary.label}
              </ButtonLink>
            </div>
          </div>
          <OverlapMark className="mx-auto w-56 sm:w-72 md:w-full md:max-w-sm" />
        </Container>
      </section>

      {/* Happening now */}
      <section className="border-y border-line bg-white">
        <Container className="py-10 sm:py-12">
          <div className="flex items-baseline justify-between gap-4">
            <Eyebrow>{home.now.eyebrow}</Eyebrow>
            <Link to="/notes" className="text-sm font-medium text-ink underline decoration-ink/30 underline-offset-4 hover:decoration-ink">
              {home.now.link}
            </Link>
          </div>
          <ul className="mt-6 divide-y divide-line">
            {latest.map((note) => (
              <li key={note.slug}>
                <Link to={`/notes/${note.slug}`} className="group grid gap-1 py-4 sm:grid-cols-[9rem_1fr] sm:gap-6">
                  <NoteDate date={note.date} />
                  <span>
                    <span className="block text-lg font-medium text-ink group-hover:underline group-hover:underline-offset-4">{note.title}</span>
                    <span className="mt-1 block text-text-soft">{note.summary}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Kin */}
      <section>
        <Container className="grid items-center gap-12 py-20 sm:py-28 md:grid-cols-2">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-3xl font-semibold lowercase tracking-tight text-kin">kin</span>
              <StagePill stage={apps.kin.stage} label={apps.kin.stageLabel} />
            </div>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-ink text-balance sm:text-4xl">{home.kin.title}</h2>
            <p className="mt-5 text-lg leading-relaxed text-text-soft">{home.kin.body}</p>
            <p className="mt-4 text-lg leading-relaxed text-text">{home.kin.story}</p>
            <div className="mt-8">
              <ButtonLink to={apps.kin.cta.href}>
                {apps.kin.cta.label} <Arrow />
              </ButtonLink>
            </div>
          </div>
          <WeekStrip />
        </Container>
      </section>

      {/* Purpose */}
      <section className="bg-mint">
        <Container className="py-20 sm:py-28">
          <div className="max-w-2xl">
            <Eyebrow>{home.purpose.eyebrow}</Eyebrow>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-ink text-balance sm:text-4xl">{home.purpose.title}</h2>
            <p className="mt-5 text-lg leading-relaxed text-text-soft">{home.purpose.body}</p>
          </div>
          <div className="mt-10">
            <FigureEight {...model.simple} />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink to="/purpose">
              {home.purpose.link} <Arrow />
            </ButtonLink>
            <ButtonLink to="/sources" variant="secondary">
              {home.purpose.sources}
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* Promises */}
      <Promises />

      {/* The other apps */}
      <section className="border-y border-line bg-white">
        <Container className="py-12 sm:py-14">
          <Eyebrow>{home.others.eyebrow}</Eyebrow>
          <ul className="mt-6 grid gap-8 md:grid-cols-2">
            {apps.others.map((app) => (
              <li key={app.id} className="flex flex-col gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-2xl font-semibold lowercase tracking-tight text-ink">{app.name}</span>
                  <StagePill stage={app.stage} label={app.stageLabel} />
                </div>
                <p className="max-w-md text-text-soft">
                  <span className="font-medium text-ink">{app.tagline}.</span> {app.note}
                </p>
                <div>
                  <ButtonLink to={app.cta.href} variant="secondary">
                    {app.cta.label} <Arrow />
                  </ButtonLink>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Voices */}
      <section>
        <Container className="py-20 sm:py-24">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{home.voices.title}</h2>
            <p className="mt-4 text-lg leading-relaxed text-text-soft">{home.voices.body}</p>
            <div className="mt-7">
              <div className="flex flex-wrap gap-3">
                <ButtonLink to={contact.mailto(home.voices.subject)} variant="secondary">
                  {home.voices.button} <Arrow />
                </ButtonLink>
                <ButtonLink to="/about#creators" variant="quiet">
                  How I work with creators
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
