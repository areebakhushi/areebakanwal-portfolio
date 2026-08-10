import bqVideo from "@/assets/bqspark.mp4.asset.json";
import bqPoster from "@/assets/bqspark.jpg.asset.json";
import travelVideo from "@/assets/travelsync.mp4.asset.json";
import travelPoster from "@/assets/travelsync.jpg.asset.json";
import workoutVideo from "@/assets/workout.mp4.asset.json";
import workoutPoster from "@/assets/workout.jpg.asset.json";
import spendVideo from "@/assets/spendwise.mp4.asset.json";
import spendPoster from "@/assets/spendwise.jpg.asset.json";
import littleVideo from "@/assets/littledream.mp4.asset.json";
import littlePoster from "@/assets/littledream.jpg.asset.json";
import countdownVideo from "@/assets/countdown.mp4.asset.json";
import countdownPoster from "@/assets/countdown.jpg.asset.json";
import iqraVideo from "@/assets/birthday-iqra.mp4.asset.json";
import iqraPoster from "@/assets/birthday-iqra.jpg.asset.json";
import weddingVideo from "@/assets/wedding.mp4.asset.json";
import weddingPoster from "@/assets/wedding.jpg.asset.json";
import rb1 from "@/assets/ratebridge-1.png.asset.json";
import rb2 from "@/assets/ratebridge-2.png.asset.json";
import rb3 from "@/assets/ratebridge-3.png.asset.json";
import rb4 from "@/assets/ratebridge-4.png.asset.json";
import rb5 from "@/assets/ratebridge-5.png.asset.json";
import rb6 from "@/assets/ratebridge-6.png.asset.json";
import rb7 from "@/assets/ratebridge-7.png.asset.json";
import rb8 from "@/assets/ratebridge-8.png.asset.json";
import rb9 from "@/assets/ratebridge-9.png.asset.json";
import codeChatImg from "@/assets/codechat.jpg.asset.json";

import zk1 from "@/assets/zikar-183503.png.asset.json";
import zk2 from "@/assets/zikar-183524.png.asset.json";
import zk3 from "@/assets/zikar-183546.png.asset.json";
import zk4 from "@/assets/zikar-183609.png.asset.json";
import wordpressImg from "@/assets/wordpress.jpg.asset.json";


export type Tone = "cyan" | "electric" | "magenta" | "gold" | "jade";

export type Layout =
  | "split"
  | "cinematic"
  | "asymmetric"
  | "centered"
  | "gallery"
  | "minimal"
  | "browser";

export type Media = {
  kind: "video" | "image";
  src: string;
  poster?: string;
  /** portrait phone capture vs wide composition */
  portrait?: boolean;
  caption?: string;
};

export type Project = {
  id: string;
  index: string;
  title: string;
  kicker: string;
  tagline: string;
  description: string;
  features: string[];
  tech: string[];
  role: string;
  tone: Tone;
  layout: Layout;
  media: Media[];
  badge?: string;
};

