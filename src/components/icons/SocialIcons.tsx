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

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.4 1.26 4.83L2 22l5.36-1.3a9.9 9.9 0 0 0 4.68 1.19h.01c5.5 0 9.95-4.46 9.95-9.96C22 6.46 17.55 2 12.04 2Zm5.8 14.13c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.12.11-1.8-.11a16 16 0 0 1-1.66-.62c-2.93-1.27-4.83-4.22-4.98-4.42-.15-.2-1.2-1.6-1.2-3.05 0-1.46.76-2.17 1.03-2.47.27-.3.6-.37.8-.37h.57c.18 0 .43-.07.67.52.24.6.83 2.06.9 2.21.07.15.12.32.02.52-.1.2-.15.32-.3.5-.14.17-.3.38-.44.51-.15.15-.3.31-.13.6.17.3.75 1.23 1.6 2 1.1 1 2.03 1.3 2.33 1.45.3.15.47.13.65-.08.17-.2.73-.85.93-1.14.2-.3.4-.24.65-.15.27.1 1.7.8 1.99.95.3.15.49.22.56.35.08.13.08.75-.16 1.42Z" />
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
