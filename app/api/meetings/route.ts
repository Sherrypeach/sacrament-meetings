import { NextResponse, type NextRequest } from 'next/server';
import { getMeetings, getMeetingsByDate } from '@/lib/meetings-db';
import { ISO_DATE_PATTERN } from '@/lib/dates';
import type { ApiError, SacramentMeeting } from '@/lib/types';

// GET /api/meetings
// GET /api/meetings?date=2026-11-01
export async function GET(
  request: NextRequest,
): Promise<NextResponse<SacramentMeeting[] | ApiError>> {
  const date = request.nextUrl.searchParams.get('date');

  if (date === null) {
    return NextResponse.json(getMeetings());
  }

  if (!ISO_DATE_PATTERN.test(date)) {
    return NextResponse.json(
      { error: 'The date parameter must use the format YYYY-MM-DD.' },
      { status: 400 },
    );
  }

  return NextResponse.json(getMeetingsByDate(date));
}