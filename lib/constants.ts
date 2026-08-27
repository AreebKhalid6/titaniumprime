export const COLORS = {
  black: "#050505",
  carbon: "#0D0D0D",
  darkGrey: "#171717",
  titanium: "#B8BDC5",
  metal: "#E5E7EB",
  champagne: "#B89B62",
  ember: "#5A1E16",
  body: "#A1A1A1",
} as const;

export const IMAGES = {
  hero: "/images/hero-bg.jpg",
  heroVideo: "/video/herobg.mp4",
  heroTexture: "/images/homesection/hero-texture.png",
  steakhouse:
    "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&q=80",
  private:
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
  nights:
    "https://images.unsplash.com/photo-1470229722913-7c0e35801e10?w=800&q=80",
  media:
    "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80",
  goods:
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
  experience: "/images/divisions/mainimage.png",
  film: "/images/divisions/mainimagetwo.png",
  nightsBg: "/images/homesection/culture.png",
  homeHeading: "/images/homesection/homeheadingtwo.png",
  steelHeading: "/images/homesection/steelheading.png",
  chapterHeading: "/images/homesection/chapterheading.png",
  gallery: [
    "https://images.unsplash.com/photo-1600891964593-f0a2a0a8b95f?w=600&q=80",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80",
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80",
    "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&q=80",
    "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&q=80",
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80",
  ],
} as const;

export const DIVISIONS = [
  {
    num: "01",
    title: "Steakhouse",
    lines: ["Primal ingredients.", "Precise execution.", "Fire at the core."],
    image: "/images/homesection/one/one.png",
  },
  {
    num: "02",
    title: "Private",
    lines: ["Discreet spaces.", "Personalized service.", "Access, reserved."],
    image: "/images/homesection/one/two.png",
  },
  {
    num: "03",
    title: "Nights",
    lines: [
      "Music. Culture. Moments",
      "that live beyond the",
      "final pour.",
    ],
    image: "/images/homesection/one/three.png",
  },
  {
    num: "04",
    title: "Media",
    lines: [
      "Films. Stories. Visual",
      "culture that moves",
      "the world.",
    ],
    image: "/images/homesection/one/four.png",
  },
  {
    num: "05",
    title: "Goods",
    lines: [
      "Objects of the",
      "standard. Designed",
      "with purpose.",
    ],
    image: "/images/homesection/one/five.png",
  },
] as const;

export const CITIES = [
  "Atlanta",
  "Miami",
  "Los Angeles",
  "New York",
  "Las Vegas",
] as const;

export const BENEFITS = [
  "Priority Access",
  "Private Dining",
  "Member Events",
  "Concierge Service",
] as const;

export const NIGHTS_FEATURES = [
  {
    title: "Priority Access",
    description: "Reservations, events and releases.",
    icon: "access",
  },
  {
    title: "Private Dining",
    description: "Rooms, chef's and tailored menus.",
    icon: "dining",
  },
  {
    title: "Member Events",
    description: "Exclusive dinners and experiences.",
    icon: "events",
  },
  {
    title: "Concierge Service",
    description: "Access beyond the table.",
    icon: "concierge",
  },
] as const;

export const FOOTER_LINKS = [
  "Steakhouse",
  "Private",
  "Nights",
  "Media",
  "Goods",
  "About",
  "Contact",
] as const;
