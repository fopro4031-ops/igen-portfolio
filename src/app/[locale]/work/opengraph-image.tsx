import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { arabicFontFamily, ogFonts } from "@/lib/og/fonts";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const markData = await readFile(
  join(process.cwd(), "src/assets/brand/igen-mark-icon.png"),
  "base64",
);
const markSrc = `data:image/png;base64,${markData}`;

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
          flexDirection: "column",
          alignItems: locale === "ar" ? "flex-end" : "flex-start",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #081f2f 0%, #0d2a3f 50%, #081f2f 100%)",
          padding: "0 100px",
          fontFamily: locale === "ar" ? arabicFontFamily : "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: locale === "ar" ? "row-reverse" : "row",
            alignItems: "center",
            gap: 20,
            marginBottom: 44,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={markSrc} width={64} height={64} alt="" />
          <div
            style={{
              display: "flex",
              fontSize: 28,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#ACBCCC",
            }}
          >
            IGEN
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 700,
            color: "#ffffff",
            textAlign: locale === "ar" ? "right" : "left",
          }}
        >
          {dict.work.heading}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#738496",
            marginTop: 24,
            maxWidth: 900,
            textAlign: locale === "ar" ? "right" : "left",
          }}
        >
          {dict.work.subtitle}
        </div>
      </div>
    ),
    { ...size, fonts: ogFonts },
  );
}
