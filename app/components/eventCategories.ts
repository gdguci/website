import type { Tone } from "./tone";

export const eventCategories = [
  {
    slug: "workshops",
    title: "Technical Workshops",
    description:
      "Hands-on sessions covering coding, cloud, AI, and mobile development.",
    tone: "red" as Tone,
  },
  {
    slug: "professional",
    title: "Professional Development",
    description:
      "Resume reviews, mock interviews, and networking with industry mentors.",
    tone: "blue" as Tone,
  },
  {
    slug: "social",
    title: "Socials & Community",
    description:
      "Game nights, mixers, and study sessions to connect with fellow builders.",
    tone: "green" as Tone,
  },
  {
    slug: "speakers",
    title: "Speaker Series",
    description:
      "Tech talks from industry professionals across Google and beyond.",
    tone: "yellow" as Tone,
  },
  {
    slug: "hackathons",
    title: "Hackathons",
    description:
      "Collaborative building sprints where ideas turn into working demos.",
    tone: "red" as Tone,
  },
] as const;

export type EventCategorySlug = (typeof eventCategories)[number]["slug"];
