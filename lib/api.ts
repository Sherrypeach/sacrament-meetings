import { headers } from 'next/headers';
import type { SacramentMeeting } from './types';

/** Builds the absolute base URL of the current request so server components can call our API routes. */
async function getBaseUrl(): Promise<string> {
  const requestHeaders = await headers();
  const host = requestHeaders.get('x-forwarded-host') ?? requestHeaders.get('host') ?? 'localhost:3000';
  const protocol =
    requestHeaders.get('x-forwarded-proto') ?? (host.startsWith('localhost') ? 'http' : 'https');
  return `${protocol}://${host}`;
}

export async function fetchMeetings(date?: string): Promise<SacramentMeeting[]> {
  const baseUrl = await getBaseUrl();
  const query = date ? `?date=${encodeURIComponent(date)}` : '';
  const response = await fetch(`${baseUrl}/api/meetings${query}`);

  if (!response.ok) {
    throw new Error(`Failed to load meetings (status ${response.status})`);
  }

  const meetings: SacramentMeeting[] = await response.json();
  return meetings;
}

/** Returns the meeting, or null when the API responds 400 (bad id) or 404 (not found). */
export async function fetchMeeting(id: string): Promise<SacramentMeeting | null> {
  const baseUrl = await getBaseUrl();
  const response = await fetch(`${baseUrl}/api/meetings/${encodeURIComponent(id)}`);

  if (response.status === 400 || response.status === 404) {
    return null;
  }
  if (!response.ok) {
    throw new Error(`Failed to load meeting ${id} (status ${response.status})`);
  }

  const meeting: SacramentMeeting = await response.json();
  return meeting;
}