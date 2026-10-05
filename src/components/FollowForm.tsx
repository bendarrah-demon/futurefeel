import { useId } from "react";
import { Link } from "react-router-dom";
import { siteContent } from "../content/site";
import { ButtonLink, Arrow } from "./ui";

/**
 * "Follow the build" sign-up. Until a newsletter service is connected (community.formAction),
 * it falls back to an email link so nothing on the page is a dead end.
 */
export function FollowForm({ tone = "light", subject }: { tone?: "light" | "dark"; subject?: string }) {
  const { community, contact } = siteContent;
  const inputId = useId();
  const dark = tone === "dark";
  const small = dark ? "text-white/75" : "text-text-soft";

  if (!community.formAction) {
    return (
      <div>
        <ButtonLink to={contact.mailto(subject ?? community.mailSubject)} variant={dark ? "secondary" : "primary"} className={dark ? "border-white/40 text-white hover:bg-white/10 hover:border-white" : ""}>
          {community.button} <Arrow />
        </ButtonLink>
        <p className={`mt-3 text-sm ${small}`}>{community.fallbackNote}</p>
      </div>
    );
  }

  return (
    <form action={community.formAction} method="post" target="_blank" className="max-w-md">
      <label htmlFor={inputId} className={`block text-sm font-medium ${dark ? "text-white" : "text-ink"}`}>
        {community.label}
      </label>
      <div className="mt-2 flex flex-col gap-2 sm:flex-row">
        <input
          id={inputId}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          className="min-h-11 flex-1 rounded-full border border-ink/20 bg-white px-4 text-ink placeholder:text-text-soft"
        />
        <button type="submit" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-ink px-5 text-sm font-medium text-white hover:bg-text">
          {community.button} <Arrow />
        </button>
      </div>
      <p className={`mt-3 text-sm ${small}`}>
        {community.privacyNote}{" "}
        <Link to="/privacy" className="underline underline-offset-4">
          Privacy
        </Link>
      </p>
    </form>
  );
}
