# ✈️ Travio — Travel and Accommodation Booking Platform

## Project Overview

Travio is a comprehensive, high-performance web application designed to streamline the entire process of searching, booking, and managing hotel accommodations. Developed during a Frontend Internship at **Foothill Technology Solution**, this platform offers a seamless experience for both travelers and administrators, built with modern frontend architecture and a strong focus on type safety and code quality.

## 📄 Software Requirements Specification (SRS)

You can download the full [Software Requirements Specification (SRS) document](https://drive.google.com/file/d/1zKk3PvI_4MWlQU-QEdTGpaaMcSNuWcDV/view?usp=sharing) here.

## ✨ Key Features

The platform consists of two main interfaces, delivering a full-featured solution:

- **User Interface:**  
  Allows travelers to effortlessly search for hotels using advanced filters such as price, rating, and amenities. Interactive maps display hotel locations and nearby attractions, enhancing discovery. The booking process is secure and user-friendly, featuring a multi-step form validated with robust tools. Upon confirmation, users instantly receive downloadable PDF booking summaries.

- **Admin Interface:**  
  Provides administrators with full control to create, view, update, and delete data for cities, hotels, and rooms, ensuring efficient content management and up-to-date listings.

## 🎥 Application Demo Video

[![Watch Demo](docs/HomeHero.png)](https://drive.google.com/file/d/1ohxE6NDcIb2LcTNheaA2wUwZYJ1KxzBh/view?usp=sharing)

Or click here to watch the [full demo video](https://drive.google.com/file/d/1ohxE6NDcIb2LcTNheaA2wUwZYJ1KxzBh/view?usp=sharing)

## 🛠️ Technical Stack: Built for Performance and Developer Experience

Travio is built on a carefully selected stack of modern tools that optimize performance and maintainability. For a detailed description of the full technical stack and tools used, please refer to the [(SRS) document](https://drive.google.com/file/d/1zKk3PvI_4MWlQU-QEdTGpaaMcSNuWcDV/view?usp=sharing)

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
### Login 
<img src="docs/login.png" alt="login" width="700" />

### User-facing Pages

#### Home Page  
<img src="docs/HomeHero.png" alt="Home Hero" width="700" />

#### Featured Deal  
<img src="docs/FeatuerdDeal.png" alt="Featured Deal" width="700" />

#### Recent Visit  
<img src="docs/RecentVisit.png" alt="Recent Visit" width="700" />

#### Popular Destination  
<img src="docs/PopularDestnation.png" alt="Popular Destination" width="700" />

#### Search Page
<img src="docs/SearchPage.png" alt="Search Page" width="700" />

#### Filter Sidebar
<img src="docs/filterSidebar.png" alt="Filter Sidebar" width="700" />

#### Hotel Page
<img src="docs/HotelPage.png" alt="Hotel Page Full Screen" width="700" />

#### Cart Page
<img src="docs/Cart.png" alt="Cart" width="700" />

#### Empty Cart
<img src="docs/emptyCart.png" alt="Empty Cart" width="700" />

#### Checkout Page
<img src="docs/checkout.png" alt="Checkout" width="700" />

#### Confirmation Model
<img src="docs/cofimationModer.png" alt="Confirmation Modal" width="700" />

#### Confirmation Page
<img src="docs/bookingConfiramtion.png" alt="Booking Confirmation" width="700" />

#### No Booking 
<img src="docs/NoBooking.png" alt="No Booking" width="700" />

---

### Admin Pages

#### Hotel Page
<img src="docs/AdminHotels.png" alt="Admin Hotels" width="700" />

#### Rooms Page
<img src="docs/Admin-Rooms.png" alt="Admin Rooms" width="700" />

#### Cities Page
<img src="docs/AdminCities.png" alt="Admin Cities" width="700" />

#### Edit Hotel
<img src="docs/AdminEdite.png" alt="Edit Hotel" width="700" />

#### Delete Hotel
<img src="docs/AdminDelete.png" alt="Delete Hotel" width="700" />

#### Create Hotel
<img src="docs/AdminCreate.png" alt="Create Hotel" width="700" />

---





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
