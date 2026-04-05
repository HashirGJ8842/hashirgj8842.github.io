import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Hashir",
  lastName: "Niazi",
  name: "Hashir Hameed Niazi",
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "hameedhashirniazi@gmail.com",
  location: "Asia/Kolkata",
  languages: ["English", "Hindi", "Urdu"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Updates on engineering and tech</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/HashirGJ8842",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/hashir-hameed",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Software Engineer building scalable systems</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">WhatsApp Cloud API Platform</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/whatsapp-cloud-api-platform",
  },
  subline: (
    <>
      I'm Hashir, a Software Engineer at <Text as="span" size="xl" weight="strong">Telecrm</Text>, where I build scalable full-stack
      applications, optimize distributed systems, and deliver production-ready solutions.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Software Engineer with 2+ years of experience building scalable full-stack applications
        for a high-growth CRM platform. Increased system throughput 20x, reduced deployment cycles
        from 2 weeks to 2 days via CI/CD, and lowered AWS costs significantly. Skilled in
        performance optimization, cloud systems, and delivering production-ready solutions across
        the full SDLC.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Telecrm",
        timeframe: "July 2023 - Present",
        role: "Software Engineer",
        achievements: [
          <>
            Architected and scaled distributed messaging infrastructure, increasing WhatsApp
            broadcast capacity 20x (5K to 100K leads) by redesigning queue processing and resolving
            critical Redis latency bottlenecks in a high-traffic CRM system.
          </>,
          <>
            Owned end-to-end development of a full-stack WhatsApp Cloud API platform using Node.js,
            Angular, AWS, MongoDB, and Redis — delivering messaging automation, conversation analytics,
            interactive messaging, campaign management, and embedded signup onboarding.
          </>,
          <>
            Designed a full analytics platform and data pipeline, building a MongoDB to PostgreSQL
            ETL system and deploying Metabase on Docker/EC2, enabling self-serve analytics for
            non-technical stakeholders. Also built an AI-powered SQL query generator using prompt
            engineering and Metabase metadata.
          </>,
          <>
            Led CI/CD and developer productivity improvements — designed a Bitbucket + AWS automated
            deployment pipeline that reduced production release cycles from 2 weeks to 2 days,
            parallelized build pipelines (60 min to 10 min), and standardized cross-platform build
            tooling with OS-agnostic build scripts.
          </>,
          <>
            Modernized the frontend architecture by leading the migration from Angular 13 to
            Angular 17 and Webpack to esbuild, improving build performance, security (CSP with
            nonce support), and long-term maintainability across the platform.
          </>,
          <>
            Improved system performance and latency by introducing multi-layer caching (in-memory
            RAM cache + Redis), query optimization strategies, and an EntityFilterGroup system that
            auto-generates MongoDB/Atlas Search queries — significantly reducing API response times
            and database load.
          </>,
          <>
            Enhanced platform reliability and observability by implementing structured logging,
            timeout monitoring, Sentry-based error tracking, and request timeout logs for better
            visibility and proactive production issue resolution.
          </>,
          <>
            Strengthened application security across web and mobile platforms by implementing CSP
            with nonce support, SSL pinning, root detection, HTTP request restrictions, and secure
            JWT invalidation using Redis.
          </>,
          <>
            Solved critical production issues including Redis latency bugs that took down servers,
            MongoDB Atlas Search index health issues caused by large objects, websocket fd limit
            issues on AWS API Gateway, Android LMDK daemon killing issues (Android 14+), and
            replication lag causing broadcast and bulk edit failures.
          </>,
          <>
            Built and shipped mobile-first features including push notifications (Android + iOS),
            iOS deeplinks, click-to-call via native websockets, virtual scrolling for performance,
            state restoration service for Android, and Capacitor v5 to v7 migration.
          </>,
          <>
            Opened public APIs for lead management, created a syncMethod decorator for serializing
            function calls, implemented a pending promises queue for background task offloading,
            and migrated AWS SDK from v2 to v3 across the entire project.
          </>,
          <>
            Trained a Whisper AI model to transcribe audio recordings for the CRM application.
          </>,
          <>
            Took part in client meetings, code reviews, design discussions, and architecture
            discussions — mentoring engineers and influencing technical direction across the team.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Zakir Husain College of Engineering and Technology, AMU",
        description: (
          <>
            Bachelor of Technology in Computer Engineering (2019-2023) — CGPA: 9.22/10
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Backend & APIs",
        description: (
          <>
            Node.js, Express.js, REST APIs, Webhooks, WebSockets, Microservices architecture.
            Experienced with building scalable distributed systems, queue processing, and
            real-time communication layers.
          </>
        ),
        tags: [
          { name: "Node.js", icon: "nodejs" },
          { name: "JavaScript", icon: "javascript" },
          { name: "TypeScript", icon: "typescript" },
        ],
        images: [],
      },
      {
        title: "Databases & Cloud",
        description: (
          <>
            MongoDB, PostgreSQL, Redis, AWS (EC2, Lambda, S3, SQS, SNS, API Gateway).
            Experience with Atlas Search, ETL pipelines, multi-layer caching strategies,
            and cloud infrastructure optimization.
          </>
        ),
        tags: [
          { name: "MongoDB", icon: "mongodb" },
          { name: "Redis", icon: "redis" },
          { name: "AWS", icon: "aws" },
          { name: "PostgreSQL", icon: "postgresql" },
        ],
        images: [],
      },
      {
        title: "Frontend & Mobile",
        description: (
          <>
            Angular 17+, React, HTML5, SCSS. Experience with mobile development using
            Capacitor, virtual scrolling, state management, and cross-platform builds.
          </>
        ),
        tags: [
          { name: "Angular", icon: "angular" },
          { name: "React", icon: "react" },
        ],
        images: [],
      },
      {
        title: "DevOps & Tools",
        description: (
          <>
            CI/CD pipelines (Bitbucket Pipelines), Docker, Linux (Ubuntu, Manjaro, Arch),
            Git, Sentry, Metabase. Experience with automated deployments, build optimization,
            and monitoring infrastructure.
          </>
        ),
        tags: [
          { name: "Docker", icon: "docker" },
          { name: "Linux", icon: "linux" },
          { name: "Git", icon: "github" },
        ],
        images: [],
      },
      {
        title: "Languages",
        description: (
          <>
            Proficient in Java, JavaScript (ES6+), TypeScript, C++, Python, and SQL.
          </>
        ),
        tags: [
          { name: "Java", icon: "java" },
          { name: "Python", icon: "python" },
          { name: "C++", icon: "cpp" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about engineering and tech...",
  description: `Read what ${person.name} has been up to recently`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Engineering projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
