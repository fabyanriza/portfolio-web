import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Fabyan Riza</h3>
            <p className="text-slate-400 dark:text-slate-500">
              Data Scientist & Machine Learning Engineer building solutions for
              a data-driven future.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-slate-400 dark:text-slate-500 hover:text-white dark:hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-slate-400 dark:text-slate-500 hover:text-white dark:hover:text-white transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-slate-400 dark:text-slate-500 hover:text-white dark:hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://linkedin.com/in/fabyan-riza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 dark:text-slate-500 hover:text-white dark:hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/fabyanriza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 dark:text-slate-500 hover:text-white dark:hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="mailto:fabyan.riza@example.com"
                  className="text-slate-400 dark:text-slate-500 hover:text-white dark:hover:text-white transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 dark:border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 dark:text-slate-500 text-sm">
            {currentYear} Fabyan Riza. All rights reserved.
          </p>
          <p className="text-slate-400 dark:text-slate-500 text-sm flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-red-500" /> using React &
            Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
