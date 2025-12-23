# ✈️ Travio — Travel and Accommodation Booking Platform

## Project Overview

Travio is a comprehensive, high-performance web application designed to streamline the entire process of searching, booking, and managing hotel accommodations. Developed during a Frontend Internship at **Foothill Technology Solution**, this platform offers a seamless experience for both travelers and administrators, built with modern frontend architecture and a strong focus on type safety and code quality.

## ✨ Key Features

The platform consists of two main interfaces, delivering a full-featured solution:

- **User Interface:**  
  Allows travelers to effortlessly search for hotels using advanced filters such as price, rating, and amenities. Interactive maps display hotel locations and nearby attractions, enhancing discovery. The booking process is secure and user-friendly, featuring a multi-step form validated with robust tools. Upon confirmation, users instantly receive downloadable PDF booking summaries.

- **Admin Interface:**  
  Provides administrators with full control to create, view, update, and delete data for cities, hotels, and rooms, ensuring efficient content management and up-to-date listings.

## 🛠️ Technical Stack: Built for Performance and Developer Experience

Travio is built on a carefully selected stack of modern tools that optimize performance and maintainability:

- **React 19 & TypeScript:** Building scalable, type-safe user interfaces that catch errors early and enhance developer productivity.  
- **Tailwind CSS & ShadCN UI:** Delivering fast, consistent, and accessible styling with a utility-first approach.  
- **Zustand & TanStack Query:** Managing complex application state and server-side data fetching efficiently.  
- **Formik & Yup:** Handling form state and validation robustly for smooth user interactions.  
- **React Router (v7):** Enabling intuitive and seamless client-side navigation.

## 🚀 Ensuring Code Quality and Developer Efficiency

Maintaining a clean and reliable codebase was a priority, supported by modern tooling:

- **Biome:** A fast and unified linter and formatter replacing ESLint and Prettier, ensuring consistent code style across the team.  
- **Husky & lint-staged:** Running pre-commit checks on staged files automatically to prevent low-quality code from entering the repository.  
- **Jest & React Testing Library:** Comprehensive testing focused on user interactions to guarantee feature reliability.  
- **Vite:** Providing an ultra-fast development server and optimized builds for production.  
- **VS Code:** The primary IDE, harnessing powerful debugging and TypeScript support for efficient development.

## 📸 Screenshots

| Cart | Featured Deal | No Booking | Popular Destination |
|-------|---------------|------------|--------------------|
| ![Cart](docs/Cart.png) | ![Featured Deal](docs/FeatuerdDeal.png) | ![No Booking](docs/NoBooking.png) | ![Popular Destination](docs/PopularDestination.png) |

| Recent Visit | Home Hero | Search Page | Checkout |
|--------------|-----------|-------------|----------|
| ![Recent Visit](docs/RecentVisit.png) | ![Home Hero](docs/HomeHero.png) | ![Search Page](docs/SearchPage.png) | ![Checkout](docs/checkout.png) |

| Empty Cart | Booking Page | Filter Sidebar | Booking Confirmation |
|------------|--------------|----------------|----------------------|
| ![Empty Cart](docs/emptyCart.png) | ![Booking Page](docs/bookinPage.png) | ![Filter Sidebar](docs/filterSidebar.png) | ![Booking Confirmation](docs/bookingConfirmtion.png) |

| Hotel Page Full Screen | Hotel Page Top | Confirmation Modal | Admin Hotels |
|-----------------------|----------------|--------------------|--------------|
| ![Hotel Page Full Screen](docs/HotelPageFullScreen.png) | ![Hotel Page Top](docs/HotelPageTop.png) | ![Confirmation Modal](docs/cofimationModer.png) | ![Admin Hotels](docs/AdminHotels.png) |

| Admin Edit | Admin Delete | Admin Create | Admin Rooms |
|------------|--------------|--------------|-------------|
| ![Admin Edit](docs/AdminEdite.png) | ![Admin Delete](docs/AdminDelete.png) | ![Admin Create](docs/AdminCreate.png) | ![Admin Rooms](docs/Admin-Rooms.png) |

| Admin Cities |
|--------------|
| ![Admin Cities](docs/AdminCities.png) |


## ⚙️ Installation and Setup

To get started locally, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone [Your Repository URL]
    cd travio
    ```
2. **Install dependencies:**
    ```bash
    pnpm install
    # or npm install / yarn install
    ```
3. **Start the development server:**
    ```bash
    pnpm dev
    ```
The application will be accessible at `http://localhost:5173` (or similar).

---

*Developed during a Frontend Internship at Foothill Technology Solution.*
