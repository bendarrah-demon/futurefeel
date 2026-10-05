import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Marker } from "./Brand";

export function Container({ children, className = "", narrow = false }: { children: ReactNode; className?: string; narrow?: boolean }) {
  return <div className={`mx-auto px-5 sm:px-8 ${narrow ? "max-w-3xl" : "max-w-6xl"} ${className}`}>{children}</div>;
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`flex items-center gap-2.5 text-sm font-medium text-text-soft ${className}`}>
      <Marker />
      {children}
    </p>
  );
}

/** Opening block for an inner page. */
export function PageIntro({ eyebrow, title, lead, children }: { eyebrow?: string; title: string; lead?: ReactNode; children?: ReactNode }) {
  return (
    <section className="pt-16 pb-12 sm:pt-24 sm:pb-16">
      <Container>
        {eyebrow && <Eyebrow className="mb-5">{eyebrow}</Eyebrow>}
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-ink text-balance sm:text-5xl lg:text-6xl lg:leading-[1.05]">
          {title}
        </h1>
        {lead && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-soft text-pretty sm:text-xl">{lead}</p>}
        {children}
      </Container>
    </section>
  );
}

type ButtonProps = { to: string; children: ReactNode; variant?: "primary" | "secondary" | "quiet"; className?: string };

const buttonStyles = {
  primary: "bg-ink text-white hover:bg-text",
  secondary: "border border-ink/20 text-ink hover:border-ink/50 hover:bg-white",
  quiet: "text-ink underline decoration-ink/30 underline-offset-4 hover:decoration-ink px-0",
};

/** Internal routes, in-page anchors, mailto and external links, all styled the same way. */
export function ButtonLink({ to, children, variant = "primary", className = "" }: ButtonProps) {
  const cls = `inline-flex min-h-11 items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${buttonStyles[variant]} ${className}`;
  if (to.startsWith("/") && !to.startsWith("//")) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    );
  }
  const external = to.startsWith("http");
  return (
    <a href={to} className={cls} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {children}
      {external && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}

export function Arrow() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}

export type Stage = "idea" | "prototype" | "alpha" | "beta" | "live" | "resting";

const stageStyles: Record<Stage, string> = {
  idea: "bg-line text-text",
  prototype: "bg-mint text-ink",
  alpha: "bg-peach/45 text-ink",
  beta: "bg-periwinkle/35 text-ink",
  live: "bg-kin/15 text-kin",
  resting: "bg-line text-text",
};

export function StagePill({ stage, label }: { stage: Stage; label: string }) {
  return <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${stageStyles[stage]}`}>{label}</span>;
}
