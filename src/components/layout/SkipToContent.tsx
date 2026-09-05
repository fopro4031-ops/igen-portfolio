export function SkipToContent({ label }: { label: string }) {
  return (
    <a
      href="#main-content"
      className="fixed start-4 top-4 z-[200] -translate-y-24 rounded-md bg-steel px-4 py-2 text-sm font-medium text-obsidian transition-transform focus:translate-y-0"
    >
      {label}
    </a>
  );
}
