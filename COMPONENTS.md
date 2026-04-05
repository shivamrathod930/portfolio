# Components Documentation

## Overview

This portfolio uses a modular component architecture. All components are functional and use Framer Motion for animations.

## Reusable Components (Common)

Located in `src/components/Common/`

### Button Component

**File:** `src/components/Common/Button.jsx`

A versatile button component with multiple variants and sizes.

**Props:**
```jsx
<Button
  variant="primary" | "secondary" | "outline" | "ghost"
  size="sm" | "md" | "lg"
  className="additional Tailwind classes"
  whileHover={{ scale: 1.05 }} // Framer Motion props
  whileTap={{ scale: 0.95 }}
  disabled={false}
  onClick={() => {}}
  type="button" | "submit"
  children={JSX}
/>
```

**Variants:**
- `primary` - Blue gradient background (default)
- `secondary` - Light background
- `outline` - Border style
- `ghost` - Transparent with hover effect

**Examples:**
```jsx
// Primary button
<Button onClick={() => alert('Clicked!')}>
  Click Me
</Button>

// Outline button with size
<Button variant="outline" size="lg">
  Large Outline Button
</Button>

// Custom animation and class
<Button 
  variant="ghost"
  className="text-lg"
  whileHover={{ x: 10 }}
>
  Hover Me
</Button>
```

---

### Card Component

**File:** `src/components/Common/Card.jsx`

Container component for content with hover animation.

**Props:**
```jsx
<Card
  variant="default" | "glass" | "elevated"
  className="additional classes"
  whileHover={{ y: -8 }} // Framer Motion props
  children={JSX}
/>
```

**Variants:**
- `default` - White bg with border
- `glass` - Glassmorphism effect
- `elevated` - Elevated shadow effect

**Examples:**
```jsx
// Default card
<Card>
  <h3>Title</h3>
  <p>Content</p>
</Card>

// Glassmorphism card
<Card variant="glass">
  <p>Premium appearance</p>
</Card>

// Custom hover animation
<Card 
  variant="elevated"
  whileHover={{ scale: 1.05, rotate: 2 }}
>
  Content
</Card>
```

---

### Section Component

**File:** `src/components/Common/Section.jsx`

Full-width section wrapper with background variations.

**Props:**
```jsx
<Section
  id="section-id"
  variant="light" | "dark" | "gradient"
  showPattern={true | false}
  className="additional classes"
  children={JSX}
/>
```

**Variants:**
- `light` - Light background
- `dark` - Dark background
- `gradient` - Gradient background

**Examples:**
```jsx
// Basic section
<Section id="about">
  <h2>About Me</h2>
  <p>Content...</p>
</Section>

// Dark section with pattern
<Section 
  id="projects" 
  variant="dark" 
  showPattern={true}
>
  {/* Content */}
</Section>

// Gradient background
<Section variant="gradient">
  {/* Content */}
</Section>
```

---

### Container Component

**File:** `src/components/Common/Container.jsx`

Max-width wrapper with padding for content alignment.

**Props:**
```jsx
<Container
  className="additional classes"
  children={JSX}
/>
```

**Usage:**
```jsx
<Container className="py-12">
  <div>Centered content with max width</div>
</Container>

// Max width is 7xl (80rem / 1280px)
```

---

### SectionTitle Component

**File:** `src/components/Common/SectionTitle.jsx`

Animated section heading with subtitle and decorative line.

**Props:**
```jsx
<SectionTitle
  title="Main Title"
  subtitle="Optional subtitle"
  className="additional classes"
/>
```

**Features:**
- Fade-in animation on view
- Decorative underline
- Responsive text sizing
- Optional subtitle

**Examples:**
```jsx
<SectionTitle 
  title="My Skills"
  subtitle="Technologies I've mastered"
/>

// Without subtitle
<SectionTitle title="Experience" />
```

---

## Section Components

### Navbar

**File:** `src/components/Navbar.jsx`

Sticky navigation bar with mobile responsiveness.

**Props:**
```jsx
<Navbar
  isDarkMode={boolean}
  onToggleDarkMode={() => {}}
/>
```

**Features:**
- Sticky on scroll
- Smooth scroll navigation
- Mobile hamburger menu
- Dark mode toggle
- Scroll-activated styling

---

### Hero

**File:** `src/components/Hero.jsx`

Full-screen hero/banner section with introduction.

**Features:**
- Full-screen height
- Developer name and title
- CTA buttons
- Social media links
- Animated profile illustration
- Scroll indicator

---

### About

**File:** `src/components/About.jsx`

