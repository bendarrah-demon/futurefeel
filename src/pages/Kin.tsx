import { siteContent } from "../content/site";
import { Container, Eyebrow, ButtonLink, Arrow, StagePill } from "../components/ui";
import { WeekStrip } from "../components/WeekStrip";
import { FollowForm } from "../components/FollowForm";

export function Kin() {
  const { kinPage: k, apps } = siteContent;
  return (
    <>
      <title>{k.title}</title>

      <section>
        <Container className="grid items-center gap-12 pt-14 pb-16 sm:pt-20 md:grid-cols-[1.2fr_1fr] md:pb-24">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-4xl font-semibold lowercase tracking-tight text-kin">kin</span>
              <StagePill stage={apps.kin.stage} label={apps.kin.stageLabel} />
            </div>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-ink text-balance sm:text-5xl lg:text-6xl lg:leading-[1.05]">
              {k.headline}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-soft sm:text-xl">{k.lead}</p>
            <div className="mt-8">
              <ButtonLink to="#alpha">
                Follow the alpha <Arrow />
              </ButtonLink>
            </div>
          </div>
          <div>
            <WeekStrip />
            <p className="mt-4 text-sm text-text-soft">{k.example}</p>
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-white">
        <Container className="py-16 sm:py-20">
          <Eyebrow>How it works</Eyebrow>
          <ol className="mt-8 grid gap-8 md:grid-cols-3">
            {k.steps.map((step, i) => (
              <li key={step.title}>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-kin text-sm font-semibold text-white">{i + 1}</span>
                <h2 className="mt-4 text-xl font-semibold text-ink">{step.title}</h2>
                <p className="mt-2 leading-relaxed text-text-soft">{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section>
        <Container className="py-16 sm:py-20">
          <h2 className="text-3xl font-semibold tracking-tight text-ink">What Kin won't do</h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-3">
            {k.principles.map((p) => (
              <li key={p.title} className="border-t border-ink/15 pt-5">
                <h3 className="text-lg font-semibold text-ink">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-text-soft">{p.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="alpha" className="scroll-mt-16 bg-mint">
        <Container className="grid gap-10 py-16 sm:py-20 md:grid-cols-[1.2fr_1fr] md:items-start">
          <div>
            <Eyebrow>The alpha</Eyebrow>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{k.alpha.title}</h2>
            {k.alpha.body.map((p) => (
              <p key={p} className="mt-4 text-lg leading-relaxed text-text-soft">
                {p}
              </p>
            ))}
            <p className="mt-6 leading-relaxed text-text">{k.sibling}</p>
          </div>
          <div className="rounded-3xl bg-white p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-ink">Hear how it goes</h3>
            <p className="mt-2 mb-5 text-text-soft">Notes from the alpha, and an invite when Kin is ready for more families.</p>
            <FollowForm subject="Follow Kin's alpha" />
          </div>
        </Container>
      </section>

      <Container className="pt-10">
        <p className="max-w-2xl text-sm text-text-soft">{k.safety}</p>
      </Container>
    </>
  );
}
