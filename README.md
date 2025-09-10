# Blaine Panares - Modern Portfolio

A modern, responsive portfolio website built with Next.js 14, featuring animated backgrounds, glassmorphism design, and dark/light mode support.

## 🚀 Features

- **Modern Design**: Glassmorphism effects with animated particle backgrounds
- **Dark/Light Mode**: Seamless theme switching with BP logo color palette
- **Responsive**: Mobile-first design that works on all devices
- **Interactive Projects**: Mini-box layout with expandable project details
- **Contact Modal**: Popup contact form with email functionality
- **Resume Download**: Direct PDF download functionality
- **Smooth Animations**: Framer Motion powered transitions and effects

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes
- **TypeScript**: Full type safety

## 📋 Setup Instructions

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### 1. Installation
\`\`\`bash
# Clone or download the project
cd your-portfolio-folder

# Install dependencies
npm install
# or
yarn install
\`\`\`

### 2. Environment Variables
Create a `.env.local` file in the root directory:

\`\`\`env
# Email Service (Optional - for contact form)
RESEND_API_KEY=your_resend_api_key_here

# Or use other email services like SendGrid, Nodemailer, etc.
# SENDGRID_API_KEY=your_sendgrid_key
# SMTP_HOST=your_smtp_host
# SMTP_PORT=587
# SMTP_USER=your_email
# SMTP_PASS=your_password
\`\`\`

### 3. Customize Content
Update the following files with your information:

#### Personal Information (`components/hero-section.tsx`):
- Name and title
- Bio description
- Social media links (LinkedIn, GitHub, etc.)

#### Skills (`components/expertise-section.tsx`):
- Technical skills and proficiency levels
- Skill categories and descriptions

#### Experience (`components/timeline-section.tsx`):
- Work experience and education
- Company details and achievements

#### Projects (`components/projects-section.tsx`):
- Project details, images, and links
- Technologies used
- Project descriptions

#### Resume (`public/resume.pdf`):
- Replace with your actual resume PDF

### 4. Images and Assets
Replace the following with your own:
- `public/bp-logo.png` - Your logo
- `src/assets/images/Me.jpg` - Your profile photo
- `src/assets/images/project*.png` - Your project screenshots
- `public/resume.pdf` - Your resume

### 5. Development
\`\`\`bash
# Start development server
npm run dev
# or
yarn dev
\`\`\`

Visit `http://localhost:3000` to see your portfolio.

### 6. Build for Production
\`\`\`bash
# Build the project
npm run build
# or
yarn build

# Start production server (optional)
npm start
# or
yarn start
\`\`\`

## 🎨 Customization

### Colors
The color palette is based on your BP logo (black, blue, white). To modify:
- Edit CSS variables in `app/globals.css`
- Update Tailwind theme in the CSS file

### Animations
- Background animations: `components/animated-background.tsx`
- Component animations: Individual component files using Framer Motion

### Layout
- Main layout: `app/layout.tsx`
- Page structure: `app/page.tsx`
- Individual sections: `components/*-section.tsx`

## 📧 Email Setup (Optional)

To enable the contact form:

1. **Using Resend** (Recommended):
   - Sign up at [resend.com](https://resend.com)
   - Get your API key
   - Add `RESEND_API_KEY` to `.env.local`

2. **Using SendGrid**:
   - Sign up at [sendgrid.com](https://sendgrid.com)
   - Get your API key
   - Update the API route in `app/api/contact/route.ts`

3. **Using SMTP**:
   - Use any SMTP service (Gmail, Outlook, etc.)
   - Add SMTP credentials to `.env.local`
   - Update the API route accordingly

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
- **Netlify**: Build command: `npm run build`, Publish directory: `out`
- **Railway**: Supports Next.js out of the box
- **DigitalOcean**: Use App Platform with Next.js preset

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize for your own use.

## 📄 License

MIT License - feel free to use this template for your own portfolio.

---

Built with ❤️ by Blaine Panares
