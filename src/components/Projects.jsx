const Projects = () => {
  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
        Our Work
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="border border-slate-200 p-8 rounded-xl hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-slate-800 mb-2">
            Myntra E-Commerce Clone
          </h3>
          <p className="text-slate-600">
            React, Redux, JavaScript
          </p>
        </div>

        <div className="border border-slate-200 p-8 rounded-xl hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-slate-800 mb-2">
            Portfolio Website
          </h3>
          <p className="text-slate-600">
            React, HTML, CSS
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
