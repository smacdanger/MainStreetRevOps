# MainStreet RevOps Style Guide

## Visual Design Standards

### Color Palette
- **Primary Background**: `bg-white` (#ffffff)
- **Dark Background**: `bg-slate-900` (#0f172a) 
- **Secondary Background**: `bg-slate-50` (#f8fafc)
- **Primary Text**: `text-slate-900` (#0f172a)
- **Secondary Text**: `text-slate-600` (#475569)
- **Accent Colors**: 
  - Teal: `text-teal-600` (#0891b2), `bg-teal-50` (#f0fdfa)
  - Blue: `text-blue-600` (#2563eb), `bg-blue-50` (#eff6ff)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: 
  - H1: `text-4xl md:text-5xl font-bold` (36px/48px mobile/desktop)
  - H2: `text-3xl font-bold` (30px)
  - H3: `text-xl font-semibold` (20px)
- **Body Text**: `text-base` (16px) or `text-lg` (18px) for emphasis
- **Line Height**: Consistent with Tailwind defaults (1.5-1.75)

### Spacing & Layout
- **Container**: `max-w-4xl mx-auto px-4 sm:px-6 lg:px-8`
- **Section Padding**: `py-12` or `py-16` for major sections
- **Grid Systems**: `grid grid-cols-1 md:grid-cols-2 gap-8`
- **Card Spacing**: `p-6` for card interiors, `mb-8` for section spacing

### Visual Elements
- **Border Radius**: 
  - Cards: `rounded-2xl` (16px)
  - Buttons: `rounded-xl` (12px)
  - Small elements: `rounded-full`
- **Shadows**: `shadow-sm`, `shadow-lg` for elevation
- **Borders**: `border border-slate-200` for subtle definition

### Buttons & CTAs
- **Primary CTA**: Gradient teal/blue background, white text, bold font
- **Secondary CTA**: Border style with transparent background
- **Hover States**: Smooth transitions with `transition-all duration-300`
- **Size Variants**: `px-8 py-4` (large), `px-6 py-3` (medium)

### Animations
- **Motion**: Framer Motion for entrance animations
- **Easing**: `ease-out` timing for natural feel
- **Reduced Motion**: Respect `prefers-reduced-motion` setting

## Quality Standards (10-point scale)

### 10/10 - Exceptional
- Perfect adherence to all style guidelines
- Exceptional visual hierarchy and typography
- Flawless responsive design across all devices
- Smooth, purposeful animations that enhance UX
- Perfect accessibility compliance

### 8-9/10 - Excellent  
- Strong adherence to style guidelines with minor variations
- Clear visual hierarchy and consistent typography
- Good responsive design with minor spacing issues
- Appropriate animations that don't interfere with usability
- Good accessibility with minor improvements needed

### 6-7/10 - Good
- Generally follows style guidelines with some inconsistencies
- Adequate visual hierarchy but some typography issues
- Responsive design works but may have spacing/alignment issues
- Animations present but may be distracting or inconsistent
- Basic accessibility but missing some features

### 4-5/10 - Fair
- Partial adherence to style guidelines
- Visual hierarchy unclear in some areas
- Responsive issues on some screen sizes
- Animations may be jarring or missing
- Accessibility concerns present

### 1-3/10 - Poor
- Major deviations from style guidelines
- Poor visual hierarchy and typography
- Significant responsive design issues
- Animations broken or interfering with usability
- Major accessibility violations

## Critical Requirements
1. **Mobile-First Design**: All layouts must work perfectly on mobile devices
2. **Conversion Focus**: CTAs must be prominent and clearly actionable
3. **Performance**: Smooth animations and fast loading times
4. **Accessibility**: WCAG 2.1 AA compliance minimum
5. **Brand Consistency**: Consistent use of colors, typography, and spacing