# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a personal portfolio website for Thomas Ringling built with Nuxt 3, showcasing his professional experience, skills, and achievements. The site serves as a CV/resume website with pages for displaying career information, current projects, and team details.

## Architecture
- **Framework**: Nuxt 3 with TypeScript
- **Styling**: Tailwind CSS with custom SCSS
- **Data**: JSON-based data structure for CV information
- **Deployment**: Docker-based deployment to DigitalOcean
- **Content**: Server-side API serves JSON data for dynamic rendering

## Key Commands

### Development
```bash
npm install          # Install dependencies
npm run dev          # Start development server on localhost:3000
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run generate     # Generate static site
```

### Deployment
```bash
npm run deploy       # Execute deployment script (requires doctl)
```

## Project Structure

### Core Files
- `nuxt.config.ts` - Main Nuxt configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `package.json` - Dependencies and scripts
- `server/api/data.json` - Main CV data structure

### Key Directories
- `pages/` - Vue pages (index, cv, now, team)
- `components/` - Reusable Vue components for CV sections
- `public/` - Static assets including certificates and images
- `assets/css/` - Custom SCSS styles
- `server/api/` - API endpoints

### Components
The site uses modular Vue components for different CV sections:
- `Experience.vue` - Professional experience
- `Education.vue` - Educational background
- `Skill.vue` - Technical skills
- `Certification.vue` - Certifications and courses
- `Conference.vue` - Conference attendance
- `Course.vue` - Course completion
- `Language.vue` - Language proficiency

### Data Structure
The main data source is `server/api/data.json` which contains structured CV information:
- Personal basics and contact info
- Languages and proficiency levels
- Education history
- Professional experiences with technologies and roles
- Skills categorized by type (programming languages, databases, frameworks)
- Achievements (certifications, conferences, courses, teaching)

## Development Notes
- The site uses Nuxt 3's auto-imports for composables and utilities
- Tailwind CSS is configured to scan Vue components for classes
- Custom SCSS is imported globally via `assets/css/styles.scss`
- Server API endpoint `/api/cv` serves the CV data
- Images are stored in `public/img/` with various formats supported
- Certificates and documentation are stored in `public/` as PDFs

## Deployment
The site is deployed using Docker and DigitalOcean. The deployment process involves:
1. Building Docker image: `docker build -t ringling/personal-website .`
2. Pushing to registry: `docker push ringling/personal-website`
3. Triggering deployment via DigitalOcean dashboard

## Content Management
CV data is managed through the JSON structure in `server/api/data.json`. When updating professional information, modify this file and redeploy.