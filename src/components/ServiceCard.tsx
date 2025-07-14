import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface ServiceProps {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  price?: number | 'Free';
}

const ServiceCard = ({ service }: { service: ServiceProps }) => {
  return (
    <div className="card h-full group hover:-translate-y-1 p-6">
      <div className="p-4 mb-4 inline-block bg-primary-50 rounded-xl text-primary-600">
        {service.icon}
      </div>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-primary-600 transition-colors">
        {service.title}
      </h3>
      
      <p className="text-gray-600 mb-4">{service.description}</p>
      
      {service.price !== undefined && (
        <div className="mb-4">
          <span className="font-medium text-lg text-gray-900">
            {service.price === 'Free' ? 'Free' : `₹${service.price}`}
          </span>
        </div>
      )}
      
      <Link 
        to={service.link} 
        className="flex items-center text-primary-600 font-medium mt-auto group-hover:text-primary-800 transition-all"
      >
        Learn More
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};

export default ServiceCard;