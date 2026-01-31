# 🌍 Wanderlust – Full‑Stack Web Application

A feature‑rich **Airbnb‑inspired full‑stack web application** that enables users to explore stays, list their own properties, and share reviews — built using a clean **MVC architecture**, secure authentication, and third‑party integrations for maps and media.

🔗 **Live Demo:** https://wanderlust-vudt.onrender.com

---

## ✨ Overview

**Wanderlust** is a production‑style web application designed to simulate a real‑world accommodation booking platform. It supports **user authentication**, **role‑based authorization**, **CRUD operations**, **map‑based location rendering**, and **cloud image storage**, all rendered server‑side using EJS.

The project focuses on backend correctness, security, and scalable architecture

---

## 🚀 Key Features

### 🔐 Authentication & Authorization

* User **Sign Up / Login / Logout**
* Session‑based authentication with protected routes
* Only authenticated users can:

  * Add reviews
  * Create listings
  * Edit or delete their own listings

### 🏠 Listings Management (Airbnb Your Home)

* Create new property listings via a dedicated **“Airbnb your home”** flow
* Each listing is associated with its **owner (creator)**
* Listings include:

  * Title, description, price, location
  * Image uploads (stored on Cloudinary)

### ✏️ Ownership‑Based Access Control

* **Edit / Delete buttons appear only for listings owned by the logged‑in user**
* Prevents unauthorized modification of other users’ listings

### ⭐ Reviews System

* Logged‑in users can:

  * Add ratings and text reviews to existing listings
  * Delete their own reviews
* Reviews are dynamically rendered per listing

### 🗺️ Map Integration (Mapbox)

* Automatically converts the **user‑entered location** into geographic coordinates
* Displays the listing’s city/location on an interactive map
* Improves spatial understanding of listings

### ☁️ Image Uploads

* Images uploaded via forms are:

  * Validated server‑side
  * Stored securely using **Cloudinary**
  * Served efficiently via CDN

### 🛡️ Security & Validation

* Input validation using schema validation (Joi)
* Secure REST APIs tested via **Postman**
* Middleware for:

  * Authentication checks
  * Authorization checks
  * Error handling

---

## 🧱 Tech Stack

### Backend

* **Node.js**
* **Express.js**
* **MongoDB Atlas**
* **Mongoose**

### Frontend (Server‑Rendered)

* **EJS Templates**
* HTML, CSS

### Third‑Party Services

* **Cloudinary** – Image storage
* **Mapbox** – Location & maps

### Architecture & Tools

* **MVC Architecture**
* RESTful routing
* Environment‑based configuration
* **Render** for deployment
* **Postman** for API testing

---

## 🗂️ Project Structure

```
Wanderlust/
├── controllers/        # Route logic
├── models/             # Mongoose schemas
├── routes/             # Express routes
├── views/              # EJS templates
├── public/             # Static assets
├── middleware/         # Auth & validation middleware
├── utils/              # Helper functions
├── app.js
├── package.json
└── .env
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_key
CLOUDINARY_SECRET=your_secret
MAPBOX_TOKEN=your_mapbox_token
DB_URL=your_mongodb_atlas_url
SESSION_SECRET=your_secret
```

---

## 🛠️ Installation & Setup

```bash
git clone https://github.com/your-username/wanderlust.git
cd wanderlust
npm install
npm start
```

Visit: `http://localhost:3000`

---

## 📌 Current Limitations

* Search and category filters are **intentionally not implemented yet**
* Booking and payment flows are out of scope
* Focus is on backend robustness and full‑stack fundamentals

---

## 🎯 Learning Outcomes

* Implemented a real‑world **full‑stack MVC application**
* Designed secure authentication & authorization flows
* Integrated third‑party APIs (Mapbox, Cloudinary)
* Practiced RESTful design and backend validation
* Deployed a production‑ready Node.js app

---

## 🧠 Future Enhancements

* Search & filter functionality
* Booking & availability system
* User profiles
* Pagination & performance optimizations

---

## 👩‍💻 Author

**Lavanya Kathuria**
Computer Science Undergraduate | Full‑Stack Developer

---

⭐ If you found this project insightful, consider starring the repository!
