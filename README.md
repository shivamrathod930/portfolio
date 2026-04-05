# Modern Personal Portfolio UI

A premium, fully responsive personal portfolio website built with React.js, Tailwind CSS, and Framer Motion. Features smooth animations, glassmorphism effects, and a clean, minimal design inspired by modern developer portfolios.

## ✨ Features

- **Fully Responsive Design** - Mobile, tablet, and desktop optimized
- **Dark Mode Support** - Toggle between light and dark themes with persistence
- **Smooth Animations** - Framer Motion animations for engaging user experience
- **Modern UI Elements** - Glassmorphism, gradients, and soft shadows
- **Sticky Navbar** - Navigation with smooth scrolling
- **Modular Components** - Reusable, production-ready components
- **Form Validation** - Contact form with submission feedback
- **Performance Optimized** - Lazy loading and optimized animations

## 🛠️ Tech Stack

- **React 19** - UI library with functional components
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion 12** - Advanced animation library
- **Vite** - Lightning-fast build tool
- **TypeScript Ready** - Compatible with TypeScript projects

## 📁 Project Structure

```
src/
├── components/
│   ├── Common/
│   │   ├── Button.jsx          # Reusable button component
│   │   ├── Card.jsx            # Card wrapper component
│   │   ├── Section.jsx         # Section wrapper component
│   │   ├── Container.jsx       # Max-width container
│   │   ├── SectionTitle.jsx    # Section heading component
│   │   └── index.js            # Exports
│   ├── Navbar.jsx              # Navigation with dark mode toggle
│   ├── Hero.jsx                # Hero/banner section
│   ├── About.jsx               # About me section
│   ├── Skills.jsx              # Skills showcase with progress bars
│   ├── Projects.jsx            # Projects grid with cards
│   ├── Experience.jsx          # Timeline of work experience
│   ├── Contact.jsx             # Contact form and methods
│   ├── Footer.jsx              # Footer with links
│   ├── LoadingScreen.jsx       # Loading animation (bonus)
│   └── index.js                # Components exports
├── App.jsx                     # Main app component with dark mode logic
├── main.jsx                    # Entry point
├── index.css                   # Global styles and Tailwind
└── assets/                     # Static assets

```

## 🎨 Sections Overview

### 1. **Hero Section**
- Full-screen introduction
- Developer name and title
- CTA buttons (Hire Me, Download Resume)
- Animated profile illustration
- Social media links

### 2. **About Section**
- Personal bio
- Core strengths with icons
- Statistics (Years, Projects, Clients)
- Responsive image/illustration

### 3. **Skills Section**
- Skill categories (Frontend, Backend, Tools)
- Animated progress bars
- Proficiency levels
- Additional skills badges

### 4. **Projects Section**
- Grid layout (responsive columns)
- Project cards with icons
- Technologies used
- Demo and GitHub links
- Hover animations

### 5. **Experience Section**
- Vertical timeline layout
- Work history with roles and companies
- Tech stack highlights
- Duration and descriptions
- Animated timeline indicators

### 6. **Contact Section**
- Contact form (name, email, message)
- Contact methods (email, LinkedIn, GitHub, Twitter)
- Form submission feedback
- Social media links

### 7. **Navigation**
- Sticky navbar with scroll detection
- Smooth navigation to sections
- Mobile responsive hamburger menu
- Dark mode toggle button

### 8. **Footer**
- Copyright information
- Quick links
- Social media icons
- Privacy policy links

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies** (if not already done)
```bash
npm install
```

2. **Start development server**
```bash
npm run dev
```

3. **Build for production**
```bash
npm run build
```

4. **Preview production build**
```bash
npm run preview
```

## 🎯 Customization Guide

### Update Personal Information

Edit `src/components/Hero.jsx`:
```jsx
<h1 className="text-5xl md:text-7xl font-bold">
  Hi, I'm <span>Your Name</span>
</h1>
<h2 className="text-2xl md:text-3xl">Your Title</h2>
```

### Add Your Projects

Edit `src/components/Projects.jsx` - Update the `projects` array:
```jsx
const projects = [
  {
    id: 1,
    title: 'Project Name',
    description: 'Project description',
    image: '🎨', // Use emoji or import real images
    tags: ['Tech1', 'Tech2'],
    links: {
      demo: 'https://...',
      github: 'https://...',
    },
  },
  // Add more projects
];
```

### Customize Colors

