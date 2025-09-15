# Nike Ecommerce Store

A modern ecommerce application built with Next.js, TypeScript, Tailwind CSS, Drizzle ORM, and Neon PostgreSQL.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Neon PostgreSQL
- **ORM**: Drizzle ORM
- **Authentication**: Better Auth (configured)
- **State Management**: Zustand

## Features

- Product catalog with Nike items
- Responsive design with Tailwind CSS
- Database integration with Drizzle ORM
- Type-safe database operations
- Server-side rendering

## Getting Started

### Prerequisites

- Node.js 18+ 
- A Neon PostgreSQL database

### Setup

1. **Clone and install dependencies**:
```bash
npm install
```

2. **Environment Variables**:
Copy `.env.example` to `.env.local` and configure:
```bash
cp .env.example .env.local
```

Add your Neon database URL:
```
DATABASE_URL="postgresql://username:password@hostname:port/database"
```

3. **Database Setup**:
```bash
# Generate migrations
npm run db:generate

# Push schema to database
npm run db:push

# Seed with sample Nike products
npm run db:seed
```

4. **Run the development server**:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the Nike store.

## Database Scripts

- `npm run db:generate` - Generate migration files
- `npm run db:push` - Push schema changes to database
- `npm run db:migrate` - Run migrations
- `npm run db:seed` - Seed database with sample Nike products

## Project Structure

```
src/
├── app/                 # Next.js app router
├── components/          # React components
├── lib/
│   └── db/             # Database configuration and schema
│       ├── index.ts    # Database connection
│       ├── schema.ts   # Drizzle schema definitions
│       └── seed.ts     # Database seeding script
```

## Database Schema

### Products Table
- `id` - Serial primary key
- `name` - Product name
- `description` - Product description
- `price` - Decimal price
- `imageUrl` - Product image URL
- `category` - Product category
- `brand` - Product brand
- `stock` - Available stock
- `createdAt` - Creation timestamp
- `updatedAt` - Update timestamp

## Development

The app includes sample Nike products with real product images and descriptions. The homepage displays all products in a responsive grid layout.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Make sure to add your `DATABASE_URL` environment variable in the Vercel dashboard.
