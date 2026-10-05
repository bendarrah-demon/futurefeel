import { Link, useLocation } from "react-router-dom";
import { siteContent } from "../content/site";
import { sourceGroups, sourcesCheckedOn } from "../content/sources";
import { Container, PageIntro, ButtonLink, Arrow } from "../components/ui";
import { formatDate } from "../lib/date";

/** Render *italic* segments from the reference text. */
function Reference({ text }: { text: string }) {
  const parts = text.split("*");
  return <>{parts.map((part, i) => (i % 2 === 1 ? <em key={i}>{part}</em> : <span key={i}>{part}</span>))}</>;
}

function hostOf(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export function Sources() {
  const { contact } = siteContent;
  const { hash } = useLocation();
  const active = hash.startsWith("#ref-") ? Number(hash.slice(5)) : null;
  const total = sourceGroups.reduce((sum, g) => sum + g.items.length, 0);

  return (
    <>
      <title>Sources · Future Feel</title>
      <PageIntro
        eyebrow="Sources"
        title="The evidence behind the model."
        lead={`Each research claim in the model links to its source here. On ${formatDate(sourcesCheckedOn)} each of these ${total} sources was checked against its publisher record and its abstract or web page, and against the full text where that was free to read. Corrected details are shown, and anything that couldn't be confirmed was left out.`}
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink to="/purpose#dont-claim" variant="secondary">
            What we don't claim
          </ButtonLink>
          <ButtonLink to={contact.mailto("A correction to the sources")} variant="secondary">
            Spot a mistake? Tell me <Arrow />
          </ButtonLink>
        </div>
      </PageIntro>

      <Container className="grid gap-12 lg:grid-cols-[16rem_1fr]">
        <nav aria-label="Themes" className="lg:sticky lg:top-24 lg:self-start">
          <p className="text-sm font-medium text-text-soft">Themes</p>
          <ul className="mt-3 space-y-1.5 text-sm">
            {sourceGroups.map((g) => (
              <li key={g.id}>
                <a href={`#${g.id}`} className="text-text hover:text-ink hover:underline hover:underline-offset-4">
                  {g.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-14">
          {sourceGroups.map((g) => (
            <section key={g.id} id={g.id} className="scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight text-ink">{g.title}</h2>
              <ol className="mt-5 space-y-3">
                {g.items.map((item) => (
                  <li
                    key={item.n}
                    id={`ref-${item.n}`}
                    className={`grid scroll-mt-24 grid-cols-[2.75rem_1fr] gap-2 rounded-xl px-3 py-2 leading-relaxed text-text ${active === item.n ? "bg-peach/35" : ""}`}
                  >
                    <span className="text-sm font-medium text-text-soft tabular-nums">{item.n}.</span>
                    <span className="break-words">
                      <Reference text={item.text} />{" "}
                      {item.url && (
                        <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-periwinkle-deep underline underline-offset-2">
                          {hostOf(item.url)}
                          <span className="sr-only"> (opens in a new tab)</span>
                        </a>
                      )}
                    </span>
                  </li>
                ))}
              </ol>
            </section>
          ))}
          <p className="text-sm text-text-soft">
            Numbers match the full research report. Reference numbers 293 to 318 in that report cover organisations and voices for outreach and aren't evidence for the model, so they aren't listed here.{" "}
            <Link to="/purpose" className="underline underline-offset-4">
              Back to the model
            </Link>
          </p>
        </div>
      </Container>
    </>
  );
}
