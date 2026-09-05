import Image from "next/image";
import Link from "next/link";
import markSrc from "@/assets/brand/igen-mark-icon.png";
import type { Locale } from "@/i18n/config";

interface IgenLogoProps {
  locale: Locale;
  homeLabel: string;
  variant?: "full" | "icon" | "wordmark";
  size?: number;
  className?: string;
}

export function IgenLogo({
  locale,
  homeLabel,
  variant = "full",
  size = 48,
  className,
}: IgenLogoProps) {
  const icon = (
    <span
      className="relative inline-block shrink-0"
      style={{ width: size, height: size }}
    >
      <Image
        src={markSrc}
        alt="IGEN"
        fill
        sizes={`${size}px`}
        className="object-contain"
        priority
      />
    </span>
  );

  const wordmark = (
    <span className="font-display text-lg font-semibold tracking-tight text-steel">
      IGEN
    </span>
  );

  return (
    <Link
      href={`/${locale}`}
      className={`inline-flex items-center gap-2.5 ${className ?? ""}`}
      aria-label={homeLabel}
    >
      {variant !== "wordmark" && icon}
      {variant !== "icon" && wordmark}
    </Link>
  );
}
