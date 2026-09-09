import type { Metadata, Viewport } from "next";
import {
  Space_Grotesk,
  Inter,
  JetBrains_Mono,
  IBM_Plex_Sans_Arabic,
} from "next/font/google";
import { notFound } from "next/navigation";
import { MotionProvider } from "@/animations/MotionProvider";
import { LoadingScreen } from "@/components/brand/LoadingScreen";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SocialFab } from "@/components/layout/SocialFab";
import { SkipToContent } from "@/components/layout/SkipToContent";
import { ScrollRestorer } from "@/components/layout/ScrollRestorer";
import { locales, isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { siteConfig } from "@/data/site";
import "../globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const plexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-plex-arabic",
  subsets: ["arabic"],
  weight: ["500", "600", "700"],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(
  props: LayoutProps<"/[locale]">,
): Promise<Metadata> {
  const { locale: rawLocale } = await props.params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const dict = getDictionary(locale);

  const title = `IGEN — ${dict.hero.headlineLine1} ${dict.hero.headlineHighlight}`;
  const description = dict.hero.subhead;
  const ogLocale = locale === "ar" ? "ar_EG" : "en_US";

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: title,
      template: "%s · IGEN",
    },
    description,
    alternates: {
      canonical: `/${locale}`,
      languages: { en: "/en", ar: "/ar" },
    },
    openGraph: {
      title,
      description,
      url: `/${locale}`,
      siteName: "IGEN",
      locale: ogLocale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#081f2f",
};

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const dict = getDictionary(locale);
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html
      lang={locale}
      dir={dir}
      data-scroll-behavior="smooth"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} ${plexArabic.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-obsidian text-steel">
        <MotionProvider>
          <ScrollRestorer />
          <SkipToContent label={dict.buttons.skipToContent} />
          <LoadingScreen />
          <Header locale={locale} dict={dict} />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer locale={locale} dict={dict} />
          <SocialFab dict={dict} />
        </MotionProvider>
      </body>
    </html>
  );
}
