import type { Project } from "./types";
import algoCover from "../assets/img/photos/projectPhotos/algoGame/1.png";
import storeCover from "../assets/img/photos/projectPhotos/gameStore/1.png";
import unityCover from "../assets/img/photos/projectPhotos/unity/1.png";
import ambientCover from "../assets/img/photos/projectPhotos/ambLight/1.png";
import alzheimerCover from "../assets/img/photos/projectPhotos/alz/1.png";
const common = (
  slug: string,
  title: string,
  year: string,
  kind: string,
  summary: string,
  stack: string[],
  extra: Partial<Project> = {},
): Project => ({
  slug,
  title,
  year,
  kind,
  summary,
  stack,
  role: "Engineering",
  status: "Complete",
  outcome: summary,
  visual: "neutral",
  featured: false,
  context: summary,
  contribution: [],
  decisions: [],
  reflection: "Archived project record.",
  ...extra,
});
export const projects: Project[] = [
  common(
    "sentiment-terminal",
    "Sentiment Terminal",
    "2026",
    "Market intelligence",
    "A scheduled data pipeline combining price action and financial-news sentiment.",
    ["Python", "PostgreSQL", "Streamlit", "GitHub Actions"],
    {
      featured: true,
      visual: "signal",
      role: "Design & development",
      status: "Live",
      outcome:
        "Fragmented market inputs condensed into one inspectable signal.",
      demo: "https://sentient-tracker-f6bj9pide5x4k2pc4mwd7s.streamlit.app/",
      github: "https://github.com/npysklyw/sentiment-terminal",
      context:
        "Market indicators and news sentiment often live in separate tools. This project collects, normalizes, and presents both as a single explainable view without disguising uncertainty.",
      contribution: [
        "Designed scheduled ingestion",
        "Implemented technical indicators",
        "Modelled the Postgres layer",
        "Built dashboard views",
      ],
      decisions: [
        {
          title: "Make the score inspectable",
          detail:
            "Inputs remain visible rather than becoming an opaque recommendation.",
        },
        {
          title: "Separate direction and confidence",
          detail:
            "Signal direction and input agreement are communicated independently.",
        },
      ],
      system: {
        summary:
          "A scheduled pipeline turns market and news inputs into stored, inspectable dashboard outputs.",
        stages: [
          { label: "Data sources", detail: "Price and financial-news inputs" },
          { label: "Scheduled ingestion", detail: "GitHub Actions pipeline" },
          { label: "Analysis", detail: "Indicators and sentiment" },
          { label: "Composite signal", detail: "Direction and confidence" },
          { label: "Supabase", detail: "PostgreSQL storage" },
          { label: "Dashboard", detail: "Streamlit views" },
        ],
      },
      reflection:
        "Next: benchmark the signals and publish the scoring methodology.",
    },
  ),
  common(
    "mesbg-army-builder",
    "MESBG Army Builder",
    "2026",
    "Offline-first mobile system",
    "A cross-platform companion for constructing and managing tabletop armies.",
    ["React Native", "TypeScript", "FastAPI", "PostgreSQL"],
    {
      featured: true,
      visual: "graph",
      role: "Product & engineering",
      status: "In development",
      outcome: "Complex roster rules turned into a fast, portable workflow.",
      demo: "https://youtube.com/shorts/nFZo2IQNDMg",
      github: "https://github.com/npysklyw/mesbg-companion",
      context:
        "Manual army-list management is slow and error-prone. The product translates interconnected faction and unit rules into structured data and immediate feedback.",
      contribution: [
        "Designed the mobile interaction model",
        "Created the JSON-driven unit schema",
        "Implemented filtering and state tracking",
      ],
      decisions: [
        {
          title: "Local-first core",
          detail:
            "List construction works without a connection; sync remains an enhancement.",
        },
        {
          title: "Rules as data",
          detail:
            "Content is separated from presentation so armies can evolve independently.",
        },
      ],
      system: {
        summary:
          "The working product is local-first. Cloud synchronization is planned and is not presented as shipped.",
        stages: [
          {
            label: "React Native app",
            detail: "List building and in-game state",
          },
          { label: "Roster data", detail: "JSON-driven factions and units" },
          { label: "Local state", detail: "Filtering and unit tracking" },
          { label: "FastAPI", detail: "Cloud-sync service", status: "planned" },
          {
            label: "PostgreSQL",
            detail: "Persistent accounts and lists",
            status: "planned",
          },
        ],
      },
      reflection:
        "Next: formal roster validation before expanding cloud features.",
    },
  ),
  common(
    "exercise-correction",
    "Exercise Correction",
    "2022",
    "University capstone study",
    "A mobile prototype that evaluates exercise form from pose-estimation sequences.",
    ["Flutter", "Python", "Flask", "scikit-learn"],
    {
      study: true,
      visual: "pose",
      role: "Mobile & ML engineering",
      outcome:
        "An earlier study in pose capture, movement comparison, and mobile feedback.",
      demo: "https://www.youtube.com/watch?v=k6BvWMPDjgU",
      github: "https://github.com/axrios/Assignment4-Bigbase",
      context:
        "This university capstone explored whether pose keypoints could provide useful feedback on exercise form across mobile devices and a containerized service.",
      contribution: [
        "Built mobile features",
        "Integrated the inference service",
        "Compared sequence and tree-based approaches",
      ],
      decisions: [
        {
          title: "Model joint relationships",
          detail:
            "Joint-angle sequences focus analysis on movement rather than appearance.",
        },
      ],
      reflection:
        "Production use would require broader data and clinical validation.",
    },
  ),
  common(
    "enterprise-endgame",
    "Enterprise Endgame Evaluator",
    "2025",
    "Financial risk modelling",
    "A reproducible comparison of bankruptcy classifiers on imbalanced financial data.",
    ["Python", "scikit-learn", "Docker"],
    {
      visual: "model",
      role: "ML engineering",
      outcome:
        "Ninety-five inputs reduced to a focused, interpretable feature set.",
      demo: "https://drive.google.com/file/d/1hgNaGO0Crhm13hyRq0uI6Kxb3A0bBrIY/view?usp=sharing",
      context:
        "The study compares model families across more than 6,800 companies while accounting for a low bankruptcy base rate.",
      contribution: [
        "Built preprocessing and evaluation",
        "Applied resampling and feature selection",
        "Compared six model families",
      ],
      decisions: [
        {
          title: "Evaluate beyond accuracy",
          detail:
            "Precision, recall, and F1 accompany accuracy because the minority class is the central risk.",
        },
      ],
      reflection: "Next: temporal validation and probability calibration.",
    },
  ),
  common(
    "image-share",
    "ImageShare",
    "2023",
    "Distributed systems",
    "A decentralized peer-to-peer image discovery network with custom packet routing.",
    ["JavaScript", "Networking", "P2P"],
    {
      publicArchive: true,
      visual: "network",
      demo: "https://github.com/npysklyw/Computer_Network_Applications/tree/main/assignment_three",
    },
  ),
  common(
    "algo-learn",
    "AlgoLearn",
    "2022",
    "Interactive learning",
    "A game-based sorting visualizer with profiles and personal-best tracking.",
    ["React", "Flask", "Express"],
    {
      coverImage: algoCover,
      demo: "https://www.youtube.com/watch?v=sQ74pzV0IeM",
    },
  ),
  common(
    "game-manage",
    "Game Manage",
    "2021",
    "Database application",
    "Inventory, revenue, and sales tooling for a hypothetical game retailer.",
    ["React", "Express", "MySQL"],
    {
      coverImage: storeCover,
      github: "https://github.com/npysklyw/game-store-management",
    },
  ),
  common(
    "unity-rpg",
    "2D RPG in Unity",
    "2021",
    "Game system",
    "A complete three-level role-playing game with combat and progression.",
    ["C#", "Unity"],
    {
      coverImage: unityCover,
      github: "https://github.com/nipunaprs/SE2250Project",
    },
  ),
  common(
    "ambient-light",
    "Ambient Light",
    "2021",
    "Embedded prototype",
    "A low-level lighting prototype responding to temperature and season.",
    ["C", "Embedded systems"],
    {
      coverImage: ambientCover,
      github: "https://github.com/npysklyw/TemperateAmb",
    },
  ),
  common(
    "alzheimer-stage-prediction",
    "Alzheimer Stage Prediction",
    "2020",
    "ML research prototype",
    "A constrained research prototype applying transfer learning to MRI classification.",
    ["Keras", "Python", "Flask"],
    {
      coverImage: alzheimerCover,
      role: "Team lead",
      github: "https://github.com/npysklyw/alz-class",
      reflection: "Presented as a learning project, not a clinical tool.",
    },
  ),
];
export const featuredProjects = projects.filter((p) => p.featured);
export const earlierStudies = projects.filter((p) => p.study);
export const publicArchive = projects.filter((p) => p.publicArchive);
export const getProject = (slug?: string) =>
  projects.find((p) => p.slug === slug);
