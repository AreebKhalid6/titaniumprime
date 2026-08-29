export const ROOM_HERO = {
  breadcrumb: ["02", "The Experience", "The Room"],
  title: "The Room",
  subhead: "Steel. Stone. Light.",
  body: [
    "A space designed to be felt.",
    "Every material. Every detail.",
    "Built to create unforgettable",
    "moments that last long after",
    "the night ends.",
  ],
  cta: "Watch the Room Film",
  ctaHref: "#room-film",
  image: "/images/room/herobg.png",
  imageAlt: "The Titanium Prime dining room at night",
} as const;

export const ROOM_INTRO = {
  label: "Crafted With Intention",
  headline: [
    "Architecture that speaks without words.",
    "Atmosphere that stays with you.",
  ],
} as const;

export const ROOM_GRID = [
  {
    type: "text" as const,
    num: "01",
    title: "Dining Room",
    lines: [
      "The heart of the experience.",
      "Intimate yet powerful.",
      "Designed for connection,",
      "crafted for memory.",
    ],
    cta: "Discover",
    ctaHref: "#room-dining",
    span: 1,
  },
  {
    type: "image" as const,
    src: "/images/room/herobg.png",
    alt: "The main dining room",
    span: 3,
  },
  {
    type: "image" as const,
    src: "/images/room/thebar.png",
    alt: "The bar",
    span: 2,
  },
  {
    type: "text" as const,
    num: "02",
    title: "The Bar",
    lines: [
      "A stage for craftsmanship.",
      "Precision in every pour.",
      "Energy in every moment.",
    ],
    cta: "Discover",
    ctaHref: "#room-bar",
    span: 1,
  },
  {
    type: "image" as const,
    src: "/images/room/thebartwo.png",
    alt: "The bar seating area",
    span: 1,
  },
  {
    type: "text" as const,
    num: "03",
    title: "Private Rooms",
    lines: [
      "Discreet. Exclusive.",
      "Designed for those",
      "who value privacy",
      "and perfect detail.",
    ],
    cta: "Discover",
    ctaHref: "#room-private",
    span: 1,
  },
  {
    type: "image" as const,
    src: "/images/room/privaterooms.png",
    alt: "A private dining room",
    span: 1,
  },
  {
    type: "text" as const,
    num: "04",
    title: "Architecture",
    lines: [
      "Steel, stone, custom",
      "textures and tailored light.",
      "Every element chosen",
      "for a reason.",
    ],
    cta: "Discover",
    ctaHref: "#room-architecture",
    span: 1,
  },
  {
    type: "image" as const,
    src: "/images/room/architecture.png",
    alt: "Custom textured wall detail",
    span: 1,
  },
] as const;

export const ROOM_QUOTE = {
  lines: [
    "Great spaces don't just look good.",
    "They make you feel something.",
  ],
  attribution: "Titanium Prime",
  image: "/images/room/ctasection.png",
  imageAlt: "Detail of the staircase and stone wall",
} as const;

export const ROOM_STATS = [
  {
    icon: "diamond" as const,
    value: "5000+",
    lines: ["Sq Ft of", "Custom Design"],
  },
  { icon: "chair" as const, value: "120+", lines: ["Seats of", "Comfort"] },
  {
    icon: "glass" as const,
    value: "3",
    lines: ["Private Rooms", "Exclusively Yours"],
  },
  {
    icon: "layers" as const,
    value: "30+",
    lines: ["Premium Materials", "Sourced Globally"],
  },
  {
    icon: "compass" as const,
    value: "1",
    lines: ["Unforgettable", "Experience"],
  },
] as const;

export const ROOM_CTA = {
  label: "Built Different. For Those Who Expect More.",
  lines: ["This Is the Room.", "This Is Titanium Prime."],
  cta: "Join the Private List",
  ctaHref: "#newsletter",
  background: "/images/room/ctasectionnew.png",
} as const;
