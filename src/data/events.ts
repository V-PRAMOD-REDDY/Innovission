import { EventProps } from '../components/EventCard';

const eventsData: EventProps[] = [
  {
    id: 1,
    title: 'NCAT 2025 Preparation Workshop Series',
    description: 'Join our comprehensive workshop series designed to help you ace the NCAT 2025 examination. Expert faculty, mock tests, and personalized feedback.',
    date: 'Ongoing (June - Dec 2024)',
    location: 'Multiple Locations',
    isVirtual: true,
    attendees: 2450,
    image: 'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    type: 'campaign',
    registrationLink: '#register'
  },
  {
    id: 2,
    title: 'Web Development Hackathon',
    description: 'A 48-hour hackathon focused on building innovative web applications using modern frameworks. Cash prizes, mentorship, and networking opportunities.',
    date: 'July 15-17, 2024',
    location: 'Bengaluru Tech Hub',
    isVirtual: false,
    attendees: 320,
    image: 'https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    type: 'upcoming',
    registrationLink: '#register'
  },
  {
    id: 3,
    title: 'AI & Machine Learning Summit',
    description: 'Explore the latest trends in AI and machine learning with industry experts. Hands-on workshops, panel discussions, and networking sessions.',
    date: 'August 5-6, 2024',
    location: 'Online',
    isVirtual: true,
    attendees: 1850,
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    type: 'upcoming',
    registrationLink: '#register'
  },
  {
    id: 4,
    title: 'Resume Building Workshop',
    description: 'Learn how to craft an ATS-friendly resume that stands out to recruiters. Personalized feedback and tips from HR professionals.',
    date: 'August 20, 2024',
    location: 'Hyderabad',
    isVirtual: false,
    attendees: 175,
    image: 'https://images.pexels.com/photos/7691798/pexels-photo-7691798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    type: 'upcoming',
    registrationLink: '#register'
  },
  {
    id: 5,
    title: 'Python Programming Bootcamp',
    description: 'An intensive two-day bootcamp covering Python programming fundamentals. Perfect for beginners looking to start their coding journey.',
    date: 'May 10-11, 2024',
    location: 'Delhi',
    isVirtual: false,
    attendees: 243,
    image: 'https://images.pexels.com/photos/1181279/pexels-photo-1181279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    type: 'past'
  },
  {
    id: 6,
    title: 'Career Fair 2024',
    description: 'Connect with top employers from the tech industry. On-the-spot interviews, resume reviews, and career counseling sessions.',
    date: 'April 5, 2024',
    location: 'Mumbai',
    isVirtual: false,
    attendees: 1200,
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    type: 'past'
  },
];

export default eventsData;