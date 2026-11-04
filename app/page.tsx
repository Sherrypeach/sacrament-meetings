import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <section className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
        <Image
          src="/images/chapel.jpg"
          alt="Illustration of a chapel with a tall white steeple under a blue morning sky"
          width={1200}
          height={500}
          priority
          className="h-auto w-full"
        />
        <div className="space-y-4 p-6 sm:p-8">
          <h1 className="font-serif text-3xl font-bold text-primary sm:text-4xl">
            Sacrament Meeting Planner
          </h1>
          <p className="max-w-2xl text-lg text-muted">
            Plan and review each Sunday&apos;s agenda — announcements, prayers, ward business,
            hymns, speakers, and musical numbers — and print programs for the current and past
            weeks.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/meetings/current"
              className="rounded bg-primary px-5 py-2.5 font-semibold text-white hover:bg-primary-dark"
            >
              This Sunday&apos;s program
            </Link>
            <Link
              href="/meetings"
              className="rounded border border-primary px-5 py-2.5 font-semibold text-primary hover:bg-accent-light"
            >
              Browse all meetings
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}