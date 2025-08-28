# MainStreet RevOps - AI-Powered Sales Growth Website

MainStreet RevOps is a Next.js 15 website for a consulting business specializing in AI-powered sales processes, lead management automation, and technology consulting for small to mid-sized businesses.

**🎯 PRIMARY BUSINESS OBJECTIVE: Convert website visitors into paying customers through strategic lead capture and engagement.**

## Business Purpose & Conversion Focus

### Core Business Goals
This website is designed as a **lead generation and customer acquisition engine** with the following conversion priorities:

1. **Primary Conversion Goal**: Capture qualified leads through the assessment questionnaire and contact form
2. **Secondary Conversion Goal**: Schedule discovery calls and consultations  
3. **Tertiary Conversion Goal**: Build trust and credibility to nurture prospects through the sales funnel

### Target Customer Profile
- **Primary**: Small to mid-sized businesses (10-100 employees) struggling with manual sales processes
- **Pain Points**: Inefficient lead management, lack of sales automation, poor data visibility, manual workflows
- **Decision Makers**: Business owners, sales managers, operations directors seeking revenue growth
- **Budget Range**: $5K-$50K+ annual investment in sales operations improvements

### Sales Funnel Strategy
1. **Awareness**: SEO-optimized content attracts prospects searching for sales automation solutions
2. **Interest**: Value-driven content demonstrates expertise and builds trust
3. **Consideration**: Free assessment questionnaire captures lead information while providing value
4. **Intent**: Contact form and discovery call scheduling convert warm leads
5. **Purchase**: Follow-up consultation process converts leads to paying clients

### Key Conversion Elements to Always Preserve
- **Assessment CTA**: Primary lead magnet - prominently featured on every page
- **Contact Form**: Secondary conversion path with clear value proposition
- **Social Proof**: Testimonials and case studies build credibility
- **Clear Pricing**: Transparent service offerings reduce sales friction
- **Trust Signals**: Professional design, founder story, expertise demonstration

**ALWAYS reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.**

## Working Effectively

### Bootstrap and Install Dependencies
```bash
# Install all dependencies - NEVER CANCEL: takes 30 seconds
npm install  # Set timeout to 60+ seconds
```

### Build Commands
```bash
# Lint the codebase - fast execution
npm run lint  # Takes ~2 seconds

# Build for production - NEVER CANCEL: takes 25 seconds. Set timeout to 60+ minutes.
npm run build  # Uses Turbopack for faster builds

# Development server - starts in ~1 second
npm run dev  # Runs on http://localhost:3000

# Production server - IMPORTANT: requires fresh build first
npm run build && npm start  # Production server on http://localhost:3000
```

### Critical Build Notes
- **NEVER CANCEL builds or long-running commands** - builds may take 25+ seconds
- **Production server requires fresh build**: Always run `npm run build` before `npm start`
- **Set timeouts appropriately**: Use 60+ seconds for build commands, 30+ seconds for install
- **Turbopack enabled**: Builds use `--turbopack` flag for faster compilation

## Validation Requirements

### ALWAYS Test These Scenarios After Changes
1. **Navigation Flow**: Test all page transitions (Home → Assessment → Contact → Privacy)
2. **Tally Form Integration**: 
   - Test both contact and assessment forms load properly
   - Verify form submission works and shows success states
   - Check browser console for form loading errors
3. **Responsive Design**: Test navigation menu on mobile/desktop
4. **Static Page Generation**: Verify all pages build successfully in production
5. **🎯 CONVERSION PATH TESTING**: 
   - Verify all CTA buttons lead to contact/assessment pages
   - Test assessment form submission flow
   - Ensure pricing information is clearly visible and actionable
   - Validate mobile conversion experience (forms, buttons, CTAs)

### Manual Validation Commands
```bash
# Always validate before committing changes
npm run lint  # Must pass with no errors
npm run build  # Must complete successfully 
npm start  # Must start without errors after build

# Test in browser at http://localhost:3000
# Navigate through all pages: /, /assessment, /contact, /privacy
# Submit contact form with test data
```

## Project Structure and Key Files

### Main Application Structure
```
src/
├── app/
│   ├── page.tsx              # Home page with hero, sections, and CTAs
│   ├── assessment/page.tsx   # PRIMARY LEAD MAGNET - Tally form integration
│   ├── contact/
│   │   ├── layout.tsx        # Contact page metadata
│   │   └── page.tsx          # SECONDARY CONVERSION - Tally contact form
│   ├── privacy/page.tsx      # Privacy policy page
│   ├── layout.tsx           # Root layout with Navigation and Footer
│   ├── globals.css          # Global styles with Inter font and custom animations
│   └── favicon.ico          # Site favicon
├── components/
│   ├── Navigation.tsx        # Responsive nav with anchor links and CTA prominence
│   ├── Footer.tsx           # Site footer with contact info and trust signals
│   └── ui/                  # Reusable UI components
│       ├── Hero.tsx         # Hero section component with multiple variants
│       ├── CTAButton.tsx    # Reusable CTA button with variants
│       ├── FeatureCard.tsx  # Feature cards with hover animations
│       ├── TestimonialCard.tsx  # Testimonial components
│       ├── SectionDivider.tsx   # Decorative section dividers
│       ├── ProblemSection.tsx   # Problem identification section
│       ├── SolutionSection.tsx  # Solution overview section
│       ├── WhyUsSection.tsx     # Results and differentiators
│       ├── CaseStudiesSection.tsx  # Case studies and results
│       └── BeyondLeadsSection.tsx  # Extended services section
```

