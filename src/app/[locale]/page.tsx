import { HeroSection } from "@/sections/HeroSection";
import { StatsSection } from "@/sections/StatsSection";
import { ApproachSection } from "@/sections/ApproachSection";
import { SelectedWorkSection } from "@/sections/SelectedWorkSection";
import { ProcessSection } from "@/sections/ProcessSection";
import { ServicesSection } from "@/sections/ServicesSection";
import { QuoteSection } from "@/sections/QuoteSection";
import { ContactSection } from "@/sections/ContactSection";
import { getFeaturedProjects } from "@/lib/content/projects";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { notFound } from "next/navigation";

export default async function Home(props: PageProps<"/[locale]">) {
  const { locale: rawLocale } = await props.params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const dict = getDictionary(locale);
  const featuredProjects = await getFeaturedProjects();

  return (
    <>
      <HeroSection locale={locale} dict={dict} />
      <StatsSection dict={dict} />
      <SelectedWorkSection projects={featuredProjects} locale={locale} dict={dict} />
      <ApproachSection dict={dict} />
      <ProcessSection dict={dict} />
      <ServicesSection dict={dict} />
      <QuoteSection dict={dict} />
      <ContactSection dict={dict} />
    </>
  );
}
