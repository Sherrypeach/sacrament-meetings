import { connection } from 'next/server';
import { formatToday } from '@/lib/dates';

/** Shows today's date. connection() makes it render per request, so the date is never stale. */
export default async function CurrentDate() {
  await connection();
  const now = new Date();
  return <time dateTime={now.toISOString()}>{formatToday(now)}</time>;
}