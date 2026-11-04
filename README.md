# Sacrament Meeting Planner

A Next.js (App Router) app that helps bishoprics plan and review sacrament meeting agendas, and lets members view and print current and past programs.

WDD 430 – Week 02 assignment.

## Features

- List of all meetings (upcoming, this Sunday, and past weeks)
- Full agenda for each meeting: announcements, hymns, prayers, ward business, stake business, speakers, and musical numbers
- `/meetings/current` redirects to the most recent Sunday's meeting
- Print-friendly program (header, footer, and navigation are hidden when printing)
- Meeting types: regular, fast & testimony, stake conference, general conference

## Routes

| Route | Description |
| --- | --- |
| `/` | Landing page |
| `/meetings` | All meetings |
| `/meetings/[id]` | Full agenda for one meeting + print button |
| `/meetings/current` | Redirects to this Sunday's meeting |
| `GET /api/meetings` | All meetings (optional `?date=YYYY-MM-DD` filter) |
| `GET /api/meetings/[id]` | One meeting: `200` found, `400` invalid id, `404` not found |

## Tech

Next.js 16, TypeScript, Tailwind CSS, `next/font` (Merriweather + Source Sans 3), `next/image`.
Data is stored in memory (`lib/meetings-db.ts`) for now and will move to a database in later weeks.

## Getting started

```bash
npm install
npm run dev
```