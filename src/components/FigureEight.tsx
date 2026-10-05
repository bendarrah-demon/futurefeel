import { useId } from "react";
import { useReducedMotion } from "framer-motion";

const PEACH = "#f5b8a8";
const PERIWINKLE = "#93a5cf";
const INK = "#1a1a1a";
const SURFACE = "#faf9f7";

/** A lemniscate (figure of eight) centred on (cx, cy) with half-width a. */
function geometry(cx: number, cy: number, a: number) {
  const point = (t: number) => {
    const d = 1 + Math.sin(t) ** 2;
    return { x: cx + (a * Math.cos(t)) / d, y: cy + (a * 0.95 * Math.sin(t) * Math.cos(t)) / d };
  };
  const steps = 240;
  const path =
    Array.from({ length: steps + 1 }, (_, i) => {
      const p = point((i / steps) * Math.PI * 2);
      return `${i === 0 ? "M" : "L"}${p.x.toFixed(1)} ${p.y.toFixed(1)}`;
    }).join(" ") + " Z";
  // A small chevron pointing along the direction of travel at parameter t.
  const chevron = (t: number) => {
    const p = point(t);
    const q = point(t + 0.01);
    const angle = (Math.atan2(q.y - p.y, q.x - p.x) * 180) / Math.PI;
    return { ...p, angle };
  };
  return { point, path, chevron };
}

function FlowDots({ pathId, duration }: { pathId: string; duration: number }) {
  const reduce = useReducedMotion();
  if (reduce) return null;
  return (
    <>
      {[0, 0.25, 0.5, 0.75].map((offset) => (
        <circle key={offset} r="5" fill={INK} opacity="0.7">
          <animateMotion dur={`${duration}s`} repeatCount="indefinite" begin={`-${offset * duration}s`}>
            <mpath href={`#${pathId}`} />
          </animateMotion>
        </circle>
      ))}
    </>
  );
}

function Chevrons({ items }: { items: { x: number; y: number; angle: number }[] }) {
  return (
    <>
      {items.map((c, i) => (
        <path key={i} d="M-6 -6 L2 0 L-6 6" fill="none" stroke={INK} strokeOpacity="0.55" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" transform={`translate(${c.x} ${c.y}) rotate(${c.angle})`} />
      ))}
    </>
  );
}

type Side = { title: string; caption?: string };

/** Home-page version: two labelled loops, the exchange in the middle, and the limit of enough around them. */
export function FigureEight({
  left,
  right,
  centre,
  flows,
  title,
  description,
}: {
  left: Side;
  right: Side;
  centre: string;
  flows?: { out: string; back: string };
  title: string;
  description: string;
}) {
  const id = useId().replace(/:/g, "");
  const W = 720;
  const H = 380;
  const a = 300;
  const g = geometry(W / 2, H / 2, a);
  const lx = W / 2 - a * 0.58;
  const rx = W / 2 + a * 0.58;

  return (
    <figure className="w-full">
      <svg viewBox={`0 0 ${W} ${H}`} className="mx-auto h-auto w-full max-w-4xl" role="img" aria-labelledby={`${id}-t ${id}-d`}>
        <title id={`${id}-t`}>{title}</title>
        <desc id={`${id}-d`}>{description}</desc>
        <defs>
          <linearGradient id={`${id}-g`} x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor={PEACH} />
            <stop offset="1" stopColor={PERIWINKLE} />
          </linearGradient>
          <path id={`${id}-p`} d={g.path} />
        </defs>

        <rect x="8" y="8" width={W - 16} height={H - 16} rx="36" fill="none" stroke={INK} strokeOpacity="0.25" strokeDasharray="6 8" />
        <text x="36" y="38" className="text-[13px] font-medium" fill={INK} fillOpacity="0.7">
          enough
        </text>

        <ellipse cx={lx} cy={H / 2} rx={a * 0.42} ry={H * 0.26} fill={PEACH} opacity="0.22" />
        <ellipse cx={rx} cy={H / 2} rx={a * 0.42} ry={H * 0.26} fill={PERIWINKLE} opacity="0.24" />
        <use href={`#${id}-p`} fill="none" stroke={`url(#${id}-g)`} strokeWidth="20" strokeLinecap="round" />
        <Chevrons items={[g.chevron(-0.7), g.chevron(0.7), g.chevron(Math.PI - 0.7), g.chevron(Math.PI + 0.7)]} />
        <FlowDots pathId={`${id}-p`} duration={16} />

        <circle cx={W / 2} cy={H / 2} r="36" fill={SURFACE} stroke={INK} strokeOpacity="0.18" />
        <text x={W / 2} y={H / 2 + 5} textAnchor="middle" className="text-[14px] font-semibold" fill={INK}>
          {centre}
        </text>

        <text x={lx} y={H / 2 - 4} textAnchor="middle" className="text-[24px] font-semibold" fill={INK}>
          {left.title}
        </text>
        {left.caption && (
          <text x={lx} y={H / 2 + 22} textAnchor="middle" className="hidden text-[14px] sm:block" fill={INK} fillOpacity="0.72">
            {left.caption}
          </text>
        )}
        <text x={rx} y={H / 2 - 4} textAnchor="middle" className="text-[24px] font-semibold" fill={INK}>
          {right.title}
        </text>
        {right.caption && (
          <text x={rx} y={H / 2 + 22} textAnchor="middle" className="hidden text-[14px] sm:block" fill={INK} fillOpacity="0.72">
            {right.caption}
          </text>
        )}

        {flows && (
          <g className="hidden sm:block">
            <text x={W / 2} y={52} textAnchor="middle" className="text-[13px] font-medium" fill={INK} fillOpacity="0.75">
              {flows.back} →
            </text>
            <text x={W / 2} y={H - 34} textAnchor="middle" className="text-[13px] font-medium" fill={INK} fillOpacity="0.75">
              ← {flows.out}
            </text>
          </g>
        )}
      </svg>

      {/* Small screens: the captions the diagram is too small to show */}
      <dl className="mt-4 grid gap-3 text-sm sm:hidden">
        <div><dt className="inline font-semibold text-ink">{left.title}: </dt><dd className="inline text-text-soft">{left.caption}</dd></div>
        <div><dt className="inline font-semibold text-ink">{right.title}: </dt><dd className="inline text-text-soft">{right.caption}</dd></div>
        {flows && (
          <div><dt className="inline font-semibold text-ink">Where they cross: </dt><dd className="inline text-text-soft">{flows.out}, in return for {flows.back}.</dd></div>
        )}
      </dl>
    </figure>
  );
}

