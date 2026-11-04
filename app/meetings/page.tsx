import type { Metadata } from 'next';
import MeetingCard from '@/components/MeetingCard';
import { fetchMeetings } from '@/lib/api';
import { getMostRecentSunday } from '@/lib/dates';

export const metadata: Metadata = {
  title: 'All Meetings',
};

export default async function MeetingsPage() {
  const meetings = await fetchMeetings();
  const currentSunday = getMostRecentSunday(new Date());

  const upcoming = meetings.filter((meeting) => meeting.date > currentSunday);
  const currentAndPast = meetings.filter((meeting) => meeting.date <= currentSunday);

  return (
    <main className="space-y-10">
      <h1 className="font-serif text-3xl font-bold text-primary">All Meetings</h1>

      {upcoming.length > 0 && (
        <section aria-labelledby="upcoming-heading" className="space-y-4">
          <h2 id="upcoming-heading" className="font-serif text-2xl font-bold">
            Upcoming
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {upcoming.map((meeting) => (
              <MeetingCard key={meeting.id} meeting={meeting} />
            ))}
          </div>
        </section>
      )}

      <section aria-labelledby="past-heading" className="space-y-4">
        <h2 id="past-heading" className="font-serif text-2xl font-bold">
          This Sunday &amp; past weeks
        </h2>
        {currentAndPast.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2">
            {currentAndPast.map((meeting) => (
              <MeetingCard
                key={meeting.id}
                meeting={meeting}
                isCurrent={meeting.date === currentSunday}
              />
            ))}
          </div>
        ) : (
          <p className="text-muted">No past meetings yet.</p>
        )}
      </section>
    </main>
  );
}