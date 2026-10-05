import { siteContent } from "../content/site";
import { Container, PageIntro } from "../components/ui";
import { formatDate } from "../lib/date";

export function Privacy() {
  const { privacyPage: p } = siteContent;
  return (
    <>
      <title>{p.title}</title>
      <PageIntro eyebrow={p.eyebrow} title={p.headline} lead={`Last updated ${formatDate(p.updated)}.`} />
      <Container narrow>
        <div className="space-y-8">
          {p.sections.map((s) => (
            <section key={s.title} className="border-t border-line pt-6">
              <h2 className="text-xl font-semibold text-ink">{s.title}</h2>
              <p className="mt-2 text-lg leading-relaxed text-text">{s.text}</p>
            </section>
          ))}
        </div>
      </Container>
    </>
  );
}
