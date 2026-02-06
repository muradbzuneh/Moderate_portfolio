# Murad Bzuneh - Portfolio v2

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## ✨ Features

- 🌓 **Dark/Light Mode** - Toggle between themes with persistent preference
- 🎨 **Modern UI/UX** - Clean design with smooth animations
- 📱 **Fully Responsive** - Works perfectly on all devices
- 📧 **Contact Form** - Integrated with EmailJS for direct messaging
- 🎯 **Scroll Animations** - Smooth reveal animations on scroll
- ⚡ **Fast Performance** - Optimized build with Vite
- 🎭 **Professional Preloader** - Engaging loading experience
- 🔄 **Dynamic Role Display** - Rotating job titles in hero section

## 🛠️ Tech Stack

- **Framework**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: React Icons, Boxicons
- **Email Service**: EmailJS
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Murad-v2-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file in the root directory:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Start development server:
```bash
npm run dev
```

5. Open http://localhost:5173 in your browser

## 🚀 Build & Deploy

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to Vercel
See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## 📁 Project Structure

```
Murad-v2-portfolio/
├── public/              # Static assets
│   ├── *.jpg           # Project images
│   └── *.pdf           # CV file
├── src/
│   ├── assets/         # Images and icons
│   ├── Componets/      # React components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Preloader.tsx
│   │   ├── Project.tsx
│   │   ├── projectCard.tsx
│   │   └── skills.tsx
│   ├── context/        # React context
│   │   └── ThemeContext.tsx
│   ├── data/           # Static data
│   │   ├── project.ts
│   │   └── skills.ts
│   ├── hooks/          # Custom hooks
│   │   └── useScrollAnimation.ts
│   ├── Pages/          # Page components
│   │   └── Home.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .env                # Environment variables
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── vercel.json

```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`src/Componets/Hero.tsx`):
   - Update name and roles
   - Change profile image in `src/assets/imgs/`

2. **About Section** (`src/Componets/About.tsx`):
   - Modify education, experience, and profile info

3. **Skills** (`src/data/skills.ts`):
   - Add/remove skills and technologies

4. **Projects** (`src/data/project.ts`):
   - Update project details, images, and links

5. **Contact** (`src/Componets/Contact.tsx`):
   - Configure EmailJS credentials in `.env`

### Theme Colors

Edit `tailwind.config.js` to customize colors:
- Primary: `cyan-400` / `cyan-500`
- Background: `slate-900` (dark) / `white` (light)

## 📧 EmailJS Setup

1. Create account at [EmailJS](https://www.emailjs.com/)
2. Create email service
3. Create email template
4. Get your credentials:
   - Service ID
   - Template ID
   - Public Key
5. Add to `.env` file

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Murad Bzuneh**
- Portfolio: [Your deployed URL]
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Icons from [Boxicons](https://boxicons.com/)
- Email service by [EmailJS](https://www.emailjs.com/)

---

Made with ❤️ by Murad Bzuneh
