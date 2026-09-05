interface ProjectVisualPlaceholderProps {
  label: string;
  accentColor?: string;
  className?: string;
}

/**
 * Stand-in for real product screenshots, which haven't been supplied yet.
 * Renders an abstract, on-brand panel tinted with the project's accent
 * color instead of a generic "image coming soon" box. Swap for real media
 * by giving the project real `coverMedia`/`gallery` entries — no component
 * changes needed elsewhere.
 */
export function ProjectVisualPlaceholder({
  label,
  accentColor = "#738496",
  className = "",
}: ProjectVisualPlaceholderProps) {
  return (
    <div
      className={`relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-outer-space/30 bg-gunmetal/30 ${className}`}
      style={{
        backgroundImage: `radial-gradient(circle at 20% 20%, color-mix(in oklab, ${accentColor} 35%, transparent) 0%, transparent 55%), radial-gradient(circle at 85% 80%, color-mix(in oklab, ${accentColor} 25%, transparent) 0%, transparent 50%)`,
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, currentColor 0 1px, transparent 1px 32px), repeating-linear-gradient(90deg, currentColor 0 1px, transparent 1px 32px)",
        }}
      />
      <span className="relative z-10 px-6 text-center font-mono text-xs uppercase tracking-[0.3em] text-blue-gray">
        {label}
      </span>
    </div>
  );
}
