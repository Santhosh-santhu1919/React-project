import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      title: "Custom Software Development",
      slug: "custom-software",
      description:
        "Tailor-made software solutions designed to solve complex business problems and scale with your growth.",
      image: "/custom website.png",
    },
    {
      title: "Web Development",
      slug: "web-development",
      description:
        "High-performance, responsive web applications built using modern frameworks and best practices.",
      image: "/Web development",
    },
    {
      title: "Mobile App Development",
      slug: "mobile-apps",
      description:
        "Native and cross-platform mobile apps that deliver seamless user experiences on iOS and Android.",
      image: "/mobile devlopment.jpeg",
    },
    {
      title: "Cloud Solutions",
      slug: "cloud-solutions",
      description:
        "Secure and scalable cloud infrastructure using AWS, Azure, and GCP to optimize performance and costs.",
      image: "/cloud solutions.png",
    },
    {
      title: "AI & Machine Learning",
      slug: "ai-ml",
      description:
        "Intelligent solutions that transform data into insights through automation and predictive analytics.",
      image: "/Ai&ml",
    },
    {
      title: "Data Science",
      slug: "data-science",
      description:
        "Advanced analytics and data-driven strategies to help businesses make informed decisions.",
      image: "/Data science.jpg",
    },
    {
      title: "UI/UX Design",
      slug: "ui-ux-design",
      description:
        "User-focused design solutions that enhance usability, engagement, and customer satisfaction.",
      image: "/Ui&ux design.jpeg",
    },
    {
      title: "DevOps & CI/CD",
      slug: "devops",
      description:
        "Automated pipelines and infrastructure to accelerate development and ensure reliable deployments.",
      image: "/Devops.jpg",
    },
    {
      title: "Data Analytics",
      slug: "data-analytics",
      description:
        "Custom dashboards and reporting tools to convert raw data into actionable business insights.",
      image: "/Dataanalytics1.webp",
    },
  ];

  return (
    <section className="bg-white py-24 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-6">
            Our Professional Services
          </h2>
          <p className="text-lg text-slate-700 font-medium">
            Click on a service to explore detailed solutions tailored to your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <Link key={service.slug} to={`/services/${service.slug}`}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition h-full">

                {/* Image Container */}
                <div className="h-60 w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-800 font-medium leading-relaxed">
                    {service.description}
                  </p>
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
