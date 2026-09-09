interface IconProps {
  className?: string;
}

/** Share-nodes glyph — the trigger icon, reads as "social/share" rather
 * than a generic plus or menu icon. */
export function ShareNodesIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="18" cy="5" r="3" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="6" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="18" cy="19" r="3" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M8.6 10.6 15.4 6.4M8.6 13.4 15.4 17.6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="7.5" cy="8" r="1.3" />
      <path d="M6.6 10.8h1.8V17H6.6v-6.2Zm4 0h1.7v.9c.4-.6 1.1-1.1 2.1-1.1 1.6 0 2.6 1 2.6 3v3.4h-1.8v-3c0-.9-.4-1.5-1.2-1.5s-1.4.6-1.4 1.5v3h-1.9v-6.2Z" />
    </svg>
  );
}
