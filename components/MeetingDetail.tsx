import type { ReactNode } from 'react';
import MeetingTypeBadge from './MeetingTypeBadge';
import { WARD_NAME } from './Header';
import { formatMeetingDate } from '@/lib/dates';
import { isSacramentMeeting, meetingTypeLabels } from '@/lib/meeting-labels';
import type { Hymn, SacramentMeeting } from '@/lib/types';

interface MeetingDetailProps {
  meeting: SacramentMeeting;
}

function HymnText({ hymn }: { hymn: Hymn }) {
  return (
    <>
      Hymn #{hymn.number} — <cite className="not-italic font-medium">{hymn.title}</cite>
    </>
  );
}

function AgendaItem({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid gap-1 border-b border-border py-3 sm:grid-cols-[12rem_1fr] sm:gap-4">
      <dt className="font-semibold text-muted">{label}</dt>
      <dd>{children}</dd>
    </div>
  );
}

/** Full agenda for one meeting, in the order it happens. Also used as the printable program. */
export default function MeetingDetail({ meeting }: MeetingDetailProps) {
  const isSacrament = isSacramentMeeting(meeting.meetingType);
  const announcements = meeting.announcements ?? [];

  return (
    <article className="rounded-lg border border-border bg-card p-6 shadow-sm print:border-0 print:p-0 print:shadow-none">
      <header className="mb-4 text-center">
        <p className="text-sm uppercase tracking-wide text-muted">{WARD_NAME}</p>
        <h1 className="font-serif text-3xl font-bold text-primary">
          {formatMeetingDate(meeting.date)}
        </h1>
        <div className="mt-2">
          <MeetingTypeBadge type={meeting.meetingType} />
        </div>
      </header>

      {!isSacrament && (
        <p className="mb-4 rounded border border-accent bg-accent-light p-3 text-sm">
          {meetingTypeLabels[meeting.meetingType]}: there is no ward sacrament meeting this Sunday.
          The program below is shared for reference.
        </p>
      )}

      <dl>
        <AgendaItem label="Presiding">{meeting.presiding}</AgendaItem>
        <AgendaItem label="Conducting">{meeting.conducting}</AgendaItem>
        <AgendaItem label="Announcements">
          {announcements.length > 0 ? (
            <ul className="list-disc space-y-1 pl-5">
              {announcements.map((announcement) => (
                <li key={announcement}>{announcement}</li>
              ))}
            </ul>
          ) : (
            'None'
          )}
        </AgendaItem>
        <AgendaItem label="Opening Hymn">
          <HymnText hymn={meeting.openingHymn} />
        </AgendaItem>
        <AgendaItem label="Opening Prayer">{meeting.openingPrayer}</AgendaItem>
        <AgendaItem label="Ward Business">
          {meeting.wardBusiness.length > 0 ? (
            <ul className="list-disc space-y-1 pl-5">
              {meeting.wardBusiness.map((item) => (
                <li key={item.description}>{item.description}</li>
              ))}
            </ul>
          ) : (
            'None'
          )}
        </AgendaItem>
        <AgendaItem label="Stake Business">{meeting.stakeBusiness ? 'Yes' : 'No'}</AgendaItem>
        <AgendaItem label="Sacrament Hymn">
          <HymnText hymn={meeting.sacramentHymn} />
        </AgendaItem>
        {isSacrament && (
          <AgendaItem label="Administration of the Sacrament">
            Priests and deacons of the Aaronic Priesthood
          </AgendaItem>
        )}
        <AgendaItem label="Speakers & Music">
          {meeting.speakers.length > 0 ? (
            <ol className="space-y-2">
              {meeting.speakers.map((item) => (
                <li key={`${item.name}-${item.topic}`}>
                  <span className="text-xs font-semibold uppercase tracking-wide text-accent">
                    {item.type === 'speaker' ? 'Speaker' : 'Musical number'}
                  </span>
                  <br />
                  <span className="font-medium">{item.name}</span> — {item.topic}
                </li>
              ))}
            </ol>
          ) : meeting.meetingType === 'testimony' ? (
            'Testimonies from ward members'
          ) : (
            'To be announced'
          )}
        </AgendaItem>
        <AgendaItem label="Closing Hymn">
          <HymnText hymn={meeting.closingHymn} />
        </AgendaItem>
        <AgendaItem label="Closing Prayer">{meeting.closingPrayer}</AgendaItem>
      </dl>
    </article>
  );
}