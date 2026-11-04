import Link from 'next/link';
import { redirect } from 'next/navigation';
import { connection } from 'next/server';
import { fetchMeetings } from '@/lib/api';
import { formatMeetingDate, getMostRecentSunday } from '@/lib/dates';

/** Redirects to the meeting for the most recent Sunday (today, if today is Sunday). */
export default async function CurrentMeetingPage() {
  await connection();
  const sunday = getMostRecentSunday(new Date());
  const [meeting] = await fetchMeetings(sunday);

  if (meeting) {
    redirect(`/meetings/${meeting.id}`);
  }

  return (
    <main className="rounded-lg border border-border bg-card p-6 text-center">
      <h1 className="font-serif text-2xl font-bold text-primary">No program yet</h1>
      <p className="mt-2 text-muted">
        There is no meeting planned for {formatMeetingDate(sunday)}.
      </p>
      <Link
        href="/meetings"
        className="mt-4 inline-block rounded bg-primary px-5 py-2.5 font-semibold text-white hover:bg-primary-dark"
      >
        Browse all meetings
      </Link>
    </main>
  );
}