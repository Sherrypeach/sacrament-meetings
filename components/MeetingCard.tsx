import Link from 'next/link';
import MeetingTypeBadge from './MeetingTypeBadge';
import { formatMeetingDate } from '@/lib/dates';
import { isSacramentMeeting } from '@/lib/meeting-labels';
import type { SacramentMeeting } from '@/lib/types';

interface MeetingCardProps {
  meeting: SacramentMeeting;
  isCurrent?: boolean;
}

/** Summary card used in the meetings list. Links to the full agenda. */
export default function MeetingCard({ meeting, isCurrent = false }: MeetingCardProps) {
  const speakerCount = meeting.speakers.filter((item) => item.type === 'speaker').length;

  return (
    <article
      className={`flex flex-col gap-3 rounded-lg border bg-card p-5 shadow-sm ${
        isCurrent ? 'border-accent ring-2 ring-accent' : 'border-border'
      }`}
    >
      <div className="flex flex-wrap items-center gap-2">
        <MeetingTypeBadge type={meeting.meetingType} />
        {isCurrent && (
          <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
            This Sunday
          </span>
        )}
      </div>
      <h3 className="font-serif text-xl font-bold text-primary">
        {formatMeetingDate(meeting.date)}
      </h3>
      <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-sm">
        <dt className="font-semibold text-muted">Conducting</dt>
        <dd>{meeting.conducting}</dd>
        <dt className="font-semibold text-muted">Opening hymn</dt>
        <dd>
          #{meeting.openingHymn.number} {meeting.openingHymn.title}
        </dd>
        {isSacramentMeeting(meeting.meetingType) && (
          <>
            <dt className="font-semibold text-muted">Speakers</dt>
            <dd>{speakerCount > 0 ? speakerCount : 'Testimonies from members'}</dd>
          </>
        )}
      </dl>
      <Link
        href={`/meetings/${meeting.id}`}
        className="mt-auto self-start rounded bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-dark"
      >
        View program
        <span className="sr-only"> for {formatMeetingDate(meeting.date)}</span>
      </Link>
    </article>
  );
}