import { useState, useEffect } from 'react';
import { 
  SHEETS_CONFIG, 
  getCachedSheetData, 
  transformCoursesData, 
  transformEventsData, 
  transformTestimonialsData, 
  transformServicesData,
  transformJobsData
} from '../utils/googleSheets';

// Import fallback data
import coursesData from '../data/courses';
import eventsData from '../data/events';
import servicesData from '../data/services';

export function useGoogleSheetsCourses() {
  const [courses, setCourses] = useState(coursesData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const data = await getCachedSheetData(
          'courses',
          SHEETS_CONFIG.courses,
          transformCoursesData
        );
        
        if (data.length > 0) {
          setCourses(data);
        }
      } catch (err) {
        setError('Failed to load courses from Google Sheets');
        console.error('Error loading courses:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return { courses, loading, error };
}

export function useGoogleSheetsEvents() {
  const [events, setEvents] = useState(eventsData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const data = await getCachedSheetData(
          'events',
          SHEETS_CONFIG.events,
          transformEventsData
        );
        
        if (data.length > 0) {
          setEvents(data);
        }
      } catch (err) {
        setError('Failed to load events from Google Sheets');
        console.error('Error loading events:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return { events, loading, error };
}

export function useGoogleSheetsTestimonials() {
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Software Engineer at Google',
      content: 'The Python course offered by Upskill Bharat was exceptional. It helped me crack my dream job interview at Google. The practical approach and mentor support made all the difference.',
      avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 2,
      name: 'Rahul Verma',
      role: 'UX Designer at Microsoft',
      content: 'Their portfolio builder service transformed my resume into a professional showcase. The personalized feedback helped me highlight my strengths effectively. Highly recommended!',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 3,
      name: 'Ananya Patel',
      role: 'Data Scientist at Amazon',
      content: 'Upskill Bharat\'s AI and ML courses provided practical knowledge I could immediately apply at work. Their mentors are industry experts who guide you through real-world problems.',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 4,
      name: 'Vikram Singh',
      role: 'Frontend Developer at Flipkart',
      content: 'The Web Development bootcamp helped me transition from a non-tech background to a developer role. Their job placement assistance was the cherry on top!',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const data = await getCachedSheetData(
          'testimonials',
          SHEETS_CONFIG.testimonials,
          transformTestimonialsData
        );
        
        if (data.length > 0) {
          setTestimonials(data);
        }
      } catch (err) {
        setError('Failed to load testimonials from Google Sheets');
        console.error('Error loading testimonials:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return { testimonials, loading, error };
}

export function useGoogleSheetsServices() {
  const [services, setServices] = useState(servicesData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const data = await getCachedSheetData(
          'services',
          SHEETS_CONFIG.services,
          transformServicesData
        );
        
        if (data.length > 0) {
          setServices(data);
        }
      } catch (err) {
        setError('Failed to load services from Google Sheets');
        console.error('Error loading services:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return { services, loading, error };
}

export function useGoogleSheetsJobs() {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'TechCorp India',
      location: 'Bangalore, Karnataka',
      type: 'Full-time',
      experience: '2-4 Years',
      skills: ['React', 'JavaScript', 'TypeScript'],
      salary: '₹8-12 LPA',
      applyLink: '#'
    },
    {
      id: 2,
      title: 'Data Analyst',
      company: 'FinTech Solutions',
      location: 'Hyderabad, Telangana',
      type: 'Full-time',
      experience: '1-3 Years',
      skills: ['Python', 'SQL', 'Tableau'],
      salary: '₹6-10 LPA',
      applyLink: '#'
    },
    {
      id: 3,
      title: 'Digital Marketing Specialist',
      company: 'GrowthMax',
      location: 'Remote',
      type: 'Full-time',
      experience: '2-5 Years',
      skills: ['SEO', 'Social Media', 'Content Strategy'],
      salary: '₹5-8 LPA',
      applyLink: '#'
    }
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const data = await getCachedSheetData(
          'jobs',
          SHEETS_CONFIG.jobs,
          transformJobsData
        );
        
        if (data.length > 0) {
          setJobs(data);
        }
      } catch (err) {
        setError('Failed to load jobs from Google Sheets');
        console.error('Error loading jobs:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return { jobs, loading, error };
}