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
    ["Python", "Streamlit", "Supabase PostgreSQL", "GitHub Actions"],
    {
      featured: true,
      visual: "signal",
      role: "Design & development",
      status: "Live",
      outcome:
        "Price, technical indicators, and news sentiment combined for eight technology tickers.",
      demo: "https://sentient-tracker-f6bj9pide5x4k2pc4mwd7s.streamlit.app/",
      github: "https://github.com/npysklyw/sentiment-terminal",
      context:
        "Market indicators and news sentiment often live in separate tools. This project collects yfinance market data and Alpha Vantage news sentiment for eight technology tickers, then presents the results in one dashboard.",
      contribution: [
        "Scheduled four weekday GitHub Actions ingestion runs",
        "Calculated RSI, MACD, short-term returns, and realized volatility",
        "Stored prices, sentiment, indicators, and signals in Supabase PostgreSQL",
        "Built Streamlit comparison, heatmap, and asset-detail views",
      ],
      decisions: [
        {
          title: "Keep inputs beside the signal",
          detail:
            "Price history, technical indicators, news sentiment, and extracted keywords remain available beside the composite output.",
        },
        {
          title: "Separate direction and confidence",
          detail:
            "The volume-adjusted signal weights news sentiment, five-day momentum, RSI, and MACD direction; confidence separately considers input strength, alignment, change, and volatility.",
        },
      ],
      system: {
        summary:
          "Four weekday GitHub Actions runs collect data for eight tickers, calculate indicators and sentiment signals, store the results in Supabase PostgreSQL, and feed a Streamlit dashboard.",
        stages: [
          { label: "Data sources", detail: "yfinance and Alpha Vantage" },
          {
            label: "Scheduled ingestion",
            detail: "Four weekday GitHub Actions runs",
          },
          {
            label: "Analysis",
            detail: "RSI, MACD, returns, volatility, sentiment",
          },
          {
            label: "Composite signal",
            detail: "Weighted direction and separate confidence",
          },
          { label: "Supabase", detail: "PostgreSQL persistence" },
          { label: "Dashboard", detail: "Streamlit and Plotly views" },
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
    "Offline-first mobile application",
    "An offline-first React Native army builder that turns complex roster data and game constraints into a structured, testable list-building workflow.",
    [
      "React Native",
      "TypeScript",
      "Expo",
      "JSON",
      "Offline persistence",
      "Automated testing",
    ],
    {
      featured: true,
      visual: "graph",
      role: "Product & engineering",
      status: "Active development",
      outcome:
        "An offline-first mobile army builder with tested roster calculations, warband validation, and source-backed catalogue data.",
      demo: "https://youtu.be/wost05aqULY",
      demoLabel: "Demo video",
      github: "https://github.com/npysklyw/mesbg-companion",
      context:
        "Manual army building involves more than adding point values. Rosters contain heroes, warbands, warriors, equipment, upgrades, capacity limits, mandatory leaders, and army-specific exceptions. The project converts that interconnected information into structured catalogue data and a mobile workflow that remains useful offline.",
      contribution: [
        "Built and refactored the React Native and Expo army-building interface",
        "Extracted roster calculations into pure TypeScript domain APIs",
        "Implemented reusable validation for warband capacity, mandatory leaders, General assignment, Independent Heroes, and bow limits",
        "Added offline saved-army persistence and catalogue reconciliation through LocalArmyRepository",
        "Replaced hand-maintained category mapping with exact lookup across active catalogues",
        "Added automated domain tests, builder-reachability checks, and source-catalogue auditing",
        "Corrected Army of Dale profiles and construction requirements against source material",
      ],
      decisions: [
        {
          title: "Separate domain logic from UI",
          detail:
            "Roster calculations and validation use pure TypeScript APIs rather than living inside React components. The rules can be tested independently while the interface evolves.",
        },
        {
          title: "Audit catalogue correctness",
          detail:
            "Exact catalogue lookup and automated audits surface unreachable armies, missing collections, zero-cost crew profiles, and other records that still need review.",
        },
        {
          title: "Reconcile stored armies",
          detail:
            "Saved drafts are matched against current catalogue entries so corrected requirements and selectable profiles can be applied without assuming old records remain valid forever.",
        },
      ],
      evidence: {
        title: "Army of Dale correction",
        detail:
          "Source review corrected hero and warrior profiles, represented mandatory selection separately from General assignment, moved the Windlance into the selectable warrior catalogue, and reconciled saved drafts with the corrected data.",
      },
      system: {
        summary:
          "Source-backed catalogue data flows through lookup and audit tooling into a tested TypeScript domain layer. React Native components consume that layer, while LocalArmyRepository keeps working and saved armies available offline.",
        stages: [
          {
            label: "JSON catalogues",
            detail: "Armies, heroes, warriors, wargear, and upgrades",
          },
          {
            label: "Catalogue lookup",
            detail: "Exact army resolution across active catalogues",
          },
          {
            label: "Structural audit",
            detail: "Reachability and suspicious-record checks",
          },
          {
            label: "TypeScript domain",
            detail: "Roster calculation and reusable validation",
          },
          {
            label: "React Native builder",
            detail: "UI renders and modifies domain state",
          },
          {
            label: "LocalArmyRepository",
            detail: "Offline drafts, saved armies, and reconciliation",
          },
        ],
      },
      verification: [
        "57 domain and storage tests passed",
        "TypeScript type checking passed",
        "ESLint completed with 0 errors and 14 warnings",
        "111 active armies resolved with 0 builder-reachability failures",
        "Source comparison retained 26 cases for human review",
        "Expo SDK 57 web export completed across 16 static routes",
      ],
      reflection:
        "The current focus is reliable local list building and catalogue correctness. Structural checks still flag unusual profiles and source-comparison cases for human review. A development-only FastAPI and PostgreSQL backup slice exists, but authentication, stronger saved-list migrations, and production-ready multi-device synchronization remain planned.",
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
export const getProject = (slug?: string) =>
  projects.find((p) => p.slug === slug);