export const projects: Project[] = [
  {
    id: "bq-spark",
    index: "01",
    title: "BQ Spark",
    kicker: "Bano Qabil HPT Student Platform",
    tagline: "A whole cohort's learning journey, in one app.",
    description:
      "A student platform built for Bano Qabil High Performance Track students — industry placement tasks, a points and ranking system, curated learning resources, technology news and push notifications, with separate student and admin experiences.",
    features: [
      "Student & admin authentication",
      "Industry placement tasks with points",
      "Live leaderboard and ranks",
      "AI study assistant for Flutter & career questions",
      "Resource library — notes, videos, interview prep",
      "Push notifications with FCM",
    ],
    tech: ["Flutter", "Dart", "Firebase", "Firestore", "Firebase Auth", "FCM"],
    role: "Sole mobile developer — architecture, UI/UX, Firebase backend",
    tone: "jade",
    layout: "split",
    media: [{ kind: "video", src: bqVideo.url, poster: bqPoster.url, portrait: true }],
    badge: "Live demo recording",
  },
  {
    id: "ratebridge",
    index: "02",
    title: "RateBridge",
    kicker: "AI Construction Price Platform · Final Year Project",
    tagline: "Pricing intelligence for the construction supply chain.",
    description:
      "A B2B platform where suppliers publish construction material prices and buyers compare them with confidence. Gemini AI watches the price history and flags anomalies before a bad purchase happens.",
    features: [
      "Supplier listings, ratings and quality scores",
      "Side-by-side material price comparison",
      "Historical price trends",
      "Gemini AI anomaly detection & smart warnings",
      "Supplier and order management",
      "CEO-controlled subscription tiers",
    ],
    tech: ["Flutter", "Firebase", "Firestore", "Gemini AI"],
    role: "Final Year Project — product design, Flutter app, AI integration",
    tone: "gold",
    layout: "gallery",
    media: [
      
      { kind: "image", src: rb9.url, portrait: true, caption: "Supplier portal splash" },
      { kind: "image", src: rb1.url, portrait: true, caption: "Supplier login" },
      { kind: "image", src: rb2.url, portrait: true, caption: "Supplier sign-up" },
      { kind: "image", src: rb3.url, portrait: true, caption: "Account verification" },
      { kind: "image", src: rb4.url, portrait: true, caption: "Supplier dashboard" },
      { kind: "image", src: rb5.url, portrait: true, caption: "Add new material" },
      { kind: "image", src: rb6.url, portrait: true, caption: "Material catalogue" },
      { kind: "image", src: rb8.url, portrait: true, caption: "Edit material & pricing" },
      { kind: "image", src: rb7.url, portrait: true, caption: "Buyer feedback & ratings" },
    ],
    badge: "Final Year Project",
  },
  {
    id: "travelsync",
    index: "03",
    title: "TravelSync",
    kicker: "Smart Travel Planner",
    tagline: "Plan it, sync it, travel together.",
    description:
      "A travel companion that turns scattered plans into a shared itinerary — explore destinations, build day-by-day plans, check the weather and keep the whole group in one chat.",
    features: [
      "Trip planning & itinerary management",
      "Explore places and destinations",
      "Live weather via API",
      "Group chat for travel companions",
      "Firebase auth with cloud-synced trips",
    ],
    tech: ["Flutter", "Firebase Auth", "Firestore", "Weather API", "REST APIs"],
    role: "Design & full app development",
    tone: "cyan",
    layout: "asymmetric",
    media: [{ kind: "video", src: travelVideo.url, poster: travelPoster.url }],
  },
  {
    id: "fittrack",
    index: "04",
    title: "FitTrack Pro",
    kicker: "AI Fitness & Workout Planner",
    tagline: "Your training plan, written by AI, tracked by you.",
    description:
      "An AI-powered fitness app that builds weekly workout plans, manages an exercise library and turns every logged session into progress you can actually see.",
    features: [
      "AI-generated weekly workout plans",
      "Exercise library & custom routines",
      "Weekly training calendar",
      "Performance logging and body measurements",
      "Progress charts with fl_chart",
      "AI improvement tips and diet advice",
    ],
    tech: ["Flutter", "Firebase", "Provider", "OpenRouter AI", "fl_chart"],
    role: "Concept, UI/UX, Flutter development, AI prompt design",
    tone: "jade",
    layout: "centered",
    media: [{ kind: "video", src: workoutVideo.url, poster: workoutPoster.url }],
    badge: "Evolved from WorkoutPlanner",
  },
  {
    id: "spendwise",
    index: "05",
    title: "SpendWise",
    kicker: "Expense Tracker Pro · Offline-first finance",
    tagline: "Every rupee accounted for — with or without internet.",
    description:
      "A personal finance tracker that works entirely offline. Log income and expenses with categories, notes and dates, then read the month back as a clean visual summary.",
    features: [
      "Income and expense entries",
      "Categories, notes and dates",
      "Monthly balance & summary",
      "Pie chart spending breakdown",
      "100% offline local storage",
    ],
    tech: ["Flutter", "Dart", "Hive", "SQLite", "Provider", "fl_chart"],
    role: "Full design and development",
    tone: "electric",
    layout: "asymmetric",
    media: [{ kind: "video", src: spendVideo.url, poster: spendPoster.url, portrait: true }],
  },
  {
    id: "codechat",
    index: "06",
    title: "CodeChat AI",
    kicker: "AI Programming Assistant",
    tagline: "A chatbot that only wants to talk about code.",
    description:
      "A focused AI assistant for programmers — ask about Flutter, Dart, Python, JavaScript, Java or C/C++ and get explanations, debugging help and properly rendered code blocks. No sign-up, just answers.",
    features: [
      "Programming Q&A across 6+ languages",
      "Flutter & Dart specialist answers",
      "Code explanation and debugging help",
      "Syntax-highlighted code block rendering",
      "Suggested starter questions",
      "No authentication required",
    ],
    tech: ["Flutter", "Dart", "OpenRouter AI"],
    role: "Product idea, app development, AI integration",
    tone: "electric",
    layout: "split",
    media: [{ kind: "image", src: codeChatImg.url }],
  },
  {
    id: "zikar",
    index: "07",
    title: "Zikar & Tasbeeh Tracker",
    kicker: "Daily remembrance, quietly counted",
    tagline: "A calm, distraction-free counting space.",
    description:
      "A minimal Flutter app for tracking daily Zikar and Tasbeeh sessions — set a custom Zikar and target, tap to count, and watch the circular progress fill until the goal is reached.",
    features: [
      "Custom Zikar and target count",
      "Tap-to-count workspace",
      "Circular progress indicator",
      "Goal Reached animation",
      "Reset counter",
      "Persistent local storage",
    ],
    tech: ["Flutter", "Dart", "SQLite", "Hive"],
    role: "Full design and development",
    tone: "gold",
    layout: "gallery",
    media: [
      { kind: "image", src: zk1.url, portrait: true, caption: "Tasbeeh dashboard" },
      { kind: "image", src: zk2.url, portrait: true, caption: "Tap-to-count screen" },
      { kind: "image", src: zk3.url, portrait: true, caption: "Goal reached" },
      { kind: "image", src: zk4.url, portrait: true, caption: "Add new Zikar" },
    ],
  },
  {
    id: "little-dream",
    index: "08",
    title: "Little Dream",
    kicker: "Interactive Birthday Web Experiences",
    tagline: "Digital gifts you unwrap by scrolling.",
    description:
      "A family of interactive celebration websites — an unwrappable gift, a live countdown to the day, and a scrollytelling friendship timeline. Built with motion, confetti and hand-tuned typography rather than templates.",
    features: [
      "Tap-to-open animated gift reveal",
      "Live countdown with days / hours / minutes / seconds",
      "Scroll-driven story timeline",
      "Music and voice playback",
      "Particles, hearts, confetti and star fields",
      "Fully responsive, mobile-first",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Web Animations"],
    role: "Concept, copywriting, design and front-end build",
    tone: "magenta",
    layout: "gallery",
    media: [
      { kind: "video", src: littleVideo.url, poster: littlePoster.url, portrait: true, caption: "The gift reveal" },
      { kind: "video", src: countdownVideo.url, poster: countdownPoster.url, portrait: true, caption: "Countdown to her day" },
      { kind: "video", src: iqraVideo.url, poster: iqraPoster.url, portrait: true, caption: "Scrollytelling story" },
    ],
  },
  {
    id: "wedding-invite",
    index: "09",
    title: "Digital Wedding Invitation",
    kicker: "Cinematic invite web experience",
    tagline: "An invitation that unfolds like a short film.",
    description:
      "A dark, romantic single-page invitation: a chaptered love story, an event schedule for every ceremony, ambient music and falling petal motion — sent as a link instead of a card.",
    features: [
      "Chaptered scroll narrative",
      "Ceremony schedule with times and venues",
      "Ambient background music",
      "Petal and particle motion",
      "Elegant serif type system",
      "Mobile-first responsive layout",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Web Animations"],
    role: "Design and front-end development",
    tone: "magenta",
    layout: "centered",
    media: [{ kind: "video", src: weddingVideo.url, poster: weddingPoster.url, portrait: true }],
  },
  {
    id: "wordpress",
    index: "10",
    title: "WordPress Websites",
    kicker: "NexCraftStudio Internship",
    tagline: "Business sites, built to be handed over.",
    description:
      "Front-end and WordPress work delivered during an internship at NexCraftStudio — building responsive business websites, customising themes and templates, and writing the HTML, CSS, JavaScript and PHP behind them.",
    features: [
      "Responsive business websites",
      "WordPress theme customisation",
      "HTML / CSS / JavaScript front-end work",
      "PHP & XML template editing",
      "Cross-device QA",
    ],
    tech: ["WordPress", "HTML", "CSS", "JavaScript", "PHP", "XML"],
    role: "Frontend / Web Development Intern",
    tone: "cyan",
    layout: "browser",
    media: [{ kind: "image", src: wordpressImg.url }],
  },
];
