export const SERVICE_HERO = {
  breadcrumb: ["04", "The Experience", "The Service"],
  title: "The Service",
  subhead: ["Hospitality is in the details.", "We make them unforgettable."],
  body: [
    "Anticipation without intrusion.",
    "Discretion without distance.",
    "Personalization without limits.",
    "Every moment, considered.",
  ],
  image: "/images/service/herobg.png",
  imageAlt: "A maître d' in a tailored suit inside the dining room",
} as const;

export const SERVICE_PHILOSOPHY = {
  label: "Our Philosophy",
  headline: [
    "True luxury isn't loud.",
    "It knows when to appear",
    "and when to disappear.",
  ],
  pillars: [
    {
      icon: "eye" as const,
      title: "Anticipate",
      lines: [
        "We understand needs",
        "before they are spoken.",
        "Attention that feels natural,",
        "not staged.",
      ],
    },
    {
      icon: "lock" as const,
      title: "Respect",
      lines: [
        "Discretion is our language.",
        "Your privacy is protected.",
        "Your experience is",
        "sacred.",
      ],
    },
    {
      icon: "person" as const,
      title: "Personalize",
      lines: [
        "No two experiences",
        "are the same.",
        "Every detail is tailored",
        "to you.",
      ],
    },
    {
      icon: "compass" as const,
      title: "Deliver",
      lines: [
        "Flawless execution.",
        "Seamless moments.",
        "Excellence that leaves",
        "no trace, only impression.",
      ],
    },
  ],
} as const;

export const SERVICE_GRID = [
  {
    type: "image" as const,
    src: "/images/service/hospitiaity.png",
    alt: "Hands plating a dish tableside",
  },
  {
    type: "text" as const,
    title: "Hospitality",
    lines: [
      "Warm, intuitive and precise.",
      "We create comfort without",
      "interrupting the experience.",
      "",
      "Our presence is felt,",
      "never seen.",
    ],
  },
  {
    type: "image" as const,
    src: "/images/service/attention.png",
    alt: "Wine being poured into a glass",
  },
  {
    type: "text" as const,
    title: "Attention",
    lines: [
      "Every detail matters.",
      "From the temperature",
      "of the room to the notes",
      "of your drink.",
      "",
      "We don't miss a thing.",
    ],
  },
  {
    type: "text" as const,
    title: "Discretion",
    lines: [
      "Your conversations.",
      "Your celebrations.",
      "Your business.",
      "",
      "What happens here,",
      "stays here.",
    ],
  },
  {
    type: "image" as const,
    src: "/images/service/discreation.png",
    alt: "Chandelier above the private dining room",
  },
  {
    type: "text" as const,
    title: "Personal Connection",
    lines: [
      "We build genuine",
      "relationships with our",
      "guests, because you're",
      "not just a guest.",
      "",
      "You're our priority.",
    ],
  },
  {
    type: "image" as const,
    src: "/images/service/personalconnection.png",
    alt: "A host walking through the corridor",
  },
] as const;

export const SERVICE_QUOTE = {
  lines: [
    "The best service isn't about us.",
    "It's about making you feel",
    "like you belong.",
  ],
  attribution: "Titanium Prime",
  background: "/images/service/ctasection.png",
  emblem: "/images/logo/sidelogo.png",
} as const;

export const SERVICE_CTA = {
  headline: "Experience It Yourself.",
  sub: "Reserve Your Table.",
  cta: "Reserve Your Experience",
  ctaHref: "#newsletter",
  background: "/images/service/ctanewsetion.png",
} as const;
