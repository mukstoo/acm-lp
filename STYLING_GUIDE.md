# ACM Landing Page - Styling Guide for AI Agents

This document provides comprehensive styling guidelines for maintaining consistent design across the ACM (Aceleração do Ciclo Metabólico) application. Follow these patterns when creating new pages or components.

## Project Overview

This is a Next.js 15 fitness landing page application using:
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4
- **Typography**: Inter font family
- **Language**: Portuguese (Brazilian)
- **Purpose**: Landing page for ACM weight loss method

## Color Palette

### Primary Colors
```css
/* Brand Colors */
--primary-dark-plum: rgb(43, 24, 33)     /* Main background for hero/problems sections */
--primary-yellow: rgb(255, 222, 89)      /* Brand accent, buttons, headings */
--primary-yellow-alt: rgb(230, 189, 23)  /* Alternative yellow for some headings */
--primary-white: #ffffff                 /* Clean backgrounds */
--primary-black: #000000                 /* Text and coach section background */
--primary-red: rgb(255, 49, 49)         /* Price section background */

/* Supporting Colors */
--success-green: #10b981 (green-500)    /* Check marks, success indicators */
--error-red: #ef4444 (red-500)          /* Error states, crossed-out items */
```

### Usage Guidelines
- **Dark Plum**: Use for hero sections and problem identification areas
- **Primary Yellow**: Use for main CTAs, primary headings, and brand elements
- **Alternative Yellow**: Use for section headings and secondary brand elements
- **White**: Use for content sections and card backgrounds
- **Black**: Use for coach sections and body text
- **Red**: Use sparingly for price sections and urgency elements

## Typography

### Font Configuration
```css
/* Primary Font */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
```

### Heading Hierarchy

#### H1 - Hero Headings
```css
/* Mobile */
font-size: 42px (text-[42px])
font-weight: 900 (font-black)
line-height: 1.0
color: rgb(255, 222, 89)

/* Desktop */
font-size: 56px (lg:text-[56px])
margin-bottom: 48px (lg:mb-12)
```

#### H2 - Section Headings
```css
/* Mobile */
font-size: 30-32px (text-[30px] to text-[32px])
font-weight: 900 (font-black)
line-height: 1.1
color: rgb(255, 222, 89) or rgb(230, 189, 23)

/* Desktop */
font-size: 42px (lg:text-[42px])
margin-bottom: 64px (lg:mb-16)
text-align: center
```

#### H3 - Card/Component Headings
```css
/* Mobile */
font-size: 28px (text-[28px])
font-weight: 700 (font-bold)
color: rgb(230, 189, 23)

/* Desktop */
font-size: 42px (lg:text-[42px])
```

### Body Text Patterns

#### Primary Body Text
```css
/* Mobile */
font-size: 20px (text-xl)
font-weight: 900 (font-[900])
color: white (on dark backgrounds) or black (on light backgrounds)

/* Desktop */
font-size: 48px (lg:text-3xl) for hero content
font-size: 64px (lg:text-4xl) for section content
```

#### Secondary Body Text
```css
/* Mobile */
font-size: 16px (text-base)
font-weight: 400 (font-normal) or 500 (font-medium)
line-height: relaxed (leading-relaxed)

/* Desktop */
font-size: 20px (lg:text-xl)
```

#### List Items
```css
/* Mobile */
font-size: 20px (text-xl)
font-weight: 900 (font-[900]) for benefits
font-weight: 500 (font-medium) for features
color: white or black depending on background

/* Desktop */
font-size: 48px (lg:text-3xl) for benefits
font-size: 64px (lg:text-4xl) for main features
```

## Spacing System

### Container Patterns
```css
/* Mobile Container */
max-width: 384px (max-w-sm)
margin: 0 auto (mx-auto)
padding: 20px (px-5)

/* Desktop Container */
max-width: 1400px (xl:max-w-[1400px]) for hero
max-width: 1280px (lg:max-w-7xl) for content sections
padding: 48px (lg:px-12)
```

