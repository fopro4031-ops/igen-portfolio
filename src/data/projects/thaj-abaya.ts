import type { Project } from "@/types/project";

const img = (name: string) => `/projects/thaj-abaya/${name}`;

export const thajAbaya: Project = {
  slug: "thaj-abaya",
  order: 2,
  year: 2024,
  category: "ecommerce",
  flavor: "luxury-commerce",
  presentation: "horizontal-scroll",
  featuredOnHome: true,
  accentColor: "#1f4d3d",

  techStack: [
    { name: "Next.js", category: "frontend" },
    { name: "React", category: "frontend" },
    { name: "Tailwind CSS", category: "styling" },
    { name: "Framer Motion", category: "styling" },
  ],

  links: [{ href: "https://thajabaya.com/", kind: "live" }],

  coverMedia: {
    type: "image",
    src: img("section-hero.png"),
    alt: "THAJ — homepage hero",
  },

  content: {
    en: {
      name: "THAJ",
      tagline: "Cut in Riyadh. Named by hand.",
      role: "Design & Frontend Development",
      summary:
        "A fashion maison storefront for a 25-piece abaya collection — every piece numbered, catalogued, and given room to be looked at, not scrolled past.",
      result:
        "A storefront where restraint reads as luxury — 25 pieces, each with the space a maison would give it, live in both Arabic and English.",
      tags: ["Fashion maison", "Bilingual storefront"],
      highlights: [
        "25 numbered pieces, each catalogued with its own detail page",
        "Asymmetric, varying-scale layout instead of a uniform grid",
        "Fully bilingual Arabic/English with mirrored, not translated, copy",
      ],
      previewSequence: {
        images: [
          {
            type: "image",
            src: img("section-hero.png"),
            alt: "THAJ homepage hero with the wordmark and a numbered piece",
          },
          {
            type: "image",
            src: img("section-pieces.png"),
            alt: "THAJ numbered pieces at varying scale",
          },
        ],
        identityLine: "Cut in Riyadh. Named by hand.",
      },
      blocks: [
        {
          type: "text-image-row",
          heading: "Elegance is silence",
          body: "THAJ's own line is the brief: a maison that names 25 pieces instead of stocking hundreds. The site's job was to let each one hold the page, not compete for it.",
          image: {
            type: "image",
            src: img("section-pieces.png"),
            alt: "THAJ individual numbered pieces at varying scale",
          },
        },
        {
          type: "text-image-row",
          heading: "25 pieces, catalogued and editioned",
          body: "Each piece is grouped by collection at a varying scale, closer to an editorial spread than a uniform product grid.",
          image: {
            type: "image",
            src: img("section-collections.png"),
            alt: "THAJ collections at varying scale",
          },
        },
        {
          type: "text-image-row",
          heading: "The maison story, told slowly",
          body: "Cut in Riyadh, washed three times, and finished by hand before being named — the process is part of the pitch, not a footnote.",
          image: {
            type: "image",
            src: img("section-story.png"),
            alt: "THAJ maison story section",
          },
        },
        {
          type: "tech-stack",
          items: [
            { name: "Next.js", category: "frontend" },
            { name: "React", category: "frontend" },
            { name: "Tailwind CSS", category: "styling" },
          ],
        },
        {
          type: "challenge-solution",
          items: [
            {
              id: "restraint-vs-ecommerce",
              challenge:
                "Standard e-commerce grids compress product photography until everything looks the same size and value.",
              solution:
                "Built a varying-scale layout where each piece's card size reflects its place in the collection, closer to an editorial spread than a catalog grid.",
              outcome:
                "Individual pieces read as considered objects rather than SKUs in a list.",
            },
          ],
        },
      ],
    },
    ar: {
      name: "ثاج",
      tagline: "قُصّت في الرياض. سُمّيت باليد.",
      role: "تصميم وتطوير الواجهة الأمامية",
      summary:
        "متجر لدار أزياء لمجموعة من 25 عباءة — كل قطعة مرقّمة ومُفهرسة ولها مساحتها الخاصة على الصفحة بدل الاختفاء في تمرير سريع.",
      result:
        "متجر يجعل من التقشف فخامة — 25 قطعة، لكل واحدة منها المساحة التي تستحقها دار أزياء حقيقية، ويعمل بالعربية والإنجليزية معًا.",
      tags: ["دار أزياء", "متجر ثنائي اللغة"],
      highlights: [
        "25 قطعة مرقّمة، لكل واحدة صفحة تفاصيل خاصة بها",
        "تخطيط غير متماثل ومتفاوت الحجم بدل شبكة موحدة",
        "ثنائي اللغة بالكامل بمحتوى مكتوب لكل لغة على حدة",
      ],
      previewSequence: {
        images: [
          {
            type: "image",
            src: img("section-hero.png"),
            alt: "الصفحة الرئيسية لثاج مع الشعار وإحدى القطع المرقّمة",
          },
          {
            type: "image",
            src: img("section-pieces.png"),
            alt: "قطع ثاج المرقّمة بأحجام متفاوتة",
          },
        ],
        identityLine: "قُصّت في الرياض. سُمّيت باليد.",
      },
      blocks: [
        {
          type: "text-image-row",
          heading: "الأناقة صمت",
          body: "شعار ثاج نفسه هو التكليف: دار تسمّي 25 قطعة بدل تخزين المئات. مهمة الموقع كانت أن تأخذ كل قطعة مساحتها من الصفحة، لا أن تتنافس عليها.",
          image: {
            type: "image",
            src: img("section-pieces.png"),
            alt: "قطع ثاج المرقّمة بأحجام متفاوتة",
          },
        },
        {
          type: "text-image-row",
          heading: "25 قطعة، مفهرسة ومصنّفة",
          body: "كل قطعة مصنّفة حسب مجموعتها بحجم متفاوت، أقرب لعرض تحريري منه لشبكة منتجات موحدة.",
          image: {
            type: "image",
            src: img("section-collections.png"),
            alt: "مجموعات ثاج بأحجام متفاوتة",
          },
        },
        {
          type: "text-image-row",
          heading: "قصة الدار، تُروى ببطء",
          body: "تُقص في الرياض، تُغسل ثلاث مرات، وتُنهى باليد قبل أن تُسمّى — العملية نفسها جزء من العرض، لا هامش صغير في الأسفل.",
          image: {
            type: "image",
            src: img("section-story.png"),
            alt: "قسم قصة دار ثاج",
          },
        },
        {
          type: "tech-stack",
          items: [
            { name: "Next.js", category: "frontend" },
            { name: "React", category: "frontend" },
            { name: "Tailwind CSS", category: "styling" },
          ],
        },
        {
          type: "challenge-solution",
          items: [
            {
              id: "restraint-vs-ecommerce",
              challenge:
                "شبكات التجارة الإلكترونية التقليدية تضغط صور المنتجات حتى يبدو كل شيء بنفس الحجم والقيمة.",
              solution:
                "بُني تخطيط متفاوت الحجم بحيث تعكس مساحة كل بطاقة مكانة القطعة في المجموعة، أقرب لعرض تحريري منه لشبكة كتالوج.",
              outcome: "كل قطعة تُقرأ كعنصر مدروس لا كرمز منتج في قائمة.",
            },
          ],
        },
      ],
    },
  },
};
