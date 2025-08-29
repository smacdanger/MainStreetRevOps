# UX Rules for MainStreet RevOps

## Core UX Principles

### 1. Conversion-Focused Design
- **Primary Goal**: Convert visitors to leads through assessment and contact forms
- **CTA Hierarchy**: Assessment form > Contact form > Other actions
- **Visual Priority**: Most important actions should be most visually prominent

### 2. User Journey Flow
- **Linear Path**: Home → Assessment → Contact → Conversion
- **No Dead Ends**: Every page should have clear next steps
- **Minimal Friction**: Reduce form fields and steps to essential only

### 3. Trust & Credibility
- **Social Proof**: Testimonials and case studies prominently displayed
- **Transparency**: Clear pricing and service descriptions
- **Professional Design**: Clean, modern aesthetic builds confidence

## Page-Specific UX Requirements

### Home Page (/)
- **Hero Section**: Clear value proposition with primary CTA prominently displayed
- **Problem/Solution Flow**: Logical progression from problem identification to solution
- **Multiple Conversion Points**: Assessment CTA featured in multiple sections
- **Social Proof**: Testimonials and case studies build credibility

### Assessment Page (/assessment)
- **Primary Conversion**: This is the main lead magnet - must be optimized for completion
- **Form Integration**: Tally form must load quickly and reliably
- **Value Communication**: Clear explanation of what user receives
- **Pricing Transparency**: Clear $500-$2000 pricing range

### Contact Page (/contact)
- **Secondary Conversion**: For users ready to engage directly
- **Form Simplicity**: Minimal required fields to reduce friction
- **Multiple Contact Methods**: Email, form, and potentially phone
- **Response Expectations**: Clear next steps after form submission

### Privacy Page (/privacy)
- **Legal Compliance**: Complete privacy policy for trust
- **Easy Navigation**: Link back to main site sections
- **Contact Information**: Real contact details for credibility

## Responsive Design Standards

### Mobile (320px - 768px)
- **Touch Targets**: Minimum 44px x 44px for all interactive elements
- **Readable Text**: Minimum 16px font size, appropriate line height
- **Navigation**: Hamburger menu with clear labels
- **Forms**: Full-width inputs with adequate spacing
- **CTAs**: Prominent, easy to tap buttons

### Tablet (768px - 1024px)
- **Layout Adaptation**: Smooth transition from mobile to desktop layouts
- **Grid Systems**: Appropriate column structures (often 2-column)
- **Touch-Friendly**: Maintain touch target sizes
- **Balanced Content**: Good use of white space

### Desktop (1024px+)
- **Visual Hierarchy**: Clear scanning patterns (F-pattern, Z-pattern)
- **Multi-Column Layouts**: Efficient use of screen real estate
- **Hover States**: Appropriate feedback for interactive elements
- **Content Density**: Balanced information density

## Accessibility Requirements

### WCAG 2.1 AA Compliance
- **Color Contrast**: Minimum 4.5:1 for normal text, 3:1 for large text
- **Keyboard Navigation**: All interactive elements accessible via keyboard
- **Screen Readers**: Proper semantic HTML and ARIA labels
- **Focus Indicators**: Clear visual focus states for all interactive elements

### Specific Implementations
- **Alt Text**: All images have descriptive alt attributes
- **Headings**: Proper heading hierarchy (H1 → H2 → H3)
- **Form Labels**: All form inputs have associated labels
- **Link Context**: Link text describes destination/purpose

## Performance Standards

### Loading Requirements
- **First Contentful Paint**: < 2 seconds
- **Largest Contentful Paint**: < 2.5 seconds
- **Form Loading**: Tally forms load within 3 seconds
- **Animation Performance**: 60fps smooth animations

### Optimization Requirements
- **Image Optimization**: WebP format with appropriate sizing
- **Code Splitting**: Lazy loading for non-critical components
- **Caching**: Appropriate browser caching headers
- **Bundle Size**: Minimal JavaScript payload

## Form UX Standards

### Assessment Form
- **Progressive Disclosure**: Show relevant questions based on previous answers
- **Progress Indication**: Clear progress through multi-step forms
- **Save State**: Allow users to return and complete later
- **Error Handling**: Clear, actionable error messages

### Contact Form
- **Required Fields**: Only essential information required
- **Validation**: Real-time validation with helpful feedback
- **Success States**: Clear confirmation of successful submission
- **Retry Mechanisms**: Graceful handling of submission failures

## Quality Scoring Criteria

### 10/10 - Exceptional UX
- Perfect conversion optimization
- Flawless user journey with no friction points
- Outstanding accessibility and performance
- Intuitive navigation and clear mental models

### 8-9/10 - Excellent UX
- Strong conversion optimization with minor improvements possible
- Clear user journey with minimal friction
- Good accessibility and performance
- Intuitive design with clear user paths

### 6-7/10 - Good UX
- Adequate conversion design but missing optimization opportunities
- Generally clear user journey with some confusion points
- Basic accessibility and performance requirements met
- Mostly intuitive but some unclear elements

### 4-5/10 - Fair UX
- Some conversion elements present but not optimized
- User journey has friction points or unclear paths
- Accessibility and performance issues present
- Confusing navigation or unclear purposes

### 1-3/10 - Poor UX
- Poor conversion optimization or missing CTAs
- Confusing or broken user journey
- Major accessibility and performance problems
- Unusable on mobile or major functionality issues

## Critical Success Metrics
1. **Conversion Rate**: Primary measurement of UX effectiveness
2. **Time to Completion**: How quickly users can complete desired actions
3. **User Engagement**: Scroll depth, time on page, page views
4. **Accessibility Score**: Automated and manual accessibility testing
5. **Performance Metrics**: Core Web Vitals compliance