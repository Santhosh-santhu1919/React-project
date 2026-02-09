import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import ServiceHeader from "../components/ServiceHeader";

const services = [
  {
    title: "Custom Software Development",
    slug:"custom-software",
    description:
      "Tailor-made software solutions designed to solve complex business problems and scale with your growth.",
    image: "/custom website.jpeg",
  },
  {
    title: "Web Development",
    slug:"web-development",
    description:
      "High-performance, responsive web applications built using modern frameworks and best practices.",
    image: "/Web development",
  },
  {
    title: "Mobile App Development",
    slug:"mobile-apps",
    description:
      "Native and cross-platform mobile apps that deliver seamless user experiences on iOS and Android.",
    image: "/mobile devlopment.jpeg",
  },
  {
    title: "Cloud Solutions",
    slug:"cloud-solutions",
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

const ServicesPage = () => {
  return (
    <>
      <Meta
        title="Our Services - BuildBros Innovations"
        description="Discover BuildBros Innovations' full range of software, cloud, AI, and digital transformation services."
      />

      <Hero
        title="Comprehensive Digital Solutions"
        subtitle="From strategy to execution, we deliver end-to-end services that transform your business and drive growth."
      />

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-slate-600">
              From concept to deployment, we provide end-to-end technology services tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
            {services.map((service) => (
               <ServiceCard
               key={service.slug}
               {...service}
               link={`/services/${service.slug}`}
    />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Our Process
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A streamlined approach that ensures transparency, quality, and timely delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your goals, users, and challenges." },
              { step: "02", title: "Design", desc: "Crafting intuitive UI/UX and scalable architecture." },
              { step: "03", title: "Development", desc: "Agile execution with continuous feedback loops." },
              { step: "04", title: "Launch & Support", desc: "Deployment, monitoring, and continuous optimization." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-primary text-white text-xl font-bold rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary-50 to-sky-100 rounded-2xl p-10 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Let’s Build Something Great
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Talk to our experts and discover how we can turn your ideas into powerful digital solutions.
            </p>
            <Link to="/contact" className="btn-primary">
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
