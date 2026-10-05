import { siteContent } from "../content/site";
import { Container } from "./ui";

export function Promises({ id }: { id?: string }) {
  const { promises } = siteContent;
  return (
    <section id={id} className="scroll-mt-16">
      <Container className="py-20 sm:py-24">
        <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-ink text-balance sm:text-4xl">{promises.title}</h2>
        <ol className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {promises.items.map((item, i) => (
            <li key={item.title} className="border-t border-ink/15 pt-5">
              <p className="text-sm font-medium text-text-soft">0{i + 1}</p>
              <h3 className="mt-2 text-xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-text-soft">{item.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
