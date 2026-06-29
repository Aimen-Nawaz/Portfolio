function Skills() {
  const frontend = [
    { name: "HTML", percent: 95 },
    { name: "CSS", percent: 90 },
    { name: "JavaScript", percent: 85 },
    { name: "React", percent: 90 },
    { name: "Tailwind CSS", percent: 88 },
  ];

  const backend = [
    { name: "REST API Integration", percent: 80 },
  ];

  const others = [
    { name: "Zod Validation", percent: 70 },
    { name: "Git & GitHub", percent: 80 },
    { name: "UI/UX Understanding", percent: 65 },
  ];

  const SkillCard = ({ skill }) => (
    <div className="bg-white/60 border border-white/50 backdrop-blur-xl rounded-lg p-3 shadow-sm hover:shadow-md transition">
      <div className="flex justify-between items-center mb-1">
        <span className="text-gray-800 font-medium text-sm">
          {skill.name}
        </span>
        <span className="text-pink-500 font-semibold text-xs">
          {skill.percent}%
        </span>
      </div>

      <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-pink-500 to-blue-500 rounded-full"
          style={{ width: `${skill.percent}%` }}
        />
      </div>
    </div>
  );

  const Column = ({ title, data }) => (
    <div className="bg-white/40 backdrop-blur-xl border border-white/40 rounded-2xl p-5 shadow-md">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        {title}
      </h3>

      <div className="space-y-3">
        {data.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );

  return (
    <section
      id="skills"
      className="py-16 px-6 bg-gradient-to-br from-[#fff7ed] via-[#f8fafc] to-[#eef2ff]"
    >
      <div className="max-w-5xl mx-auto">

         <p className="uppercase tracking-[0.35em]   text-gray-500 text-sm text-center mb-4">
            My Skills
          </p>
        <h2 className="text-3xl md:text-6xl font-bold text-center text-gray-900">
           Skills
        </h2>

        <p className="text-center text-gray-500 mt-2 mb-10 text-sm">
        
        </p>

        {/* 2 Columns Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* LEFT COLUMN */}
          <Column title="Frontend" data={frontend} />

          {/* RIGHT COLUMN (STACKED) */}
          <div className="space-y-6">

            <Column title="Backend Tools" data={backend} />

            <Column title="Other Tools" data={others} />

          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;