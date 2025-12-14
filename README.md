# 🎓 ScholarStream – Scholarship Management Platform

ScholarStream is a full-stack **MERN** application designed to connect students with scholarship opportunities worldwide. It simplifies scholarship discovery, application, payment, and review management through a role-based dashboard system for **Students**, **Moderators**, and **Admins**.

---

## 🌐 Live Website
🔗 **Live Link:** https://your-live-site-url.com  

---

## 📌 Project Purpose
The purpose of ScholarStream is to:
- Help students easily discover and apply for scholarships
- Streamline scholarship management for universities and organizations
- Provide secure payment processing for applications
- Enable admins and moderators to manage users, scholarships, and applications efficiently

---

## 🧑‍🤝‍🧑 User Roles
- **Student** – Browse scholarships, apply, pay fees, track applications, and submit reviews
- **Moderator** – Review applications, provide feedback, manage application status, and moderate reviews
- **Admin** – Manage users, scholarships, analytics, and platform data

---

## ✨ Key Features

### 🔐 Authentication & Authorization
- Email & Password Authentication
- Google Social Login
- JWT-based API security
- Role-based route protection (Admin / Moderator / Student)
- Password validation (min length, uppercase, special character)

---

### 🏠 Public Pages
- Home page with banner, animations (Framer Motion), top scholarships & extra sections
- All Scholarships page with:
  - Server-side search
  - Filter by category/country
  - Sort by application fees or post date
  - Pagination
- Scholarship Details page with:
  - Full scholarship information
  - Reviews & ratings
  - Apply button (redirects to payment)
- Login & Register pages
- Custom 404 Error Page

---

### 💳 Payment System
- Stripe payment integration
- Checkout page (Private)
- Payment Success page
- Payment Failed page
- Application saved on both success & failure
- Retry payment option from dashboard

---

### 📊 Dashboard (Role Based)

#### 👨‍🎓 Student Dashboard
- My Profile
- My Applications (edit, delete, pay if pending)
- Add & manage reviews
- View application feedback from moderators

#### 🧑‍💼 Moderator Dashboard
- Manage all applied applications
- Update application status (Pending → Processing → Completed / Rejected)
- Provide feedback
- View & delete reviews

#### 🛠️ Admin Dashboard
- Add, update, delete scholarships
- Manage users & roles
- Platform analytics:
  - Total users
  - Total scholarships
  - Total fees collected
  - Charts (Bar / Pie)

---

## 🗂️ Database Collections
- **Users**
- **Scholarships**
- **Applications**
- **Reviews**

---

## 🛠️ Technologies Used

### Frontend
- React
- React Router DOM
- Tailwind CSS
- DaisyUI
- Firebase Authentication
- Framer Motion
- Axios
- Stripe.js

### Backend
- Node.js
- Express.js
- MongoDB
- JWT (JSON Web Token)
- Stripe
- CORS
- dotenv

---

