/** Time zone used to decide which Sunday is "this Sunday" for the ward. */
export const WARD_TIME_ZONE = 'America/Argentina/Buenos_Aires';

export const ISO_DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

/** Formats a Date as 'YYYY-MM-DD' in the ward's time zone. */
export function toIsoDateInWardZone(date: Date): string {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: WARD_TIME_ZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);
}

/** Returns the most recent Sunday (today if today is Sunday) as 'YYYY-MM-DD'. */
export function getMostRecentSunday(now: Date): string {
  const today = new Date(`${toIsoDateInWardZone(now)}T00:00:00Z`);
  today.setUTCDate(today.getUTCDate() - today.getUTCDay());
  return today.toISOString().slice(0, 10);
}

/** Turns '2026-11-01' into 'Sunday, November 1, 2026'. */
export function formatMeetingDate(isoDate: string): string {
  return new Date(`${isoDate}T00:00:00Z`).toLocaleDateString('en-US', {
    timeZone: 'UTC',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/** Formats today's date for the header, in the ward's time zone. */
export function formatToday(now: Date): string {
  return now.toLocaleDateString('en-US', {
    timeZone: WARD_TIME_ZONE,
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}