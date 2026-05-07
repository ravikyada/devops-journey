# DevOps Journey Portfolio

A modern, production-grade DevOps portfolio and technical blogging website built with Astro, Tailwind CSS, and Markdown.

![Astro](https://img.shields.io/badge/Astro-000000?style=for-the-badge&logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=github-pages&logoColor=white)

## 🚀 Features

- **Modern Design**: Clean, responsive design with dark theme
- **Blog System**: Markdown-based blogging with frontmatter support
- **SEO Optimized**: Built-in SEO with sitemap and RSS feeds
- **Fast Performance**: Static site generation with Astro
- **GitHub Integration**: Automated deployment via GitHub Actions
- **Responsive**: Mobile-first design that works on all devices

## 🛠️ Tech Stack

- **Framework**: Astro 6.2.2
- **Styling**: Tailwind CSS 4.2.4 with Typography plugin
- **Content**: Markdown with MDX support
- **Deployment**: GitHub Pages with GitHub Actions
- **Fonts**: Custom Atkinson font family

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Hero.astro      # Homepage hero section
│   ├── TechStack.astro # Technology showcase
│   ├── FeaturedBlogs.astro # Latest blog posts
│   └── ...
├── layouts/            # Page layouts
│   ├── BaseLayout.astro
│   └── BlogPost.astro
├── pages/              # Route pages
│   ├── index.astro     # Homepage
│   ├── about.astro     # About page
│   ├── experience.astro # Experience page
│   ├── projects.astro  # Projects page
│   ├── blog/           # Blog pages
│   └── contact.astro   # Contact page
├── content/            # Content collections
│   └── blog/           # Blog posts
└── styles/             # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ravikyada/devops-journey.git
cd devops-journey
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:4321](http://localhost:4321) in your browser.

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📝 Writing Blog Posts

Create new blog posts in `src/content/blog/` as `.md` files with frontmatter:

```markdown
---
title: "Your Blog Post Title"
description: "Brief description of the post"
pubDate: "2024-01-01"
tags: ["devops", "kubernetes", "aws"]
readingTime: 5
---

# Your Blog Post Content

Write your content here using Markdown...
```

## 🎨 Customization

### Theme Colors

Update the color scheme in `tailwind.config.mjs`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#your-color',
        secondary: '#your-color',
      }
    }
  }
}
```

### Fonts

Add custom fonts in `astro.config.mjs` under the `fonts` configuration.

## 🚀 Deployment

### GitHub Pages

1. Push your code to the `main` branch
2. Go to your repository settings
3. Enable GitHub Pages and select "GitHub Actions" as the source
4. The site will be automatically deployed on each push to main

### Manual Deployment

```bash
npm run build
# Deploy the dist/ folder to your hosting provider
```

## 📊 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run astro` - Run Astro CLI commands

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Astro](https://astro.build/) - The web framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Atkinson Hyperlegible](https://brailleinstitute.org/freefont) - Font family

## 📞 Contact

Feel free to reach out if you have any questions or suggestions!

- Website: [https://ravikyada.github.io/devops-journey](https://ravikyada.github.io/devops-journey)
- GitHub: [ravikyada](https://github.com/ravikyada)
- LinkedIn: [Ravi Kyada](https://www.linkedin.com/in/ravikyada)
