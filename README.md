# Text Changer

A modern text utility web application built with React and Vite that provides different types of text modifications and analysis.

## 🌟 Features

- **Text Transformation**: Convert text to uppercase, lowercase, or reverse
- **Extra Space Removal**: Clean up unnecessary spaces from your text
- **Copy to Clipboard**: Quickly copy processed text
- **Text Analysis**: Get real-time word count, character count, and estimated reading time
- **Dark/Light Mode**: Toggle between dark and light themes
- **Responsive Design**: Works seamlessly on all devices
- **Fast & Lightweight**: Built with Vite for optimal performance

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Akash9119/Text_Changer.git
cd Text_Changer
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will open automatically at `http://localhost:5173`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## 🏗️ Project Structure

```
Text_Changer/
├── src/
│   ├── components/          # React components
│   │   ├── Navbar.js       # Navigation bar with theme toggle
│   │   ├── TextForm.js     # Main text input and transformation area
│   │   ├── Alerts.jsx      # Alert notifications
│   │   ├── About.js        # About page with accordion
│   │   └── Contact.jsx     # Contact information
│   ├── styles/             # Component-specific styles
│   │   └── Contact.css
│   ├── App.jsx             # Main App component
│   ├── main.jsx            # Entry point
│   ├── App.css             # App styles
│   └── index.css           # Global styles
├── public/                 # Static files
├── index.html              # HTML template
├── vite.config.js          # Vite configuration
├── package.json            # Project dependencies
├── .eslintrc.cjs           # ESLint configuration
└── README.md               # This file
```

## 🛠️ Tech Stack

- **React 18** - UI library
- **React Router 6** - Routing and navigation
- **Vite** - Modern build tool and dev server
- **Bootstrap 5** - CSS framework
- **ESLint** - Code quality tool

## 🔧 Configuration

### Environment Variables

Copy `.env.example` to `.env.local` and customize as needed:

```bash
cp .env.example .env.local
```

### Vite Configuration

The `vite.config.js` includes:
- React plugin support
- Development server on port 5173
- Production build optimization

## 🎨 Customization

### Colors and Themes

Dark mode colors are defined in components:
- Background: `#69696e`
- Input: `#21384f`

Light mode uses Bootstrap's default white theme.

### Adding New Features

1. Create new component in `src/components/`
2. Add route to `src/App.jsx`
3. Import Bootstrap classes as needed

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized `dist/` folder ready for deployment.

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to Other Platforms

- **Netlify**: Connect GitHub repo and select `npm run build` as build command
- **GitHub Pages**: Use `gh-pages` package or GitHub Actions
- **AWS Amplify**: Connect repository and follow their guide

## 📝 Upgrade from Create React App

This project was upgraded from Create React App to Vite for better performance and developer experience.

### Key Changes:
- ✅ Removed `react-scripts` dependency
- ✅ Added Vite and `@vitejs/plugin-react`
- ✅ Updated entry point from `src/index.js` to `src/main.jsx`
- ✅ Moved `index.html` to project root
- ✅ Updated scripts in `package.json`
- ✅ Converted components to modern ES modules
- ✅ Improved file structure and organization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/YourFeature`
3. Commit changes: `git commit -m 'Add YourFeature'`
4. Push to branch: `git push origin feature/YourFeature`
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💼 Author

**Akash Vasava**
- GitHub: [@Akash9119](https://github.com/Akash9119)
- LinkedIn: [Akash Vasava](https://www.linkedin.com/in/akash-vasava/)
- Email: akashj.vasava@gmail.com

## 🐛 Issues & Support

For issues, feature requests, or questions, please open an issue on [GitHub Issues](https://github.com/Akash9119/Text_Changer/issues).

---

**Made with ❤️ and React**
