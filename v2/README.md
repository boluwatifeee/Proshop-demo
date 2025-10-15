# ProShop V2

A modern eCommerce platform built with TypeScript, React, and Node.js.

## Tech Stack

### Backend

- Node.js + Express + TypeScript
- MongoDB + Mongoose
- JWT Authentication
- bcryptjs for password hashing
- Nodemailer for email functionality
- Swagger UI for API documentation
- Paystack for payment processing

### Frontend

- React + TypeScript
- Tailwind CSS for styling
- Zustand for state management
- Zod for validation
- React Router for navigation
- React Toastify for notifications

## Getting Started

### Prerequisites

- Node.js (v18+)
- MongoDB
- npm or yarn

### Installation

1. Install dependencies for all workspaces:

```bash
npm install
```

2. Set up environment variables:

```bash
# Backend
cp v2/backend/.env.example v2/backend/.env
# Edit v2/backend/.env with your configuration
```

3. Start development servers:

```bash
# V1 (original)
npm run dev

# V2 (new stack)
npm run dev:v2
```

### Available Scripts

- `npm run dev:v2` - Start both v2 backend and frontend in development mode
- `npm run build:v2` - Build both v2 backend and frontend for production
- `npm run dev` - Start v1 (original) development servers

## Project Structure

```
v2/
├── backend/          # Express + TypeScript API
│   ├── src/
│   │   ├── index.ts
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── utils/
│   ├── package.json
│   └── tsconfig.json
└── frontend/         # React + TypeScript + Tailwind
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── stores/
    │   ├── utils/
    │   ├── App.tsx
    │   └── main.tsx
    ├── package.json
    ├── tailwind.config.js
    └── vite.config.ts
```

## Development

The v2 backend runs on port 6000 and the frontend on port 3000. The frontend is configured to proxy API requests to the backend.