### Section Spacing
```css
/* Mobile */
padding-top: 48px (py-12)
padding-bottom: 48px (py-12)

/* Desktop */
padding-top: 64px (lg:py-16)
padding-bottom: 64px (lg:py-16)
```

### Element Spacing
```css
/* List Item Spacing */
gap: 16px (gap-4) mobile, 24px (lg:gap-6) desktop

/* Vertical Spacing */
margin-bottom: 32px (mb-8) mobile
margin-bottom: 48px (lg:mb-12) desktop

/* Large Spacing */
margin-bottom: 48px (mb-12) mobile
margin-bottom: 64px (lg:mb-16) desktop
```

## Component Patterns

### CTA Buttons
```css
/* Primary CTA Button */
display: inline-flex
flex-direction: column (flex-col)
align-items: center (items-center)
justify-content: center (justify-center)

/* Mobile */
width: 200px (w-[200px])
height: 70px (h-[70px])
padding: 12px 24px (px-6 py-3)
font-size: 14px (text-sm)
border-radius: 9999px (rounded-full)

/* Desktop */
width: 335px (lg:w-[335px])
height: 115px (lg:h-[115px])
padding: 32px 64px (lg:px-16 lg:py-8)
font-size: 18px (lg:text-lg)
line-height: 28px (lg:leading-7)

/* Styling */
background: rgb(255, 222, 89)
color: black (text-black)
font-weight: 700 (font-bold)
text-transform: uppercase
letter-spacing: widest (tracking-widest) for hero
letter-spacing: wide (tracking-wide) for others
transition: all 300ms (transition-all duration-300)
hover: scale-105 (hover:scale-105)
```

### Check Mark Icons
```css
/* Success Indicators */
width: 24px (w-6) mobile, 32px (lg:w-8) desktop
height: 24px (h-6) mobile, 32px (lg:h-8) desktop
background: green-500
border-radius: 50% (rounded) or 4px (rounded-lg)
color: white
display: flex
align-items: center
justify-content: center
font-weight: 700 (font-bold)
```

### Problem/Error Indicators
```css
/* Cross-out Indicators */
width: 24px (w-6) mobile, 32px (lg:w-8) desktop
height: 24px (h-6) mobile, 32px (lg:h-8) desktop
background: white
border: 2px solid red-500
border-radius: 50%
position: relative

/* Cross Line */
position: absolute
width: 24px (w-6) mobile, 32px (lg:w-8) desktop
height: 2px (h-0.5)
background: red-500
transform: rotate(45deg)
```

### Image Patterns
```css
/* Hero Images */
object-fit: cover (object-cover)
object-position: center (object-center)
width: 100% (w-full)
height: 100% (h-full)
quality: 85 for priority images, 70-75 for others
loading: "lazy" for non-critical images
priority: true for above-fold images
placeholder: "blur" with blurDataURL
```

### Card Components
```css
/* Content Cards */
background: white (bg-white)
border-radius: 16px (rounded-2xl)
padding: 24px (p-6) mobile, 48px (lg:p-12) desktop
display: flex
flex-direction: column
justify-content: space-between

/* Desktop Aspect Ratio */
aspect-ratio: 4/5 (lg:aspect-[4/5])
max-width: 512px (lg:max-w-lg)
margin: 0 auto (lg:mx-auto)
```

## Layout Patterns

### Grid Systems
```css
/* Two-Column Desktop Layout */
display: grid (lg:grid)
grid-template-columns: repeat(2, 1fr) (lg:grid-cols-2)
gap: 48px (lg:gap-12)

/* Three-Column Layout */
grid-template-columns: repeat(3, 1fr) (lg:grid-cols-3)
gap: 140px (lg:gap-35) /* Large gaps for testimonials */

/* Twelve-Column Layout */
grid-template-columns: repeat(12, 1fr) (lg:grid-cols-12)
gap: 32px (lg:gap-8)
```

### Responsive Breakpoints
```css
/* Mobile First Approach */
Base: 0px - 1023px (mobile/tablet)
lg: 1024px+ (desktop)
xl: 1280px+ (large desktop)

/* Content Width Breakpoints */
max-w-sm: 384px (mobile)
max-w-7xl: 1280px (desktop content)
max-w-[1400px]: 1400px (hero sections)
```

