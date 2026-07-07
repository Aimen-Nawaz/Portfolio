import { SiReact, SiVite, SiTailwindcss } from "react-icons/si";
import { FaCode } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="flex justify-center items-center min-h-screen bg-linear-to-br from-[#fff7ed] via-[#f8fafc] to-[#eef2ff] overflow-hidden px-6"
    >
      
        <div className="max-w-4xl mx-auto text-center px-6">

          <p className="uppercase tracking-[0.35em]   text-gray-500 text-sm">
            About Me
          </p>

          <h2 className="mt-4 text-5xl font-bold text-gray-900">
            Frontend{" "}
            <span className="bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Developer
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 text-center leading-8">
            Hi, I'm <span className="font-semibold">Aimen Nawaz</span>, a Frontend
            Developer passionate about building responsive and modern web
            applications with React.js and Tailwind CSS.
          </p>

          <p className="mt-4 text-lg text-gray-600 leading-8 text-center">
            I enjoy creating clean user interfaces, integrating REST APIs,
            implementing form validation with React 
            Hook Form and Zod, and
            continuously learning modern frontend technologies.
          </p>



          {/* Quote */}
          <div className="mt-8 max-w-2xl mx-auto border-l-4 border-pink-500 pl-5 text-left">
            <p className="italic text-gray-600  leading-7 ">
              "Creating clean, responsive, and user-focused experiences with
              modern web technologies."
            </p>
          </div>
      </div>
    </section>
  );
}

export default About;