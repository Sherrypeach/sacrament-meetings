'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { NavLinkItem } from '@/lib/types';

interface NavLinksProps {
  links: NavLinkItem[];
  label: string;
  variant?: 'header' | 'section';
}

function isActive(pathname: string, link: NavLinkItem): boolean {
  if (link.exact) {
    return pathname === link.href;
  }
  return pathname === link.href || pathname.startsWith(`${link.href}/`);
}

const styles = {
  header: {
    base: 'rounded px-3 py-2 text-white/90 hover:bg-white/10 hover:text-white',
    active: 'bg-white/15 font-semibold text-white underline underline-offset-4',
  },
  section: {
    base: 'rounded-full border border-border px-4 py-1.5 text-primary hover:bg-accent-light',
    active: 'border-primary bg-primary font-semibold text-white hover:bg-primary',
  },
};

/** Client Component: highlights the link that matches the current route. */
export default function NavLinks({ links, label, variant = 'header' }: NavLinksProps) {
  const pathname = usePathname();
  const style = styles[variant];

  return (
    <nav aria-label={label} className="print:hidden">
      <ul className="flex flex-wrap gap-2">
        {links.map((link) => {
          const active = isActive(pathname, link);
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={`inline-block ${style.base} ${active ? style.active : ''}`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

/** Plain version shown while the active link is being worked out (no highlighting). */
export function NavLinksFallback({ links, label, variant = 'header' }: NavLinksProps) {
  const style = styles[variant];
  return (
    <nav aria-label={label} className="print:hidden">
      <ul className="flex flex-wrap gap-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={`inline-block ${style.base}`}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}