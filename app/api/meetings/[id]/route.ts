import { NextResponse, type NextRequest } from 'next/server';
import { getMeetingById } from '@/lib/meetings-db';
import type { ApiError, SacramentMeeting } from '@/lib/types';

// GET /api/meetings/[id]
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
): Promise<NextResponse<SacramentMeeting | ApiError>> {
  const { id } = await params;

  // Only accept whole positive numbers like "1" or "12" (rejects "abc", "1.5", "-2").
  if (!/^\d+$/.test(id)) {
    return NextResponse.json({ error: 'The meeting id must be a number.' }, { status: 400 });
  }

  const meeting = getMeetingById(Number(id));

  if (!meeting) {
    return NextResponse.json({ error: `Meeting ${id} was not found.` }, { status: 404 });
  }

  return NextResponse.json(meeting);
}