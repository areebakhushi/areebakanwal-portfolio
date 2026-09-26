import bqVideo from "@/assets/bqspark.mp4.asset.json";
import bqPoster from "@/assets/bqspark.jpg.asset.json";
import travelVideo from "@/assets/travelsync.mp4.asset.json";
import travelPoster from "@/assets/travelsync.jpg.asset.json";
import ts1 from "@/assets/travelsync-1.jpg.asset.json";
import ts2 from "@/assets/travelsync-2.jpg.asset.json";
import ts3 from "@/assets/travelsync-3.jpg.asset.json";
import ts4 from "@/assets/travelsync-4.jpg.asset.json";
import ts5 from "@/assets/travelsync-5.jpg.asset.json";
import ts6 from "@/assets/travelsync-6.jpg.asset.json";
import ts7 from "@/assets/travelsync-7.jpg.asset.json";
import ts8 from "@/assets/travelsync-8.jpg.asset.json";
import workoutVideo from "@/assets/workout.mp4.asset.json";
import workoutPoster from "@/assets/workout.jpg.asset.json";
import spendVideo from "@/assets/spendwise.mp4.asset.json";
import spendPoster from "@/assets/spendwise.jpg.asset.json";
import littleVideo from "@/assets/littledream.mp4.asset.json";
import littlePoster from "@/assets/littledream.jpg.asset.json";
import countdownVideo2 from "@/assets/countdown-2.mp4.asset.json";
import countdownPoster2 from "@/assets/countdown-2.jpg.asset.json";
import iqraVideo from "@/assets/birthday-iqra.mp4.asset.json";
import iqraPoster from "@/assets/birthday-iqra.jpg.asset.json";
import weddingVideo from "@/assets/wedding.mp4.asset.json";
import weddingPoster from "@/assets/wedding.jpg.asset.json";
import wd1 from "@/assets/wedding-1.jpg.asset.json";
import wd2 from "@/assets/wedding-2.jpg.asset.json";
import wd3 from "@/assets/wedding-3.jpg.asset.json";
import wd4 from "@/assets/wedding-4.jpg.asset.json";
import wd5 from "@/assets/wedding-5.jpg.asset.json";
import wd6 from "@/assets/wedding-6.jpg.asset.json";
import rb1 from "@/assets/rb-new-1.jpg.asset.json";
import rb2 from "@/assets/rb-new-2.jpg.asset.json";
import rb3 from "@/assets/rb-new-3.jpg.asset.json";
import rb4 from "@/assets/rb-new-4.jpg.asset.json";
import rb5 from "@/assets/rb-new-5.jpg.asset.json";
import rb6 from "@/assets/rb-new-6.jpg.asset.json";
import rb7 from "@/assets/rb-new-7.jpg.asset.json";
import rb8 from "@/assets/rb-new-8.jpg.asset.json";
import rb9 from "@/assets/rb-new-9.jpg.asset.json";
import rb10 from "@/assets/rb-new-10.jpg.asset.json";
import cc1 from "@/assets/codechat-1.png.asset.json";
import cc2 from "@/assets/codechat-2.png.asset.json";

import wordpressImg from "@/assets/wordpress-nexcraft.jpg.asset.json";
import storyVideo from "@/assets/storybook-demo.mp4.asset.json";
import storyPoster from "@/assets/storybook-demo.jpg.asset.json";
import story1 from "@/assets/storybook-1.png.asset.json";
import story2 from "@/assets/storybook-2.png.asset.json";
import story3 from "@/assets/storybook-3.png.asset.json";
import ft1 from "@/assets/fittrack-115510.png.asset.json";
import ft2 from "@/assets/fittrack-115556.png.asset.json";
import ft3 from "@/assets/fittrack-115612.png.asset.json";
import ft4 from "@/assets/fittrack-115647.png.asset.json";
import ft5 from "@/assets/fittrack-115714.png.asset.json";
import ft6 from "@/assets/fittrack-115734.png.asset.json";
import ft7 from "@/assets/fittrack-115801.png.asset.json";
import js1 from "@/assets/js-1.jpg.asset.json";
import js2 from "@/assets/js-2.jpg.asset.json";
import js3 from "@/assets/js-3.jpg.asset.json";
import js4 from "@/assets/js-4.jpg.asset.json";
import js5 from "@/assets/js-5.jpg.asset.json";
import js6 from "@/assets/js-6.jpg.asset.json";
import js7 from "@/assets/js-7.jpg.asset.json";
import js8 from "@/assets/js-8.jpg.asset.json";
import js9 from "@/assets/js-9.jpg.asset.json";
import js10 from "@/assets/js-10.jpg.asset.json";
import js11 from "@/assets/js-11.jpg.asset.json";
import js12 from "@/assets/js-12.jpg.asset.json";
import mb1 from "@/assets/mybank-1.jpg.asset.json";
import mb2 from "@/assets/mybank-2.jpg.asset.json";
import mb3 from "@/assets/mybank-3.jpg.asset.json";
import mb4 from "@/assets/mybank-4.jpg.asset.json";
import mb5 from "@/assets/mybank-5.jpg.asset.json";
import mb6 from "@/assets/mybank-6.jpg.asset.json";
import mb7 from "@/assets/mybank-7.jpg.asset.json";
import mb8 from "@/assets/mybank-8.jpg.asset.json";
import re1 from "@/assets/re-1.jpg.asset.json";
import re2 from "@/assets/re-2.jpg.asset.json";
import re3 from "@/assets/re-3.jpg.asset.json";
import re4 from "@/assets/re-4.jpg.asset.json";
import re5 from "@/assets/re-5.jpg.asset.json";
import re6 from "@/assets/re-6.jpg.asset.json";
import re7 from "@/assets/re-7.jpg.asset.json";
import re8 from "@/assets/re-8.jpg.asset.json";
import re9 from "@/assets/re-9.jpg.asset.json";
import re10 from "@/assets/re-10.jpg.asset.json";
import re11 from "@/assets/re-11.jpg.asset.json";



