import { useParams, Link } from "react-router-dom";
import portfolioData from "../data/portfolio.json";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = portfolioData.find((item) => item.id === id);

  if (!project) {
    return (
      <div className="py-32 text-center">
        <h2 className="text-3xl font-bold">Project not found</h2>
        <Link to="/projects" className="text-primary underline mt-4 block">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Header */}
        <div className="text-center">
          <p className="text-primary font-semibold uppercase mb-2">
            {project.industry}
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            {project.title}
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {project.short}
          </p>
        </div>

        {/* Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full object-cover"
          />
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto text-lg text-slate-700 leading-relaxed">
          {project.long}
        </div>

        {/* Tech Stack */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Technology Stack</h3>
          <div className="flex flex-wrap gap-3">
            {/* {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-slate-100 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))} */}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {project.stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-blue-300 to-blue-600 p-6 rounded-xl text-center shadow"
            >
              <div className="text-3xl font-extrabold text-white">
                {stat.value}
              </div>
              <div className="text-white mt-2 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div className="text-center">
          <Link
            to="/projects"
            className="inline-block mt-10 px-8 py-4 bg-primary text-black rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            ← Back to Projects
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ProjectDetail;
