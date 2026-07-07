const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Nexura Tech",
      duration: "March 2026 - Present",
      icon: "⚛️",
      description:
        "Developing responsive React applications, integrating APIs, implementing Zod validation, and creating reusable UI components using Tailwind CSS.",
    },
    {
      title: "WordPress Developer Intern",
      company: "U Tech Company",
      duration: "Jun 2025 - Sep 2025",
      icon: "🌐",
      description:
        "Customized WordPress websites, managed plugins and themes, improved website performance, and delivered client-focused solutions.",
    },
   
  ];

  return (
    <section
      id="experience"
      className="relative py-32 h-min-screen overflow-hidden bg-gradient-to-br from-[#fff7ed] via-[#f8fafc] to-[#eef2ff]"
    >
      {/* Background Blur */}
      <div className="absolute w-96 h-96 bg-pink-300/20 rounded-full blur-[140px] top-0 right-0"></div>
      <div className="absolute w-96 h-96 bg-blue-300/20 rounded-full blur-[140px] bottom-0 left-0"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Heading */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.35em] text-gray-500 text-sm mb-4">
            My Journey
          </p>

          <h2 className="text-5xl md:text-7xl font-bold text-gray-900">
            Experience
          </h2>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Building modern web experiences through professional work,
            internships, and freelance projects.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-500 via-purple-500 to-blue-500"></div>

          <div className="space-y-12">

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 border-4 border-white shadow-lg"></div>

                {/* Card */}
                <div className="ml-14 md:ml-0 md:w-[45%]">
                  <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl border border-white/60 shadow-xl hover:-translate-y-2 transition duration-300">
                    
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-3xl">{exp.icon}</span>

                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {exp.title}
                        </h3>

                        <p className="text-purple-600 font-medium">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-gray-500 mb-4">
                      {exp.duration}
                    </p>

                    <p className="text-gray-600 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;