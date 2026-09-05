/**
 * Per-project screenshot capture targets. Add a new project by adding an
 * entry here and a matching `npm run capture:<slug>` script in package.json
 * — the site itself never imports this file or Playwright.
 */
export const captureTargets = {
  "gabr-perfumes": {
    url: "https://gabr-perfumes.vercel.app/",
    viewport: { width: 1440, height: 900 },
    sections: [
      { name: "hero", scrollY: 0 },
      { name: "heritage", scrollY: 900 },
      { name: "shop-by-brand", scrollY: 1700 },
      { name: "curated-collections", scrollY: 2600 },
      { name: "layers-of-feeling", scrollY: 3400 },
      { name: "testimonials", scrollY: 4200 },
      { name: "footer", scrollY: 5400 },
    ],
    mobile: { width: 390, height: 844 },
    productDetail: {
      url: "https://gabr-perfumes.vercel.app/ar/shop/sapphire-leather",
    },
  },
  "thaj-abaya": {
    url: "https://thajabaya.com/",
    viewport: { width: 1440, height: 900 },
    sections: [
      { name: "hero", scrollY: 0 },
      { name: "collections", scrollY: 900 },
      { name: "pieces", scrollY: 1800 },
      { name: "story", scrollY: 2700 },
      { name: "footer", scrollY: 3600 },
    ],
    mobile: { width: 390, height: 844 },
  },
  "ai-denta": {
    url: "https://ai-denta.com/",
    viewport: { width: 1440, height: 900 },
    sections: [
      { name: "hero", scrollY: 0 },
      { name: "services", scrollY: 900 },
      { name: "consultation", scrollY: 1800 },
      { name: "portfolio", scrollY: 2700 },
      { name: "footer", scrollY: 3600 },
    ],
    mobile: { width: 390, height: 844 },
  },
  asma: {
    url: "https://www.xn--asma-dpa.com/",
    viewport: { width: 1440, height: 900 },
    sections: [
      { name: "hero", scrollY: 0 },
      { name: "products", scrollY: 900 },
      { name: "testimonials", scrollY: 1800 },
      { name: "footer", scrollY: 2700 },
    ],
    mobile: { width: 390, height: 844 },
  },
};
