import { IgenLogo } from "@/components/brand/IgenLogo";
import { LinkButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { MobileNav } from "./MobileNav";

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const navLinks = [
    { label: dict.nav.work, href: `/${locale}/work` },
    { label: dict.nav.process, href: `/${locale}#process` },
    { label: dict.nav.contact, href: `/${locale}#contact` },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-[150] border-b border-outer-space/20 bg-obsidian/70 backdrop-blur-md">
      <Container className="flex items-center justify-between py-4">
        <IgenLogo locale={locale} homeLabel={dict.brand.homeAlt} />

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-blue-gray transition-colors hover:text-steel"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <LocaleSwitcher locale={locale} />
          <LinkButton href={`/${locale}#contact`} variant="ghost">
            {dict.buttons.letsTalk}
          </LinkButton>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <LocaleSwitcher locale={locale} />
          <MobileNav links={navLinks} dict={dict} locale={locale} />
        </div>
      </Container>
    </header>
  );
}
