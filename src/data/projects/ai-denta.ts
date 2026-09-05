import type { Project } from "@/types/project";

const img = (name: string) => `/projects/ai-denta/${name}`;

export const aiDenta: Project = {
  slug: "ai-denta",
  order: 3,
  year: 2024,
  category: "marketing",
  flavor: "conversion-marketing",
  presentation: "before-after",
  featuredOnHome: true,
  accentColor: "#a855f7",

  techStack: [
    { name: "Next.js", category: "frontend" },
    { name: "React", category: "frontend" },
    { name: "Tailwind CSS", category: "styling" },
  ],

  links: [{ href: "https://ai-denta.com/", kind: "live" }],

  coverMedia: {
    type: "image",
    src: img("section-hero.png"),
    alt: "Ai Denta — homepage hero",
  },

  content: {
    en: {
      name: "Ai Denta",
      tagline: "Grow your dental clinic with a system, not guesswork.",
      role: "Design & Frontend Development",
      summary:
        "A growth-marketing site for a team of licensed dentists who also run paid ads and content — built to convert clinic owners who've been burned by generic marketers before.",
      result:
        "A site built entirely around one conversion path — book a call — with every section (proof, comparison, lead magnet) built to remove a reason to say no.",
      tags: ["Healthcare marketing", "Conversion site"],
      highlights: [
        "Free-vs-paid consultation comparison table designed to convert hesitant leads",
        "Lead-magnet ebook flow feeding a booking funnel",
        "Portfolio proof section built around real client content, not stock testimonials",
      ],
      previewSequence: {
        images: [
          {
            type: "image",
            src: img("section-hero.png"),
            alt: "Ai Denta homepage hero with video and headline",
          },
          {
            type: "image",
            src: img("section-consultation.png"),
            alt: "Ai Denta consultation comparison section",
          },
        ],
        identityLine: "Grow your dental clinic with a system, not guesswork.",
      },
      blocks: [
        {
          type: "text-image-row",
          heading: "Proof, not promises",
          body: "The differentiator was the brief: a team of licensed dentists doing growth marketing, not marketers guessing at a niche. The site had to sell that credibility before it sold a service.",
          image: {
            type: "image",
            src: img("section-portfolio.png"),
            alt: "Ai Denta portfolio proof section",
          },
        },
        {
          type: "text-image-row",
          heading: "What they actually do",
          body: "Content, paid ads, and conversion work laid out as three distinct services — not one vague 'marketing' offer.",
          image: {
            type: "image",
            src: img("section-services.png"),
            alt: "Ai Denta services section",
          },
        },
        {
          type: "text-image-row",
          heading: "The comparison doing the hardest part of the sell",
          body: "A direct free-vs-paid table lets a hesitant clinic owner see exactly what upgrading buys them, before ever talking to a person.",
          image: {
            type: "image",
            src: img("section-consultation.png"),
            alt: "Free vs paid consultation comparison table",
          },
        },
        {
          type: "text-image-row",
          heading: "The mobile experience",
          body: "Not a shrunk desktop layout — the booking flow was designed mobile-first, since most clinic owners find the site from a phone.",
          image: {
            type: "image",
            src: img("mobile-hero.png"),
            alt: "Ai Denta homepage on mobile",
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
              id: "trust-before-pitch",
              challenge:
                "Dental clinic owners are a skeptical audience — most have already paid a marketer who overpromised.",
              solution:
                "Led with credentials and a low-commitment free consultation before any hard offer, and let a direct comparison table make the paid tier's case on its own.",
              outcome:
                "The booking flow reads as an obvious next step, not a sales pitch.",
            },
          ],
        },
      ],
    },
    ar: {
      name: "آي دنتا",
      tagline: "نمّي عيادتك عبر نظام، لا تخمين.",
      role: "تصميم وتطوير الواجهة الأمامية",
      summary:
        "موقع تسويق نمو لفريق من أطباء أسنان مرخّصين يديرون أيضًا الإعلانات المدفوعة والمحتوى — مبني ليقنع أصحاب العيادات اللي جرّبوا مسوّقين عاديين قبل كده.",
      result:
        "موقع مبني بالكامل حول مسار تحويل واحد — حجز مكالمة — وكل قسم فيه (إثبات، مقارنة، مغناطيس عملاء) مصمم ليزيل أي سبب للرفض.",
      tags: ["تسويق صحي", "موقع تحويل"],
      highlights: [
        "جدول مقارنة بين الاستشارة المجانية والمدفوعة مصمم لإقناع المترددين",
        "مسار كتاب إلكتروني كمغناطيس عملاء يغذي قمع الحجز",
        "قسم إثبات أعمال مبني على محتوى عملاء حقيقي لا شهادات جاهزة",
      ],
      previewSequence: {
        images: [
          {
            type: "image",
            src: img("section-hero.png"),
            alt: "الصفحة الرئيسية لآي دنتا بالفيديو والعنوان",
          },
          {
            type: "image",
            src: img("section-consultation.png"),
            alt: "قسم مقارنة الاستشارات في آي دنتا",
          },
        ],
        identityLine: "نمّي عيادتك عبر نظام، لا تخمين.",
      },
      blocks: [
        {
          type: "text-image-row",
          heading: "إثبات، لا وعود",
          body: "نقطة التميّز كانت في التكليف نفسه: فريق من أطباء أسنان مرخّصين يمارسون التسويق، لا مسوّقين يخمّنون مجالًا. الموقع كان لازم يبيع هذه المصداقية قبل أي خدمة.",
          image: {
            type: "image",
            src: img("section-portfolio.png"),
            alt: "قسم إثبات الأعمال في آي دنتا",
          },
        },
        {
          type: "text-image-row",
          heading: "اللي بيعملوه فعليًا",
          body: "المحتوى والإعلانات المدفوعة والتحويل، كل واحدة خدمة مستقلة وواضحة — لا عرض تسويقي غامض واحد.",
          image: {
            type: "image",
            src: img("section-services.png"),
            alt: "قسم الخدمات في آي دنتا",
          },
        },
        {
          type: "text-image-row",
          heading: "جدول المقارنة يقوم بأصعب جزء في الإقناع",
          body: "جدول مباشر بين المجاني والمدفوع يخلي صاحب العيادة المتردد يشوف بالظبط إيه اللي هيكسبه، قبل ما يتكلم مع حد أصلًا.",
          image: {
            type: "image",
            src: img("section-consultation.png"),
            alt: "جدول مقارنة الاستشارة المجانية والمدفوعة",
          },
        },
        {
          type: "text-image-row",
          heading: "تجربة الموبايل",
          body: "مش تصميم مصغّر من الديسكتوب — مسار الحجز اتصمم أصلًا للموبايل، لأن أغلب أصحاب العيادات بيوصلوا للموقع من التليفون.",
          image: {
            type: "image",
            src: img("mobile-hero.png"),
            alt: "الصفحة الرئيسية لآي دنتا على الموبايل",
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
              id: "trust-before-pitch",
              challenge:
                "أصحاب عيادات الأسنان جمهور متشكك — أغلبهم دفع من قبل لمسوّق وعد بأكثر مما حقق.",
              solution:
                "قدّمنا المصداقية والاستشارة المجانية منخفضة الالتزام قبل أي عرض قوي، وخلّينا جدول المقارنة يقنع بمزايا الباقة المدفوعة بنفسه.",
              outcome: "مسار الحجز بيبان كخطوة طبيعية تالية، مش عرض بيع.",
            },
          ],
        },
      ],
    },
  },
};
