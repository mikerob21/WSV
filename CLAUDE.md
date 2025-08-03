# WSV 2.0 - Next.js Application

## Project Overview
This is a modern Next.js application built with TypeScript, React 19, and Tailwind CSS v4. The project uses the latest Next.js 15 features including the App Router and Turbopack for development.

## Tech Stack
- **Framework**: Next.js 15.4.5
- **Language**: TypeScript 5
- **UI Library**: React 19.1.0
- **Styling**: Tailwind CSS v4
- **Build Tool**: Turbopack (dev mode)

## Project Structure
```
wsv2.0/
├── src/
│   └── app/                    # App Router directory
│       ├── layout.tsx          # Root layout component
│       ├── page.tsx           # Home page component
│       ├── globals.css        # Global styles with Tailwind
│       └── favicon.ico        # App favicon
├── public/                     # Static assets
│   ├── next.svg              # Next.js logo
│   ├── vercel.svg            # Vercel logo
│   ├── file.svg              # File icon
│   ├── globe.svg             # Globe icon
│   └── window.svg            # Window icon
├── package.json               # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── next.config.ts            # Next.js configuration
├── next-env.d.ts             # Next.js TypeScript declarations
└── postcss.config.mjs        # PostCSS configuration for Tailwind
```

## Available Scripts
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality

## Development Commands
- **Start Development**: `npm run dev`
- **Build for Production**: `npm run build`
- **Run Linting**: `npm run lint`
- **Type Checking**: `npx tsc --noEmit`

## Key Features
- **App Router**: Uses the new Next.js App Router for file-based routing
- **TypeScript**: Full TypeScript support with strict type checking
- **Tailwind CSS v4**: Latest version with improved performance
- **React 19**: Latest React features and improvements
- **Turbopack**: Fast development builds with Turbopack

## Architecture Notes
- **App Directory**: All routes and layouts are defined in `src/app/`
- **Server Components**: Default to Server Components for better performance
- **Client Components**: Use `"use client"` directive when needed
- **Layout System**: Nested layouts with `layout.tsx` files
- **Static Assets**: Place images and icons in the `public/` directory

## Styling Guidelines
- Use Tailwind CSS utility classes for styling
- Global styles are defined in `src/app/globals.css`
- Component-specific styles can be added using CSS modules or styled-components if needed

## Animation System
- **Comprehensive CSS Animations**: Use the extensive animation system in `globals.css`
- **Available Animations**: `animate-pulse`, `animate-flow`, `animate-float`, `animate-gradient-shift`, `animate-pulse-glow`, `animate-premium-float`, `animate-premium-glow`, `animate-premium-shimmer`
- **Premium Keyframes**: `@keyframes pulse-blue`, `@keyframes flow`, `@keyframes float`, `@keyframes gradient-shift`, `@keyframes pulse-glow`, `@keyframes premium-float`, `@keyframes premium-glow`, `@keyframes premium-shimmer`
- **Hover Effects**: Use utility classes like `hover-scale`, `hover-lift`, `magnetic`, `premium-hover`, `premium-hover-lift`
- **Interactive States**: `premium-focus`, `premium-selection`, `card-shadow` with hover transitions
- **Animation Guidelines**: 
  - NEVER create component-specific animations
  - ALWAYS use existing animation classes from the global design system
  - Search `globals.css` for available animations before creating new ones
  - Follow the established animation patterns and naming conventions

## TypeScript Configuration
- Strict mode enabled for better type safety
- Path mapping configured for clean imports
- Next.js types automatically included

## Best Practices
- Use Server Components by default
- Add Client Components only when interactivity is needed
- Optimize images using Next.js Image component
- Use TypeScript interfaces for prop definitions
- Follow Next.js file-based routing conventions