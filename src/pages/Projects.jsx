import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Meta from "../components/Meta";
import portfolioData from "../data/portfolio.json";

const Projects = () => {
  return (
    <>
      <Meta
        title="Projects | BuildBro Innovations"
        description="Explore our portfolio of successful projects across industries."
      />

      <Hero
        title="Our Products & Projects"
        subtitle="Real-world digital products built with modern technologies"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.map((project) => (
              <Link
                key={project.id}
                to={`/portfolio/${project.id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition"
              >
                {/* Image */}
                <div className="aspect-video overflow-hidden bg-slate-100">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-sm font-semibold text-primary mb-2">
                    {project.industry}
                  </p>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4">
                    {project.short}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {/* {project.stack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-100 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))} */}
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default Projects;
