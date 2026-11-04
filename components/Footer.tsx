import { WARD_NAME } from './Header';

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-primary-dark text-white print:hidden">
      <div className="mx-auto max-w-5xl px-4 py-5 text-center text-sm">
        <p>{WARD_NAME} · Sacrament Meeting Planner</p>
        <p className="text-white/80">WDD 430 – Web Full-Stack Development</p>
      </div>
    </footer>
  );
}