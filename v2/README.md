# ProShop V2

A modern, full‑stack eCommerce demo built with TypeScript, React (Vite) and Node.js (Express). This repository contains both the v2 backend (API) and frontend (web app) workspaces, and is designed to be easy to run locally for development and testing.

[![Node.js CI](https://img.shields.io/badge/node-%3E%3D18-brightgreen)](#) [![License](https://img.shields.io/badge/license-MIT-blue)](#)

---

## Table of Contents

- About
- Features
- Tech stack
- Getting started
  - Prerequisites
  - Installation
  - Environment variables
  - Running locally
- Project structure
- Environment variables reference
- API documentation
- Contributing
- License
- Contact

---

## About

ProShop V2 is a rewritten version of the original ProShop demo with a modern TypeScript-first stack and improved developer experience. It demonstrates common eCommerce features: product listing, shopping cart, user auth, orders, payments and admin management.

## Features

- User authentication (JWT)
- Product CRUD and image handling
- Shopping cart and checkout
- Order history and admin order management
- Email notifications (Nodemailer)
- Payment integration (Paystack)
- Input validation with Zod
- Fast frontend with Vite + React + Tailwind

## Tech stack

Backend
- Node.js + Express + TypeScript
- MongoDB + Mongoose
- JWT Authentication
- bcryptjs for password hashing
- Nodemailer for email functionality
- Swagger UI for API docs
- Paystack for payments

Frontend
- React + TypeScript + Vite
- Tailwind CSS
- Zustand for state management
- Zod for validation
- React Router
- React Toastify for notifications

## Getting started

### Prerequisites

- Node.js v18 or newer
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/boluwatifeee/Proshop-demo.git
cd Proshop-demo
```

2. Install dependencies for all workspaces

```bash
npm install
# or
# pnpm install
# yarn install
```

### Environment variables

Copy example env files and update values for your environment.

```bash
# Backend
cp v2/backend/.env.example v2/backend/.env
# Frontend
cp v2/frontend/.env.example v2/frontend/.env
```

Important vars (backend):
- MONGO_URI - MongoDB connection string
- JWT_SECRET - secret used to sign JWT tokens
- PORT - backend port (default 6000)
- PAYSTACK_SECRET_KEY - paystack secret key (if testing payments)
- EMAIL_HOST, EMAIL_USER, EMAIL_PASS - for Nodemailer

Important vars (frontend):
- VITE_API_URL - backend base URL (e.g. http://localhost:6000/api)
- VITE_PAYSTACK_KEY - public paystack key (optional)

### Running locally

There are scripts to run both v1 and v2. For v2 development (recommended):

```bash
# Run v2 backend and frontend concurrently
npm run dev:v2
```

If you want to run workspaces individually:

```bash
# Backend
cd v2/backend
npm run dev

# Frontend
cd v2/frontend
npm run dev
```

Default ports:
- Backend: http://localhost:6000
- Frontend: http://localhost:3000

## Project structure

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

## Environment variables reference (quick)

Backend (.env)

- MONGO_URI=
- PORT=6000
- JWT_SECRET=
- EMAIL_HOST=
- EMAIL_PORT=
- EMAIL_USER=
- EMAIL_PASS=
- PAYSTACK_SECRET_KEY=

Frontend (.env)

- VITE_API_URL=http://localhost:6000/api
- VITE_PAYSTACK_KEY=

## API documentation

The backend exposes Swagger UI for interactive API docs when running the server. Visit:

http://localhost:6000/api-docs

## Contributing

Contributions are welcome — open issues or PRs. If you plan to work on bigger changes, open an issue first to discuss the approach.

Suggested workflow:

1. Fork the repo
2. Create a feature branch
3. Commit changes and open a PR

## License

This project is provided under the MIT License. See the LICENSE file for details.

## Contact

Created by boluwatifeee — feel free to open issues or PRs on GitHub.

---