/** Purpose-page version: the people loop's rings, the business loop's stations, the exchange and the brake. */
export function FigureEightDetailed({
  leftTitle,
  rightTitle,
  rings,
  stations,
  centre,
  brake,
  title,
  description,
}: {
  leftTitle: string;
  rightTitle: string;
  rings: string[];
  stations: string[];
  centre: string;
  brake: string;
  title: string;
  description: string;
}) {
  const id = useId().replace(/:/g, "");
  const W = 920;
  const H = 470;
  const cx = W / 2;
  const cy = H / 2 + 6;
  const a = 380;
  const g = geometry(cx, cy, a);
  const rc = { x: cx - a * 0.63, y: cy };
  // Rings from the outside in: community, circles, family, you.
  const ringSizes = [
    { rx: 128, ry: 90, opacity: 0.14 },
    { rx: 95, ry: 67, opacity: 0.24 },
    { rx: 62, ry: 45, opacity: 0.38 },
  ];
  const [you, ...outer] = rings; // rings = [You, Family, Circles, Community]
  const outerLabels = [...outer].reverse(); // Community, Circles, Family
  const stationT = [-1.12, -0.42, 0.42, 1.12];

  return (
    <figure className="w-full">
      <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-labelledby={`${id}-t ${id}-d`}>
        <title id={`${id}-t`}>{title}</title>
        <desc id={`${id}-d`}>{description}</desc>
        <defs>
          <linearGradient id={`${id}-g`} x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor={PEACH} />
            <stop offset="1" stopColor={PERIWINKLE} />
          </linearGradient>
          <path id={`${id}-p`} d={g.path} />
        </defs>

        {/* The brake */}
        <rect x="10" y="10" width={W - 20} height={H - 20} rx="44" fill="none" stroke={INK} strokeOpacity="0.3" strokeDasharray="7 9" strokeWidth="1.5" />
        <text x="44" y="46" className="text-[15px] font-semibold" fill={INK}>
          {brake}
        </text>

        {/* People loop: rings around you */}
        {ringSizes.map((r, i) => (
          <ellipse key={i} cx={rc.x} cy={rc.y} rx={r.rx} ry={r.ry} fill={PEACH} opacity={r.opacity} />
        ))}
        <circle cx={rc.x} cy={rc.y} r="27" fill={PEACH} />
        <text x={rc.x} y={rc.y + 5} textAnchor="middle" className="text-[14px] font-semibold" fill={INK}>
          {you}
        </text>
        {outerLabels.map((label, i) => (
          <text key={label} x={rc.x} y={rc.y - ringSizes[i].ry + 15} textAnchor="middle" className="text-[12px] font-medium" fill={INK} fillOpacity="0.85">
            {label}
          </text>
        ))}

        <text x={rc.x} y={cy - 138} textAnchor="middle" className="text-[20px] font-semibold" fill={INK}>
          {leftTitle}
        </text>

        {/* The path value travels along */}
        <use href={`#${id}-p`} fill="none" stroke={`url(#${id}-g)`} strokeWidth="18" strokeLinecap="round" />
        <Chevrons items={[g.chevron(-0.75), g.chevron(0.75), g.chevron(Math.PI - 0.75), g.chevron(Math.PI + 0.75)]} />
        <FlowDots pathId={`${id}-p`} duration={18} />

        {/* Business loop stations, in the direction of travel */}
        {stations.map((label, i) => {
          const p = g.point(stationT[i]);
          const above = stationT[i] < 0;
          return (
            <g key={label}>
              <circle cx={p.x} cy={p.y} r="8" fill={SURFACE} stroke={INK} strokeWidth="2" />
              <text x={p.x} y={above ? p.y - 20 : p.y + 32} textAnchor="middle" className="text-[13px] font-semibold" fill={INK}>
                {label}
              </text>
            </g>
          );
        })}
        <text x={cx + a * 0.6} y={cy + 5} textAnchor="middle" className="text-[20px] font-semibold" fill={INK}>
          {rightTitle}
        </text>

        {/* The exchange */}
        <circle cx={cx} cy={cy} r="38" fill={SURFACE} stroke={INK} strokeOpacity="0.2" />
        <text x={cx} y={cy + 5} textAnchor="middle" className="text-[14px] font-semibold" fill={INK}>
          {centre}
        </text>
      </svg>
    </figure>
  );
}