### Configuration Files
- `package.json` - Dependencies and scripts (Next.js 15, React 19, TypeScript, Framer Motion)
- `next.config.ts` - Next.js configuration (minimal setup)
- `tsconfig.json` - TypeScript configuration with strict mode
- `eslint.config.mjs` - ESLint configuration for Next.js with TypeScript
- `postcss.config.mjs` - PostCSS configuration for TailwindCSS v4
- `.gitignore` - Excludes node_modules, .next, .env files

## Integration Status and Important Notes

### Contact Form (src/app/contact/page.tsx)
- **Business Purpose**: Secondary conversion path for prospects ready to engage directly
- **Status**: ✅ LIVE - Tally form integration implemented
- **Current behavior**: Uses Tally embedded form (https://tally.so/embed/n98GLY)
- **Integration**: Complete with retry mechanisms and fallback loading
- **Test data accepted**: All form fields functional through Tally
- **🎯 Conversion Priority**: CRITICAL - this is a direct sales lead capture

### Assessment Page (src/app/assessment/page.tsx)  
- **Business Purpose**: PRIMARY LEAD MAGNET - captures prospect information while providing value
- **Status**: ✅ LIVE - Tally form integration implemented
- **Integration**: Complete with Tally embedded form (https://tally.so/embed/waR2VE)
- **Current content**: Professional assessment with pricing transparency ($500-$2,000)
- **Features**: Loading states, retry mechanisms, dynamic height adjustment
- **🎯 Conversion Priority**: HIGHEST - this is the main lead generation tool

### Privacy Policy (src/app/privacy/page.tsx)
- **Business Purpose**: Legal compliance and trust building
- **Status**: ✅ LIVE - Complete privacy policy implemented
- **Contact**: Uses real email (Sean@mainstrevops.com)
- **Integration**: Linked in footer and forms

### Deployment Ready
- **Vercel**: Connect GitHub repo for automatic deployment
- **Netlify**: Build command: `npm run build`, publish directory: `.next` or `out`
- **Static hosting**: Run `npm run build` and deploy `.next` folder

## Common Development Tasks

### Adding New Pages
1. Create new page.tsx file in src/app/[page-name]/
2. Export default React component with proper TypeScript typing
3. Add navigation link in src/components/Navigation.tsx (if needed)
4. **🎯 ALWAYS include conversion elements**: CTAs, contact forms, or assessment links
5. Test navigation and build process

### Modifying Styles
- Uses TailwindCSS v4 utility classes with Inter font
- Custom CSS animations defined in globals.css
- Responsive design with mobile-first approach
- Color scheme: slate/teal/blue (`bg-slate-900`, `text-teal-600`, etc.)
- **🎯 CTA Button Styling**: Use CTAButton component with variants (primary, secondary, accent)

### Working with UI Components
- All UI components in `src/components/ui/` use Framer Motion for animations
- Components are fully typed with TypeScript interfaces
- Reusable and composable design pattern
- Consistent spacing and color schemes

### Integration Updates
When integrating external services:
1. **Tally Forms**: Forms are already integrated - update form IDs if needed
2. **Email Links**: Update email addresses from Sean@mainstrevops.com if needed
3. **LinkedIn**: Update LinkedIn profile links from seanmacd profile
4. **🎯 Analytics Integration**: Add Google Analytics, Facebook Pixel, or conversion tracking
5. **🎯 CRM Integration**: Connect Tally forms to HubSpot, Salesforce, or lead management system

## Troubleshooting

### Production Server Issues
If `npm start` fails with route manifest errors:
```bash
# Solution: Clean build and restart
rm -rf .next
npm run build
npm start
```

### Build Cache Issues
If builds are slow or inconsistent:
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### Tally Form Issues
If Tally forms don't load:
1. Check browser console for script loading errors
2. Verify Tally embed URLs are correct
3. Test retry mechanisms are working
4. Fallback: Forms will show iframe directly if Tally.js fails

### Linting Errors
All code must pass ESLint before committing:
```bash
npm run lint  # Fix any errors before proceeding
```

## Expected Timings
- **npm install**: 30 seconds (first time) 
- **npm run lint**: 2 seconds
- **npm run build**: 25 seconds with Turbopack
- **npm run dev**: 1 second startup time
- **npm start**: 1 second startup (after successful build)

**CRITICAL**: Always allow sufficient time for operations to complete. NEVER CANCEL builds or installs prematurely.