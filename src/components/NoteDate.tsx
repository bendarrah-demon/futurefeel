import { formatDate } from "../lib/date";

export function NoteDate({ date }: { date: string }) {
  return (
    <time dateTime={date} className="text-sm text-text-soft">
      {formatDate(date)}
    </time>
  );
}
