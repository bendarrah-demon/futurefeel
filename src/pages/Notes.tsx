import { Link, useParams } from "react-router-dom";
import { siteContent } from "../content/site";
import { Container, PageIntro, Eyebrow } from "../components/ui";
import { NoteDate } from "../components/NoteDate";
import { NotFound } from "./NotFound";

export function Notes() {
  const { notesPage: p, notes } = siteContent;
  return (
    <>
      <title>{p.title}</title>
      <PageIntro eyebrow={p.eyebrow} title={p.headline} lead={p.lead} />
      <Container narrow>
        <ul className="divide-y divide-line border-y border-line">
          {notes.map((note) => (
            <li key={note.slug}>
              <Link to={`/notes/${note.slug}`} className="group block py-7">
                <NoteDate date={note.date} />
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink group-hover:underline group-hover:underline-offset-4">{note.title}</h2>
                <p className="mt-2 text-lg leading-relaxed text-text-soft">{note.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}

export function Note() {
  const { slug } = useParams();
  const note = siteContent.notes.find((n) => n.slug === slug);
  if (!note) return <NotFound />;
  return (
    <>
      <title>{`${note.title} · Future Feel`}</title>
      <article>
        <Container narrow className="pt-14 sm:pt-20">
          <Eyebrow>
            <Link to="/notes" className="underline decoration-ink/30 underline-offset-4 hover:decoration-ink">
              Notes
            </Link>
          </Eyebrow>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-ink text-balance sm:text-5xl">{note.title}</h1>
          <p className="mt-4">
            <NoteDate date={note.date} />
          </p>
          <div className="mt-10 space-y-6 text-lg leading-relaxed text-text">
            {note.body.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
        </Container>
      </article>
    </>
  );
}
