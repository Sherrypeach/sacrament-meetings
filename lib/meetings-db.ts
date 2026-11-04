import type { SacramentMeeting } from './types';

/**
 * Temporary in-memory data store for Week 02.
 * It will be replaced by a real database in later weeks.
 */

/** Default details shared by most meetings in the ward. */
export const defaultMeetingDetails: Pick<
  SacramentMeeting,
  'presiding' | 'conducting' | 'stakeBusiness' | 'wardBusiness' | 'announcements'
> = {
  presiding: 'Bishop Daniel Romero',
  conducting: 'Brother Martín Silva, First Counselor',
  stakeBusiness: false,
  wardBusiness: [],
  announcements: [],
};

const meetings: SacramentMeeting[] = [
  {
    ...defaultMeetingDetails,
    id: 1,
    date: '2026-10-04',
    meetingType: 'general',
    announcements: [
      'There is no sacrament meeting in the ward today. Please watch the Sunday sessions of general conference.',
      'Sunday morning session begins at 1:00 p.m. local time.',
    ],
    openingHymn: { number: 19, title: 'We Thank Thee, O God, for a Prophet' },
    openingPrayer: 'Assigned by general conference',
    sacramentHymn: { number: 2, title: 'The Spirit of God' },
    speakers: [
      { name: 'General conference speakers', topic: 'Sunday morning session', type: 'speaker' },
    ],
    closingHymn: { number: 85, title: 'How Firm a Foundation' },
    closingPrayer: 'Assigned by general conference',
  },
  {
    ...defaultMeetingDetails,
    id: 2,
    date: '2026-10-11',
    meetingType: 'regular',
    announcements: [
      'Ward youth activity this Wednesday at 7:00 p.m. in the cultural hall.',
      'Please sign up to help with the ward temple day on October 24.',
    ],
    openingHymn: { number: 30, title: 'Come, Come, Ye Saints' },
    openingPrayer: 'Sister Lucía Fernández',
    wardBusiness: [
      { description: 'Release of Sister Ana Torres as Primary secretary' },
      { description: 'Sustaining of Brother Pablo Ruiz as Sunday School teacher' },
    ],
    sacramentHymn: { number: 169, title: 'As Now We Take the Sacrament' },
    speakers: [
      { name: 'Sister Valeria Gómez', topic: 'Lessons from general conference', type: 'speaker' },
      { name: 'Primary children', topic: 'I Am a Child of God (Hymn 301)', type: 'musical-number' },
      { name: 'Brother Diego Morales', topic: 'Ministering like the Savior', type: 'speaker' },
    ],
    closingHymn: { number: 116, title: 'Come, Follow Me' },
    closingPrayer: 'Brother Tomás Herrera',
  },
  {
    ...defaultMeetingDetails,
    id: 3,
    date: '2026-10-18',
    meetingType: 'stake',
    presiding: 'President Ricardo Paz, Stake President',
    conducting: 'President Ricardo Paz, Stake President',
    stakeBusiness: true,
    announcements: [
      'Stake conference is held at the stake center. There is no sacrament meeting in the ward today.',
    ],
    openingHymn: { number: 27, title: 'Praise to the Man' },
    openingPrayer: 'Sister Carolina Ibáñez',
    sacramentHymn: { number: 193, title: 'I Stand All Amazed' },
    speakers: [
      { name: 'Sister Mariana López', topic: 'Strengthening our families', type: 'speaker' },
      { name: 'Stake choir', topic: 'Gently Raise the Sacred Strain (Hymn 146)', type: 'musical-number' },
      { name: 'President Ricardo Paz', topic: 'Covenant belonging', type: 'speaker' },
    ],
    closingHymn: { number: 152, title: 'God Be with You Till We Meet Again' },
    closingPrayer: 'Brother Esteban Castro',
  },
  {
    ...defaultMeetingDetails,
    id: 4,
    date: '2026-10-25',
    meetingType: 'regular',
    announcements: ['The ward Christmas party committee meets next Sunday after church.'],
    openingHymn: { number: 136, title: 'I Know That My Redeemer Lives' },
    openingPrayer: 'Sister Paula Medina',
    wardBusiness: [{ description: 'Recognition of Brother Lucas Vera, ordained a priest' }],
    stakeBusiness: true,
    sacramentHymn: { number: 172, title: 'In Humility, Our Savior' },
    speakers: [
      { name: 'Brother Lucas Vera', topic: 'Preparing to serve a mission', type: 'speaker' },
      { name: 'Sister Julia Ortiz', topic: 'The power of daily prayer', type: 'speaker' },
    ],
    closingHymn: { number: 98, title: 'I Need Thee Every Hour' },
    closingPrayer: 'Sister Florencia Ramos',
  },
  {
    ...defaultMeetingDetails,
    id: 5,
    date: '2026-11-01',
    meetingType: 'testimony',
    conducting: 'Bishop Daniel Romero',
    announcements: ['Fast offerings can be given to a member of the bishopric.'],
    openingHymn: { number: 89, title: 'The Lord Is My Light' },
    openingPrayer: 'Brother Joaquín Sosa',
    wardBusiness: [{ description: 'Confirmation of Emma Duarte as a member of the Church' }],
    sacramentHymn: { number: 181, title: 'Jesus of Nazareth, Savior and King' },
    speakers: [],
    closingHymn: { number: 166, title: 'Abide with Me!' },
    closingPrayer: 'Sister Camila Núñez',
  },
  {
    ...defaultMeetingDetails,
    id: 6,
    date: '2026-11-08',
    meetingType: 'regular',
    conducting: 'Brother Andrés Molina, Second Counselor',
    announcements: ['Ward temple trip on Saturday, November 14. Transportation leaves at 7:00 a.m.'],
    openingHymn: { number: 2, title: 'The Spirit of God' },
    openingPrayer: 'Sister Rocío Benítez',
    sacramentHymn: { number: 175, title: 'O God, the Eternal Father' },
    speakers: [
      { name: 'Sister Natalia Rivas', topic: 'Gratitude in all things', type: 'speaker' },
      { name: 'Young Women class', topic: 'I Know That My Savior Loves Me', type: 'musical-number' },
      { name: 'Brother Gabriel Acosta', topic: 'The blessings of the temple', type: 'speaker' },
    ],
    closingHymn: { number: 85, title: 'How Firm a Foundation' },
    closingPrayer: 'Brother Sebastián Peralta',
  },
];

/** Returns all meetings, newest first. */
export function getMeetings(): SacramentMeeting[] {
  return [...meetings].sort((a, b) => b.date.localeCompare(a.date));
}

/** Returns the meetings held on a specific date ('YYYY-MM-DD'). */
export function getMeetingsByDate(date: string): SacramentMeeting[] {
  return getMeetings().filter((meeting) => meeting.date === date);
}

/** Returns a single meeting by id, or undefined if it does not exist. */
export function getMeetingById(id: number): SacramentMeeting | undefined {
  return meetings.find((meeting) => meeting.id === id);
}