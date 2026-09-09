import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { isLocale, type Locale } from "@/i18n/config";
import { getProjectBySlug } from "@/lib/content/projects";
import { arabicFontFamily, ogFonts } from "@/lib/og/fonts";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const project = await getProjectBySlug(slug);

  const markData = await readFile(
    join(process.cwd(), "src/assets/brand/igen-mark-icon.png"),
    "base64",
  );
  const markSrc = `data:image/png;base64,${markData}`;

  if (!project) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#081f2f",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={markSrc} width={120} height={120} alt="" />
        </div>
      ),
      { ...size, fonts: ogFonts },
    );
  }

  const content = project.content[locale];
  const coverPath = join(
    process.cwd(),
    "public",
    project.coverMedia.src.replace(/^\//, ""),
  );
  const coverData = await readFile(coverPath, "base64");
  const coverExt = project.coverMedia.src.split(".").pop();
  const coverSrc = `data:image/${coverExt};base64,${coverData}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#081f2f",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={coverSrc}
          width={1200}
          height={630}
          alt=""
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            background: "rgba(8,31,47,0.55)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            background:
              "linear-gradient(to top, rgb(8,31,47) 0%, rgb(8,31,47) 42%, rgba(8,31,47,0.8) 58%, rgba(8,31,47,0.35) 85%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: locale === "ar" ? "flex-end" : "flex-start",
            justifyContent: "flex-end",
            padding: "0 72px 64px",
            fontFamily: locale === "ar" ? arabicFontFamily : "sans-serif",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: locale === "ar" ? "row-reverse" : "row",
              alignItems: "center",
              gap: 14,
              marginBottom: 22,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={markSrc} width={36} height={36} alt="" />
            <div
              style={{
                display: "flex",
                fontSize: 20,
                letterSpacing: 5,
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
              fontSize: 60,
              fontWeight: 700,
              color: "#ffffff",
              textAlign: locale === "ar" ? "right" : "left",
            }}
          >
            {content.name}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              color: "#ACBCCC",
              marginTop: 18,
              maxWidth: 880,
              textAlign: locale === "ar" ? "right" : "left",
            }}
          >
            {content.tagline}
          </div>
        </div>
      </div>
    ),
    { ...size, fonts: ogFonts },
  );
}
