import { useEffect, useState } from "react";
import { SiReact, SiVite, SiTailwindcss } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { TbForms } from "react-icons/tb";

const Hero = () => {
  const fullText = "Frontend Developer";
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const speed = isDeleting ? 70 : 120;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(fullText.substring(0, index + 1));
        setIndex(index + 1);

        if (index === fullText.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setText(fullText.substring(0, index - 1));
        setIndex(index - 1);

        if (index === 0) {
          setIsDeleting(false);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [index, isDeleting]);

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind",
    "Node.js",
    "API",
    "Axios",
    "Zod",
    "Git",
    "UI/UX",
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-linear-to-br from-[#fff7ed] via-[#f8fafc] to-[#eef2ff]">

      {/* Background */}
      <div className="absolute w-112.5 h-112.5 bg-pink-300/25 rounded-full blur-[150px] -top-40 -right-40"></div>
      <div className="absolute w-112.5 h-112.5 bg-blue-300/25 rounded-full blur-[150px] -bottom-40 -left-40"></div>

      {/* CREATE TEXT */}
      <h1 className="absolute inset-0 flex items-center justify-center text-[120px] md:text-[220px] font-black text-black/2.5select-none pointer-events-none tracking-[0.3em]">
        AIMEN
      </h1>

      {/* MAIN GRID */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-28 md:pt-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div className="max-w-2xl">

            <h1 className="text-5xl  text-gray-700 md:text-8xl font-bold leading-[1.05] ">
              Hi,
              <br />
              I'm <span className="ml-2 bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent  border-purple-500 pr-3">
                Aimen Nawaz
              </span>
            </h1>

            <h2 className="text-2xl md:text-4xl font-semibold mt-6 text-gray-700">
              {text}
              <span className="border-r-4 border-purple-500 ml-2"></span>
            </h2>
            <p className="mt-8 text-lg md:text-xl text-gray-600 leading-relaxed">
              Building clean digital experiences with React, modern UI design,
              API integrations, Zod validation, and scalable frontend architecture.
            </p>


            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <a
                href="#projects"
                className="px-8 py-4 mb-4 rounded-2xl bg-black text-white text-center shadow-lg hover:-translate-y-1 transition"
              >
                View Projects
              </a>

              <a
                href="C:\Users\hp\Downloads\AimenCV.pdf"
                download
                className="px-8 py-4 mb-4 rounded-2xl bg-white border-2 border-gray-300 text-gray-800 text-center shadow-lg hover:-translate-y-1 transition"
              >
                Download CV
              </a>
            </div>



          </div>
          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-75 h-75">

              {/* React */}
              <div className="absolute top-6 left-10 rotate-12 bg-white/70 backdrop-blur-xl px-4 py-3 rounded-2xl shadow-lg border border-white/60">
                <SiReact className="text-sky-500 text-2xl" />
              </div>

              {/* Vite */}
              <div className="absolute top-20 right-8 -rotate-6 bg-white/70 backdrop-blur-xl px-4 py-3 rounded-2xl shadow-lg border border-white/60">
                <SiVite className="text-purple-500 text-2xl" />
              </div>

              {/* Tailwind */}
              <div className="absolute bottom-20 left-6 rotate-6 bg-white/70 backdrop-blur-xl px-4 py-3 rounded-2xl shadow-lg border border-white/60">
                <SiTailwindcss className="text-cyan-500 text-2xl" />
              </div>

              {/* Code / Dev */}
              <div className="absolute bottom-8 right-10 -rotate-12 bg-white/70 backdrop-blur-xl px-4 py-3 rounded-2xl shadow-lg border border-white/60">
                <FaCode className="text-yellow-500 text-2xl" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;