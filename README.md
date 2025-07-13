# Personal Resume Website

A modern, responsive personal resume website built with HTML, CSS, and JavaScript. This website showcases your professional information, experience, skills, and projects with an elegant design and smooth animations.

## 🌟 Features

### 📱 Responsive Design
- Fully responsive layout that works on all devices
- Mobile-first approach with touch-friendly navigation
- Optimized for desktop, tablet, and mobile viewing

### 🎨 Modern UI/UX
- Clean and professional design
- Smooth animations and transitions
- Interactive elements with hover effects
- Beautiful gradient backgrounds and modern typography

### 📋 Complete Resume Sections
- **Hero Section**: Eye-catching introduction with call-to-action buttons
- **About**: Personal information and key statistics
- **Experience**: Timeline-based work history with achievements
- **Education**: Academic background with details
- **Skills**: Visual skill bars with proficiency levels
- **Projects**: Portfolio showcase with technology tags
- **Contact**: Contact form and social media links

### ⚡ Interactive Features
- Smooth scrolling navigation
- Animated skill bars
- Project image hover effects
- Contact form with validation
- Resume download functionality
- Mobile hamburger menu
- Scroll-triggered animations

### 📄 Resume Download
- Multiple format support (PDF, Word, Text)
- Direct download links
- Download tracking and notifications

## 📁 Project Structure

```
personal-resume-website/
├── index.html              # Main HTML file
├── styles.css              # CSS styles and animations
├── script.js               # JavaScript functionality
├── resume.txt              # Text version of resume
├── profile.jpg             # Profile picture (add your own)
├── project1.jpg            # Project images (add your own)
├── project2.jpg            # Project images (add your own)
├── project3.jpg            # Project images (add your own)
├── resume.pdf              # PDF version of resume (add your own)
├── resume.docx             # Word version of resume (add your own)
└── README.md               # This documentation
```

## 🚀 Quick Start

### 1. Clone or Download
```bash
git clone <repository-url>
cd personal-resume-website
```

### 2. Customize Content
Edit the following files to personalize your website:

#### `index.html`
- Replace "Your Name" with your actual name
- Update contact information (email, phone, location)
- Modify work experience, education, and skills
- Add your own projects and descriptions
- Update social media links

#### `styles.css`
- Customize colors by changing CSS variables
- Modify fonts, spacing, or layout as needed
- Adjust animations and transitions

#### `script.js`
- Update form handling for your email service
- Modify animations or add new features
- Customize notification messages

### 3. Add Your Images
- **Profile Picture**: Replace `profile.jpg` with your professional photo
- **Project Images**: Replace `project1.jpg`, `project2.jpg`, `project3.jpg` with your project screenshots
- **Resume Files**: Add your actual resume files (`resume.pdf`, `resume.docx`)

### 4. Deploy
You can deploy this website to any static hosting service:

#### GitHub Pages
```bash
git add .
git commit -m "Initial commit"
git push origin main
```
Then enable GitHub Pages in your repository settings.

#### Netlify
- Drag and drop the folder to Netlify
- Or connect your GitHub repository

#### Vercel
- Install Vercel CLI: `npm i -g vercel`
- Run: `vercel` in the project directory

## 🎨 Customization Guide

