import { Project } from "../types";

export const projectsData: readonly Project[] = [
  {
    slug: "track-order-app",
    title: "Track Order App",
    summary:
      "Full-stack order tracking application with real-time status updates and order verification.",
    stack: ["React", "Node.js", "REST API"],
    repoUrl: "TODO: https://github.com/salma-lams/track-order-app",
    cover: "/projects/track-order/cover.png",
    images: [
      {
        src: "/projects/track-order/cover.png",
        alt: "Track Order App dashboard and search interface",
        caption:
          "Main order status dashboard displaying tracking timeline and milestone progress.",
      },
      // TODO: Add more screenshots to /public/projects/track-order/*.png
    ],
    details: {
      overview:
        "TODO: Add detailed project overview explaining architecture, core services, and user flow.",
      problem: "TODO: Add the problem statement this application solves.",
      whatIBuilt: [
        "TODO: Describe frontend implementation details in React.",
        "TODO: Describe Node.js REST API endpoints, routing, and data handling.",
        "TODO: Describe validation and error state handling.",
      ],
      challenges: [
        "TODO: Describe key technical challenges encountered during development and how they were resolved.",
      ],
      learned: "TODO: Key technical takeaways from building this application.",
    },
  },
  {
    slug: "python-rest-api",
    title: "REST API",
    summary:
      "Backend service built with Python featuring structured endpoints, payload validation, and clean request routing.",
    stack: ["Python", "REST"],
    repoUrl: "TODO: https://github.com/salma-lams/python-api",
    cover: "", // TODO: Add screenshot to /public/projects/python-api/
    images: [
      // TODO: Add screenshots for endpoints and test collections
    ],
    details: {
      overview:
        "TODO: Add overview of the API design, schema definition, and endpoint organization.",
      problem: "TODO: Add context on the data ingestion and query requirements.",
      whatIBuilt: [
        "TODO: Describe Python API architecture and route handlers.",
        "TODO: Describe request validation, response serialization, and error schemas.",
      ],
      challenges: ["TODO: Describe optimization or architecture trade-offs."],
      learned: "TODO: Key takeaways on Python API development.",
    },
  },
  {
    slug: "mini-react-app",
    title: "Mini React App",
    summary:
      "Component-driven client application focused on state management patterns and modular UI design.",
    stack: ["React", "Vite", "CSS"],
    repoUrl: "TODO: https://github.com/salma-lams/mini-react-app",
    cover: "/mini-react-app.png",
    images: [
      {
        src: "/mini-react-app.png",
        alt: "Mini React App user interface",
        caption:
          "Interface preview demonstrating component hierarchy and interactive states.",
      },
      // TODO: Add additional component screenshots
    ],
    details: {
      overview:
        "TODO: Add overview of the React component architecture and state management.",
      problem: "TODO: Add problem description.",
      whatIBuilt: [
        "TODO: Detail component structure and custom hooks.",
        "TODO: Detail CSS styling and responsive layout.",
      ],
      challenges: ["TODO: Detail state synchronization challenges."],
      learned: "TODO: Key takeaways on modern React state patterns.",
    },
  },
  // Hidden by default per instructions (ask user before keeping)
  {
    slug: "calculator",
    title: "Calculator",
    summary:
      "Vanilla JavaScript calculator with clean arithmetic parsing and responsive controls.",
    stack: ["JavaScript", "HTML", "CSS"],
    repoUrl: "https://github.com/salma-lams/Calculator",
    cover: "/Calculator.png",
    images: [
      {
        src: "/Calculator.png",
        alt: "Calculator application interface",
        caption:
          "Calculator UI layout with numerical keypad and operator display.",
      },
    ],
    details: {
      overview: "Arithmetic calculator evaluating mathematical expressions.",
      problem: "Accurate state handling for sequential arithmetic operations.",
      whatIBuilt: [
        "Expression parser",
        "Clean UI layout",
        "Keyboard input handlers",
      ],
      challenges: [
        "Handling edge-case division by zero and floating-point precision.",
      ],
    },
    hidden: true,
  },
  {
    slug: "ecommerce-website",
    title: "E-commerce Website",
    summary: "Multi-page storefront layout with responsive product catalog.",
    stack: ["HTML", "CSS", "JavaScript"],
    repoUrl: "https://github.com/salma-lams",
    cover: "/ecommerce.png",
    images: [
      {
        src: "/ecommerce.png",
        alt: "E-commerce storefront layout",
        caption: "Product catalog view with responsive grid layout.",
      },
    ],
    details: {
      overview: "Static multi-page web storefront template.",
      problem:
        "Creating an accessible, responsive product showcase without heavyweight libraries.",
      whatIBuilt: [
        "Semantic markup",
        "Flexbox and CSS Grid layout",
        "Cart interaction scripts",
      ],
      challenges: [
        "Cross-browser CSS layout fidelity without modern utility frameworks.",
      ],
    },
    hidden: true,
  },
] as const;
