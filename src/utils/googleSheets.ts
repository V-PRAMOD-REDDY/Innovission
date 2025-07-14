// Google Sheets API utility functions
const GOOGLE_SHEETS_API_KEY = import.meta.env.VITE_GOOGLE_SHEETS_API_KEY;

interface GoogleSheetsConfig {
  spreadsheetId: string;
  range: string;
}

// Configuration for different data sources
export const SHEETS_CONFIG = {
  courses: {
    spreadsheetId: '1your-spreadsheet-id-here',
    range: 'Courses!A2:K100' // Adjust range as needed
  },
  events: {
    spreadsheetId: '1your-spreadsheet-id-here',
    range: 'Events!A2:J100'
  },
  testimonials: {
    spreadsheetId: '1your-spreadsheet-id-here',
    range: 'Testimonials!A2:E100'
  },
  services: {
    spreadsheetId: '1your-spreadsheet-id-here',
    range: 'Services!A2:G100' // Title, Description, Icon, Link, Price, Category, Featured
  },
  jobListings: {
    spreadsheetId: '1your-spreadsheet-id-here',
    range: 'Jobs!A2:H100'
  }
};

// Generic function to fetch data from Google Sheets
export async function fetchSheetData(config: GoogleSheetsConfig): Promise<any[]> {
  if (!GOOGLE_SHEETS_API_KEY) {
    console.warn('Google Sheets API key not found. Using fallback data.');
    return [];
  }

  try {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${config.spreadsheetId}/values/${config.range}?key=${GOOGLE_SHEETS_API_KEY}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data.values || [];
  } catch (error) {
    console.error('Error fetching Google Sheets data:', error);
    return [];
  }
}

// Transform raw sheet data to course objects
export function transformCoursesData(rawData: any[]): any[] {
  return rawData.map((row, index) => ({
    id: index + 1,
    title: row[0] || '',
    description: row[1] || '',
    instructor: row[2] || '',
    category: row[3] || '',
    level: row[4] || 'Beginner',
    duration: row[5] || '',
    students: parseInt(row[6]) || 0,
    rating: parseFloat(row[7]) || 4.5,
    price: row[8] === 'Free' ? 'Free' : parseInt(row[8]) || 0,
    image: row[9] || 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }));
}

// Transform raw sheet data to event objects
export function transformEventsData(rawData: any[]): any[] {
  return rawData.map((row, index) => ({
    id: index + 1,
    title: row[0] || '',
    description: row[1] || '',
    date: row[2] || '',
    location: row[3] || '',
    isVirtual: row[4]?.toLowerCase() === 'true',
    attendees: parseInt(row[5]) || 0,
    image: row[6] || 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    type: row[7] || 'upcoming',
    registrationLink: row[8] || '#register'
  }));
}

// Transform raw sheet data to testimonial objects
export function transformTestimonialsData(rawData: any[]): any[] {
  return rawData.map((row, index) => ({
    id: index + 1,
    name: row[0] || '',
    role: row[1] || '',
    content: row[2] || '',
    avatar: row[3] || 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600'
  }));
}

// Transform raw sheet data to service objects
export function transformServicesData(rawData: any[]): any[] {
  return rawData.map((row, index) => ({
    id: index + 1,
    title: row[0] || '',
    description: row[1] || '',
    icon: row[2] || 'File', // Icon name from lucide-react
    link: row[3] || '#',
    price: row[4] === 'Free' ? 'Free' : parseInt(row[4]) || 0,
    category: row[5] || 'General',
    featured: row[6]?.toLowerCase() === 'true'
  }));
}

// Transform raw sheet data to job listing objects
export function transformJobsData(rawData: any[]): any[] {
  return rawData.map((row, index) => ({
    id: index + 1,
    title: row[0] || '',
    company: row[1] || '',
    location: row[2] || '',
    type: row[3] || 'Full-time',
    experience: row[4] || '',
    skills: row[5]?.split(',').map((skill: string) => skill.trim()) || [],
    salary: row[6] || '',
    applyLink: row[7] || '#'
  }));
}

// Cache management
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes
const cache = new Map<string, { data: any; timestamp: number }>();

export async function getCachedSheetData(key: string, config: GoogleSheetsConfig, transformer: (data: any[]) => any[]): Promise<any[]> {
  const cached = cache.get(key);
  const now = Date.now();
  
  if (cached && (now - cached.timestamp) < CACHE_DURATION) {
    return cached.data;
  }
  
  const rawData = await fetchSheetData(config);
  const transformedData = transformer(rawData);
  
  cache.set(key, { data: transformedData, timestamp: now });
  return transformedData;
}