export type VisualKind =
  "signal" | "graph" | "pose" | "model" | "network" | "neutral";
export interface SystemStage {
  label: string;
  detail: string;
  status?: "current" | "planned";
}
export interface Project {
  slug: string;
  title: string;
  year: string;
  kind: string;
  role: string;
  status: string;
  summary: string;
  outcome: string;
  stack: string[];
  visual: VisualKind;
  featured: boolean;
  study?: boolean;
  publicArchive?: boolean;
  coverImage?: string;
  demo?: string;
  github?: string;
  context: string;
  contribution: string[];
  decisions: { title: string; detail: string }[];
  system?: { summary: string; stages: SystemStage[] };
  reflection: string;
}
export interface Experience {
  organization: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  skills: string[];
}
