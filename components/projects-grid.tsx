import { Button } from "@/components/ui/button"
import { EnhancedProjectCard } from "@/components/enhanced-project-card"

export function ProjectsGrid() {
  const projects = [
    {
      title: "LunaLuxe E-commerce Platform",
      description:
        "Complete e-commerce solution for a Kenyan fashion brand featuring responsive design, shopping cart integration, newsletter signup, and optimized performance across all devices.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "E-commerce", "Performance Optimization"],
      githubUrl: "https://github.com/kihiu254/lunaluxe-ecommerce",
      liveUrl: "#",
      featured: true,
      requiresAuth: true,
      enhancedDetails: {
        challenges: [
          "Creating a seamless mobile shopping experience for fashion products",
          "Implementing persistent shopping cart functionality without backend",
          "Optimizing image loading for fashion product galleries",
          "Ensuring cross-browser compatibility for payment forms",
        ],
        solutions: [
          "Developed mobile-first responsive design with touch-optimized interactions",
          "Used localStorage API for cart persistence and session management",
          "Implemented lazy loading and image optimization techniques",
          "Created comprehensive form validation with real-time feedback",
        ],
        metrics: [
          { label: "Page Load Time", value: "< 2s" },
          { label: "Mobile Score", value: "98/100" },
          { label: "Conversion Rate", value: "12.3%" },
          { label: "User Engagement", value: "+45%" },
        ],
      },
    },
    {
      title: "Mr Trendy Luxury Platform",
      description:
        "Collaborative luxury fashion web platform with modern UI/UX design, visual branding consistency, and Git-based version control for team development.",
      technologies: ["HTML", "CSS", "JavaScript", "Git", "UI/UX Design", "Team Collaboration"],
      githubUrl: "https://github.com/kihiu254/mr-trendy-platform",
      liveUrl: "#",
      featured: false,
      requiresAuth: true,
      enhancedDetails: {
        challenges: [
          "Coordinating design consistency across multiple team members",
          "Managing version control for collaborative frontend development",
          "Creating luxury brand aesthetic with modern web technologies",
          "Implementing responsive design for high-end fashion showcase",
        ],
        solutions: [
          "Established design system and style guide for team consistency",
          "Implemented Git workflow with feature branches and code reviews",
          "Developed premium UI components with attention to luxury branding",
          "Created responsive grid system for product showcases",
        ],
        metrics: [
          { label: "Team Members", value: "4" },
          { label: "Design Score", value: "95/100" },
          { label: "Code Quality", value: "A+" },
          { label: "Client Satisfaction", value: "100%" },
        ],
      },
    },
    {
      title: "Portfolio Website",
      description:
        "Modern portfolio website with flower-bee inspired design, GitHub integration, and interactive animations showcasing technical skills and projects.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "GitHub API", "Responsive Design", "Animations"],
      githubUrl: "https://github.com/kihiu254/portfolio-website",
      liveUrl: "#",
      featured: false,
      requiresAuth: false,
    },
    {
      title: "Python Data Analysis Toolkit",
      description:
        "Collection of data analysis scripts and visualization tools built with Python, pandas, and matplotlib for processing and analyzing various datasets.",
      technologies: ["Python", "Pandas", "Matplotlib", "Data Analysis", "Jupyter", "NumPy"],
      githubUrl: "https://github.com/kihiu254/python-data-analysis",
      liveUrl: "#",
      featured: false,
      requiresAuth: true,
      enhancedDetails: {
        challenges: [
          "Processing large datasets efficiently with limited memory",
          "Creating meaningful visualizations for complex data relationships",
          "Handling missing data and outliers in real-world datasets",
          "Building reusable analysis pipelines for different data types",
        ],
        solutions: [
          "Implemented chunked data processing and memory optimization techniques",
          "Developed custom visualization functions with matplotlib and seaborn",
          "Created robust data cleaning and preprocessing pipelines",
          "Built modular analysis framework with configurable parameters",
        ],
        metrics: [
          { label: "Datasets Processed", value: "50+" },
          { label: "Analysis Scripts", value: "25" },
          { label: "Visualizations", value: "100+" },
          { label: "Performance Gain", value: "300%" },
        ],
      },
    },
    {
      title: "Responsive Landing Page",
      description:
        "Modern landing page template with clean design, smooth animations, and optimized performance for business and personal use cases.",
      technologies: ["HTML5", "CSS3", "JavaScript", "SCSS", "Responsive Design", "Performance"],
      githubUrl: "https://github.com/kihiu254/responsive-landing",
      liveUrl: "#",
      featured: false,
      requiresAuth: false,
    },
    {
      title: "JavaScript Calculator",
      description:
        "Interactive calculator application with advanced mathematical functions, keyboard support, and responsive design for desktop and mobile use.",
      technologies: ["JavaScript", "HTML", "CSS", "Math.js", "Responsive Design", "Accessibility"],
      githubUrl: "https://github.com/kihiu254/js-calculator",
      liveUrl: "#",
      featured: false,
      requiresAuth: false,
    },
    {
      title: "CSS Animation Library",
      description:
        "Custom CSS animation library with reusable components, smooth transitions, and performance-optimized animations for modern web applications.",
      technologies: ["CSS3", "SCSS", "Animations", "Performance", "Documentation", "NPM Package"],
      githubUrl: "https://github.com/kihiu254/css-animations",
      liveUrl: "#",
      featured: false,
      requiresAuth: false,
    },
    {
      title: "PHP Contact Form",
      description:
        "Secure contact form with PHP backend, email validation, spam protection, and database logging for business websites and applications.",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "Email Validation", "Security", "Database"],
      githubUrl: "https://github.com/kihiu254/php-contact-form",
      liveUrl: "#",
      featured: false,
      requiresAuth: true,
      enhancedDetails: {
        challenges: [
          "Implementing robust spam protection without CAPTCHA",
          "Ensuring secure email handling and data validation",
          "Creating user-friendly error handling and feedback",
          "Managing database connections and query optimization",
        ],
        solutions: [
          "Developed honeypot and rate limiting techniques for spam prevention",
          "Implemented comprehensive input sanitization and validation",
          "Created AJAX-powered form submission with real-time feedback",
          "Built efficient database schema with proper indexing",
        ],
        metrics: [
          { label: "Spam Blocked", value: "99.8%" },
          { label: "Response Time", value: "< 500ms" },
          { label: "Success Rate", value: "99.9%" },
          { label: "Security Score", value: "A+" },
        ],
      },
    },
  ]

  return (
    <section className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <EnhancedProjectCard key={index} {...project} />
        ))}
      </div>

      <div className="text-center pt-8">
        <p className="text-muted-foreground mb-4">Want to see more projects or collaborate?</p>
        <div className="flex justify-center gap-4">
          <Button variant="outline" asChild>
            <a href="https://github.com/kihiu254" target="_blank" rel="noopener noreferrer">
              View GitHub Profile
            </a>
          </Button>
          <Button asChild>
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
