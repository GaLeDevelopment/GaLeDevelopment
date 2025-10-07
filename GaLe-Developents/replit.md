# GaLe Developments - Technology Solutions Platform

## Overview

GaLe Developments is a modern web application showcasing technology products and services. It's a marketing-focused single-page application with a contact form system for lead generation. The application presents technology solutions including cloud services, AI/ML, cybersecurity, mobile solutions, data analytics, and custom software development.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Tooling**
- **React with TypeScript**: Type-safe component-based UI development using functional components and hooks
- **Vite**: Fast build tool and development server with HMR (Hot Module Replacement)
- **Wouter**: Lightweight client-side routing (chosen over React Router for minimal bundle size)
- **TanStack Query (React Query)**: Server state management with automatic caching and background refetching

**UI Component System**
- **shadcn/ui**: Pre-built, customizable components based on Radix UI primitives
- **Tailwind CSS**: Utility-first styling with custom design tokens defined in CSS variables
- **Design System**: "New York" style variant with neutral base color scheme
- **Responsive Design**: Mobile-first approach with breakpoints for tablets and desktops

**Form Handling**
- **React Hook Form**: Performant forms with minimal re-renders
- **Zod**: Schema validation integrated with react-hook-form via @hookform/resolvers
- **Validation**: Client-side validation with server-side validation fallback

**Page Structure**
- Single-page application with smooth scroll navigation
- Sections: Hero, Products, About, Contact, Footer
- Fixed navigation bar with scroll-to-section functionality

### Backend Architecture

**Server Framework**
- **Express.js**: Minimal REST API server
- **TypeScript**: Type safety across the entire backend
- **ESM Modules**: Modern JavaScript module system

**API Design**
- RESTful endpoints for contact form submission and retrieval
- POST `/api/contact` - Submit contact messages
- GET `/api/contact-messages` - Retrieve all messages (admin functionality)
- JSON request/response format with structured error handling

**Data Storage**
- **In-Memory Storage**: Default implementation using Map data structures (MemStorage class)
- **Abstraction Layer**: IStorage interface allows switching to database implementations
- **Schema Definition**: Shared TypeScript types between frontend and backend

**Middleware Stack**
- JSON body parsing with raw body preservation (for webhook verification if needed)
- URL-encoded form data support
- Request logging with duration tracking for API routes
- Development-only Vite middleware for HMR

### Database Schema

**Planned PostgreSQL Schema** (Drizzle ORM configured but using in-memory storage currently)

**Users Table**
- id: UUID primary key (auto-generated)
- username: Unique text field
- password: Text field (note: should be hashed in production)

**Contact Messages Table**
- id: UUID primary key (auto-generated)
- firstName: Required text field
- lastName: Required text field
- email: Required text field (validated as email)
- phone: Optional text field
- service: Required text field (selected service category)
- message: Required text field (minimum 10 characters)
- createdAt: Timestamp with default now()

**Schema Tooling**
- Drizzle Kit for migrations (configured but not actively used)
- Drizzle-Zod for automatic Zod schema generation from database schema
- Migration files output to `/migrations` directory

### External Dependencies

**Database & ORM**
- **@neondatabase/serverless**: Neon PostgreSQL serverless driver (configured but not connected)
- **Drizzle ORM**: Type-safe SQL query builder and schema manager
- **connect-pg-simple**: PostgreSQL session store (installed but not actively used)

**UI Libraries**
- **Radix UI**: Comprehensive suite of unstyled, accessible component primitives (~20 components)
- **Lucide React**: Icon library for consistent iconography
- **React Icons**: Additional icon sets (specifically Simple Icons for social media)
- **Embla Carousel**: Carousel component library
- **cmdk**: Command palette component
- **date-fns**: Date manipulation and formatting

**Styling**
- **Tailwind CSS**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant styling
- **clsx + tailwind-merge**: Conditional class name utilities

**Development Tools**
- **Replit Plugins**: Development banner, cartographer (code mapping), runtime error overlay
- **TypeScript**: Strict type checking enabled
- **ESBuild**: Production bundling for server code

**Build Configuration**
- Development: tsx for running TypeScript directly
- Production: Vite builds client, esbuild bundles server
- Output: Client assets to `dist/public`, server bundle to `dist/index.js`

### Configuration Patterns

**Path Aliases**
- `@/*` → Client source files
- `@shared/*` → Shared types and schemas
- `@assets/*` → Static assets

**Environment Variables**
- DATABASE_URL: PostgreSQL connection string (required by drizzle config but not actively used)

**Build Outputs**
- Client build: `dist/public` (static files for serving)
- Server build: `dist/index.js` (bundled ESM module)
- TypeScript build info: Cached in node_modules for incremental builds