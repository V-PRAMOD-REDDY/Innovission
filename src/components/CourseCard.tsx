import { Clock, Users, Tag, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface CourseProps {
  id: number;
  title: string;
  description: string;
  instructor: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  students: number;
  rating: number;
  price: number | 'Free';
  image: string;
}

const CourseCard = ({ course }: { course: CourseProps }) => {
  const formatPrice = (price: number | 'Free') => {
    if (price === 'Free') return 'Free';
    if (price === 0) return 'Free';
    return `₹${price}`;
  };

  const priceColor = () => {
    if (course.price === 'Free' || course.price === 0) return 'bg-green-100 text-green-800';
    if (course.price <= 10) return 'bg-blue-100 text-blue-800';
    if (course.price <= 20) return 'bg-purple-100 text-purple-800';
    return 'bg-primary-100 text-primary-800';
  };

  return (
    <div className="card group hover:translate-y-[-5px]">
      <div className="relative overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${priceColor()}`}>
            {formatPrice(course.price)}
          </span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center text-sm text-primary-600 mb-2">
          <Tag className="h-4 w-4 mr-1" />
          <span>{course.category}</span>
          <span className="mx-2">•</span>
          <span>{course.level}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-primary-600 transition-colors">
          {course.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
        
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Clock className="h-4 w-4 mr-1" />
          <span>{course.duration}</span>
          <span className="mx-2">•</span>
          <Users className="h-4 w-4 mr-1" />
          <span>{course.students.toLocaleString()} students</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i}
                  className={`h-4 w-4 ${i < Math.floor(course.rating) ? 'fill-current' : 'stroke-current'}`}
                />
              ))}
            </div>
            <span className="ml-1 text-sm text-gray-600">{course.rating.toFixed(1)}</span>
          </div>
          
          <Link 
            to={`/courses/${course.id}`}
            className="text-primary-600 font-medium hover:text-primary-800 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;