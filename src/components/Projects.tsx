import { ExternalLink, Github, FileText } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  links?: {
    demo?: string;
    github?: string;
    paper?: string;
  };
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Hybrid SV-PSO-BiLSTM + XAI Chili Price Forecasting (My Thesis)",
      description:
        "Advanced time-series forecasting system for red chili prices combining STL-VMD decomposition, Particle Swarm Optimization, and Bidirectional LSTM networks. Achieved exceptional accuracy with MAPE < 3% and integrated SHAP for model interpretability.",
      tags: ["Time Series", "Deep Learning", "XAI", "Optimization"],
    },
    {
      title: "Container Logistics Optimization Dashboard for PT. SPIL",
      description:
        "Comprehensive logistics optimization system for Surabaya operations featuring intelligent routing algorithms, depot allocation optimization, real-time cost estimation, and interactive map visualization for container management.",
      tags: ["Optimization", "Logistics", "Geospatial Analysis"],
      links: {
        demo: "https://container-allocation-website-980smnecp.vercel.app/",
        github: "https://github.com/fabyanriza/container-allocation-website",
      },
    },
    {
      title: "Anemia Detection via Eye Image",
      description:
        "Full-stack medical diagnostic application utilizing computer vision for anemia detection from eye images. Dockerized frontend and backend architecture with planned deployment on AWS ECS for production scalability.",
      tags: ["Computer Vision", "Healthcare", "Docker", "AWS"],
      links: {
        github: "https://github.com/fabyanriza/EyeNemia",
      },
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 text-center">
          Featured Projects
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          A selection of data science and machine learning projects solving
          real-world challenges
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.links && (
                <div className="flex gap-3 pt-4 border-t border-slate-100 dark:border-slate-700">
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      className="flex items-center gap-1 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 font-medium transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  )}
                  {project.links.paper && (
                    <a
                      href={project.links.paper}
                      className="flex items-center gap-1 text-sm text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-medium transition-colors"
                    >
                      <FileText className="w-4 h-4" />
                      Paper
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
