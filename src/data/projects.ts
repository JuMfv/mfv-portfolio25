import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'web-1',
    title: 'Realtime Collaboration Platform',
    category: 'web',
    year: '2025',
    slug: 'realtime-collab',
    coverImage: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200',
    description: 'A Slack-like realtime collaboration app focused on low-latency messaging and presence.',
    role: 'Full-stack developer',
    tech: ['React', 'TypeScript', 'Node.js', 'Postgres', 'Socket.IO', 'Docker'],
    repo: 'https://github.com/your-org/realtime-collab',
    demo: 'https://realtime.example.com',
    images: [
      { id: 'web-1-1', src: 'https://images.pexels.com/photos/1519389950473-47ba0277781c.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200', alt: 'Realtime app screenshot', aspectRatio: 'landscape' },
    ],
    context: 'Teams need a lightweight collaboration tool with real-time presence and threaded conversations.',
    problem: 'Existing tools were either heavy or lacked fine-grained presence and offline sync for mobile users.',
    solution: 'Built an event-driven backend with Socket.IO, used optimistic UI updates and local persistence for offline support. Scaled with horizontal workers and a Redis pub/sub layer.',
    results: ['Realtime latency <120ms', 'DAU ×3 in 6 months', 'Sync success rate 99.8%'],
    architecture: 'Client (React) → API (Node.js + Fastify) → Realtime (Socket.IO + Redis Pub/Sub) → Postgres',
    reproduce: 'git clone && npm install && docker-compose up -d && npm run dev'
  },

  {
    id: 'data-1',
    title: 'Sales Forecasting Pipeline',
    category: 'data',
    year: '2024',
    slug: 'sales-forecasting',
    coverImage: 'https://images.pexels.com/photos/7947713/pexels-photo-7947713.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200',
    description: 'End-to-end forecasting pipeline for retail sales with automated retraining and monitoring.',
    role: 'Data Scientist / MLOps',
    tech: ['Python', 'Pandas', 'Prophet', 'MLflow', 'FastAPI', 'Kubernetes'],
    repo: 'https://github.com/your-org/sales-forecasting',
    demo: '',
    images: [
      { id: 'data-1-1', src: 'https://images.unsplash.com/photo-1517638851339-4aa32003c1b6?q=80&w=1200&auto=format&fit=crop', alt: 'Forecasting pipeline diagram', aspectRatio: 'landscape' }
    ],
    context: 'Retailers need accurate short-term forecasts to optimize inventory and staffing.',
    problem: 'Manual forecasting was error-prone and didn\'t incorporate promotions or holidays.',
    solution: 'Built ETL to join transactions, promotions, and calendar features; trained ensemble time-series models with MLflow tracking; deployed as an API with FastAPI.',
    results: ['MAPE 6.5%', 'Inventory holding ↓ 18%', 'Automated retraining weekly'],
    architecture: 'Ingest → Feature Store → Model Training (Spark/Pandas) → MLflow → Serving (FastAPI) → Monitoring',
    reproduce: 'See README: pip install -r requirements.txt && python -m app.server'
  },

  {
    id: 'web-2',
    title: 'Analytics Dashboard',
    category: 'web',
    year: '2025',
    slug: 'analytics-dashboard',
    coverImage: 'https://images.pexels.com/photos/360399/pexels-photo-360399.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200',
    description: 'Interactive analytics dashboard for product metrics and cohort analysis.',
    role: 'Frontend & Data Integration',
    tech: ['React', 'TypeScript', 'Vite', 'D3', 'Supabase'],
    repo: 'https://github.com/your-org/analytics-dashboard',
    demo: 'https://analytics.example.com',
    images: [
      { id: 'web-2-1', src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop', alt: 'Dashboard screenshot', aspectRatio: 'landscape' }
    ],
    context: 'Product teams need fast exploration of engagement and retention metrics.',
    problem: 'Existing reporting tools were slow and not customizable for ad-hoc cohorts.',
    solution: 'Built a client-side visualization layer with server-side aggregation endpoints; implemented exportable CSV and caching for heavy queries.',
    results: ['Report generation <2s', 'Engagement insights adoption ×4'],
    architecture: 'Frontend (React + D3) ↔ API (Supabase/Edge Functions) ↔ Analytics DB',
    reproduce: 'npm i && npm run dev'
  },

  {
    id: 'ml-1',
    title: 'Image Classification at Scale',
    category: 'ml',
    year: '2024',
    slug: 'image-classification',
    coverImage: 'https://images.pexels.com/photos/6077181/pexels-photo-6077181.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200',
    description: 'Deployed an image classification pipeline with continuous evaluation and model explainability.',
    role: 'ML Engineer',
    tech: ['PyTorch', 'FastAPI', 'Kubernetes', 'Seldon Core'],
    repo: 'https://github.com/your-org/image-classification',
    demo: '',
    images: [
      { id: 'ml-1-1', src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop', alt: 'Model training visualization', aspectRatio: 'landscape' }
    ],
    context: 'Automated tagging was needed to speed up content moderation and search.',
    problem: 'High class imbalance and concept drift in production.',
    solution: 'Used transfer learning with class-aware sampling, implemented online monitoring and drift detection, and scheduled retraining when drift > threshold.',
    results: ['Top-1 accuracy 92%', 'Drift alerts reduced false positives by 24%'],
    architecture: 'Data Lake → Training Jobs → Model Registry (MLflow) → Serving (Seldon) → Monitoring',
    reproduce: 'See CONTRIBUTING.md for dataset access and training commands'
  },

  {
    id: 'infra-1',
    title: 'CI/CD & Observability Platform',
    category: 'infra',
    year: '2023',
    slug: 'cicd-observability',
    coverImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop',
    description: 'Platform to standardize CI pipelines, deployments and centralized logging/metrics for engineering teams.',
    role: 'Platform Engineer',
    tech: ['GitHub Actions', 'Terraform', 'Prometheus', 'Grafana', 'EKS'],
    repo: 'https://github.com/your-org/platform-ci',
    demo: '',
    images: [
      { id: 'infra-1-1', src: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop', alt: 'CI pipeline screenshot', aspectRatio: 'landscape' }
    ],
    context: 'Multiple teams had divergent CI configs and lacked consolidated observability.',
    problem: 'Inconsistent deployments and slow incident diagnosis.',
    solution: 'Created reusable pipeline templates, standardized infra-as-code modules, and centralized Prometheus/Grafana stacks.',
    results: ['Avg deploy time ↓45%', 'MTTR ↓30%'],
    architecture: 'GitHub Actions → Terraform modules → EKS clusters → Prometheus/Grafana',
    reproduce: 'terraform init && terraform apply (see modules README)'
  },

  {
    id: 'web-3',
    title: 'Data Product Marketplace',
    category: 'web',
    year: '2025',
    slug: 'data-product-marketplace',
    coverImage: 'https://images.pexels.com/photos/5946222/pexels-photo-5946222.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200',
    description: 'A marketplace for curated data-products and notebooks aimed at data teams and researchers.',
    role: 'Full-stack & Data Product',
    tech: ['Next.js', 'TypeScript', 'Postgres', 'Stripe'],
    repo: 'https://github.com/your-org/data-product-marketplace',
    demo: 'https://market.example.com',
    images: [
      { id: 'web-3-1', src: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1200&auto=format&fit=crop', alt: 'Marketplace screenshot', aspectRatio: 'landscape' }
    ],
    context: 'Data scientists need a frictionless way to share and monetize models and datasets.',
    problem: 'No single place for discoverability, licensing, and payments for data products.',
    solution: 'Built a marketplace with licensing, previews, and one-click deployment of notebooks using containerized runtimes.',
    results: ['25 sellers onboarded in 2 months', 'Average purchase value $120'],
    architecture: 'Frontend → Marketplace API → Billing (Stripe) → Storage (S3) → Notebook Runtimes',
    reproduce: 'npm i && npm run dev'
  }
];

// Helper function to get project by slug
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

// Helper function to get projects by category
export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
};

// Helper function to get featured projects (first 4)
export const getFeaturedProjects = (): Project[] => {
  return projects.slice(0, 4);
};

// Helper function to get next/previous project
export const getAdjacentProjects = (currentSlug: string): { prev: Project | null; next: Project | null } => {
  const currentIndex = projects.findIndex(p => p.slug === currentSlug);
  
  return {
    prev: currentIndex > 0 ? projects[currentIndex - 1] : null,
    next: currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null
  };
};
