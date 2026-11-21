# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a personal portfolio website for Thomas Ringling built with Nuxt 3, showcasing his professional experience, skills, and achievements. The site serves as a CV/resume website with pages for displaying career information, current projects, and team details.

## Architecture
- **Framework**: Nuxt 3 with TypeScript
- **Styling**: Tailwind CSS with custom SCSS
- **Data**: JSON-based data structure for CV information
- **Deployment**: Docker container on a Hetzner server, behind Nginx Proxy Manager
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
npm run deploy       # Runs deploy.sh (meant to run on the server, see Deployment)
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
The site runs as a Docker container on the server (157.180.64.13), with Nginx Proxy Manager in front of it handling TLS.

```bash
ssh root@157.180.64.13 'cd nuxt_ringling_info && ./deploy.sh'
```

`deploy.sh` pulls from git, builds the image (`--pull` refreshes the Node base image), replaces the `ringling_info` container (port 8080 -> 3000, `--restart unless-stopped`) and prunes old Docker resources. Changes must be pushed before deploying, since the server builds from git. `server/api/data.json` is baked into the image, so data changes also need a deploy.

### Print CV
`/cv/print` (and `/cv/print?lang=da`) is a print-friendly CV. `scripts/cv-pdf.sh` renders it to PDF with headless Chromium. The phone number is passed in via `CV_PHONE` and must never be committed, because the repo is public.

## Content Management
CV data is managed through the JSON structure in `server/api/data.json`. When updating professional information, modify this file and redeploy.