### Colors
The website uses a modern color scheme. To customize colors, edit these CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #fbbf24;
    --gradient-start: #667eea;
    --gradient-end: #764ba2;
    --text-primary: #1f2937;
    --text-secondary: #4b5563;
    --background-light: #f8f9fa;
    --background-white: #ffffff;
}
```

### Fonts
The website uses Inter font from Google Fonts. To change fonts:

1. Update the Google Fonts link in `index.html`
2. Modify the font-family in `styles.css`

### Layout
- **Grid Layouts**: Most sections use CSS Grid for responsive layouts
- **Flexbox**: Used for navigation and button arrangements
- **Media Queries**: Responsive breakpoints at 768px and 480px

### Animations
- **Scroll Animations**: Elements animate when they come into view
- **Hover Effects**: Interactive elements have smooth hover transitions
- **Loading Animations**: Skill bars and counters animate on scroll

## 📱 Mobile Optimization

The website is fully optimized for mobile devices:

- **Touch-friendly**: Large touch targets for buttons and links
- **Readable text**: Appropriate font sizes for mobile screens
- **Optimized images**: Responsive images that scale properly
- **Mobile menu**: Hamburger menu for mobile navigation
- **Fast loading**: Optimized CSS and JavaScript

## 🔧 Technical Features

### JavaScript Functionality
- **Navigation**: Smooth scrolling and active link highlighting
- **Form Validation**: Client-side validation with error messages
- **Animations**: Intersection Observer for scroll-triggered animations
- **Modal System**: Resume download modal with multiple format options
- **Notifications**: Toast notifications for user feedback

### CSS Features
- **CSS Grid**: Modern layout system for responsive design
- **Flexbox**: Flexible layouts for components
- **CSS Variables**: Easy customization with CSS custom properties
- **Animations**: Keyframe animations and transitions
- **Media Queries**: Responsive design breakpoints

### Performance Optimizations
- **Lazy Loading**: Images load only when needed
- **Debounced Events**: Optimized scroll event handling
- **Minimal Dependencies**: Only Font Awesome for icons
- **Efficient CSS**: Optimized selectors and properties

## 📧 Contact Form Setup

The contact form is currently set up for demonstration. To make it functional:

### Option 1: EmailJS
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Configure your email service
3. Update the JavaScript to use EmailJS API

### Option 2: Netlify Forms
1. Deploy to Netlify
2. Add `netlify` attribute to the form
3. Forms will be automatically handled

### Option 3: Custom Backend
1. Create a backend API endpoint
2. Update the form submission in `script.js`
3. Handle form data on your server

## 🌐 Browser Support

- **Chrome**: 60+
- **Firefox**: 55+
- **Safari**: 12+
- **Edge**: 79+
- **Mobile Browsers**: iOS Safari 12+, Chrome Mobile 60+

## 📊 SEO Optimization

The website includes basic SEO features:

- Semantic HTML structure
- Meta tags for social sharing
- Proper heading hierarchy
- Alt text for images
- Fast loading times
- Mobile-friendly design

## 🔒 Privacy & Security

- No external tracking scripts
- Form data handled locally (customize as needed)
- HTTPS recommended for production
- No personal data stored in cookies

## 🚀 Deployment Options

### Free Hosting Services
1. **GitHub Pages**: Perfect for developers
2. **Netlify**: Great for static sites with forms
3. **Vercel**: Excellent performance and features
4. **Surge.sh**: Simple command-line deployment

### Paid Hosting
1. **AWS S3 + CloudFront**: Scalable and fast
2. **Google Cloud Storage**: Reliable and cost-effective
3. **DigitalOcean App Platform**: Easy deployment
4. **Heroku**: Good for full-stack applications

## 📈 Analytics Integration

To add analytics to your website:

### Google Analytics
```html
<!-- Add to <head> section -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Other Options
- **Plausible Analytics**: Privacy-focused analytics
- **Fathom Analytics**: Simple and privacy-friendly
- **Matomo**: Self-hosted analytics

## 🤝 Contributing

Feel free to contribute to this project:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Font Awesome**: For the beautiful icons
- **Google Fonts**: For the Inter font family
- **Unsplash**: For placeholder images
- **CSS Grid & Flexbox**: For modern layouts

## � Support

If you need help customizing or deploying your resume website:

1. Check the documentation above
2. Look at the code comments
3. Open an issue on GitHub
4. Contact me through the website

---

**Happy coding! 🚀**

*This website template is designed to help you showcase your professional experience and skills in a modern, attractive way. Customize it to match your personal brand and career goals.*
