import type { ReactNode } from 'react';
import { Suspense } from 'react';
import NavLinks, { NavLinksFallback } from '@/components/NavLinks';
import type { NavLinkItem } from '@/lib/types';

const sectionLinks: NavLinkItem[] = [
  { href: '/meetings', label: 'All meetings', exact: true },
  { href: '/meetings/current', label: 'This Sunday' },
];

/** Section layout shared by every page under /meetings. */
export default function MeetingsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between print:hidden">
        <p className="font-serif text-lg font-bold text-primary">Sacrament Meetings</p>
        <Suspense
          fallback={
            <NavLinksFallback links={sectionLinks} label="Meetings navigation" variant="section" />
          }
        >
          <NavLinks links={sectionLinks} label="Meetings navigation" variant="section" />
        </Suspense>
      </div>
      {children}
    </div>
  );
}