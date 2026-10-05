import { Link } from "react-router-dom";
import { sourceByNumber, plainReference } from "../lib/sources";

/** Numbered links to the Sources page, e.g. [41, 43]. Hover or focus shows the full reference. */
export function Cite({ n }: { n?: number[] }) {
  if (!n?.length) return null;
  return (
    <span className="whitespace-nowrap text-[0.8em] text-text-soft">
      {" "}[
      {n.map((num, i) => {
        const source = sourceByNumber.get(num);
        return (
          <span key={num}>
            {i > 0 && ", "}
            <Link
              to={`/sources#ref-${num}`}
              title={source ? plainReference(source) : undefined}
              aria-label={source ? `Source ${num}: ${plainReference(source)}` : `Source ${num}`}
              className="underline decoration-ink/25 underline-offset-2 hover:text-ink hover:decoration-ink"
            >
              {num}
            </Link>
          </span>
        );
      })}
      ]
    </span>
  );
}