## Accessibility Guidelines

### Focus States
```css
/* Focus Visible */
outline: 2px solid var(--primary-yellow)
outline-offset: 2px
```

### Skip Navigation
```css
/* Screen Reader Only, Focus Visible */
.sr-only: position absolute, width 1px, height 1px, padding 0, margin -1px, overflow hidden, clip rect(0,0,0,0), white-space nowrap, border 0

.focus\:not-sr-only: position static, width auto, height auto, padding inherit, margin inherit, overflow visible, clip auto, white-space normal
```

### Color Contrast
- Ensure all text meets WCAG AA standards
- Yellow text (#FFDE59) on dark plum background (#2B1821)
- Black text on white backgrounds
- White text on dark backgrounds

## Content Guidelines

### Text Hierarchy
1. **Hero Headline**: Bold, attention-grabbing promise
2. **Sub-headline**: Method name and key benefit
3. **Benefits List**: Specific, measurable outcomes
4. **Section Headers**: Clear section purpose
5. **Body Text**: Supporting details and social proof

### Tone and Voice
- **Direct and confident**: Use strong, action-oriented language
- **Benefit-focused**: Emphasize outcomes and results
- **Time-specific**: Include specific timeframes (3 weeks, 16 minutes)
- **Portuguese Brazilian**: Use appropriate cultural references and language

## Implementation Notes

### Performance Optimization
- Use `next/image` with appropriate sizing and optimization
- Implement lazy loading for below-fold content
- Use Suspense boundaries for CTA components
- Optimize images with WebP format and blur placeholders

### SEO Considerations
- Structured heading hierarchy (H1 → H2 → H3)
- Semantic HTML elements
- Alt text for all images
- Skip navigation links

### Mobile-First Approach
- Design for mobile first, enhance for desktop
- Use responsive typography scaling
- Implement touch-friendly button sizes
- Ensure readable text sizes on small screens

## Code Examples

### Section Template
```tsx
<section className="px-5 py-12 lg:px-12 lg:py-16" style={{ backgroundColor: "rgb(43, 24, 33)" }}>
  <div className="max-w-sm mx-auto lg:max-w-7xl">
    <h2 
      className="font-black leading-tight mb-10 lg:mb-16 text-center text-[32px] lg:text-[42px]"
      style={{ color: "rgb(255, 222, 89)", lineHeight: "1.1" }}
    >
      Section Heading
    </h2>
    {/* Content */}
  </div>
</section>
```

### Benefit List Template
```tsx
<ul className="space-y-4 lg:space-y-2 mb-12 lg:mb-16">
  <li className="flex items-center gap-4 lg:gap-6">
    <span className="text-white text-xl lg:text-3xl font-[900]">
      Benefit Text
    </span>
    <span className="w-6 h-6 lg:w-8 lg:h-8 bg-green-500 rounded flex items-center justify-center text-white text-sm lg:text-base font-bold">
      ✓
    </span>
  </li>
</ul>
```

### CTA Button Template
```tsx
<CTAButton
  href="your-link-here"
  section="section-name"
  className="inline-flex flex-col items-center justify-center px-6 py-3 lg:px-16 lg:py-8 rounded-full font-bold text-black uppercase tracking-wide transition-all duration-300 hover:scale-105 text-sm lg:text-lg leading-tight lg:leading-7 bg-[rgb(255,222,89)] w-[200px] lg:w-[335px] h-[70px] lg:h-[115px]"
>
  <span>QUERO</span>
  <span>COMEÇAR</span>
  <span>AGORA</span>
</CTAButton>
```

## Final Notes

This styling guide ensures consistency across the ACM application. When creating new pages or components:

1. **Follow the mobile-first approach**
2. **Use the established color palette**
3. **Maintain typography hierarchy**
4. **Implement consistent spacing**
5. **Ensure accessibility compliance**
6. **Optimize for performance**

Always test on both mobile and desktop breakpoints to ensure responsive behavior matches the established patterns.
