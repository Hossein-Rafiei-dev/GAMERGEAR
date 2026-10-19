# 🎮 GAMERGEAR

### A Gaming Accessories Store Built with Next.js

GAMERGEAR is a gaming accessories e-commerce project built with Next.js, React, and Tailwind CSS. It provides a responsive shopping interface with product browsing, search, pagination, product details, shopping cart management, and local order submission.

## 🚀 Features

- 🛍️ **Product Listing** — Browse available gaming accessories.
- 🔎 **Product Search** — Find products by search query.
- 📄 **Pagination** — Navigate through product listings page by page.
- 🎮 **Product Details** — View information about individual products.
- 🛒 **Shopping Cart Management** — Add products, update quantities, and remove items.
- 💾 **Cart Persistence** — Preserve cart items after refreshing the page.
- 📦 **Order Submission** — Submit orders through the local JSON Server API.
- 📱 **Responsive Design** — Browse the store on desktop and mobile devices.
- 🧩 **Reusable Components** — Build the interface using reusable React components.
- 🔌 **Local API Integration** — Retrieve product data and submit orders using JSON Server.

**Note:** GAMERGEAR is a local development and portfolio project. It does not include a production backend or real payment processing.

## 🛠️ Tech Stack

- **Next.js** — React framework
- **React** — Component-based UI development
- **JavaScript and TypeScript** — Application logic and type safety
- **Tailwind CSS** — Responsive styling
- **JSON Server** — Local development API
- **Axios** — HTTP requests
- **Git and GitHub** — Version control and source code hosting

## 📸 Screenshots

### Homepage — Hero Section

![GAMERGEAR Homepage Hero](screenshots/home-hero.png)

### Homepage — Products

![GAMERGEAR Product Listing](screenshots/home-products.png)

### Homepage — Footer

![GAMERGEAR Homepage Footer](screenshots/home-footer.png)

### Product Details

![GAMERGEAR Product Details](screenshots/product-details.png)

### Shopping Cart

![GAMERGEAR Shopping Cart](screenshots/shopping-cart.png)

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)

### Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/Hossein-rafiee-esf/GAMERGEAR.git
cd GAMERGEAR
npm install
```

### Run the Application

GAMERGEAR requires both JSON Server and Next.js to run locally.

**Terminal 1 — Start JSON Server**

```bash
npm run server
```

The local API will be available at `http://localhost:8000`.

**Terminal 2 — Start Next.js**

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## 🗄️ Sample Database

The repository includes `db.example.json`, which provides sample product data for local development. The `npm run server` command starts JSON Server using this sample database.

The sample database is intended for development and demonstration purposes only. It is not configured as a production database.

**Important:** The local `app/db.json` file is intended to remain excluded from Git to help prevent private development data from being committed.

## 👨‍💻 Developer

**Hossein Rafiei**

Front-End Developer focused on React, Next.js, and modern web development.

- GitHub: [@Hossein-rafiee-esf](https://github.com/Hossein-rafiee-esf)
- Project Repository: [GAMERGEAR](https://github.com/Hossein-rafiee-esf/GAMERGEAR)

---

*Built as a front-end development learning project.*
