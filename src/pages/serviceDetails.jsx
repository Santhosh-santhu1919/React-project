import { useParams, Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Meta from '../components/Meta'

const serviceDetails = {
  'custom-software': {
    title: 'Custom Software Development',
    subtitle: 'End-to-end solutions tailored to your business goals.',
    image: '/custom website.jpeg',
    description:
      'Our custom software development team builds scalable, secure, and high-performing software to match your exact business requirements. We collaborate closely with your stakeholders to create software that grows with your company.',
    features: [
      'Enterprise-grade applications',
      'Custom ERP & CRM systems',
      'API integrations',
      'Third-party software integration',
      'Maintenance & ongoing support',
    ],
    technologies: ['React', 'Node.js', 'Spring Boot', 'MySQL', 'AWS', 'Docker'],
  },

  'web-development': {
    title: 'Web Development',
    subtitle: 'Modern, responsive web solutions for all platforms.',
    image: '/Web development',
    description:
      'We create fast, interactive, and SEO-friendly web applications that help your brand stand out. Whether you need a simple website or a large-scale SaaS platform, we deliver quality code and smooth performance.',
    features: [
      'Responsive design',
      'E-commerce platforms',
      'Custom CMS systems',
      'PWA (Progressive Web Apps)',
      'Single Page Applications (SPA)',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
  },

  'mobile-apps': {
    title: 'Mobile App Development',
    subtitle: 'Native and cross-platform apps that engage users.',
    image: '/mobile devlopment.jpeg',
    description:
      'We design and build mobile applications that offer seamless user experiences and robust functionality. Our apps are built for both iOS and Android using modern frameworks.',
    features: [
      'Native iOS & Android apps',
      'Cross-platform (React Native, Flutter)',
      'Push notifications',
      'App Store & Play Store deployment',
      'Offline functionality',
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
  },

  'cloud-solutions': {
    title: 'Cloud Solutions',
    subtitle: 'Scalable and secure cloud infrastructure for your business.',
    image: '/cloud solutions.png',
    description:
      'Our cloud solutions ensure your business is always online, scalable, and cost-effective. We specialize in AWS, Azure, and GCP to build and maintain world-class cloud infrastructure.',
    features: [
      'Cloud migration',
      'Serverless architecture',
      'Infrastructure as Code (IaC)',
      'CI/CD pipelines',
      'Monitoring & optimization',
    ],
    technologies: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Terraform'],
  },

  'ai-ml': {
    title: 'AI & Machine Learning',
    subtitle: 'Smarter, data-driven decisions with intelligent systems.',
    image: '/Ai&ml',
    description:
      'From predictive analytics to automation, our AI & ML experts build intelligent systems that analyze data, learn from it, and drive better business outcomes.',
    features: [
      'Predictive analytics',
      'Natural language processing',
      'Image recognition',
      'Recommendation engines',
      'Custom ML model development',
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas'],
  },

  'data-science': {
    title: 'Data Science',
    subtitle: 'Turn data into business intelligence and insights.',
    image: '/Data science.jpg',
    description:
      'We help organizations harness the power of data with advanced analytics, machine learning models, and custom dashboards for real-time insights.',
    features: [
      'Data cleaning & preprocessing',
      'Exploratory Data Analysis (EDA)',
      'Model training & deployment',
      'Data visualization',
      'Predictive modeling',
    ],
    technologies: ['Python', 'R', 'Tableau', 'Power BI', 'SQL'],
  },

  'ui-ux-design': {
    title: 'UI/UX Design',
    subtitle: 'Designs that delight users and drive conversions.',
    image: '/Ui&ux design.jpeg',
    description:
      'Our design team crafts intuitive interfaces that enhance usability and elevate your brand. Every pixel and interaction is focused on creating an exceptional user experience.',
    features: [
      'User research & wireframing',
      'UI/UX strategy & prototyping',
      'Responsive design systems',
      'Design handoff & documentation',
    ],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Framer'],
  },

  'devops': {
    title: 'DevOps & CI/CD',
    subtitle: 'Faster releases with reliable automation pipelines.',
    image: '/Devops.jpg',
    description:
      'We implement DevOps practices that improve efficiency, reduce manual errors, and enable faster, more reliable deployments across your software ecosystem.',
    features: [
      'Continuous integration & delivery (CI/CD)',
      'Containerization with Docker & Kubernetes',
      'Infrastructure monitoring',
      'Automated testing pipelines',
    ],
    technologies: ['Jenkins', 'GitHub Actions', 'Docker', 'Kubernetes', 'AWS'],
  },

  'data-analytics': {
    title: 'Data Analytics',
    subtitle: 'Data-driven strategies to fuel business growth.',
    image: '/Dataanalytics1.webp',
    description:
      'Transform your raw data into clear insights through analytics dashboards, BI reports, and custom data visualization tools that support informed decision-making.',
    features: [
      'Dashboard & reporting tools',
      'Data visualization',
      'Business intelligence (BI)',
      'ETL pipelines',
    ],
    technologies: ['Power BI', 'Tableau', 'Python', 'SQL', 'Excel'],
  },
}

const ServiceDetail = () => {
  const { serviceId } = useParams()
  const service = serviceDetails[serviceId]

  if (!service) {
    return (
      <div className="container-custom py-32 text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Service Not Found
        </h1>
        <p className="text-lg text-slate-600 mb-8">
          The service you’re looking for doesn’t exist.
        </p>
        <Link to="/services" className="btn-primary">
          Back to Services
        </Link>
      </div>
    )
  }

  return (
    <>
      <Meta
        title={`${service.title} | BuildBros Innovations`}
        description={service.description}
      />

      <Hero
        title={service.title}
        subtitle={service.subtitle}
        backgroundImage={service.image}
        className="py-20"
      />

      <section className="bg-white pt-24 pb-16">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="max-w-4xl mx-auto">

      {/* Image */}
      <div className="overflow-hidden rounded-3xl shadow-2xl mb-10">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Description */}
      <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-14 text-justify">
        {service.description}
      </p>

      {/* Features + Tech */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">

        {/* Features */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">
            What We Offer
          </h2>

          <ul className="space-y-4">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-green-500 text-lg">✔</span>
                <span className="text-slate-700 text-sm sm:text-base">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">
            Technologies We Use
          </h2>

          <div className="flex flex-wrap gap-3">
            {service.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-blue-50 text-blue-700 text-sm font-medium rounded-xl shadow-sm hover:shadow-md transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 sm:p-12 text-center shadow-md">
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
          Ready to Get Started?
        </h3>
        <p className="text-slate-600 mb-8 text-sm sm:text-base">
          Let’s build something impactful together.
        </p>

        <Link
          to="/contact"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          Contact Us
        </Link>
      </div>

    </div>
  </div>
</section>

    </>
  )
}

export default ServiceDetail ;
