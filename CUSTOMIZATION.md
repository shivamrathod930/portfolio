# Portfolio Customization Guide

## Quick Customization Checklist

### Step 1: Personal Information
- [ ] Update name in `src/components/Hero.jsx`
- [ ] Update job title in `src/components/Hero.jsx`
- [ ] Update bio in `src/components/About.jsx`
- [ ] Update HTML title in `index.html`
- [ ] Add your profile image/image

### Step 2: Skills & Experience
- [ ] Add your skills in `src/components/Skills.jsx`
- [ ] Add your work history in `src/components/Experience.jsx`
- [ ] Update proficiency levels in Skills section

### Step 3: Projects
- [ ] Update project list in `src/components/Projects.jsx`
- [ ] Add project descriptions
- [ ] Add project technologies
- [ ] Update demo and GitHub links
- [ ] Replace emoji project icons with real images

### Step 4: Contact
- [ ] Update email in `src/components/Contact.jsx`
- [ ] Update social media links in `src/components/Contact.jsx`
- [ ] Update social links in `src/components/Footer.jsx`
- [ ] Connect form to backend service

### Step 5: Branding
- [ ] Update footer copyright name
- [ ] Customize primary color scheme
- [ ] Update favicon
- [ ] Add your logo

## Common Customizations

### Change Primary Color (Blue to Purple)

Find and replace in all files:
```
from-blue-600 → from-purple-600
to-blue-400 → to-purple-400
text-blue-600 → text-purple-600
bg-blue-X → bg-purple-X
border-blue-X → border-purple-X
```

### Add Real Profile Image

In `src/components/Hero.jsx`, replace:
```jsx
<div className="text-8xl">👨‍💻</div>
```

With:
```jsx
<img 
  src="/profile-image.jpg" 
  alt="Profile" 
  className="w-full h-full object-cover"
/>
```

Then place `profile-image.jpg` in the `public/` folder.

### Add Real Project Images

In `src/components/Projects.jsx`, replace emoji:
```jsx
// Old
image: '🛍️',

// New
image: 'project-image.jpg',
```

Then display in component:
```jsx
{typeof project.image === 'string' && project.image.startsWith('/') ? (
  <img src={project.image} alt={project.title} />
) : (
  <span className="text-7xl">{project.image}</span>
)}
```

### Setup Contact Form

The contact form currently simulates submission. To make it real:

1. **Using Formspree:**
```jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  
  const formData = new FormData();
  formData.append('name', formData.name);
  formData.append('email', formData.email);
  formData.append('message', formData.message);
  
  const response = await fetch('https://formspree.io/f/YOUR_ID', {
    method: 'POST',
    body: formData,
  });
  
  if (response.ok) {
    setSubmitStatus('success');
  }
};
```

2. **Using EmailJS:**
```bash
npm install @emailjs/browser
```

### Add More Sections

1. Create new component in `src/components/NewSection.jsx`
2. Export it in `src/components/index.js`
3. Import in `src/App.jsx`
4. Add to render in the main section

Example:
```jsx
// src/components/Blog.jsx
import { Section, Container, SectionTitle } from './Common';

export default function Blog() {
  return (
    <Section id="blog" variant="dark">
      <Container>
        <SectionTitle title="Latest Articles" />
        {/* Your content */}
      </Container>
    </Section>
  );
}
```

### Customize Animations

#### Change animation speed:
```jsx
transition={{ duration: 0.8 }} // Change duration
```

#### Disable animations:
```jsx
{/* Remove all motion tags and use regular div */}
<div className="...">Content</div>
```

#### Add custom animation:
```jsx
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5, delay: 0.2 }}
>
  Custom Animated Content
</motion.div>
```

### Add Google Analytics

In `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Add Smooth Scroll Behavior

Already included in `index.css`:
```css
html {
  scroll-behavior: smooth;
}
```

### Mobile Menu Improvements

The mobile menu is in `src/components/Navbar.jsx`. To customize:

```jsx
const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  // Add/remove links here
];
```

### SEO Optimization

Update in `index.html`:
```html
<meta name="description" content="Your unique description">
<meta name="keywords" content="developer, react, full-stack">
<meta property="og:title" content="Your Portfolio">
<meta property="og:description" content="Your description">
<meta property="og:image" content="https://yoursite.com/image.jpg">
```

## File-by-File Customization

### `src/App.jsx`
- Dark mode toggle logic
- Layout and section ordering
- Global state management

### `src/components/Hero.jsx`
- Name, title, introduction
- CTA button actions
- Social links
- Hero illustration/image

### `src/components/About.jsx`
- Biography text
- Skills highlights
- Statistics
- About image

### `src/components/Skills.jsx`
- Skill categories and names
- Proficiency levels
- Additional skills
- Section description

### `src/components/Projects.jsx`
- Project list and details
- Project images/icons
- Demo and GitHub URLs
- Project descriptions

### `src/components/Experience.jsx`
- Work history
- Roles and companies
- Dates and durations
- Job descriptions
- Tech stack highlights

### `src/components/Contact.jsx`
- Contact form fields
- Contact methods
- Email and social links
- Form submission logic

### `src/components/Navbar.jsx`
- Navigation links
- Logo text
- Mobile menu settings
- Dark mode toggle

### `src/components/Footer.jsx`
- Copyright information
- Footer links
- Social media icons
- Company name

### `src/index.css`
- Global styles
- Tailwind configuration
- Custom animations
- Scrollbar styles

## Performance Tips

1. **Lazy Load Images**: Use `loading="lazy"` on images
2. **Code Splitting**: Use React.lazy() for heavy components
3. **Optimize Animations**: Reduce animation count on mobile
4. **Image Optimization**: Compress images before upload
5. **Remove Unused CSS**: Tailwind automatically purges unused classes

## Deployment Checklist

- [ ] Update all personal information
- [ ] Include real images/icons
- [ ] Test all links work correctly
- [ ] Test contact form
- [ ] Test dark mode toggling
- [ ] Test mobile responsiveness
- [ ] Optimize all images
- [ ] Update meta tags for SEO
- [ ] Set up analytics
- [ ] Enable HTTPS
- [ ] Set up custom domain

## Troubleshooting

### Dark mode not persisting?
Check localStorage in browser DevTools

### Animations not smooth?
Reduce animation complexity or disable on low-end devices

### Images not loading?
Ensure images are in `public/` folder and path is correct

### Form not submitting?
Set up backend service (Formspree, EmailJS, etc.)

### Mobile menu not closing?
Update the click handler in Navbar component

---

## Need More Help?

- Check component props in `src/components/`
- Review Framer Motion docs: https://www.framer.com/motion/
- Check Tailwind docs: https://tailwindcss.com/docs
- Visit React docs: https://react.dev/