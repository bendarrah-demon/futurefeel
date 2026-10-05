import { useEffect } from "react";
import { model } from "../content/model";
import { Container, PageIntro, Eyebrow, ButtonLink, Arrow } from "../components/ui";
import { FigureEightDetailed } from "../components/FigureEight";
import { Cite } from "../components/Cite";

function SectionHead({ eyebrow, title, intro }: { eyebrow?: string; title: string; intro?: string }) {
  return (
    <div className="max-w-2xl">
      {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
      <h2 className="text-3xl font-semibold tracking-tight text-ink text-balance sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-lg leading-relaxed text-text-soft">{intro}</p>}
    </div>
  );
}

export function Purpose() {
  const m = model;
  // Citations link to the Sources page, so fetch it in the background.
  useEffect(() => {
    void import("./Sources");
  }, []);
  return (
    <>
      <title>{m.purpose.title}</title>
      <PageIntro eyebrow={m.purpose.eyebrow} title={m.purpose.headline} lead={m.purpose.lead} />

      {/* The bet */}
      <section className="bg-ink text-white">
        <Container className="py-16 sm:py-20">
          <p className="text-sm font-medium text-white/70">{m.bet.title}</p>
          <blockquote className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl">
            “{m.bet.line}”
          </blockquote>
          <p className="mt-6 max-w-2xl leading-relaxed text-white/80">
            {m.bet.evidence.text}
            <span className="[&_a]:text-white/80 [&_span]:text-white/60">
              <Cite n={m.bet.evidence.cite} />
            </span>
          </p>
          <p className="mt-4 max-w-2xl leading-relaxed text-white/80">{m.bet.honest}</p>
        </Container>
      </section>

      {/* The shape */}
      <section>
        <Container className="py-16 sm:py-24">
          <SectionHead eyebrow="The model" title={m.shape.title} />
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-text-soft">
            {m.shape.text}
            <Cite n={m.shape.cite} />
          </p>
          <div className="mt-10 overflow-x-auto rounded-3xl bg-white p-3 sm:p-6" tabIndex={0} aria-label="The figure of eight diagram">
            <div className="min-w-[640px] sm:min-w-0">
              <FigureEightDetailed {...m.detailed} title={m.simple.title} description={m.simple.description} />
            </div>
          </div>
          <p className="mt-3 text-sm text-text-soft sm:hidden">Swipe sideways to see the whole eight.</p>
        </Container>
      </section>

      {/* People loop */}
      <section className="bg-peach/15">
        <Container className="py-16 sm:py-24">
          <SectionHead eyebrow="Left loop" title={m.people.title} intro={m.people.intro} />
          <ol className="mt-10 grid gap-6 md:grid-cols-2">
            {m.people.rings.map((ring) => (
              <li key={ring.name} className="rounded-3xl bg-white p-6 sm:p-7">
                <h3 className="text-xl font-semibold text-ink">{ring.name}</h3>
                <p className="mt-2 leading-relaxed text-text">
                  {ring.text}
                  <Cite n={ring.cite} />
                </p>
              </li>
            ))}
          </ol>
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-ink">{m.people.ways.title}</h3>
            <p className="mt-1 text-text-soft">
              {m.people.ways.text}
              <Cite n={m.people.ways.cite} />
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {m.people.ways.items.map((w) => (
                <li key={w} className="rounded-full bg-white px-4 py-2 text-sm font-medium text-ink">
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Business loop */}
      <section className="bg-periwinkle/15">
        <Container className="py-16 sm:py-24">
          <SectionHead eyebrow="Right loop" title={m.business.title} intro={m.business.intro} />
          <ol className="mt-10 grid gap-6 md:grid-cols-2">
            {m.business.stations.map((s, i) => (
              <li key={s.name} className="rounded-3xl bg-white p-6 sm:p-7">
                <p className="text-sm font-medium text-text-soft">0{i + 1}</p>
                <h3 className="mt-1 text-xl font-semibold text-ink">{s.name}</h3>
                <p className="mt-2 leading-relaxed text-text">
                  {s.text}
                  <Cite n={s.cite} />
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-10 max-w-3xl text-lg leading-relaxed text-ink">
            {m.business.truth.text}
            <Cite n={m.business.truth.cite} />
          </p>
        </Container>
      </section>

      {/* Exchange */}
      <section>
        <Container className="py-16 sm:py-24">
          <SectionHead eyebrow="Where the loops cross" title={m.exchange.title} intro={m.exchange.intro} />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[m.exchange.toYou, m.exchange.toUs].map((side) => (
              <div key={side.title} className="rounded-3xl border border-line bg-white p-6 sm:p-7">
                <h3 className="text-lg font-semibold text-ink">{side.title}</h3>
                <ul className="mt-4 space-y-2">
                  {side.items.map((item) => (
                    <li key={item} className="flex gap-3 text-text">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full gradient-brand" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl leading-relaxed text-text-soft">
            {m.exchange.evidence.text}
            <Cite n={m.exchange.evidence.cite} />
          </p>
        </Container>
      </section>

      {/* Enough */}
      <section className="bg-mint">
        <Container className="py-16 sm:py-24">
          <SectionHead eyebrow="Around both loops" title={m.enough.title} intro={m.enough.intro} />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {m.enough.refusals.map((r) => (
              <li key={r} className="rounded-2xl border border-dashed border-ink/30 bg-white/70 px-5 py-4 text-lg font-medium text-ink">
                {r}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl leading-relaxed text-text-soft">
            {m.enough.evidence.text}
            <Cite n={m.enough.evidence.cite} />
          </p>
        </Container>
      </section>

      {/* Checkable */}
      <section>
        <Container className="py-16 sm:py-24">
          <SectionHead title={m.checkable.title} intro={m.checkable.intro} />
          <ol className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {m.checkable.items.map((item, i) => (
              <li key={item.title} className="border-t border-ink/15 pt-5">
                <p className="text-sm font-medium text-text-soft">Plan 0{i + 1}</p>
                <h3 className="mt-1 text-xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-text">
                  {item.text}
                  <Cite n={item.cite} />
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Apps */}
      <section className="border-y border-line bg-white">
        <Container className="py-16 sm:py-20">
          <SectionHead title={m.apps.title} />
          <ul className="mt-8 grid gap-6 md:grid-cols-3">
            {m.apps.items.map((app) => (
              <li key={app.name}>
                <p className="text-2xl font-semibold lowercase tracking-tight text-ink">{app.name}</p>
                <p className="mt-1 text-sm font-medium text-text-soft">{app.where}</p>
                <p className="mt-3 leading-relaxed text-text">
                  {app.text}
                  <Cite n={app.cite} />
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* What we don't claim */}
      <section id="dont-claim" className="scroll-mt-16">
        <Container className="py-16 sm:py-24">
          <SectionHead title={m.dontClaim.title} intro={m.dontClaim.intro} />
          <div className="mt-8 overflow-hidden rounded-3xl border border-line bg-white">
            <table className="w-full text-left">
              <thead className="bg-surface text-sm text-text-soft">
                <tr>
                  <th scope="col" className="px-5 py-3 font-medium">We don't say</th>
                  <th scope="col" className="px-5 py-3 font-medium">We say</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line align-top">
                {m.dontClaim.items.map((row) => (
                  <tr key={row.dont}>
                    <td className="px-5 py-4 text-text-soft line-through decoration-ink/30">{row.dont}</td>
                    <td className="px-5 py-4 text-ink">
                      {row.say}
                      <Cite n={row.cite} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink to="/sources">
              All sources <Arrow />
            </ButtonLink>
            <ButtonLink to="#follow" variant="secondary">
              Follow the build
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
