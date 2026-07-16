export type Tone = "blue" | "green" | "yellow" | "red";

const pastelBg: Record<Tone, string> = {
  blue: "bg-bwai-pastel-blue",
  green: "bg-bwai-pastel-green",
  yellow: "bg-bwai-pastel-yellow",
  red: "bg-bwai-pastel-red",
};

const solidBg: Record<Tone, string> = {
  blue: "bg-bwai-blue",
  green: "bg-bwai-green",
  yellow: "bg-bwai-yellow",
  red: "bg-bwai-red",
};

const solidText: Record<Tone, string> = {
  blue: "text-bwai-blue",
  green: "text-bwai-green",
  yellow: "text-bwai-yellow",
  red: "text-bwai-red",
};

export function toneToBg(tone: Tone) {
  return pastelBg[tone];
}

export function toneToAccent(tone: Tone) {
  return solidBg[tone];
}

export function toneToText(tone: Tone) {
  return solidText[tone];
}
