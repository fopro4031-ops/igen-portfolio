import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { arabicFontFamily, ogFonts } from "@/lib/og/fonts";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const logoData = await readFile(
  join(process.cwd(), "src/assets/brand/igen-logo-transparent.png"),
  "base64",
);
const logoSrc = `data:image/png;base64,${logoData}`;

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const dict = getDictionary(locale);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 64,
          background:
            "linear-gradient(135deg, #081f2f 0%, #0d2a3f 50%, #081f2f 100%)",
          padding: "0 90px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={300} height={300} alt="" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 580,
            direction: locale === "ar" ? "rtl" : "ltr",
            textAlign: locale === "ar" ? "right" : "left",
            fontFamily: locale === "ar" ? arabicFontFamily : "sans-serif",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 30,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#ACBCCC",
              marginBottom: 20,
            }}
          >
            IGEN
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 56,
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.15,
            }}
          >
            {`${dict.hero.headlineLine1} ${dict.hero.headlineHighlight}`}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              color: "#738496",
              marginTop: 28,
              lineHeight: 1.4,
            }}
          >
            {dict.hero.subhead}
          </div>
        </div>
      </div>
    ),
    { ...size, fonts: ogFonts },
  );
}
