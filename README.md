# MainStreet RevOps - AI-Powered Sales Growth for SMBs

A modern, responsive website for a consulting business specializing in AI-powered sales processes, lead management automation, and technology consulting for small to mid-sized businesses.

## Features

- **Modern Tech Stack**: Built with Next.js 15, TypeScript, and TailwindCSS v4
- **Responsive Design**: Mobile-first approach with hamburger menu navigation
- **SEO Optimized**: Comprehensive metadata and semantic HTML structure
- **Professional Styling**: Clean blue/white/gray color scheme
- **Interactive Forms**: Contact form ready for integration with email services
- **Assessment Integration**: Placeholder for Google Forms discovery questionnaire
- **Deployment Ready**: Optimized for Vercel, Netlify, or any static hosting

## Pages

1. **Home** - Hero section, value pillars, testimonials, and CTAs
2. **About** - Founder story, mission, values, and experience
3. **Services** - Three core service offerings with detailed descriptions
4. **Assessment** - Discovery questionnaire integration (placeholder for Google Forms)
5. **Contact** - Contact form and Calendly integration placeholders

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deployment

### Vercel (Recommended)
1. Push to GitHub repository
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder (if using static export) or connect the repository

### Other Hosting
1. Build the project: `npm run build`
2. Upload the `.next` folder to your hosting provider

## Integration Setup

### Google Forms Integration
1. Create your Google Form with the discovery questions
2. Get the embed code from Google Forms
3. Replace the placeholder in `src/app/assessment/page.tsx`

### Contact Form Integration
1. Sign up for a service like Formspree, Netlify Forms, or EmailJS
2. Update the form submission handler in `src/app/contact/page.tsx`
3. Configure your email service endpoint

### Calendly Integration
1. Set up your Calendly account and create a discovery call event
2. Get the embed code or direct link
3. Replace the placeholder in `src/app/contact/page.tsx`

## Customization

### Content Updates
- Update company information in components and pages
- Replace placeholder email addresses and contact information
- Customize testimonials and case studies
- Modify service offerings and pricing

### Styling
- Colors defined in TailwindCSS classes throughout components
- Professional blue theme: `blue-600`, `blue-800`, etc.
- Easy to customize by updating class names

### SEO
- Update metadata in each page's layout or page component
- Customize Open Graph tags for social media sharing
- Add Google Analytics or other tracking

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS v4
- **Deployment**: Vercel/Netlify ready
- **Forms**: Ready for integration with Formspree, Netlify Forms, or custom API

## Project Structure

```
src/
├── app/
│   ├── about/           # About page
│   ├── assessment/      # Discovery questionnaire
│   ├── contact/         # Contact form and info
│   ├── services/        # Service offerings
│   ├── layout.tsx       # Root layout with navigation
│   └── page.tsx         # Home page
├── components/
│   ├── Navigation.tsx   # Responsive navigation
│   └── Footer.tsx       # Site footer
```

## License

This project is ready for customization and deployment for MainStreet RevOps consulting business.
