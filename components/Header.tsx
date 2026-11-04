import Link from 'next/link';
import { Suspense } from 'react';
import CurrentDate from './CurrentDate';
import NavLinks, { NavLinksFallback } from './NavLinks';
import type { NavLinkItem } from '@/lib/types';

export const WARD_NAME = 'Palermo Ward';

const mainLinks: NavLinkItem[] = [
  { href: '/', label: 'Home', exact: true },
  { href: '/meetings', label: 'Meetings' },
];

export default function Header() {
  return (
    <header className="bg-primary text-white shadow-md print:hidden">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link href="/" className="font-serif text-2xl font-bold hover:underline">
            {WARD_NAME}
          </Link>
          <p className="text-sm text-white/85">
            <Suspense fallback={<span>Sacrament Meeting Planner</span>}>
              <CurrentDate />
            </Suspense>
          </p>
        </div>
        <Suspense fallback={<NavLinksFallback links={mainLinks} label="Main navigation" />}>
          <NavLinks links={mainLinks} label="Main navigation" />
        </Suspense>
      </div>
    </header>
  );
}