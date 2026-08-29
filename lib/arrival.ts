export const ARRIVAL_HERO = {
  breadcrumb: ["02", "The Experience", "The Arrival"],
  title: "The Arrival",
  subhead: ["The Experience Begins", "Before the First Course."],
  body: [
    "From the moment you step into our world,",
    "every detail is intentional.",
    "Arrival is not an afterthought —",
    "it is the opening chapter of the story.",
  ],
  cta: "Watch the Film",
  ctaHref: "#arrival-film",
  image: "/images/arrival/hreobg.png",
  imageAlt: "A car pulling up to the Titanium Prime entrance at night",
} as const;

export const ARRIVAL_RAIL = ["01", "02", "03", "04", "05", "06"] as const;

export const ARRIVAL_JOURNEY = {
  label: "The Journey",
  headline: ["Intentional.", "Elevated.", "Unforgettable."],
  body: [
    "Every element of arrival is curated to shift",
    "your state of mind, setting the tone for",
    "what's to come.",
  ],
  cta: "Discover More",
  ctaHref: "#arrival-atmosphere",
  steps: [
    {
      num: "01",
      title: "The Approach",
      body: "The environment transitions you from the world outside into ours.",
      image: "/images/arrival/one.png",
    },
    {
      num: "02",
      title: "The Entrance",
      body: "A threshold designed to signal that you've arrived somewhere rare.",
      image: "/images/arrival/two.png",
    },
    {
      num: "03",
      title: "The Welcome",
      body: "Discreet. Personal. Effortless. You are recognised, not announced.",
      image: "/images/arrival/three.png",
    },
    {
      num: "04",
      title: "The Transition",
      body: "The world behind you disappears. The experience comes into focus.",
      image: "/images/arrival/four.png",
    },
  ],
} as const;

export const ARRIVAL_ATMOSPHERE = {
  label: "The Atmosphere",
  headline: ["Light.", "Shadow.", "Intention."],
  body: [
    "Lighting guides you.",
    "Architecture grounds you.",
    "Atmosphere surrounds you.",
    "Every sense is prepared for what's ahead.",
  ],
  cta: "Watch the Arrival",
  ctaHref: "#arrival-film",
  image: "/images/arrival/sectionnew.png",
  imageAlt: "A guest walking toward the entrance",
} as const;

export const ARRIVAL_QUOTE = {
  lines: ["The moment you arrive", "is the moment", "the story begins."],
  attribution: "Titanium Prime",
  image: "/images/arrival/ctasection.png",
  imageAlt: "Chandelier above the Titanium Prime dining room",
} as const;

export const ARRIVAL_CTA = {
  lines: ["This Isn't Just Arrival.", "It's the First Impression of Everything."],
  cta: "Join the Private List",
  ctaHref: "#newsletter",
  background: "/images/arrival/ctasectionnew.png",
} as const;
