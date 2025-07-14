import { Calendar, MapPin, Users, ExternalLink } from 'lucide-react';

export interface EventProps {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  isVirtual: boolean;
  attendees: number;
  image: string;
  type: 'upcoming' | 'past' | 'campaign';
  registrationLink?: string;
}

const EventCard = ({ event }: { event: EventProps }) => {
  const isPast = event.type === 'past';

  return (
    <div className={`card group overflow-hidden ${isPast ? 'opacity-75' : ''}`}>
      <div className="relative">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            event.type === 'campaign' 
              ? 'bg-accent-100 text-accent-800' 
              : event.type === 'upcoming'
                ? 'bg-green-100 text-green-800'
                : 'bg-gray-100 text-gray-800'
          }`}>
            {event.type === 'campaign' ? 'Campaign' : event.type === 'upcoming' ? 'Upcoming' : 'Past'}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-primary-600 transition-colors">
          {event.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="h-4 w-4 mr-2 text-primary-500" />
            <span>{event.date}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-2 text-primary-500" />
            <span>{event.location} {event.isVirtual && '(Virtual)'}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <Users className="h-4 w-4 mr-2 text-primary-500" />
            <span>{event.attendees.toLocaleString()} {isPast ? 'attended' : 'registered'}</span>
          </div>
        </div>
        
        {!isPast && event.registrationLink && (
          <a 
            href={event.registrationLink}
            className="flex items-center justify-center w-full btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register Now
            <ExternalLink className="ml-1 h-4 w-4" />
          </a>
        )}
        
        {isPast && (
          <button className="flex items-center justify-center w-full btn bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-not-allowed opacity-75">
            Event Ended
          </button>
        )}
      </div>
    </div>
  );
};

export default EventCard;