/** Shown while a meetings page waits for data from the API. */
export default function MeetingsLoading() {
  return (
    <div role="status" aria-live="polite" className="space-y-4">
      <span className="sr-only">Loading meetings…</span>
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="h-32 animate-pulse rounded-lg border border-border bg-card"
          aria-hidden="true"
        />
      ))}
    </div>
  );
}