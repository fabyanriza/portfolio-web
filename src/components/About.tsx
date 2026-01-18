import { Brain, TrendingUp, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white dark:bg-slate-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-12 text-center">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
            <p className="text-lg">
              I'm a passionate data scientist and machine learning engineer with
              a deep interest in
              <span className="font-semibold text-slate-900 dark:text-white">
                {" "}
                data science, machine learning, econometrics, and creative
                analytics
              </span>
              .
            </p>
            <p className="text-lg">
              My approach to problem-solving is rooted in rigorous research and
              continuous experimentation. I believe in exploring multiple
              methodologies, testing hypotheses, and iterating until we find the
              most effective solution.
            </p>
            <p className="text-lg">
              What drives me is the opportunity to combine cutting-edge
              technology with tangible real-world impact. Whether it's
              forecasting market trends, optimizing business operations, or
              building interpretable AI systems, I'm committed to creating{" "}
              <span className="font-semibold text-slate-900 dark:text-white">
                data-driven solutions that make a difference
              </span>{" "}
              in industry and society.
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-blue-50 dark:bg-blue-900 dark:bg-opacity-20 rounded-xl border border-blue-100 dark:border-blue-800">
              <Brain className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                Research-Driven
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                Grounded in academic rigor and scientific methodology to ensure
                robust solutions
              </p>
            </div>

            <div className="p-6 bg-teal-50 dark:bg-teal-900 dark:bg-opacity-20 rounded-xl border border-teal-100 dark:border-teal-800">
              <TrendingUp className="w-10 h-10 text-teal-600 dark:text-teal-400 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                Results-Oriented
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                Focused on delivering measurable impact through advanced
                analytics and ML
              </p>
            </div>

            <div className="p-6 bg-slate-50 dark:bg-slate-700 rounded-xl border border-slate-100 dark:border-slate-600">
              <Lightbulb className="w-10 h-10 text-slate-600 dark:text-slate-300 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                Creative Problem-Solver
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                Combining innovative thinking with technical expertise to tackle
                complex challenges
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
