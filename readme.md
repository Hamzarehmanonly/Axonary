# Axonary - Digital Agency Website

## Overview

Axonary is a modern digital agency website built with React, TypeScript, and Vite. The website showcases the agency's services, portfolio, approach, and provides information about the company.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI/UX**: Sleek animations and transitions using Framer Motion and GSAP
- **3D Elements**: Interactive 3D elements using Three.js
- **Performance Optimized**: Fast loading times and smooth scrolling experience
- **SEO Friendly**: Built with best practices for search engine optimization

## Pages

- **Home**: Landing page with key information and call-to-actions
- **About**: Information about the company, team, and mission
- **Work**: Portfolio showcasing previous projects and case studies
- **Solutions**: Services and solutions offered by the agency
- **Approach**: The agency's methodology and process
- **Blog**: Articles and insights from the team
- **Contact**: Contact form and information
- **Support**: Customer support resources
- **Legal Pages**: Privacy Policy, Terms & Conditions, Cookie Policy, etc.

## Tech Stack

- **Frontend Framework**: React with TypeScript
- **Routing**: React Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, GSAP
- **3D Rendering**: Three.js with React Three Fiber
- **Build Tool**: Vite
- **Package Manager**: npm/yarn

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/axonary-website.git
   cd axonary-website
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory.

## Deployment

### GitHub Pages Deployment

1. Install the gh-pages package:
   ```bash
   npm install --save-dev gh-pages
   # or
   yarn add --dev gh-pages
   ```

2. Add the following to your `package.json`:
   ```json
   "homepage": "https://axonary.com",
   "scripts": {
     // ... other scripts
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Configure Vite for base path (create or update `vite.config.ts`):
   ```typescript
   export default defineConfig({
     // ... other config
     base: '/',
   });
   ```

4. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   # or
   yarn deploy
   ```

### Custom Domain Setup

1. In your GitHub repository, go to Settings > Pages
2. Under "Custom domain", enter `axonary.com` and save
3. Create a CNAME file in the `public` directory with the content:
   ```
   axonary.com
   ```

4. Configure your domain's DNS settings:
   - Add an A record pointing to GitHub Pages IP addresses:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Or add a CNAME record pointing to `your-username.github.io`

5. Wait for DNS propagation (may take up to 24 hours)
6. Ensure "Enforce HTTPS" is checked in GitHub Pages settings

## Project Structure

```
axonary-website/
├── public/            # Static assets
├── src/
│   ├── assets/        # Images, fonts, etc.
│   ├── components/    # Reusable UI components
│   ├── context/       # React context providers
│   ├── hooks/         # Custom React hooks
│   ├── pages/         # Page components
│   ├── styles/        # Global styles and Tailwind config
│   ├── App.tsx        # Main application component
│   └── main.tsx       # Entry point
├── index.html         # HTML template
├── package.json       # Dependencies and scripts
├── tsconfig.json      # TypeScript configuration
└── vite.config.ts     # Vite configuration
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Axonary - [contact@axonary.com](mailto:contact@axonary.com)

Project Link: [https://github.com/your-username/axonary-website](https://github.com/your-username/axonary-website)
