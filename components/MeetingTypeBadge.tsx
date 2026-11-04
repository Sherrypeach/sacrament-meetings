import { meetingTypeLabels } from '@/lib/meeting-labels';
import type { MeetingType } from '@/lib/types';

const badgeColors: Record<MeetingType, string> = {
  regular: 'bg-blue-100 text-blue-900',
  testimony: 'bg-green-100 text-green-900',
  stake: 'bg-amber-100 text-amber-900',
  general: 'bg-purple-100 text-purple-900',
};

export default function MeetingTypeBadge({ type }: { type: MeetingType }) {
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${badgeColors[type]}`}
    >
      {meetingTypeLabels[type]}
    </span>
  );
}