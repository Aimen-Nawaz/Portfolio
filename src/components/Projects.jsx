import gardening from "../images/gardening.png";
import product from "../images/product.png";
import flower from "../images/flower-shop.png";
import form from "../images/form.png";
import word from "../images/word.png";

function Projects() {
  const projects = [
    {
      title: "Eculpt Gardening Website",
      desc: "A fully responsive modern gardening service website with mobile-friendly UI, service pages, and contact section. Built with clean layout structure and smooth user experience.",
      tech: "React, Tailwind CSS",
      image: gardening,
    },
    {
      title: "Product App (Multi Page + API + Context)",
      desc: "A React-based product application with React Router for multiple pages, Context API for global state management, and API integration for dynamic product data fetching.",
      tech: "React, React Router, Context API, API Integration, Tailwind CSS",
      image: product,
    },
    {
      title: "Flower Shop Website (Multi Page)",
      desc: "A fully responsive multi-page flower shop website built using HTML, CSS, and JavaScript. Includes Home, Shop, About, and Contact pages with smooth navigation and modern UI design.",
      tech: "HTML, CSS, JavaScript",
      image: flower,
    },
    {
      title: "React Form App (React Hook Form + Zod)",
      desc: "A modern form handling application built with React Hook Form for efficient form state management and Zod for schema validation. Includes controlled inputs, validation errors, and clean UX.",
      tech: "React, React Hook Form, Zod, Tailwind CSS",
      image: form,
    },
    {
      title: "Word Reconstruction Model (Pharmaceutical Corpus + AI)",
      desc: "An AI-based NLP project that reconstructs missing or corrupted words using a pharmaceutical taxonomy corpus. Built using Python and machine learning sequence models to predict and restore correct word sequences with high accuracy.",
      tech: "Python, NLP, Machine Learning, Sequence Models",
      image: word,
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-linear-to-br from-[#f8f7ff] via-[#f3f0ff] to-[#eef2ff]"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900">
          My <span className="text-purple-500">Projects</span>
        </h2>

        <p className="text-center text-gray-500 mt-3 mb-14">
          Real-world React projects with modern UI & functionality
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-content">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full overflow-hidden"
            >

      
              <div className="h-54 w-full bg-white rounded-2xl flex">
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-h-full max-w-full  object-contain"
                />
              </div>

              {/* CONTENT (YOUR ORIGINAL CONTENT KEPT) */}
              <div className="p-2 flex flex-col grow">

                <h3 className="text-xl mt-0 font-bold text-gray-900">
                  {project.title}
                </h3>

                <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-4 items-center">
                  <span className="text-purple-600 font-bold p-2 text-sm">
                    Tech:
                  </span>

                  {project.tech.split(",").map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-purple-100 text-purple-400 px-3 py-1 rounded-full"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;