The portfolio uses blue as the primary color (`from-blue-600 to-blue-400`). To change:

1. Update Tailwind classes using different color names (e.g., `from-purple-600`)
2. Change the CSS custom properties in `index.css` if needed

### Add Your Skills

Edit `src/components/Skills.jsx`:
```jsx
const skillCategories = [
  {
    title: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React', level: 95 },
      // Add your skills
    ],
  },
];
```

### Update Work Experience

Edit `src/components/Experience.jsx`:
```jsx
const experiences = [
  {
    id: 1,
    role: 'Your Role',
    company: 'Company Name',
    duration: '2024 - Present',
    description: 'Your experience',
    highlights: ['Skill1', 'Skill2'],
  },
];
```

### Connect Social Links

Update links in:
- `src/components/Hero.jsx` - Social icons in hero
- `src/components/Contact.jsx` - Contact methods
- `src/components/Footer.jsx` - Footer social links

## 🎭 Animation Features

### Framer Motion Animations Used:
- **Fade In Effects** - Elements fade as user scrolls
- **Slide Up Animations** - Content slides up on view
- **Scale Transitions** - Cards scale on hover
- **Stagger Effects** - List items animate sequentially
- **Floating Animations** - Subtle up-down motion
- **Hover Effects** - Interactive hover states
- **Loading Animations** - Shimmer and spinner effects

## 🌙 Dark Mode

The portfolio includes automatic dark mode detection:
- Detects system preference on first visit
- Saves user preference in localStorage
- Toggle button in navbar
- Smooth transitions between themes
- Full coverage of all components

## 📱 Responsive Design

Breakpoints used (Tailwind default):
- `sm` - 640px+
- `md` - 768px+
- `lg` - 1024px+
- `xl` - 1280px+
- `2xl` - 1536px+

All components are optimized for:
- Mobile phones (320px+)
- Tablets (768px+)
- Desktops (1024px+)

## 🎨 Component Props Reference

### Button Component
```jsx
<Button
  variant="primary|secondary|outline|ghost"
  size="sm|md|lg"
  className="additional classes"
  whileHover={{ ... }}
  whileTap={{ ... }}
  ...otherMotionProps
>
  Click Me
</Button>
```

### Card Component
```jsx
<Card
  variant="default|glass|elevated"
  className="additional classes"
  whileHover={{ ... }}
>
  Content
</Card>
```

### Section Component
```jsx
<Section
  id="section-id"
  variant="light|dark|gradient"
  showPattern={true|false}
  className="additional classes"
>
  Content
</Section>
```

## 🔧 Best Practices Implemented

✅ **Modular Components** - Reusable, single-responsibility components  
✅ **Performance** - Lazy animations, optimized re-renders  
✅ **Accessibility** - Semantic HTML, ARIA labels, keyboard navigation  
✅ **Responsive Design** - Mobile-first approach with Tailwind breakpoints  
✅ **Dark Mode** - Full dark mode support with persistence  
✅ **Clean Code** - Well-organized, commented, production-ready  
✅ **SEO Friendly** - Semantic HTML, proper meta tags  
✅ **Smooth UX** - All interactions have smooth transitions

## 📦 Dependencies

- `react`: UI library
- `react-dom`: React DOM rendering
- `framer-motion`: Animation library
- `tailwindcss`: Utility CSS framework
- `@tailwindcss/vite`: Tailwind Vite plugin

## 🌐 Deployment

### Vercel
```bash
npm run build
# Push to GitHub, connect in Vercel dashboard
```

### Netlify
```bash
npm run build
# Drag & drop `dist` folder or connect GitHub repo
```

### Traditional Hosting
```bash
npm run build
# Upload `dist` folder contents to server
```

## 📝 License

This project is open source and available under the MIT License.

## 💡 Tips for Best Results

1. **Replace Emojis** - Use real images for profile and projects
2. **Add Google Analytics** - Track portfolio visitors
3. **Optimize Images** - Compress for faster loading
4. **SEO** - Update meta tags with your info
5. **Custom Domain** - Use your own domain name
6. **Email Service** - Integrate form submission backend
7. **Showcase Real Work** - Add actual projects and clients
8. **Update Regularly** - Keep portfolio current

## 🤝 Support

For issues or questions, refer to the component documentation or Framer Motion guides.

---

**Built with ❤️ using React, Tailwind CSS, and Framer Motion**

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
