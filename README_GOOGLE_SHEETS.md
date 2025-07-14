# Google Sheets Integration Guide

This guide explains how to set up dynamic content management using Google Sheets for your website.

## 🚀 Quick Setup

### 1. Get Google Sheets API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the Google Sheets API
4. Create credentials (API Key)
5. Copy the API key

### 2. Environment Setup

1. Copy `.env.example` to `.env`
2. Replace `your_google_sheets_api_key_here` with your actual API key

```bash
cp .env.example .env
```

### 3. Create Your Google Sheets

Create separate sheets for different content types with the following structures:

#### 📚 Courses Sheet
**Sheet Name:** `Courses`
**Columns (A-K):**
- A: Title
- B: Description  
- C: Instructor
- D: Category
- E: Level (Beginner/Intermediate/Advanced)
- F: Duration
- G: Students (number)
- H: Rating (decimal)
- I: Price (number or "Free")
- J: Image URL

#### 📅 Events Sheet
**Sheet Name:** `Events`
**Columns (A-I):**
- A: Title
- B: Description
- C: Date
- D: Location
- E: Is Virtual (true/false)
- F: Attendees (number)
- G: Image URL
- H: Type (upcoming/past/campaign)
- I: Registration Link

#### 💬 Testimonials Sheet
**Sheet Name:** `Testimonials`
**Columns (A-D):**
- A: Name
- B: Role
- C: Content
- D: Avatar URL

#### 🛠️ Services Sheet
**Sheet Name:** `Services`
**Columns (A-G):**
- A: Title
- B: Description
- C: Icon (Lucide icon name)
- D: Link
- E: Price (number or "Free")
- F: Category
- G: Featured (true/false)

#### 💼 Jobs Sheet
**Sheet Name:** `Jobs`
**Columns (A-H):**
- A: Title
- B: Company
- C: Location
- D: Type
- E: Experience
- F: Skills (comma-separated)
- G: Salary
- H: Apply Link

### 4. Configure Sheet IDs

1. Open your Google Sheet
2. Copy the spreadsheet ID from the URL:
   ```
   https://docs.google.com/spreadsheets/d/[SPREADSHEET_ID]/edit
   ```
3. Update the `SHEETS_CONFIG` in `src/utils/googleSheets.ts`:

```typescript
export const SHEETS_CONFIG = {
  courses: {
    spreadsheetId: 'your-courses-spreadsheet-id',
    range: 'Courses!A2:K100'
  },
  events: {
    spreadsheetId: 'your-events-spreadsheet-id', 
    range: 'Events!A2:J100'
  },
  services: {
    spreadsheetId: 'your-services-spreadsheet-id',
    range: 'Services!A2:G100'
  },
  // ... other configs
};
```

### 5. Make Sheets Public

**Option 1: Public Access**
1. Click "Share" in your Google Sheet
2. Change access to "Anyone with the link can view"

**Option 2: Service Account (Recommended for production)**
1. Create a service account in Google Cloud Console
2. Share your sheets with the service account email
3. Use service account credentials instead of API key

## 🔧 Features

### ✅ What's Included

- **Real-time Data Sync** - Content updates automatically from Google Sheets
- **Caching System** - 5-minute cache to reduce API calls
- **Fallback Data** - Uses static data if Sheets are unavailable
- **Loading States** - Beautiful loading spinners while fetching data
- **Error Handling** - Graceful error messages with retry options
- **Type Safety** - Full TypeScript support with proper data transformation

### 📊 Supported Content Types

- **Courses** - Dynamic course listings with filtering
- **Events** - Event management with different types
- **Testimonials** - Customer testimonials slider
- **Services** - Service offerings with pricing (NEW!)
- **Job Listings** - Job board with company details

### 🎨 UI Indicators

- ✅ **Green checkmarks** show when data is loaded from Google Sheets
- 🔄 **Loading spinners** during data fetch
- ⚠️ **Error messages** with retry buttons if something goes wrong

## 📝 Content Management

### Adding New Content

1. Open your Google Sheet
2. Add a new row with the required data
3. Save the sheet
4. Content will appear on your website within 5 minutes (cache refresh)

### Updating Existing Content

1. Edit the relevant row in your Google Sheet
2. Save the changes
3. Changes will reflect on the website after cache refresh

### Content Guidelines

- **Images**: Use high-quality URLs from Pexels, Unsplash, or your CDN
- **Descriptions**: Keep them concise but informative
- **Pricing**: Use numbers for paid content, "Free" for free content
- **Categories**: Be consistent with naming conventions

## 🛠️ Services Sheet Structure

The Services sheet now supports the new INNOVISSION services:

### Example Services Data:
```
Title | Description | Icon | Link | Price | Category | Featured
Basic Resume Design | Get a clean, professional 1-page resume... | File | /services/basic-resume | 7 | Resume | false
Premium Resume + LinkedIn | Stand out with a recruiter-friendly... | Users | /services/premium | 25 | Resume | true
Portfolio Website | Build your personal brand... | Laptop | /services/portfolio | 149 | Website | false
Mini Project + Source Code | Need a project for college... | Code | /services/project | 49 | Projects | false
Posters & Invitations | Custom posters, birthday cards... | Palette | /services/design | 29 | Design | false
WhatsApp Marketing Course | Learn how to grow your business... | MessageSquare | /services/marketing | 99 | Course | false
Career Combo Kit | All-in-One Bundle... | Package | /services/combo | 99 | Bundle | true
```

## 🔒 Security Best Practices

1. **API Key Security**
   - Never commit your `.env` file to version control
   - Use environment variables in production
   - Restrict API key usage to specific domains

2. **Sheet Access**
   - Use service accounts for production
   - Regularly review sheet permissions
   - Monitor API usage in Google Cloud Console

3. **Data Validation**
   - Validate data before displaying
   - Handle missing or malformed data gracefully
   - Implement proper error boundaries

## 🚀 Deployment

### Environment Variables

Set these in your deployment platform:

```bash
VITE_GOOGLE_SHEETS_API_KEY=your_actual_api_key
```

### Popular Platforms

**Netlify:**
1. Go to Site Settings → Environment Variables
2. Add `VITE_GOOGLE_SHEETS_API_KEY`

**Vercel:**
1. Go to Project Settings → Environment Variables  
2. Add `VITE_GOOGLE_SHEETS_API_KEY`

**Other Platforms:**
Follow their specific environment variable setup process.

## 🛠️ Troubleshooting

### Common Issues

**1. "Failed to load data from Google Sheets"**
- Check if your API key is correct
- Verify sheet permissions (public or shared)
- Ensure the spreadsheet ID is correct

**2. "Data not updating"**
- Wait for cache to refresh (5 minutes)
- Check if you're editing the correct sheet
- Verify the range in `SHEETS_CONFIG`

**3. "API quota exceeded"**
- Implement longer caching
- Use service account with higher quotas
- Optimize API calls

### Debug Mode

Add this to see detailed logs:

```typescript
// In googleSheets.ts
console.log('Fetching from:', url);
console.log('Response:', data);
```

## 📈 Performance Tips

1. **Optimize Ranges** - Only fetch the data you need
2. **Increase Cache Duration** - For less frequently updated content
3. **Lazy Loading** - Load data only when needed
4. **Error Boundaries** - Prevent entire page crashes

## 🎯 Next Steps

1. Set up your Google Sheets with sample data
2. Configure the API key and sheet IDs
3. Test the integration locally
4. Deploy to your hosting platform
5. Monitor API usage and performance

---

**Need Help?** Check the Google Sheets API documentation or create an issue in the repository.