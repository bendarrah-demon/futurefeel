import { siteContent } from "../content/site";
import { PageIntro, ButtonLink } from "../components/ui";

export function NotFound() {
  const { notFound: p } = siteContent;
  return (
    <>
      <title>{p.title}</title>
      <PageIntro title={p.headline} lead={p.lead}>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink to="/">Home</ButtonLink>
          <ButtonLink to="/kin" variant="secondary">Kin</ButtonLink>
          <ButtonLink to="/notes" variant="secondary">Notes</ButtonLink>
        </div>
      </PageIntro>
    </>
  );
}
