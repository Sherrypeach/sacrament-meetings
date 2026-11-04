import type { MeetingType } from './types';

export const meetingTypeLabels: Record<MeetingType, string> = {
  testimony: 'Fast & Testimony Meeting',
  regular: 'Sacrament Meeting',
  stake: 'Stake Conference',
  general: 'General Conference',
};

/** Stake and general conference Sundays replace the ward sacrament meeting. */
export function isSacramentMeeting(type: MeetingType): boolean {
  return type === 'testimony' || type === 'regular';
}