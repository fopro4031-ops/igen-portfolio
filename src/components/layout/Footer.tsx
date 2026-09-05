import { IgenLogo } from "@/components/brand/IgenLogo";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <footer className="border-t border-outer-space/20 py-10">
      <Container className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-start">
        <IgenLogo
          locale={locale}
          homeLabel={dict.brand.homeAlt}
          variant="icon"
          size={32}
        />

        <p className="max-w-sm text-sm text-blue-gray">{dict.footer.tagline}</p>

        <div className="flex items-center gap-5">
          {siteConfig.social.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-blue-gray transition-colors hover:text-steel"
            >
              {link.label}
            </a>
          ))}
        </div>
      </Container>

      <p className="mt-8 text-center font-mono text-xs text-outer-space">
        © {new Date().getFullYear()} IGEN. {dict.footer.rights}
      </p>
    </footer>
  );
}
