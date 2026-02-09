import { Link } from "react-router-dom";

const ServiceCard = ({ title, description, image, link }) => {
  return (
    <Link
      to={link}
      className="group block overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
    >
      {/* Image */}
      <div className="h-52 sm:h-56 w-full overflow-hidden rounded-t-2xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6 bg-white">
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-slate-800 font-medium leading-relaxed">{description}</p>
      </div>
    </Link>
  );
};

export default ServiceCard;
