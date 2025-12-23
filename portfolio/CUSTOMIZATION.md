# Portfolio Website - Customization Guide

This is a modern, responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🎨 Features

- **Single Scrollable Page** - Smooth scrolling between sections
- **About Section** - Customizable intro text with skills display
- **Projects Gallery** - Interactive project cards with modal details
- **Resume Section** - Embedded PDF viewer with download option
- **Research Section** - Markdown-style content for publications and research goals
- **Contact Form** - Email contact form (ready for integration)
- **Footer** - Social media links and navigation
- **Premium Design** - Dark theme with vibrant gradients, glassmorphism effects, and smooth animations

## 🚀 Getting Started

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

Open [http://localhost:3000](http://localhost:3000) to view the site.

## ✏️ Customization

### 1. Personal Information

Update the following files with your information:

#### **`app/layout.tsx`** - SEO Metadata
```typescript
export const metadata: Metadata = {
  title: "Your Name - Software Engineer & Researcher",
  description: "Your description here...",
  // ... update other fields
};
```

#### **`components/Hero.tsx`**
- Line 8: Change typing text from "Software Engineer & Researcher"
- Line 37: Update name from "John Doe"
- Line 48-51: Customize description

#### **`components/About.tsx`**
- Line 13: Update profile initials
- Line 23: Change name
- Lines 25-34: Customize bio text
- Line 39: Update skills array

#### **`components/Footer.tsx`**
- Line 78-79: Update name and description
- Line 52-107: Update social media URLs

### 2. Projects

Edit **`components/Projects.tsx`** (lines 15-72):
- Modify the `projects` array with your own projects
- Each project includes: title, description, tags, details, github/demo links
- Projects use gradient backgrounds as placeholders

### 3. Research

Edit **`components/Research.tsx`**:
- Lines 15-21: Update research interests
- Lines 24-41: Update primary/secondary focus areas
- Lines 47-77: Add your current research projects
- Lines 83-143: Add your publications
- Lines 148-160: Update research goals

### 4. Resume PDF

1. Add your resume PDF to the `/public` folder
2. Name it `resume.pdf` or update the path in `components/Resume.tsx` (line 19)

### 5. Contact Form Integration

The contact form in **`components/Contact.tsx`** currently logs to console. To enable email:

**Option 1: EmailJS (Easiest)**
```bash
npm install @emailjs/browser
```

**Option 2: SendGrid**
```bash
npm install @sendgrid/mail
```

**Option 3: Custom API Route**
Create `/app/api/contact/route.ts` and implement your email logic.

### 6. Color Scheme

Edit **`app/globals.css`** (lines 4-26) to customize colors:
```css
:root {
  --gradient-start: #6366f1;  /* Indigo */
  --gradient-mid: #8b5cf6;    /* Purple */
  --gradient-end: #d946ef;    /* Pink */
  /* ... other colors */
}
```

### 7. Images

Replace placeholder images:
- Profile image: Update the gradient background in `components/About.tsx` (line 11)
- Project images: Update the `image` field in the projects array

## 📦 Project Structure

```
portfolio/
├── app/
│   ├── globals.css         # Global styles & design system
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Main page
├── components/
│   ├── Navigation.tsx      # Sticky navigation bar
│   ├── Hero.tsx           # Hero section with animations
│   ├── About.tsx          # About section
│   ├── Projects.tsx       # Projects gallery
│   ├── Resume.tsx         # Resume PDF viewer
│   ├── Research.tsx       # Research content
│   ├── Contact.tsx        # Contact form
│   └── Footer.tsx         # Footer with social links
└── public/
    └── resume.pdf         # Your resume (add this)
```

## 🎨 Design Features

- **Dark Theme** with deep blues and purples
- **Glassmorphism Effects** on cards
- **Gradient Text** and backgrounds
- **Smooth Animations** (fade-ins, hover effects, typing animation)
- **Custom Scrollbar** with gradient
- **Responsive Design** for all screen sizes
- **Inter Font** from Google Fonts

## 📝 Next Steps

1. ✅ Replace "John Doe" with your name throughout
2. ✅ Update bio and descriptions
3. ✅ Add your projects
4. ✅ Add your research/publications
5. ✅ Add your resume PDF to `/public`
6. ✅ Update social media links
7. ✅ Configure contact form email service
8. ✅ Test on different devices
9. ✅ Deploy to Vercel or your preferred host

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to GitHub Pages
This is already in the `alexanderfache6.github.io` repository. After customization:
```bash
npm run build
# Configure GitHub Pages to serve from the build output
```

## 📄 License

Free to use and customize for your personal portfolio.

---

**Need help?** All sections are easily customizable. Just search for "John Doe" in the codebase and replace with your information!
