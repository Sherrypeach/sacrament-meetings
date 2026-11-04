'use client';

/** Opens the browser print dialog. Header, footer and navigation are hidden when printing. */
export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="rounded bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-primary print:hidden"
    >
      Print program
    </button>
  );
}