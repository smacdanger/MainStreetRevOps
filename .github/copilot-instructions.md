# MainStreet RevOps - AI-Powered Sales Growth Website

MainStreet RevOps is a Next.js 15 website for a consulting business specializing in AI-powered sales processes, lead management automation, and technology consulting for small to mid-sized businesses.

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
1. **Navigation Flow**: Test all page transitions (Home → About → Services → Assessment → Contact)
2. **Contact Form Submission**: 
   - Fill out name, email, and message fields
   - Submit form and verify success message appears: "Thank you for your message! We'll get back to you within 24 hours."
   - Check browser console for form data logging
3. **Responsive Design**: Test navigation menu on mobile/desktop
4. **Static Page Generation**: Verify all pages build successfully in production

### Manual Validation Commands
```bash
# Always validate before committing changes
npm run lint  # Must pass with no errors
npm run build  # Must complete successfully 
npm start  # Must start without errors after build

# Test in browser at http://localhost:3000
# Navigate through all pages: /, /about, /services, /assessment, /contact
# Submit contact form with test data
```

## Project Structure and Key Files

### Main Application Structure
```
src/
├── app/
│   ├── page.tsx              # Home page with hero, value pillars, testimonials
│   ├── about/page.tsx        # Founder story, mission, values
│   ├── services/page.tsx     # Three service offerings with pricing
│   ├── assessment/page.tsx   # Google Forms integration placeholder
│   ├── contact/page.tsx      # Contact form with client-side validation
│   └── layout.tsx           # Root layout with Navigation and Footer
├── components/
│   ├── Navigation.tsx        # Responsive nav with mobile hamburger menu
│   └── Footer.tsx           # Site footer with links and contact info
```

### Configuration Files
- `package.json` - Dependencies and scripts (Next.js 15, React 19, TypeScript)
- `next.config.ts` - Next.js configuration (minimal setup)
- `tsconfig.json` - TypeScript configuration with strict mode
- `eslint.config.mjs` - ESLint configuration for Next.js with TypeScript
- `postcss.config.mjs` - PostCSS configuration for TailwindCSS v4
- `.gitignore` - Excludes node_modules, .next, .env files

## Integration Status and Important Notes

### Contact Form (src/app/contact/page.tsx)
- **Status**: Client-side placeholder implementation
- **Current behavior**: Logs to console, shows success message
- **Integration needed**: Update form handler to connect with Formspree, Netlify Forms, or custom API
- **Test data accepted**: All form fields functional, validation works

### Assessment Page (src/app/assessment/page.tsx)  
- **Status**: Placeholder for Google Forms integration
- **Integration needed**: Replace placeholder with actual Google Forms embed code
- **Current content**: Sample question structure for discovery questionnaire

### Deployment Ready
- **Vercel**: Connect GitHub repo for automatic deployment
- **Netlify**: Build command: `npm run build`, publish directory: `.next` or `out`
- **Static hosting**: Run `npm run build` and deploy `.next` folder

## Common Development Tasks

### Adding New Pages
1. Create new page.tsx file in src/app/[page-name]/
2. Export default React component with proper TypeScript typing
3. Add navigation link in src/components/Navigation.tsx
4. Test navigation and build process

### Modifying Styles
- Uses TailwindCSS v4 utility classes
- No custom CSS files needed
- Responsive design with mobile-first approach
- Blue/white/gray color scheme (`bg-blue-600`, `text-gray-900`, etc.)

### Integration Updates
When integrating external services:
1. **Contact Form**: Update form submission handler in contact/page.tsx
2. **Calendly**: Replace placeholder link in contact page
3. **Google Forms**: Update assessment page with embed code
4. **Email Links**: Update mailto links with actual business email

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