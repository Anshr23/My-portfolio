# Ansh Rai - Portfolio

## Project Overview

A modern, responsive portfolio website built with cutting-edge web technologies showcasing Ansh Rai's skills and projects.

🔗 **Live Site**: [anshraiportfolio.vercel.app](https://anshraiportfolio.vercel.app/)

## Technologies Used

This project is built with:

- **Vite** - Fast build tool and dev server
- **React 18** - Modern React with TypeScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful component library
- **Framer Motion** - Smooth animations
- **TypeScript** - Type-safe development

## Getting Started

### Prerequisites

- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Development

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd figma-visual-code

# Step 3: Install dependencies
npm install

# Step 4: Start development server
npm run dev
```

The application will be available at `http://localhost:8080`

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/            # shadcn/ui components
│   ├── Navigation.tsx # Header navigation
│   ├── HeroSection.tsx # Landing section
│   ├── AboutSection.tsx # About me section
│   ├── SkillsSection.tsx # Skills showcase
│   ├── ProjectsSection.tsx # Portfolio projects
│   └── ContactSection.tsx # Contact form
├── lib/               # Utility functions
└── globals.css        # Global styles
```

## Deployment

This project can be deployed to any static hosting service:

- **Vercel** - `vercel --prod`
- **Netlify** - Drag and drop the `dist` folder
- **GitHub Pages** - Use GitHub Actions
- **Firebase Hosting** - `firebase deploy`

## Features

- 🎨 Modern dark theme with purple/blue gradients
- 📱 Fully responsive design
- ⚡ Fast performance with Vite
- 🎭 Smooth animations with Framer Motion
- 📧 Contact form with email integration
- 🎯 Auto-scrolling skills section
- 📄 PDF resume download
- 🔗 Social media integration
