export const ABOUT_HERO = {
  label: "About Us",
  headline: ["More Than", "Dining.", "A Movement."],
  body: "Titanium Prime is the intersection of culinary mastery, design, entertainment, and culture. We exist to create experiences that resonate long after the last moment.",
  image: "/images/about/herobg.png",
  imageAlt: "A guest walking through the Titanium Prime corridor",
} as const;

export const ABOUT_STORY_LABEL = "Our Story";

export const ABOUT_STORY = [
  {
    num: "01",
    title: "The Idea",
    paragraphs: [
      "It started with a simple belief — hospitality can be more than dining. It can be a force.",
      "A place where incredible food, iconic culture, and unforgettable energy come together to create something timeless.",
    ],
    image: "/images/about/sectiontwo.jfif",
    imageAlt: "Sketchbook and whiskey glass on a dark table",
  },
  {
    num: "02",
    title: "The Vision",
    paragraphs: [
      "We envisioned a world-class brand before a physical location.",
      "A brand that lives in film, in music, in fashion, and in the moments that shape culture.",
      "Titanium Prime was built to set a new standard — one that the world will feel long before it walks through our doors.",
    ],
    image: "/images/about/sectionthree.jfif",
    imageAlt: "City skyline at night",
  },
  {
    num: "03",
    title: "The Future",
    paragraphs: [
      "We are building more than a restaurant. We are building a legacy.",
      "Destinations. Experiences. Collaborations. A global movement that redefines what is possible.",
      "This is only the beginning. The best is yet to come.",
    ],
    image: "/images/about/sectionfour.jfif",
    imageAlt: "Earth horizon from space",
  },
] as const;

export const ABOUT_CTA = {
  headline: "The Story Continues.",
  sub: "Be Part of What's Next.",
  cta: "Join the Private List",
  ctaHref: "#newsletter",
  background: "",
  sideImage: "/images/about/cta.png",
  sideImageAlt: "Titanium Prime emblem",
} as const;

export const ABOUT_JOURNEY_LABEL = "Our Journey";

export const ABOUT_JOURNEY = [
  {
    title: "The Idea",
    lines: ["A vision is born.", "A spark with", "no limits."],
  },
  {
    title: "The Creation",
    lines: ["Years of planning,", "design, and building", "the foundation."],
  },
  {
    title: "The First Chapter",
    lines: [
      "The world is introduced",
      "to Titanium Prime",
      "through film and",
      "culture.",
    ],
  },
  {
    title: "The Future",
    lines: ["Destinations.", "Experiences.", "Legacy.", "Worldwide."],
  },
  {
    title: "The Legacy",
    lines: ["A name that", "defines a", "generation."],
  },
] as const;

export const ABOUT_MISSION = {
  label: "Our Mission",
  headline: [
    "We Don't Just Create",
    "Experiences.",
    "We Design Them To Be",
    "Remembered.",
  ],
  lines: [
    "Every element. Every detail. Every moment.",
    "Intentional. Refined. Uncompromising.",
    "This is Titanium Prime.",
  ],
  image: "/images/about/sectionmain.jfif",
  imageAlt: "Titanium Prime private lounge with framed portraits",
} as const;

export const ABOUT_VALUES = [
  {
    icon: "diamond" as const,
    title: "Excellence",
    lines: [
      "Relentless pursuit of",
      "the highest standard",
      "in everything we do.",
    ],
  },
  {
    icon: "flame" as const,
    title: "Passion",
    lines: ["We bring fire, soul", "and intensity to", "every detail."],
  },
  {
    icon: "circles" as const,
    title: "Authenticity",
    lines: ["Real people.", "Real moments.", "Real connections."],
  },
  {
    icon: "crown" as const,
    title: "Exclusivity",
    lines: ["Access is earned.", "Experiences are", "never ordinary."],
  },
  {
    icon: "star" as const,
    title: "Legacy",
    lines: ["We create moments", "that become part of", "culture, forever."],
  },
] as const;