About me section with bio and highlights.

**Features:**
- Personal biography
- Core strengths showcase
- Statistics display
- Responsive grid layout
- Animated image area

---

### Skills

**File:** `src/components/Skills.jsx`

Skills showcase with progress bars and badges.

**Features:**
- Skill categories (Frontend, Backend, Tools)
- Animated progress bars
- Proficiency levels
- Additional skills badges
- Responsive card layout

---

### Projects

**File:** `src/components/Projects.jsx`

Project portfolio grid with cards.

**Features:**
- Responsive grid (1, 2, or 3 columns)
- Project cards with images
- Technology tags
- Demo and GitHub buttons
- Hover animations

---

### Experience

**File:** `src/components/Experience.jsx`

Work experience timeline.

**Features:**
- Vertical timeline layout
- Work history cards
- Animated timeline indicators
- Role, company, and duration
- Tech stack highlights
- Currently open indicator

---

### Contact

**File:** `src/components/Contact.jsx`

Contact section with form and methods.

**Features:**
- Contact form (name, email, message)
- Form validation
- Submission feedback
- Contact methods (email, LinkedIn, GitHub, Twitter)
- Responsive layout

---

### Footer

**File:** `src/components/Footer.jsx`

Footer with links and information.

**Features:**
- Copyright information
- Quick navigation links
- Social media icons
- Privacy and terms links
- Decorative animations

---

### LoadingScreen (Bonus)

**File:** `src/components/LoadingScreen.jsx`

Animated loading screen component.

**Features:**
- Logo animation
- Animated dots
- Loading text
- Dark mode support
- Smooth transitions

**Usage:**
```jsx
import { LoadingScreen } from './components';

// In your component
{isLoading ? <LoadingScreen /> : <YourContent />}
```

---

## Global Utilities

### CSS Classes (in `src/index.css`)

**`.section-padding`** - Standard section padding
```jsx
<div className="section-padding">Content</div>
```

**`.smooth-transition`** - Smooth color transitions
```jsx
<div className="smooth-transition">Content</div>
```

**`.glass`** - Glassmorphism effect
```jsx
<div className="glass">Glassmorphic content</div>
```

**`.animate-shimmer`** - Loading shimmer animation
```jsx
<div className="animate-shimmer">Loading...</div>
```

---

## Component Composition Example

```jsx
import { 
  Section, 
  Container, 
  Card, 
  Button, 
  SectionTitle 
} from './Common';

export default function ExampleSection() {
  return (
    <Section id="example" variant="dark">
      <Container>
        <SectionTitle 
          title="Example Section"
          subtitle="Learn how to compose components"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <Card key={item} variant="elevated">
              <h3 className="text-xl font-bold mb-4">Card {item}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Content for this card
              </p>
              <Button size="sm">Learn More</Button>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
```

---

## Animation Patterns

### Fade-in on Scroll
```jsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  Content fades in when scrolled into view
</motion.div>
```

### Slide-up Animation
```jsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  Content slides up
</motion.div>
```

### Staggered List Animation
```jsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

<motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  {items.map((item) => (
    <motion.div key={item.id} variants={itemVariants}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

### Hover Scale Effect
```jsx
<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Interactive element
</motion.div>
```

---

## Best Practices

1. **Use viewport detection** for scroll animations
   ```jsx
   whileInView={{ ... }}
   viewport={{ once: true }}
   ```

2. **Keep animations performant** - avoid complex animations on every element

3. **Use semantic HTML** - wrap content properly with article, section tags

4. **Responsive classes** - use Tailwind breakpoints (sm, md, lg, xl, 2xl)

5. **Accessibility** - include alt text, aria-labels, keyboard navigation

6. **Dark mode** - ensure components work in both light and dark modes

7. **Reuse components** - leverage Button, Card, Section components

8. **Keep CSS clean** - use only Tailwind utility classes

---

## Troubleshooting

**Component not animating:**
- Ensure Framer Motion is imported
- Check `viewport={{ once: true }}` for scroll animations
- Verify animation properties are correct

**Styling issues:**
- Check if Tailwind classes are spelled correctly
- Verify dark mode is applied (check `dark:` prefix)
- Use browser DevTools to inspect elements

**Mobile layout broken:**
- Use responsive Tailwind classes (md:, lg:, etc.)
- Test in DevTools mobile view
- Check Container and Section padding

**Dark mode not working:**
- Verify `isDarkMode` prop is passed to components
- Check `dark:` prefixes in Tailwind classes
- Ensure localStorage is saving preference

---

**For more details, refer to the main README.md and individual component files.**