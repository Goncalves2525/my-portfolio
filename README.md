![Banner](https://raw.githubusercontent.com/Goncalves2525/my-portfolio/main/images/social.png)

# Ricardo Gonçalves - Portfolio 🚀

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)
[![React](https://img.shields.io/badge/React-18-blue.svg)](https://reactjs.org/)
[![Node](https://img.shields.io/badge/Node-20.11.1-brightgreen.svg)](https://nodejs.org/)

Personal portfolio website showcasing my skills, projects, and professional experience as a Computer Engineering student and System Administrator.

**Live Demo:** https://ricardogoncalves.dev/

---

## 📋 About

This portfolio is a modern, responsive web application built with React that highlights my journey in software development, DevOps, and system administration. It features an elegant UI with smooth animations and a clean design that adapts seamlessly to all devices.

### Key Sections

- **🏠 Home** - Introduction and quick overview
- **💼 Experience** - Work history and internships
- **🎓 Education** - Academic background and qualifications
- **🛠️ Skills** - Technical competencies in DevOps and Full Stack Development
- **📂 Projects** - Personal and academic projects with category tags
- **🏆 Certifications** - Professional certifications and achievements
- **📧 Contact** - Get in touch with me

---

## 🛠️ Technologies Used

This portfolio is built with modern web technologies:

### Core
- **[React](https://reactjs.org/)** - UI library for building component-based interfaces
- **[React Router](https://reactrouter.com/)** - Navigation and routing
- **[Styled Components](https://styled-components.com/)** - CSS-in-JS styling solution

### UI & Animation
- **[React Reveal](https://www.react-reveal.com/)** - Smooth scroll animations
- **[Base Web](https://baseweb.design/)** - UI component library from Uber
- **[Iconify](https://iconify.design/)** - Icon framework with extensive icon sets
- **[Font Awesome](https://fontawesome.com/)** - Icon toolkit

### Data & API
- **[GraphQL](https://graphql.org/)** - Query language for APIs
- **[Apollo Client](https://www.apollographql.com/)** - GraphQL client

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v20.11.1 or higher)
- **npm** (v10.2.4 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Goncalves2525/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```
   The application will open at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```

---

## ⚙️ Configuration

### Personal Information

All personal data is centralized in `src/portfolio.js`. Update this file to customize:

- Personal details (name, bio, contact)
- Skills and competencies
- Work experience and education
- Projects and certifications
- Social media links

### Theme Customization

Themes are defined in `src/theme.js`. To change the color scheme:

```javascript
// Available themes: blueTheme, brownTheme, purpleTheme, etc.
export const chosenTheme = blueTheme;
```

You can also create custom themes by following the existing theme structure.

### Adding Projects

Projects support multiple category tags (DevOps, Web, Mobile). Example:

```javascript
{
  id: "1",
  name: "Project Name",
  categories: ["DevOps", "Web"], // Multiple tags supported
  description: "Project description",
  url: "https://github.com/...",
  languages: [
    { name: "TypeScript", iconifyClass: "logos:typescript-icon" },
    { name: "React", iconifyClass: "simple-icons:react" }
  ]
}
```

---

## 📁 Project Structure

```
├── public/              # Static files and assets
├── src/
│   ├── assets/          # Images, SVGs, and documents
│   ├── components/      # Reusable React components
│   ├── containers/      # Page section containers
│   ├── pages/           # Main page components
│   ├── portfolio.js     # Central configuration file
│   ├── theme.js         # Theme definitions
│   └── App.js           # Root component
├── package.json
└── README.md
```

---

## 🎨 Features

- ✅ **Fully Responsive** - Optimized for all screen sizes
- ✅ **Modern Design** - Clean and professional UI
- ✅ **Smooth Animations** - Engaging user experience with React Reveal
- ✅ **Theme Support** - Multiple color schemes available
- ✅ **SEO Optimized** - Structured data and meta tags
- ✅ **Category Tags** - Visual project categorization (DevOps, Web, Mobile)
- ✅ **Iconify Integration** - Extensive icon library support
- ✅ **Easy to Customize** - Single configuration file for all content

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

---

## 🙏 Acknowledgments

This portfolio was built upon the excellent [masterPortfolio](https://github.com/ashutosh1919/masterPortfolio) template by [Ashutosh Hathidara](https://github.com/ashutosh1919), with extensive customizations and enhancements.

---

<p align="center">Made with ❤️ by Ricardo Gonçalves</p>
