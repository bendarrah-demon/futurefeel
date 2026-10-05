import { siteContent } from "../content/site";
import { Container, PageIntro, ButtonLink, Arrow, StagePill } from "../components/ui";

export function Apps() {
  const { appsPage: p, apps, contact } = siteContent;
  return (
    <>
      <title>{p.title}</title>
      <PageIntro eyebrow={p.eyebrow} title={p.headline} lead={p.lead}>
        <dl className="mt-10 grid max-w-3xl gap-x-8 gap-y-4 sm:grid-cols-2">
          {p.stages.map((s) => (
            <div key={s.label} className="flex items-start gap-3">
              <dt>
                <StagePill stage={s.stage} label={s.label} />
              </dt>
              <dd className="pt-0.5 text-sm text-text-soft">{s.text}</dd>
            </div>
          ))}
        </dl>
      </PageIntro>

      <Container className="space-y-6">
        {apps.all.map((app) => (
          <article key={app.id} className="grid gap-8 rounded-3xl border border-line bg-white p-6 sm:p-10 md:grid-cols-[1fr_1.1fr]">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-3xl font-semibold lowercase tracking-tight" style={{ color: app.id === "kin" ? app.accent : "#1a1a1a" }}>
                  {app.name}
                </h2>
                <StagePill stage={app.stage} label={app.stageLabel} />
              </div>
              <p className="mt-3 text-xl font-medium text-ink">{app.tagline}</p>
              <p className="mt-4 leading-relaxed text-text-soft">{app.description}</p>
              {app.note && <p className="mt-4 text-sm leading-relaxed text-text">{app.note}</p>}
              <div className="mt-7">
                <ButtonLink to={app.cta.href} variant={app.stage === "alpha" ? "primary" : "secondary"}>
                  {app.cta.label} <Arrow />
                </ButtonLink>
              </div>
            </div>
            <ul className="space-y-3 self-center">
              {app.points.map((point) => (
                <li key={point} className="flex gap-3 rounded-2xl bg-surface px-4 py-3 text-text">
                  <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: app.accent }} aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </Container>

      <Container className="mt-16 grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold text-ink">On the bench</h2>
          <p className="mt-3 text-lg leading-relaxed text-text-soft">{p.bench}</p>
        </div>
        <div className="rounded-3xl bg-mint p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-ink">{p.idea.title}</h2>
          <p className="mt-2 text-text-soft">{p.idea.body}</p>
          <div className="mt-6">
            <ButtonLink to={contact.mailto(p.idea.subject)} variant="secondary">
              {p.idea.button} <Arrow />
            </ButtonLink>
          </div>
        </div>
      </Container>
    </>
  );
}
