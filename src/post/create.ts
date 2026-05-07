import { prisma } from "../lib/prisma";

const main = async () => {
  const createManys = await prisma.post.createMany({
    data: [
      {
        title: "Introduction to JavaScript",
        description: "Exploring the fundamentals of modern JS engines.",
        autherId: 1,
      },
      {
        title: "React vs Next.js",
        description: "A comprehensive guide on when to choose which framework.",
        autherId: 2,
      },
      {
        title: "Database Optimization",
        description: "How to write efficient queries for large datasets.",
        autherId: 3,
      },
      {
        title: "The Future of AI",
        description: "Trends to watch in generative models and automation.",
        autherId: 4,
      },
      {
        title: "CSS Grid Layouts",
        description: "Mastering complex web designs with ease.",
        autherId: 5,
      },
      {
        title: "Docker Containerization",
        description: "Streamlining your development workflow with Docker.",
        autherId: 6,
      },
      {
        title: "Node.js Performance",
        description: "Tips for building scalable backend systems.",
        autherId: 7,
      },
      {
        title: "TypeScript Benefits",
        description: "Why static typing is essential for large-scale apps.",
        autherId: 8,
      },
      {
        title: "UI/UX Best Practices",
        description: "Designing interfaces that users actually love.",
        autherId: 9,
      },
      {
        title: "Cloud Computing 101",
        description: "An overview of AWS, Azure, and Google Cloud.",
        autherId: 10,
      },
      {
        title: "API Design Patterns",
        description: "Building robust RESTful and GraphQL services.",
        autherId: 11,
      },
      {
        title: "Cybersecurity Basics",
        description: "Protecting your applications from common threats.",
        autherId: 12,
      },
      {
        title: "Serverless Architecture",
        description: "Scaling without managing servers using Lambda.",
        autherId: 13,
      },
      {
        title: "Git Version Control",
        description: "Advanced branching and merging strategies.",
        autherId: 14,
      },
      {
        title: "Web Accessibility",
        description: "Making the web inclusive for everyone.",
        autherId: 15,
      },
      {
        title: "Responsive Web Design",
        description: "Ensuring your site looks great on all devices.",
        autherId: 16,
      },
      {
        title: "State Management in React",
        description: "Deep dive into Redux, Recoil, and Context API.",
        autherId: 17,
      },
      {
        title: "Machine Learning Basics",
        description: "Getting started with Python and Scikit-Learn.",
        autherId: 18,
      },
      {
        title: "Mobile App Development",
        description: "Comparing React Native and Flutter for 2026.",
        autherId: 19,
      },
      {
        title: "SEO Optimization",
        description: "How to rank higher on search engine result pages.",
        autherId: 20,
      },
      {
        title: "The Power of SVG",
        description: "Using scalable vector graphics for web performance.",
        autherId: 1,
      },
      {
        title: "GraphQL Subscriptions",
        description: "Implementing real-time data updates.",
        autherId: 2,
      },
      {
        title: "Unit Testing Fundamentals",
        description: "Writing reliable tests with Jest and Vitest.",
        autherId: 3,
      },
      {
        title: "Microservices Strategy",
        description: "Breaking down the monolith into manageable parts.",
        autherId: 4,
      },
      {
        title: "E-commerce Trends",
        description: "The evolution of online shopping experiences.",
        autherId: 5,
      },
      {
        title: "DevOps Pipeline Setup",
        description: "Automating deployments with GitHub Actions.",
        autherId: 6,
      },
      {
        title: "Prisma ORM Guide",
        description: "Managing your database schema efficiently.",
        autherId: 7,
      },
      {
        title: "Tailwind CSS Tips",
        description: "Speeding up your styling workflow.",
        autherId: 8,
      },
      {
        title: "Redis Caching",
        description: "Improving application speed with in-memory storage.",
        autherId: 9,
      },
      {
        title: "Kubernetes Orchestration",
        description: "Managing clusters at scale in production.",
        autherId: 10,
      },
      {
        title: "Web3 and Blockchain",
        description: "Understanding the decentralization of the internet.",
        autherId: 11,
      },
      {
        title: "Digital Marketing Hacks",
        description: "Strategies to grow your brand online.",
        autherId: 12,
      },
      {
        title: "PostgreSQL Advanced",
        description: "Using JSONB and window functions effectively.",
        autherId: 13,
      },
      {
        title: "Python for Data Science",
        description: "Analyzing large datasets with Pandas and NumPy.",
        autherId: 14,
      },
      {
        title: "FastAPI Development",
        description: "Building high-performance APIs with Python.",
        autherId: 15,
      },
      {
        title: "Productivity for Coders",
        description: "Tools and habits to stay focused and efficient.",
        autherId: 16,
      },
      {
        title: "Open Source Contribution",
        description: "How to get started with public repositories.",
        autherId: 17,
      },
      {
        title: "Edge Computing",
        description: "Reducing latency by moving logic closer to users.",
        autherId: 18,
      },
      {
        title: "Animation in React",
        description: "Using Framer Motion for smooth transitions.",
        autherId: 19,
      },
      {
        title: "Remote Work Culture",
        description: "Thriving in a distributed team environment.",
        autherId: 20,
      },
    ],
  });
  console.log(createManys);
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  });
