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
   <section className="bg-slate-50 pt-10 pb-20">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-0">

    {/* Hero Header */}
    <div className="text-center max-w-4xl mx-auto">
      <p className="text-blue-600 font-semibold uppercase tracking-wider mb-3">
        {project.industry}
      </p>

      <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
        {project.title}
      </h1>

      <p className="text-base sm:text-lg md:text-xl text-slate-600">
        {project.short}
      </p>
    </div>

    {/* Project Image */}
    <div className="overflow-hidden rounded-3xl shadow-2xl group">
      <img
        src={project.images[0]}
        alt={project.title}
        className="w-full h-auto object-cover transition duration-500 group-hover:scale-105"
      />
    </div>

    {/* Project Description */}
    <div className="max-w-4xl mx-auto text-slate-700 text-base sm:text-lg leading-relaxed space-y-6">
      <p className="text-justify">{project.long}</p>
    </div>

    {/* Divider */}
    <div className="border-t border-slate-200 pt-12"></div>

    {/* Back Button */}
    <div className="text-center">
      <Link
        to="/projects"
        className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-2xl font-semibold shadow-lg hover:bg-blue-700 hover:shadow-xl transition duration-300"
      >
        ← Back to Projects
      </Link>
    </div>

  </div>
</section>

  );
};

export default ProjectDetail;
