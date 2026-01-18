import { ArrowRight, Download } from "lucide-react";
import { useEffect, useState } from "react";

// Import beberapa foto
import fabyan1 from "../asssets/fabyan-1.png";
import fabyan2 from "../asssets/fabyan-2.png";
import fabyan3 from "../asssets/fabyan-3.png";

const photos = [fabyan1, fabyan2, fabyan3];

export default function Hero() {
  const [photoIndex, setPhotoIndex] = useState(0);

  // Ganti foto tiap 4 detik + fade
  useEffect(() => {
    const interval = setInterval(() => {
      setPhotoIndex((prev) => (prev + 1) % photos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* TEKS */}
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
              Fabyan Riza Kiram
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-700 dark:text-slate-300 font-medium mb-6">
              Data Scientist &amp; Machine Learning Engineer
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-xl md:max-w-none leading-relaxed">
              Building data-driven solutions for complex real-world problems
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:justify-start justify-center items-center mt-10">
              <button
                onClick={scrollToProjects}
                className="group px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                View Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="/cv.pdf"
                download
                className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-white rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-slate-200 dark:border-slate-600"
              >
                <Download className="w-5 h-5" />
                Download CV
              </a>
            </div>
          </div>

          {/* FOTO FADE IN / OUT */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-80 h-96 sm:w-96 sm:h-[28rem] md:w-[26rem] md:h-[32rem]">
              {/* Sedikit glow di belakang (tanpa kotak/border) */}
              <div className="absolute inset-0 rounded-3xl bg-blue-500/25 blur-3xl" />

              {/* Crossfade antara foto-foto */}
              <div className="relative w-full h-full flex items-end">
                {photos.map((photo, idx) => (
                  <img
                    key={idx}
                    src={photo}
                    alt="Fabyan Riza Kiram"
                    className={`absolute inset-0 w-full h-full object-contain object-bottom rounded-3xl transition-opacity duration-700
                      ${idx === photoIndex ? "opacity-100" : "opacity-0"}
                    `}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
