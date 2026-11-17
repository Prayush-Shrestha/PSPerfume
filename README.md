# PS Perfume

A full-stack perfume storefront built with Next.js, Express, and MongoDB, with authentication handled by Clerk.

[![CI](https://github.com/Prayush-Shrestha/PSPerfume/actions/workflows/ci.yml/badge.svg)](https://github.com/Prayush-Shrestha/PSPerfume/actions/workflows/ci.yml)
![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs)
![Express](https://img.shields.io/badge/Express-5-000000?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?logo=mongodb)
![Clerk](https://img.shields.io/badge/Auth-Clerk-6C47FF)

## Features

- Browse a curated perfume catalog and view detailed product pages with notes and descriptions
- Search the catalog by product name
- Add products to a cart, adjust quantities, and check out
- Sign up and sign in with Clerk
- Protected profile page showing the signed-in user's name and email
- Local order history generated at checkout, with the ability to remove past orders
- Contact form with client-side validation
- REST API for product CRUD operations
- GitHub Actions CI that lints and builds the frontend and validates the backend

## Tech stack

| Layer | Technology |
| --- | --- |
| Frontend | Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4 |
| Auth | Clerk |
| Backend | Node.js, Express 5 |
| Database | MongoDB with Mongoose |
| CI | GitHub Actions |

## Project structure

```text
PSPerfume/
├── .github/
│   └── workflows/
│       └── ci.yml              # Lint, build, and backend syntax checks
├── backend/
│   ├── config/
│   │   └── db.js               # MongoDB connection
│   ├── controllers/
│   │   └── productController.js
│   ├── models/
│   │   ├── Order.js
│   │   ├── Product.js
│   │   └── User.js
│   ├── routes/
│   │   └── productRoutes.js
│   ├── server.js               # Express app entry point
│   └── package.json
└── frontend/
    ├── app/
    │   ├── components/         # Navbar, ProductCard, Hero, Footer, ...
    │   ├── context/            # Cart context
    │   ├── data/               # Local perfume catalog
    │   ├── shop/[id]/          # Product detail page
    │   └── ...                 # Home, shop, search, cart, history, profile, ...
    ├── public/images/          # Product images
    ├── proxy.ts                # Clerk middleware (Next.js 16 proxy)
    └── package.json
```

## Getting started

### Prerequisites

- Node.js 20.9 or newer (Node 22 LTS recommended)
- npm
- A MongoDB database (local instance or a free MongoDB Atlas cluster)
- A [Clerk](https://clerk.com) application with its API keys

### 1. Clone the repository

```bash
git clone https://github.com/Prayush-Shrestha/PSPerfume.git
cd PSPerfume
```

### 2. Set up the backend

```bash
cd backend
npm install
```

Create `backend/.env`:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/psperfume
FRONTEND_URL=http://localhost:3000
```

For MongoDB Atlas, replace `MONGO_URI` with your connection string:

```env
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/psperfume
```

Start the API:

```bash
npm run dev
```

The server listens on `http://localhost:5000` by default. Check it with:

```bash
curl http://localhost:5000/
```

### 3. Set up the frontend

In a second terminal:

```bash
cd frontend
npm install
```

Create `frontend/.env.local` with your Clerk keys (found in the Clerk dashboard under **API keys**):

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_publishable_key
CLERK_SECRET_KEY=sk_test_your_secret_key
```

Start the app:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

### Backend (`backend/.env`)

| Variable | Required | Description |
| --- | --- | --- |
| `MONGO_URI` | Yes | MongoDB connection string |
| `PORT` | No | API port (defaults to `5000`) |
| `FRONTEND_URL` | No | Allowed CORS origin (defaults to `http://localhost:3000`) |

### Frontend (`frontend/.env.local`)

| Variable | Required | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Yes | Clerk publishable key |
| `CLERK_SECRET_KEY` | Yes | Clerk secret key |

Both `.env` files are git-ignored. Never commit real credentials.

## API reference

Base URL: `http://localhost:5000`

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/` | Health check |
| `GET` | `/api/products` | List all products (newest first) |
| `GET` | `/api/products/:id` | Get a single product |
| `POST` | `/api/products` | Create a product |
| `PUT` | `/api/products/:id` | Update a product |
| `DELETE` | `/api/products/:id` | Delete a product |

Example request:

```bash
curl -X POST http://localhost:5000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "NOIR",
    "type": "Woody • Spicy",
    "price": 5999.99,
    "image": "/images/perfume.jpg",
    "description": "A warm, woody fragrance with spicy undertones.",
    "notes": ["Bergamot", "Black Pepper", "Sandalwood"],
    "stock": 25
  }'
```

A product document contains `name`, `type`, `price`, `image`, `description`, `notes`, `stock`, and timestamps. The backend also defines `User` and `Order` Mongoose models; only product routes are wired up at the moment.

## Frontend routes

| Route | Description |
| --- | --- |
| `/` | Home page with hero, best sellers, and features |
| `/shop` | Full product catalog |
| `/shop/[id]` | Product details and add-to-cart |
| `/search` | Search products by name |
| `/cart` | Shopping cart |
| `/history` | Order history |
| `/profile` | Signed-in user profile (protected by Clerk middleware) |
| `/contact` | Contact form |
| `/sign-in`, `/sign-up` | Clerk authentication pages |

## Authentication

Clerk powers sign-up, sign-in, and session management. It was chosen because it provides secure, ready-to-use authentication and makes registration, login, and account management straightforward to implement. Routes under `/profile` are protected in [`frontend/proxy.ts`](frontend/proxy.ts) using Clerk middleware.

## Available scripts

### Frontend (`frontend/`)

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Next.js dev server on port 3000 |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

### Backend (`backend/`)

| Command | Description |
| --- | --- |
| `npm run dev` | Start the API with nodemon (auto-reload) |
| `npm start` | Start the API with Node.js |

## Continuous integration

The workflow in [`.github/workflows/ci.yml`](.github/workflows/ci.yml) runs on pushes and pull requests to `main`:

- **Frontend:** installs dependencies with `npm ci`, runs ESLint, and creates a production build using placeholder Clerk keys.
- **Backend:** installs dependencies with `npm ci` and runs `node --check` over every backend JavaScript file.

There is no automated test suite yet.

## Known limitations

- The storefront catalog is served from [`frontend/app/data/perfume.ts`](frontend/app/data/perfume.ts); the frontend does not consume the product API yet.
- Cart contents and order history are persisted in `localStorage`, so they are per-browser rather than tied to a user account.
- The `Order` model exists, but there are no order API routes yet.
- The contact form validates input on the client and does not submit to a backend service.

## Contributing

1. Fork the repository and create a feature branch.
2. Make your changes and run `npm run lint` and `npm run build` in `frontend/`.
3. Open a pull request against `main`. CI must pass before merging.
