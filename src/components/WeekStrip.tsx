const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

type Mark = "a" | "b" | "both" | null;

/** An illustration of a Kin week: one partner's session, the other's, and an evening for both. */
export function WeekStrip({
  marks = [null, "a", null, "both", null, "b", null],
  names = ["Sam", "Alex"],
}: {
  marks?: Mark[];
  names?: [string, string] | string[];
}) {
  const describe = (mark: Mark) =>
    mark === "a" ? `${names[0]} moves` : mark === "b" ? `${names[1]} moves` : mark === "both" ? "Together" : "Rest";

  return (
    <figure className="rounded-3xl bg-white p-5 shadow-[0_1px_0_rgba(0,0,0,0.04),0_12px_40px_-20px_rgba(0,0,0,0.25)] sm:p-6">
      <ol className="grid grid-cols-7 gap-1.5 sm:gap-2" aria-label="An example week in Kin">
        {DAYS.map((day, i) => {
          const mark = marks[i];
          return (
            <li key={day} className="flex flex-col items-center gap-2">
              <span className="text-xs font-medium text-text-soft">{day}</span>
              <span
                className={`relative flex h-16 w-full items-end justify-center overflow-hidden rounded-2xl sm:h-24 ${mark ? "" : "bg-surface"}`}
                aria-label={`${day}: ${describe(mark)}`}
                role="img"
              >
                {mark === "a" && <span className="absolute inset-x-0 bottom-0 h-3/4 rounded-2xl bg-periwinkle" />}
                {mark === "b" && <span className="absolute inset-x-0 bottom-0 h-3/4 rounded-2xl bg-peach" />}
                {mark === "both" && (
                  <>
                    <span className="absolute bottom-0 left-0 h-3/4 w-3/4 rounded-2xl bg-periwinkle" />
                    <span className="absolute bottom-0 right-0 h-3/4 w-3/4 rounded-2xl bg-peach/90 mix-blend-multiply" />
                  </>
                )}
              </span>
            </li>
          );
        })}
      </ol>
      <figcaption className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-text-soft">
        <span className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-periwinkle" aria-hidden="true" />{names[0]}</span>
        <span className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-peach" aria-hidden="true" />{names[1]}</span>
        <span className="flex items-center gap-2"><span className="h-3 w-3 rounded-full gradient-brand" aria-hidden="true" />Together</span>
      </figcaption>
    </figure>
  );
}
