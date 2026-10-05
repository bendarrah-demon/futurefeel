import { siteContent } from "../content/site";
import { Container, PageIntro, Eyebrow, ButtonLink, Arrow } from "../components/ui";
import { OverlapMark } from "../components/Brand";
import { Promises } from "../components/Promises";
import { Cite } from "../components/Cite";

export function About() {
  const { aboutPage: p, contact } = siteContent;
  return (
    <>
      <title>{p.title}</title>
      <PageIntro eyebrow={p.eyebrow} title={p.headline} lead={p.lead} />

      <Container className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:items-center">
        <div className="space-y-5 text-lg leading-relaxed text-text">
          {p.story.map((para) => (
            <p key={para}>{para}</p>
          ))}
        </div>
        <OverlapMark className="mx-auto w-48 md:w-64" />
      </Container>

      <section id="how-we-work" className="mt-20 scroll-mt-16 border-y border-line bg-white">
        <Container className="py-16 sm:py-20">
          <Eyebrow>{p.how.title}</Eyebrow>
          <p className="mt-5 max-w-2xl text-xl leading-relaxed text-ink">{p.how.intro}</p>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {p.how.loop.map((step, i) => (
              <li key={step.name} className="border-t border-ink/15 pt-4">
                <p className="text-sm font-medium text-text-soft">0{i + 1}</p>
                <h3 className="mt-1 font-semibold text-ink">{step.name}</h3>
                <p className="mt-1 text-text-soft">{step.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10 text-text">{p.learning}</p>
        </Container>
      </section>

      <Promises id="promises" />

      <section id="creators" className="scroll-mt-16 border-y border-line bg-white">
        <Container className="py-16 sm:py-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{p.creators.title}</h2>
            <p className="mt-4 text-lg leading-relaxed text-text-soft">{p.creators.intro}</p>
          </div>
          <ul className="mt-8 grid gap-6 md:grid-cols-3">
            {p.creators.items.map((item) => (
              <li key={item.text} className="border-t border-ink/15 pt-5 leading-relaxed text-text">
                {item.text}
                <Cite n={item.cite} />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-mint">
        <Container className="py-16 sm:py-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{p.help.title}</h2>
            <p className="mt-4 text-lg leading-relaxed text-text-soft">{p.help.body}</p>
            <div className="mt-7">
              <ButtonLink to={contact.mailto(p.help.subject)}>
                {p.help.button} <Arrow />
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
