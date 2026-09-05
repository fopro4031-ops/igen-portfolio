import type { Project } from "@/types/project";

const img = (name: string) => `/projects/asma/${name}`;

export const asma: Project = {
  slug: "asma",
  order: 4,
  year: 2024,
  category: "ecommerce",
  flavor: "luxury-commerce",
  presentation: "split-comparison",
  featuredOnHome: true,
  accentColor: "#7c3aed",

  techStack: [
    { name: "Next.js", category: "frontend" },
    { name: "React", category: "frontend" },
    { name: "Tailwind CSS", category: "styling" },
  ],

  links: [{ href: "https://www.xn--asma-dpa.com/", kind: "live" }],

  coverMedia: {
    type: "image",
    src: img("section-hero.png"),
    alt: "Asméa — homepage hero",
  },

  content: {
    en: {
      name: "Asméa",
      tagline: "Islamic elegance, expressed as a full commerce stack.",
      role: "Design & Frontend Development",
      summary:
        "A modest-fashion storefront built around a complete Egyptian commerce reality — cart, wishlist, accounts, WhatsApp ordering, and every local payment method a buyer actually expects.",
      result:
        "A full commerce flow — browse to checkout to WhatsApp follow-up — running in production with multiple EGP payment methods, not a demo storefront.",
      tags: ["Modest fashion", "Full commerce stack"],
      highlights: [
        "Complete cart, wishlist, and account flow, not just a product catalog",
        "WhatsApp ordering alongside card, Instapay, and cash-on-delivery",
        "Cultural and religious brand voice carried through every screen",
      ],
      previewSequence: {
        images: [
          {
            type: "image",
            src: img("section-hero.png"),
            alt: "Asméa homepage hero with product carousel",
          },
          {
            type: "image",
            src: img("section-products.png"),
            alt: "Asméa product listing section",
          },
        ],
        identityLine: "Islamic elegance, expressed as a full commerce stack.",
      },
      blocks: [
        {
          type: "text-image-row",
          heading: "The flow is the differentiator",
          body: "Asméa's edge isn't a single hero shot — it's a complete, working commerce flow: browsing, wishlist, cart, checkout, and a WhatsApp follow-up most Egyptian buyers still expect.",
          image: {
            type: "image",
            src: img("section-products.png"),
            alt: "Asméa product grid",
          },
        },
        {
          type: "text-image-row",
          heading: "Trust, carried through customer voice",
          body: "Testimonials sit close to the decision point, not on a separate page — real customer language instead of stock photography.",
          image: {
            type: "image",
            src: img("section-testimonials.png"),
            alt: "Asméa testimonials section",
          },
        },
        {
          type: "text-image-row",
          heading: "The mobile experience",
          body: "Not a shrunk desktop layout — most Egyptian shoppers arrive on a phone, so the checkout was built mobile-first.",
          image: {
            type: "image",
            src: img("mobile-hero.png"),
            alt: "Asméa homepage on mobile",
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
              id: "local-payment-reality",
              challenge:
                "Egyptian buyers expect payment options — Instapay, Vodafone Cash, cash-on-delivery, WhatsApp confirmation — that most storefront templates don't plan for.",
              solution:
                "Built the checkout and order flow around those methods from the start, instead of bolting them onto a card-only default.",
              outcome:
                "A checkout that matches how buyers in this market actually pay, not how a template assumes they do.",
            },
          ],
        },
      ],
    },
    ar: {
      name: "أسماء",
      tagline: "أناقة إسلامية، في منظومة تجارة كاملة.",
      role: "تصميم وتطوير الواجهة الأمامية",
      summary:
        "متجر أزياء محتشمة مبني حول واقع تجارة إلكترونية مصرية كاملة — سلة، مفضلة، حسابات، طلب عبر واتساب، وكل طريقة دفع محلية يتوقعها المشتري فعليًا.",
      result:
        "مسار تجاري كامل — من التصفح للدفع لمتابعة واتساب — يعمل فعليًا بعدة طرق دفع بالجنيه المصري، لا مجرد متجر تجريبي.",
      tags: ["أزياء محتشمة", "منظومة تجارة كاملة"],
      highlights: [
        "سلة ومفضلة وحساب مستخدم كامل، لا مجرد كتالوج منتجات",
        "الطلب عبر واتساب بجانب البطاقة وInstapay والدفع عند الاستلام",
        "صوت العلامة الثقافي والديني حاضر في كل شاشة",
      ],
      previewSequence: {
        images: [
          {
            type: "image",
            src: img("section-hero.png"),
            alt: "الصفحة الرئيسية لأسماء مع عرض المنتجات",
          },
          {
            type: "image",
            src: img("section-products.png"),
            alt: "قسم عرض منتجات أسماء",
          },
        ],
        identityLine: "أناقة إسلامية، في منظومة تجارة كاملة.",
      },
      blocks: [
        {
          type: "text-image-row",
          heading: "التميّز في المسار نفسه",
          body: "ميزة أسماء مش صورة واحدة قوية — هي مسار تجاري كامل وشغال: تصفّح، مفضلة، سلة، دفع، ومتابعة عبر واتساب زي ما لسه بيتوقعه أغلب المشترين في مصر.",
          image: {
            type: "image",
            src: img("section-products.png"),
            alt: "شبكة منتجات أسماء",
          },
        },
        {
          type: "text-image-row",
          heading: "الثقة تُبنى بصوت العميل",
          body: "آراء العملاء موجودة قريبة من لحظة القرار، مش في صفحة منفصلة — كلام عملاء حقيقي بدل صور جاهزة.",
          image: {
            type: "image",
            src: img("section-testimonials.png"),
            alt: "قسم آراء العملاء في أسماء",
          },
        },
        {
          type: "text-image-row",
          heading: "تجربة الموبايل",
          body: "مش تصميم مصغّر من الديسكتوب — أغلب المشترين في مصر بيوصلوا من التليفون، فمسار الدفع اتصمم أصلًا للموبايل.",
          image: {
            type: "image",
            src: img("mobile-hero.png"),
            alt: "الصفحة الرئيسية لأسماء على الموبايل",
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
              id: "local-payment-reality",
              challenge:
                "المشتري المصري بيتوقع طرق دفع — Instapay، فودافون كاش، الدفع عند الاستلام، تأكيد عبر واتساب — مش كل قالب متجر بيخطط لها.",
              solution:
                "بنينا مسار الدفع والطلب حول الطرق دي من البداية، بدل ما نضيفها لاحقًا فوق نظام دفع بالبطاقة فقط.",
              outcome: "تجربة دفع تطابق طريقة شراء الناس فعليًا في السوق ده، مش افتراض جاهز من قالب.",
            },
          ],
        },
      ],
    },
  },
};
