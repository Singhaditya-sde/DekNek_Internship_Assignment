# DekNek Auth System (Full Stack MERN)

A production-ready authentication system built with **React (Vite + TypeScript)**, **Node.js (Express)**, **MongoDB**, and deployed on **AWS (EC2 + S3 + CloudFront)**.

* This project demonstrates secure authentication using **JWT + HTTP-only cookies**, modern UI with **Tailwind CSS + shadcn/ui**, and real-world deployment practices.
* For this assignment, I used a custom domain rasoihire.tech to deploy the application instead of relying on temporary URLs
---

## 🌐 Live Demo

* 🔗 Frontend: https://www.rasoihire.tech/
* 🔗 Backend API: https://api.rasoihire.tech

---

## 🧠 Project Overview

This project is a **full-stack authentication system** designed to simulate how real SaaS applications handle user authentication securely.

It includes:

* User Registration
* Secure Login
* Protected Routes
* Cookie-based authentication
* Logout functionality
* Production deployment with HTTPS

---

## 🛠️ Tech Stack

### Frontend

* React (Vite + TypeScript)
* Tailwind CSS
* shadcn/ui
* Axios

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT (JSON Web Tokens)
* bcrypt.js

### DevOps / Deployment

* AWS EC2 (Backend hosting)
* AWS S3 (Frontend hosting)
* AWS CloudFront (CDN + HTTPS)
* Nginx (Reverse Proxy)
* MongoDB Atlas (Cloud Database)

---

## 🔐 Authentication Flow

### 1. User Login / Register

* User sends credentials to backend
* Backend validates & hashes password
* JWT token is generated

### 2. Token Storage

* Token is stored in **HTTP-only cookie**
* It is valid for 7 days

### 3. Protected Routes

* Browser automatically sends cookie
* Backend verifies token using middleware
* User is authorized if token is valid

### 4. Logout

* Cookie is cleared from browser
* Session ends securely

---

## 🔒 Security Features

* ✅ Password hashing using bcrypt
* ✅ HTTP-only cookies 
* ✅ SameSite=None + Secure cookies (cross-domain support)
* ✅ JWT token expiration
* ✅ Input validation
* ✅ Email normalization
* ✅ Protected backend routes
* ✅ CORS configured for secure cross-origin requests

---

## 📁 Project Structure

```
DekNek/
│
├── server/               # Backend (Express + MongoDB)
│   ├── controllers/
│   ├── models/
│   ├── middleware/
│   ├── routes/
│   └── config/
│
├── client/               # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── lib/
│   │   └── App.tsx
│
└── README.md
```

---

## ⚙️ Environment Variables

### Backend (`server/.env`)

```
PORT=8000
MONGO_URI=mongodb_connection
JWT_SECRET=secret_key
```

---

## 🚀 Getting Started (Local Setup)

### 1. Clone Repository

```bash
git clone https://github.com/yourusername/yourrepo.git https://github.com/Singhaditya-sde/DekNek_Internship_Assignment.git
cd yourrepo
```

---

### 2. Setup Backend

```bash
cd server
npm install
npm run dev
```

---

### 3. Setup Frontend

```bash
cd client
npm install
npm run dev
```

---

### 4. Access App

```text
Frontend → http://localhost:5173
Backend → http://localhost:8000
```

---

## ☁️ Deployment Architecture


### Backend (EC2 + Nginx)

* Hosted on AWS EC2
* Nginx acts as reverse proxy
* HTTPS enabled via SSL

### Frontend (S3 + CloudFront)

* Built using Vite
* Deployed to S3 bucket
* Served via CloudFront CDN

### Database

* MongoDB Atlas (cloud database)

---

## 🎯 Key Learnings

* Implementing secure authentication with cookies vs localStorage
* Handling cross-domain cookies (SameSite, Secure)
* Deploying full-stack apps on AWS
* Managing CDN caching (CloudFront invalidation)
* Debugging real production issues (CORS, cookies, proxies)

---

## 🚧 Future Improvements

* OAuth (Google login)
* Rate limiting & brute-force protection
* UI enhancements & animations
* Global auth state management

---

## 👨‍💻 Author

**Aditya (Full Stack Developer)**
Focused on building scalable and production-ready web applications.

---
