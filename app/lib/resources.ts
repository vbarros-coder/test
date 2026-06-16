export type Resource = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readingTime: string;
  accent: string;
};

// Served via /api/resources. In a real app this would come from a CMS or DB.
export const resources: Resource[] = [
  {
    slug: "grounding-when-anxiety-rises",
    title: "Grounding techniques for when anxiety rises",
    category: "Anxiety",
    excerpt:
      "Five sensory exercises you can use anywhere to bring yourself back to the present moment.",
    readingTime: "4 min read",
    accent: "#7c9a7e",
  },
  {
    slug: "building-a-support-circle",
    title: "How to build a support circle that actually helps",
    category: "Community",
    excerpt:
      "Connection is medicine. A gentle guide to finding and nurturing the people who get it.",
    readingTime: "6 min read",
    accent: "#9a8c7c",
  },
  {
    slug: "rest-is-not-a-reward",
    title: "Rest is not a reward you have to earn",
    category: "Burnout",
    excerpt:
      "Unlearning hustle culture and giving yourself permission to slow down without guilt.",
    readingTime: "5 min read",
    accent: "#7c8c9a",
  },
  {
    slug: "talking-to-someone-who-is-struggling",
    title: "What to say to someone who is struggling",
    category: "Supporting others",
    excerpt:
      "You don't need the perfect words. Here is how to show up with presence, not solutions.",
    readingTime: "5 min read",
    accent: "#8c7c9a",
  },
  {
    slug: "small-mornings-big-difference",
    title: "Small mornings, big difference",
    category: "Habits",
    excerpt:
      "Tiny, sustainable rituals that protect your mental health before the day takes over.",
    readingTime: "3 min read",
    accent: "#9a937c",
  },
  {
    slug: "therapy-is-not-the-only-path",
    title: "Therapy helps — and it isn't the only path",
    category: "Recovery",
    excerpt:
      "A compassionate look at the many shapes healing can take, on your own timeline.",
    readingTime: "7 min read",
    accent: "#7c9a91",
  },
];
