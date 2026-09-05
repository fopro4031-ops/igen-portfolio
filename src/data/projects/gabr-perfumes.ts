import type { Project } from "@/types/project";

const img = (name: string) => `/projects/gabr-perfumes/${name}`;

export const gabrPerfumes: Project = {
  slug: "gabr-perfumes",
  order: 1,
  year: 2024,
  category: "ecommerce",
  flavor: "luxury-commerce",
  presentation: "fullscreen-reveal",
  featuredOnHome: true,
  accentColor: "#b8873a",

  techStack: [
    { name: "Next.js", category: "frontend" },
    { name: "React", category: "frontend" },
    { name: "Tailwind CSS", category: "styling" },
    { name: "Framer Motion", category: "styling" },
  ],

  links: [{ href: "https://gabr-perfumes.vercel.app/", kind: "live" }],

  coverMedia: {
    type: "image",
    src: img("section-hero.png"),
    alt: "GABR Perfumes — homepage hero",
  },

  content: {
    en: {
      name: "GABR Perfumes",
      tagline: "A fragrance house told in three layers, not one product grid.",
      role: "Design & Frontend Development",
      summary:
        "A bilingual Arabic/English storefront for a contemporary perfume house — built to sell scent through structure and language, since a screen can't carry a smell.",
      result:
        "A storefront that sells fragrance through structure and story rather than stock photography — live and processing real orders in EGP across both languages.",
      tags: ["Fragrance house", "Storytelling commerce"],
      highlights: [
        "Three-layer note system replaces product photography with structure",
        "Fully bilingual Arabic/English, mirrored rather than translated",
        "Curated collections with editorial copy instead of filter checkboxes",
      ],
      previewSequence: {
        images: [
          {
            type: "image",
            src: img("section-hero.png"),
            alt: "GABR Perfumes hero — a perfume bottle on a sunset beach",
          },
          {
            type: "image",
            src: img("section-shop-by-brand.png"),
            alt: "GABR Perfumes product grid, shop by brand",
          },
          {
            type: "image",
            src: img("section-layers-of-feeling.png"),
            alt: "GABR Perfumes top, heart, and base note breakdown",
          },
        ],
        identityLine:
          "A fragrance house told in three layers, not one product grid.",
      },
      blocks: [
        {
          type: "text-image-row",
          heading: "Three layers, one story",
          body: "Perfume is the hardest thing to sell through a screen — there's no way to demonstrate the product. The site explains the composition itself: top, heart, and base notes, in the order they'd actually hit the nose.",
          image: {
            type: "image",
            src: img("section-layers-of-feeling.png"),
            alt: "Top, heart, and base note explainer section",
          },
        },
        {
          type: "text-image-row",
          heading: "Heritage, told before the catalog",
          body: "GABR's own calligraphy and brand story open the site before a single product does — the craft comes first, the shopping second.",
          image: {
            type: "image",
            src: img("section-heritage.png"),
            alt: "GABR brand story section with the wordmark calligraphy",
          },
        },
        {
          type: "text-image-row",
          heading: "Curated, not categorized",
          body: "Collections are grouped by mood and moment, not gender or bottle size — the language customers already use to describe what they want.",
          image: {
            type: "image",
            src: img("section-curated-collections.png"),
            alt: "Curated fragrance collections grouped by mood",
          },
        },
        {
          type: "text-image-row",
          heading: "Full note transparency",
          body: "Every product page carries the same three-layer breakdown, so a buyer never has to guess what's actually in the bottle.",
          image: {
            type: "image",
            src: img("product-detail.png"),
            alt: "Single product detail page with full description",
          },
        },
        {
          type: "tech-stack",
          items: [
            { name: "Next.js", category: "frontend" },
            { name: "React", category: "frontend" },
            { name: "Tailwind CSS", category: "styling" },
            { name: "Framer Motion", category: "styling" },
          ],
        },
        {
          type: "challenge-solution",
          items: [
            {
              id: "sensory-gap",
              challenge:
                "Selling a sensory product with zero sensory channels available.",
              solution:
                "Replaced 'show the bottle' with 'explain the structure' — the note-reveal system gives buyers something more useful than a photo: a reason to trust the composition.",
              outcome:
                "Product pages carry far more information density than a standard e-commerce PDP, without feeling like a spec sheet.",
            },
            {
              id: "bilingual-reusability",
              challenge:
                "Arabic-first design without breaking component reusability.",
              solution:
                "Built the design system direction-agnostic from the start — spacing, icons, and layout primitives that flip cleanly with `dir`, instead of maintaining two component trees.",
              outcome:
                "One codebase serves both languages at full visual quality, with no forked templates to keep in sync.",
            },
          ],
        },
      ],
    },
    ar: {
      name: "جبر للعطور",
      tagline: "بيت عطور يُروى على ثلاث طبقات، لا شبكة منتجات عادية.",
      role: "تصميم وتطوير الواجهة الأمامية",
      summary:
        "متجر إلكتروني ثنائي اللغة (عربي/إنجليزي) لبيت عطور معاصر — مبني ليبيع العطر عبر البنية واللغة، لأن الشاشة لا تستطيع نقل رائحة.",
      result:
        "متجر يبيع العطر عبر البنية والحكاية لا عبر صور المخزون — يعمل فعليًا ويستقبل طلبات حقيقية بالجنيه المصري بكلتا اللغتين.",
      tags: ["بيت عطور", "تجارة قائمة على الحكاية"],
      highlights: [
        "نظام الطبقات الثلاث يستبدل صور المنتج ببنية مفهومة",
        "ثنائي اللغة بالكامل — عربي وإنجليزي متكافئان لا مترجم عن بعضه",
        "مجموعات منسّقة بمحتوى تحريري بدل خانات الفلترة",
      ],
      previewSequence: {
        images: [
          {
            type: "image",
            src: img("section-hero.png"),
            alt: "الصفحة الرئيسية لجبر للعطور — زجاجة عطر على شاطئ عند الغروب",
          },
          {
            type: "image",
            src: img("section-shop-by-brand.png"),
            alt: "شبكة منتجات جبر للعطور، التسوق حسب العلامة التجارية",
          },
          {
            type: "image",
            src: img("section-layers-of-feeling.png"),
            alt: "تفصيل طبقات العطر: المقدمة والقلب والقاعدة",
          },
        ],
        identityLine: "بيت عطور يُروى على ثلاث طبقات، لا شبكة منتجات عادية.",
      },
      blocks: [
        {
          type: "text-image-row",
          heading: "ثلاث طبقات، حكاية واحدة",
          body: "العطر من أصعب المنتجات بيعًا عبر شاشة — لا وسيلة لإظهاره فعليًا. الموقع نفسه يشرح تركيبة العطر: مقدمة، قلب، وقاعدة، بنفس الترتيب الذي تصل به فعليًا إلى الأنف.",
          image: {
            type: "image",
            src: img("section-layers-of-feeling.png"),
            alt: "قسم شرح طبقات العطر: المقدمة والقلب والقاعدة",
          },
        },
        {
          type: "text-image-row",
          heading: "الحرفة تُروى قبل الكتالوج",
          body: "خط جبر الكاليغرافي وقصة العلامة يفتحان الموقع قبل أي منتج — الحرفة أولًا، والتسوق بعدها.",
          image: {
            type: "image",
            src: img("section-heritage.png"),
            alt: "قسم قصة العلامة التجارية بخط الشعار الكاليغرافي",
          },
        },
        {
          type: "text-image-row",
          heading: "منسّق، لا مصنّف فقط",
          body: "المجموعات منظّمة حسب المزاج والمناسبة، لا الجنس أو حجم الزجاجة — بنفس اللغة اللي بيستخدمها العميل فعليًا وهو بيدوّر.",
          image: {
            type: "image",
            src: img("section-curated-collections.png"),
            alt: "مجموعات عطور منسّقة حسب المزاج والمناسبة",
          },
        },
        {
          type: "text-image-row",
          heading: "شفافية كاملة في تفاصيل العطر",
          body: "كل صفحة منتج تحمل نفس تفصيل الطبقات الثلاث، فالمشتري ما يحتاجش يخمّن إيه اللي فعليًا جوه الزجاجة.",
          image: {
            type: "image",
            src: img("product-detail.png"),
            alt: "صفحة تفاصيل منتج واحد بوصف كامل",
          },
        },
        {
          type: "tech-stack",
          items: [
            { name: "Next.js", category: "frontend" },
            { name: "React", category: "frontend" },
            { name: "Tailwind CSS", category: "styling" },
            { name: "Framer Motion", category: "styling" },
          ],
        },
        {
          type: "challenge-solution",
          items: [
            {
              id: "sensory-gap",
              challenge: "بيع منتج حسي بالكامل من دون أي قناة حسية متاحة.",
              solution:
                "استبدلنا فكرة «اعرض الزجاجة» بفكرة «اشرح التركيبة» — نظام كشف الطبقات يمنح المشتري ما هو أهم من صورة: سببًا للثقة في التركيبة.",
              outcome:
                "صفحات المنتج تحمل كثافة معلومات أعلى بكثير من صفحة منتج تقليدية، دون أن تبدو كورقة مواصفات جافة.",
            },
            {
              id: "bilingual-reusability",
              challenge: "تصميم يبدأ بالعربية من دون كسر إعادة استخدام المكوّنات.",
              solution:
                "بُني نظام التصميم من الأساس محايدًا تجاه الاتجاه — مسافات وأيقونات وعناصر تخطيط تنعكس بسلاسة مع تغيّر الاتجاه، بدل الاحتفاظ بشجرتي مكوّنات منفصلتين.",
              outcome:
                "قاعدة كود واحدة تخدم اللغتين بجودة بصرية كاملة، من دون قوالب مزدوجة يصعب مزامنتها.",
            },
          ],
        },
      ],
    },
  },
};
