# RCH Melbourne - Hospital Website with AI Agent

This is a modern clone of the Royal Children's Hospital (RCH) Melbourne homepage, built with React, TypeScript, and integrated with an AI-powered conversational agent using ElevenLabs technology.

## 🏥 About RCH Melbourne

The Royal Children's Hospital Melbourne is Australia's leading children's hospital, providing:
- World-class pediatric care
- Over 50 medical specialties
- Advanced research facilities
- Emergency services
- Family-centered approach to healthcare

This project demonstrates how a modern healthcare provider can enhance patient experience with an integrated AI conversational agent.

## ✨ Key Features

### Modern Landing Page
- **Responsive Design** - Works seamlessly on mobile, tablet, and desktop
- **Beautiful UI** - Clean, professional design with smooth animations
- **Hospital-Focused Sections**:
  - Hero section with hospital messaging
  - Comprehensive services overview
  - Patient portal CTA
  - Contact information and footer

### AI Conversational Agent
- **ElevenLabs Integration** - Natural, lifelike conversational AI
- **Floating Widget** - Always-accessible patient support chat
- **Smart Routing** - Assist with appointment inquiries, general questions, and patient support
- **24/7 Availability** - Available around the clock for patient assistance

## 🛠️ Technology Stack

| Layer                    | Technology                                      | Purpose                                        |
| ------------------------ | ----------------------------------------------- | ---------------------------------------------- |
| **Frontend**             | React 18 + TypeScript + Vite                    | Modern frontend framework with fast build tool |
| **UI Components**        | Shadcn UI + Tailwind CSS                        | Beautiful, accessible component library        |
| **Animations**           | Framer Motion                                   | Smooth scroll and interaction animations       |
| **AI Conversational**    | ElevenLabs Conversational AI                    | Natural language processing and TTS            |
| **Icons**                | Lucide React                                    | Professional icon library                      |
| **Routing**              | React Router DOM                                | Client-side page navigation                    |
| **Deployment**           | Vercel                                          | Serverless hosting and deployment              |

## 🚀 Quick Start (Local Development)

### Prerequisites

- Node.js 18.x or later
- npm or pnpm package manager
- Git

### Installation

#### 1. Clone & Install

```bash
git clone <repository-url>
cd rch-hospital-clone
npm install
```

#### 2. Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Then add your ElevenLabs agent configuration:

```env
# ElevenLabs Configuration
VITE_ELEVENLABS_AGENT_ID=your_agent_id_here
```

To get your ElevenLabs Agent ID:
1. Go to [ElevenLabs Console](https://elevenlabs.io/app/conversational-ai)
2. Create or select your conversational AI agent
3. Copy the Agent ID
4. Paste it in your `.env.local` file

#### 3. Start the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

#### 4. Build for Production

```bash
npm run build
```

#### 5. Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                    # Shadcn UI components
│   ├── animations/            # Animation utilities
│   ├── Header.tsx            # Navigation header with RCH branding
│   ├── HeroSection.tsx        # Landing hero section
│   ├── FeaturesSection.tsx    # Medical services showcase
│   ├── CTASection.tsx         # Patient portal call-to-action
│   ├── Footer.tsx             # Footer with contact info
│   ├── ConversationalAgent.tsx # ElevenLabs AI widget
│   └── ...                    # Other utility components
├── pages/
│   ├── Index.tsx              # Main landing page
│   ├── Privacy.tsx            # Privacy policy
│   ├── Terms.tsx              # Terms of service
│   ├── GDPR.tsx               # GDPR statement
│   ├── Cookies.tsx            # Cookie policy
│   └── NotFound.tsx           # 404 page
├── hooks/                     # Custom React hooks
├── lib/                       # Utility functions
├── App.tsx                    # Main app component with routing
├── main.tsx                   # React DOM entry point
└── index.css                  # Global styles
```

## 🧩 Components Overview

### Header Component
- Responsive navigation with mobile menu
- RCH branding with animated heart icon
- Book Appointment CTA button
- Sticky header with scroll detection

### Hero Section
- Large hero image/placeholder
- Hospital messaging and value proposition
- Key statistics (50+ specialties, 1,000+ staff, 160+ years)
- Call-to-action buttons
- Smooth scroll animations

### Features Section (Services)
- 6 medical service cards with icons
- Responsive grid layout
- Hover animations
- Hospital-specific services (Cardiology, Neurology, Emergency, etc.)

### Patient Portal Section
- Benefits of patient portal
- Secure access messaging
- Direct messaging features
- Patient information management

### Conversational Agent
- Floating chat widget (bottom-right)
- AI-powered patient support
- Available 24/7
- Customizable for hospital workflows

### Footer
- Hospital contact information
- Social media links
- Service links
- Legal documents and privacy policies
- Copyright information

## 🎨 Customization

### Branding Colors
The site uses a blue color scheme (`blue-600`, `blue-700`) to align with healthcare branding. To customize:

1. Edit Tailwind color classes in components
2. Update color definitions in `tailwind.config.ts`
3. Search for `blue-` prefixes in component files

### Content Updates
- **Hospital Info**: Update `Footer.tsx` with actual RCH contact details
- **Services**: Edit the `features` array in `FeaturesSection.tsx`
- **Messages**: Update hero text in `HeroSection.tsx`
- **Links**: Update button `onClick` handlers to point to real pages

### AI Agent Configuration
- Get your ElevenLabs Agent ID from the [ElevenLabs Console](https://elevenlabs.io/app/conversational-ai)
- Update `.env.local` with your agent ID
- The agent widget will appear on page load

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI (if not already installed)
npm i -g vercel

# Deploy to production
vercel --prod
```

### Environment Variables on Vercel
1. Go to your Vercel project settings
2. Add environment variable: `VITE_ELEVENLABS_AGENT_ID=your_agent_id`
3. Redeploy

### Deploy to Other Platforms

The site can be deployed to any static hosting platform:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting
- Any Node.js hosting with `npm run build`

## 📱 Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔐 Security & Privacy

- ElevenLabs agent communication is encrypted
- No patient data is stored in this demo
- GDPR-compliant privacy policies included
- Regular security updates recommended

## 🧪 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Build in development mode
npm run build:dev

# Lint code for errors
npm run lint

# Preview production build locally
npm run preview

# Clean node_modules and dist
npm run clean

# Reinstall dependencies
npm run reinstall
```

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Shadcn UI Components](https://ui.shadcn.com)
- [ElevenLabs Conversational AI](https://elevenlabs.io/docs/conversational-ai)
- [Framer Motion](https://www.framer.com/motion/)

## 🐛 Troubleshooting

### AI Agent Not Appearing
- Check that `VITE_ELEVENLABS_AGENT_ID` is set correctly in `.env.local`
- Verify the agent exists in your ElevenLabs console
- Clear browser cache and reload
- Check browser console for errors

### Styling Issues
- Ensure Tailwind CSS is properly compiled
- Clear `.next` or `dist` folder and rebuild
- Check that no custom CSS is conflicting

### Build Errors
- Run `npm run clean` to reset dependencies
- Delete `package-lock.json` and run `npm install` again
- Check Node.js version is 18.x or later

## 🤝 Contributing

To improve this project:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Commit with clear messages (`git commit -m 'Add feature'`)
5. Push to your fork (`git push origin feature/improvement`)
6. Open a Pull Request

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.

## 📧 Support

For support or questions:
- Check the troubleshooting section above
- Review component documentation in comments
- Open an issue in the repository
- Contact your project maintainer

---

**RCH Melbourne Website** - Providing world-class pediatric care with modern technology.

Built with ❤️ using React, TypeScript, and ElevenLabs AI
