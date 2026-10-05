import { motion, useReducedMotion } from "framer-motion";

const SLANT = "polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)";

/** The Future Feel mark: two overlapping, forward-leaning shapes. */
export function Logo({ size = 28 }: { size?: number }) {
  const shape = Math.round(size * 0.75);
  const offset = size - shape;
  return (
    <span className="relative inline-block shrink-0" style={{ width: size, height: size }} aria-hidden="true">
      <span className="absolute left-0 top-0 bg-periwinkle" style={{ width: shape, height: shape, clipPath: SLANT }} />
      <span
        className="absolute bg-peach/90"
        style={{ width: shape, height: shape, left: offset, top: offset, clipPath: SLANT }}
      />
    </span>
  );
}

/** A large version of the mark whose shapes slide into overlap once — the site's one deliberate motion moment. */
export function OverlapMark({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  const from = reduce ? 0 : 1;
  return (
    <div className={`relative aspect-square ${className}`} aria-hidden="true">
      <motion.div
        className="absolute left-[6%] top-[6%] h-[62%] w-[62%] bg-periwinkle"
        style={{ clipPath: SLANT }}
        initial={{ x: `${-14 * from}%`, y: `${-10 * from}%` }}
        animate={{ x: "0%", y: "0%" }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      />
      <motion.div
        className="absolute right-[6%] bottom-[6%] h-[62%] w-[62%] bg-peach/90 mix-blend-multiply"
        style={{ clipPath: SLANT }}
        initial={{ x: `${14 * from}%`, y: `${10 * from}%` }}
        animate={{ x: "0%", y: "0%" }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      />
    </div>
  );
}

/** Small overlapping pair used as a section marker. */
export function Marker({ className = "" }: { className?: string }) {
  return (
    <span className={`relative inline-block h-3.5 w-5 ${className}`} aria-hidden="true">
      <span className="absolute left-0 top-0 h-2.5 w-3.5 bg-periwinkle" style={{ clipPath: SLANT }} />
      <span className="absolute bottom-0 right-0 h-2.5 w-3.5 bg-peach" style={{ clipPath: SLANT }} />
    </span>
  );
}
