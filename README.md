# Next.js Admin Panel

A simple admin panel built with **Next.js** and **Tailwind CSS**.  
This project includes **Login, Register, and Products** pages, uses **Context API** for authentication management, and **React Query** for handling API data.

---

## 🔹 Features

- **Authentication**
  - Login and Register pages
  - Token and user data stored in `localStorage`
  - Protected pages using `AuthGuard` (private pages and guest-only pages)

- **Products Management**
  - Display a list of products
  - Add, edit, and delete products
  - Search products
  - Uses **React Query** for fetching and caching data

- **User Interface**
  - Built with **Tailwind CSS**
  - Separate layouts for public (`PublicLayout`) and private pages (`PrivateLayout`)
  - RTL (Right-to-Left) support

- **Development & Tools**
  - Hot Reload / Fast Refresh
  - Toast notifications using `react-hot-toast`
  - Modals for product form and delete confirmation

---

## 🔹 Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/atena-navidi/atena-navidi-week21.git
cd next-admin-panel

## Getting Started

First, run the development server:
npm run dev
# or
yarn dev
```

## 🔹 Development Notes

#### Authentication:
 AuthProvider manages the user state, and AuthGuard protects private pages.

#### Routes:

/login → Login page

/register → Register page

/products → Products management (private page)

#### RTL & Tailwind:

RTL can be enabled in _app.jsx or in layout divs.

Private pages have a gray background

#### React Query: 
Handles fetch, update, cache invalidation, and state management for products.

#### Modals: 
Used for adding/editing and deleting products.

#### Toast notifications: 
Display success/error messages for user actions.




