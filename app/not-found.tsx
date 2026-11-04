import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 text-center">
      <h1 className="font-serif text-3xl font-bold text-primary">Page not found</h1>
      <p className="mt-3 text-muted">We couldn&apos;t find that meeting or page.</p>
      <Link
        href="/meetings"
        className="mt-6 inline-block rounded bg-primary px-5 py-2.5 font-semibold text-white hover:bg-primary-dark"
      >
        Back to all meetings
      </Link>
    </main>
  );
}