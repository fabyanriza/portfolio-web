import { Code2, TrendingUp, Wrench } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Programming & Tools",
      skills: [
        "Python",
        "R",
        "TensorFlow",
        "Keras",
        "NumPy",
        "Pandas",
        "Statsmodels",
        "Scikit-Learn",
        "Streamlit",
        "Supabase",
        "React.js",
        "Next.js",
        "Tailwind",
      ],
      color: "blue",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Methods & Domains",
      skills: [
        "Time Series Forecasting",
        "XAI (SHAP, IG, PI)",
        "Optimization",
        "Panel Data Analysis",
        "Clustering & Segmentation",
        "Dashboard Development",
      ],
      color: "teal",
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Other",
      skills: ["Git", "Docker", "AWS ECS"],
      color: "slate",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "bg-blue-50 dark:bg-blue-900 dark:bg-opacity-20",
        border: "border-blue-200 dark:border-blue-800",
        icon: "text-blue-600 dark:text-blue-400",
        badge: "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300",
      },
      teal: {
        bg: "bg-teal-50 dark:bg-teal-900 dark:bg-opacity-20",
        border: "border-teal-200 dark:border-teal-800",
        icon: "text-teal-600 dark:text-teal-400",
        badge: "bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300",
      },
      slate: {
        bg: "bg-slate-50 dark:bg-slate-700",
        border: "border-slate-200 dark:border-slate-600",
        icon: "text-slate-600 dark:text-slate-300",
        badge:
          "bg-slate-100 dark:bg-slate-600 text-slate-700 dark:text-slate-300",
      },
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 px-6 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 text-center">
          Skills & Expertise
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          A comprehensive toolkit for building end-to-end data science and
          machine learning solutions
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const colorClasses = getColorClasses(category.color);
            return (
              <div
                key={index}
                className={`p-6 ${colorClasses.bg} rounded-xl border ${colorClasses.border} hover:shadow-lg transition-shadow duration-300`}
              >
                <div className={`${colorClasses.icon} mb-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-1.5 ${colorClasses.badge} rounded-full text-sm font-medium`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
