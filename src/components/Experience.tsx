import { GraduationCap, Award, Users } from "lucide-react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-6 bg-slate-50 dark:bg-slate-800"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-12 text-center">
          Education & Experience
        </h2>

        <div className="space-y-8">
          <div className="bg-white dark:bg-slate-900 rounded-xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 dark:bg-blue-900 dark:bg-opacity-30 p-3 rounded-lg">
                <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">
                  Teknologi Sains Data
                </h3>
                <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
                  Universitas Airlangga
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Specialized in advanced data science methodologies, machine
                  learning algorithms, and statistical modeling. Focus on
                  applying theoretical knowledge to practical industry problems
                  through rigorous research and project-based learning.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="flex items-start gap-3 mb-4">
                <div className="bg-teal-100 dark:bg-teal-900 dark:bg-opacity-30 p-2 rounded-lg">
                  <Award className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  Academic Research
                </h3>
              </div>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 dark:text-teal-400 mt-1">
                    •
                  </span>
                  <span>
                    Time series forecasting with hybrid deep learning models
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 dark:text-teal-400 mt-1">
                    •
                  </span>
                  <span>
                    Explainable AI (XAI) implementation for model
                    interpretability
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 dark:text-teal-400 mt-1">
                    •
                  </span>
                  <span>
                    Econometric analysis and financial market modeling
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 dark:text-teal-400 mt-1">
                    •
                  </span>
                  <span>
                    Published research on advanced forecasting methodologies
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="flex items-start gap-3 mb-4">
                <div className="bg-blue-100 dark:bg-blue-900 dark:bg-opacity-30 p-2 rounded-lg">
                  <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  Industry Collaboration
                </h3>
              </div>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">
                    •
                  </span>
                  <span>
                    Customer segmentation for insurance industry (AXA)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">
                    •
                  </span>
                  <span>Hotel revenue forecasting system development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">
                    •
                  </span>
                  <span>Logistics optimization for container operations</span>
                </li>
                <li className="flex items-start gap-2"></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
