import { SiReact, SiVite, SiTailwindcss } from "react-icons/si";
import { FaCode } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="relative py-24 bg-linear-to-br from-[#fff7ed] via-[#f8fafc] to-[#eef2ff] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        
        <div className="flex justify-center">
          <div className="relative w-90 h-90">


            <div className="absolute inset-4 rounded-full  from-pink-500 via-purple-500 to-blue-500 backdrop-blur-2xl border border-white shadow-2xl flex flex-col items-center justify-center overflow-hidden">

              <div className="absolute w-52 h-52 bg-linear-to-r from-pink-300/30 via-purple-300/20 to-blue-300/30 rounded-full blur-3xl"></div>

              <div className="absolute top-8 right-10 flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-md">

              </div>

              <div className="relative w-22 h-22 rounded-full bg-linear-to-br from-pink-500 via-purple-500 to-blue-500 p-1 shadow-xl">

                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <span className="text-3xl font-extrabold bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                    AN
                  </span>
                </div>

              </div>

              <h3 className="mt-6 text-2xl font-bold text-gray-800">
                Aimen Nawaz
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                Frontend Developer
              </p>

              <div className="flex gap-2 mt-5 flex-wrap justify-center px-6">

                <span className="px-3 py-1 rounded-full bg-pink-100 text-pink-600 text-xs font-medium">
                  React
                </span>

                <span className="px-3 py-1 rounded-full bg-cyan-100 text-cyan-600 text-xs font-medium">
                  Tailwind
                </span>

                <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-600 text-xs font-medium">
                  JavaScript
                </span>

              </div>

            </div>

          </div>
        </div>

        <div>

          <p className="uppercase tracking-[0.35em]   text-gray-500 text-sm">
            About Me
          </p>

          <h2 className="mt-4 text-5xl font-bold text-gray-900">
            Frontend{" "}
            <span className="bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Developer
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Hi, I'm <span className="font-semibold">Aimen Nawaz</span>, a Frontend
            Developer passionate about building responsive and modern web
            applications with React.js and Tailwind CSS.
          </p>

          <p className="mt-4 text-lg text-gray-600 leading-8">
            I enjoy creating clean user interfaces, integrating REST APIs,
            implementing form validation with React Hook Form and Zod, and
            continuously learning modern frontend technologies.
          </p>



          {/* Quote */}
          <div className="mt-8 border-l-4 border-pink-500 pl-5">
            <p className="italic text-gray-600">
              "Creating clean, responsive, and user-focused experiences with
              modern web technologies."
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;