export type Tone = "cyan" | "electric" | "magenta" | "gold" | "jade";

export type Layout =
  | "split"
  | "cinematic"
  | "asymmetric"
  | "centered"
  | "gallery"
  | "minimal"
  | "browser"
  | "story";

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
    kicker: "Multi-Tenant B2B Construction Marketplace · Final Year Project",
    tagline: "Pricing intelligence for the construction supply chain.",
    description:
      "A Flutter-based multi-tenant B2B construction-material marketplace and price comparison platform connecting companies, suppliers, and field users with RFQs, orders, payments, chat, AI-powered features, and real-time Firebase infrastructure — with a companion web-based Admin Panel and English, Urdu & Roman Urdu localization for the Pakistani market.",
    features: [
      "Multi-tenant architecture — companies, suppliers & field users with role-based access",
      "Material price comparison across categories: cement, steel, bricks, sand, tiles & more",
      "RFQ system — companies request quotations, suppliers respond with quotes",
      "Orders, payments & a 2% commission model — Stripe Test Mode, COD, Easypaisa, JazzCash, bank transfer with payment-proof verification",
      "In-app chat & Cloudinary-powered media sharing",
      "AI features — OCR document extraction, Gemini 1.5 Flash & Groq / Llama 3.3",
      "KYC verification workflows with OCR + AI",
      "Real-time notifications with Firebase Cloud Messaging",
      "Subscription plans — Free, Basic & Premium tiers",
      "Web-based Admin Panel — analytics, payment queue, audit logs & platform monitoring",
      "Localization — English, Urdu & Roman Urdu",
    ],
    tech: [
      "Flutter",
      "Dart",
      "Firebase Auth",
      "Cloud Firestore",
      "Cloud Functions",
      "FCM",
      "Firebase Storage",
      "Dynamic Links",
      "Provider",
      "MVVM",
      "go_router",
      "REST APIs",
      "Cloudinary",
      "Gemini 1.5 Flash",
      "Groq / Llama 3.3",
      "OCR",
      "Stripe",
    ],
    role: "Final Year Project — product design, Flutter app, AI integration",
    tone: "gold",
    layout: "gallery",
    media: [
      { kind: "image", src: rb1.url, portrait: true, caption: "Welcome & sign in" },
      { kind: "image", src: rb2.url, portrait: true, caption: "Admin dashboard — platform overview" },
      { kind: "image", src: rb3.url, portrait: true, caption: "Admin payment queue & verification" },
      { kind: "image", src: rb4.url, portrait: true, caption: "Admin commission ledger" },
      { kind: "image", src: rb5.url, portrait: true, caption: "CEO dashboard & company invite code" },
      { kind: "image", src: rb6.url, portrait: true, caption: "Supplier hub & marketplace" },
      { kind: "image", src: rb7.url, portrait: true, caption: "Company orders & tracking" },
      { kind: "image", src: rb8.url, portrait: true, caption: "Supplier earnings & performance" },
      { kind: "image", src: rb9.url, portrait: true, caption: "In-app business chat" },
      { kind: "image", src: rb10.url, portrait: true, caption: "Earnings & commissions" },
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
    layout: "story",
    media: [
      { kind: "video", src: travelVideo.url, poster: travelPoster.url },
      { kind: "image", src: ts1.url, portrait: true, caption: "Sign in" },
      { kind: "image", src: ts2.url, portrait: true, caption: "My expeditions" },
      { kind: "image", src: ts3.url, portrait: true, caption: "Create a trip" },
      { kind: "image", src: ts4.url, portrait: true, caption: "Trip detail with live weather" },
      { kind: "image", src: ts5.url, portrait: true, caption: "Trip group chat" },
      { kind: "image", src: ts6.url, portrait: true, caption: "Travel network — friends" },
      { kind: "image", src: ts7.url, portrait: true, caption: "Find travel companions" },
      { kind: "image", src: ts8.url, portrait: true, caption: "Profile & account" },
    ],
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
    layout: "story",
    media: [
      { kind: "video", src: workoutVideo.url, poster: workoutPoster.url },
      { kind: "image", src: ft1.url, portrait: true, caption: "Login" },
      { kind: "image", src: ft2.url, portrait: true, caption: "Dashboard & protocols" },
      { kind: "image", src: ft3.url, portrait: true, caption: "Active set tracking" },
      { kind: "image", src: ft4.url, portrait: true, caption: "Exercise cloud" },
      { kind: "image", src: ft5.url, portrait: true, caption: "AI plan architect" },
      { kind: "image", src: ft6.url, portrait: true, caption: "Biological profile" },
      { kind: "image", src: ft7.url, portrait: true, caption: "Routine builder" },
    ],
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
    layout: "gallery",
    media: [
      { kind: "image", src: cc1.url, portrait: true, caption: "Starter questions" },
      { kind: "image", src: cc2.url, portrait: true, caption: "Code answer with highlighting" },
    ],
  },
  {
    id: "little-dream",
    index: "08",
    title: "Little Dream",
    kicker: "Specially designed birthday website",
    tagline: "A soft pink digital gift you unwrap by scrolling.",
    description:
      "A one-of-a-kind celebration website built for one person only — a blush-pink world with an animated gift that opens on tap, floating hearts and hand-written messages. Not a template: every colour, line of copy and animation was designed around her.",
    features: [
      "Tap-to-open animated gift reveal",
      "Light pink pastel theme and hand-tuned typography",
      "Floating hearts, sparkles and confetti",
      "Personal messages revealed on scroll",
      "Background music",
      "Fully responsive, mobile-first",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Web Animations"],
    role: "Concept, copywriting, design and front-end build",
    tone: "magenta",
    layout: "story",
    media: [
      { kind: "video", src: littleVideo.url, poster: littlePoster.url, portrait: true, caption: "The gift reveal" },
    ],
  },
  {
    id: "birthday-countdown",
    index: "09",
    title: "Birthday Countdown",
    kicker: "Specially designed countdown website",
    tagline: "A live countdown to someone's big day.",
    description:
      "A dedicated countdown website that ticks down to the exact moment of her birthday, then bursts into a celebration screen. Designed as a surprise link sent days in advance so the excitement builds every time she opens it.",
    features: [
      "Live countdown in days / hours / minutes / seconds",
      "Celebration reveal when the timer hits zero",
      "Animated star field and particle background",
      "Personalised greeting and name",
      "Music playback",
      "Fully responsive, mobile-first",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Web Animations"],
    role: "Concept, design and front-end build",
    tone: "magenta",
    layout: "story",
    media: [
      { kind: "video", src: countdownVideo2.url, poster: countdownPoster2.url, portrait: true, caption: "Countdown to her day" },
    ],
  },
  {
    id: "birthday-interactive",
    index: "10",
    title: "Interactive Birthday Website",
    kicker: "Specially designed friendship story website",
    tagline: "A scrollytelling birthday letter for a best friend.",
    description:
      "An interactive birthday website that tells a friendship story chapter by chapter as you scroll — memories, inside jokes and a voice note at the end. Written and built for one specific person, as a gift that lives at a link.",
    features: [
      "Scroll-driven story timeline",
      "Chaptered memories with photos and captions",
      "Voice note and music playback",
      "Interactive surprises and confetti moments",
      "Custom illustrated type treatment",
      "Fully responsive, mobile-first",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Web Animations"],
    role: "Concept, copywriting, design and front-end build",
    tone: "magenta",
    layout: "story",
    media: [
      { kind: "video", src: iqraVideo.url, poster: iqraPoster.url, portrait: true, caption: "Scrollytelling story" },
    ],
  },

  {
    id: "wedding-invite",
    index: "11",
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
    layout: "story",
    media: [
      { kind: "video", src: weddingVideo.url, poster: weddingPoster.url, portrait: true },
      { kind: "image", src: wd1.url, portrait: true, caption: "Hero — Sarah & Ahmed" },
      { kind: "image", src: wd2.url, portrait: true, caption: "Our love story" },
      { kind: "image", src: wd3.url, portrait: true, caption: "Story chapters" },
      { kind: "image", src: wd4.url, portrait: true, caption: "Travel & venue map" },
      { kind: "image", src: wd5.url, portrait: true, caption: "RSVP form" },
      { kind: "image", src: wd6.url, portrait: true, caption: "Eternally yours" },
    ],
  },
  {
    id: "wordpress",
    index: "12",
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
  {
    id: "friendship-storybook",
    index: "13",
    title: "10 Years of Best Friendship",
    kicker: "Specially designed friendship storybook website",
    tagline: "A decade of friendship, published as a magazine you scroll.",
    description:
      "A specially designed storybook website made for one friend only — a pink editorial magazine issue titled \u201cFor Iqra\u201d with 13 chapters, from the first meeting to a friendship proposal. Every chapter, photo and line of copy was written for her, never a template.",
    features: [
      "13-chapter magazine navigation",
      "Editorial cover story with polaroid collage",
      "Tap-to-open gift entry screen",
      "Scroll-driven chapters and memory timeline",
      "Soft pink serif type system",
      "Fully responsive, mobile-first",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Web Animations"],
    role: "Concept, copywriting, design and front-end build",
    tone: "magenta",
    layout: "story",
    media: [
      { kind: "video", src: storyVideo.url, poster: storyPoster.url, portrait: true, caption: "Live demo" },
      { kind: "image", src: story1.url, caption: "Cover story" },
      { kind: "image", src: story2.url, caption: "Polaroid collage" },
      { kind: "image", src: story3.url, caption: "Our story chapter" },
    ],
  },
  {
    id: "jobseeker",
    index: "14",
    title: "JobSeeker",
    kicker: "Job Application & Recruitment App · Kotlin • Android • Firebase • XML",
    tagline: "Connecting job seekers and companies, end to end.",
    description:
      "A full-featured Android job platform built with Kotlin, connecting job seekers and companies through job discovery, applications, recruitment management, and interview scheduling. Two dedicated experiences — a job-seeker side for browsing, applying and tracking, and a recruiter side for posting jobs and managing candidates — backed by real Firebase authentication and real-time Cloud Firestore data.",
    features: [
      "Separate job seeker & recruiter experiences",
      "Job browsing with search by title, company or skill",
      "Complete job details — description, requirements, salary",
      "One-tap apply with cover letter and saved/bookmarked jobs",
      "Application tracking with live status — in review, hired, rejected",
      "Profile management with image & CV upload via Cloudinary",
      "Recruiter dashboard — active jobs, applicants & recent applications",
      "Post & manage jobs with categories, work mode and salary ranges",
      "Applicant review — contact info, cover letter, CV attachments",
      "Shortlisting, hiring stages & interview scheduling",
      "Company profile management",
      "Firebase Authentication with real-time Cloud Firestore data",
    ],
    tech: [
      "Kotlin",
      "Android Studio",
      "XML",
      "Firebase Auth",
      "Cloud Firestore",
      "Cloudinary",
      "RecyclerView",
      "ViewBinding",
      "Android Navigation",
    ],
    role: "Design & full Android development — Kotlin, XML UI, Firebase backend",
    tone: "electric",
    layout: "story",
    media: [
      { kind: "image", src: js2.url, portrait: true, caption: "Job seeker home & application overview" },
      { kind: "image", src: js1.url, portrait: true, caption: "Sign in with Firebase Authentication" },
      { kind: "image", src: js3.url, portrait: true, caption: "Explore active jobs with search" },
      { kind: "image", src: js4.url, portrait: true, caption: "Job details — description, requirements & apply" },
      { kind: "image", src: js5.url, portrait: true, caption: "My applications with live status" },
      { kind: "image", src: js6.url, portrait: true, caption: "Saved jobs bookmarks" },
      { kind: "image", src: js7.url, portrait: true, caption: "Profile with image & contact details" },
      { kind: "image", src: js8.url, portrait: true, caption: "Recruiter dashboard — jobs & applicants" },
      { kind: "image", src: js9.url, portrait: true, caption: "Post a new job form" },
      { kind: "image", src: js10.url, portrait: true, caption: "Manage posted jobs" },
      { kind: "image", src: js11.url, portrait: true, caption: "Applicant details — CV & hiring actions" },
      { kind: "image", src: js12.url, portrait: true, caption: "Company profile" },
    ],
    badge: "Android Application",
  },
  {
    id: "mybank",
    index: "15",
    title: "MyBank",
    kicker: "Banking & Account Management App · Java • Android • XML • OOP",
    tagline: "Core banking operations, built the object-oriented way.",
    description:
      "A modern Android banking application built with Java and XML, featuring account management, deposits, withdrawals, transaction history, and practical implementation of core OOP concepts. Users can create an account, check their balance, deposit and withdraw money, review every transaction, manage their profile and log out securely — with the banking logic structured around a well-designed class hierarchy.",
    features: [
      "Account creation & secure login",
      "Bank dashboard with live balance card & quick actions",
      "Deposit & withdrawal with quick amount selection",
      "Full transaction history with deposit/withdrawal filters",
      "Account details — number, balance, interest rate & active status",
      "Savings & Current account types via inheritance",
      "Profile management & secure logout",
      "OOP in practice — encapsulation, inheritance, abstraction, interfaces, polymorphism, method overriding & overloading, enums and composition",
      "Banking class model — User, BankAccount, SavingsAccount, CurrentAccount, Transaction, TransactionType & TransactionOperations",
      "Material Design UI with RecyclerView lists and View Binding",
    ],
    tech: [
      "Java",
      "Android Studio",
      "XML",
      "RecyclerView",
      "View Binding",
      "Material Design",
      "OOP",
    ],
    role: "Design & full Android development — Java, XML UI, OOP architecture",
    tone: "electric",
    layout: "story",
    media: [
      { kind: "image", src: mb2.url, portrait: true, caption: "Dashboard — balance card & quick actions" },
      { kind: "image", src: mb4.url, portrait: true, caption: "Login with email & password" },
      { kind: "image", src: mb1.url, portrait: true, caption: "Create your account" },
      { kind: "image", src: mb8.url, portrait: true, caption: "Account details — number, balance & status" },
      { kind: "image", src: mb5.url, portrait: true, caption: "Deposit money with quick amounts" },
      { kind: "image", src: mb7.url, portrait: true, caption: "Withdraw money" },
      { kind: "image", src: mb3.url, portrait: true, caption: "Transaction history with filters" },
      { kind: "image", src: mb6.url, portrait: true, caption: "Profile — details, security & logout" },
    ],
    badge: "Android Application",
  },
  {
    id: "dubai-realestate",
    index: "16",
    title: "Real Estate Property Listing App – Dubai",
    kicker: "Mobile Application Development · Flutter",
    tagline: "Browse Dubai properties in a clean, modern mobile experience.",
    description:
      "A professional Flutter mobile application for real estate property listings in Dubai. Users can explore featured and popular properties, search and filter by type, location and price, view listings on a map, save favorites and message property owners — built with a focus on responsive UI, smooth navigation and clean layouts.",
    features: [
      "Flutter mobile application development",
      "Property listing UI and screens",
      "Responsive and reusable Flutter widgets",
      "Navigation between application screens",
      "Property details and listing presentation",
      "Search, map view & filters by type, location, price and area",
      "Favorites, messaging and profile screens",
      "Testing and fixing UI/functionality issues",
    ],
    tech: ["Flutter", "Dart", "Android"],
    role: "Flutter development — UI, reusable widgets, navigation, functionality integration & testing",
    tone: "cyan",
    layout: "story",
    media: [
      { kind: "image", src: re3.url, portrait: true, caption: "Home — Dubai location, categories & featured properties" },
      { kind: "image", src: re1.url, portrait: true, caption: "Onboarding — list your property" },
      { kind: "image", src: re4.url, portrait: true, caption: "Onboarding — find your perfect property" },
      { kind: "image", src: re2.url, portrait: true, caption: "Login" },
      { kind: "image", src: re5.url, portrait: true, caption: "Search with map & nearby listings" },
      { kind: "image", src: re6.url, portrait: true, caption: "Featured properties — rent, buy or sell" },
      { kind: "image", src: re8.url, portrait: true, caption: "Filters — type, Dubai location, price & area" },
      { kind: "image", src: re7.url, portrait: true, caption: "Favorites" },
      { kind: "image", src: re10.url, portrait: true, caption: "Messages with property owners" },
      { kind: "image", src: re9.url, portrait: true, caption: "Profile & account settings" },
      { kind: "image", src: re11.url, portrait: true, caption: "Personal info" },
    ],
  },
];
