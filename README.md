# 🛒 Shoppyx – E-Commerce Web Application

Shoppyx is a full-stack e-commerce web application built using the MERN stack. It provides a complete shopping experience including user authentication, product management, cart system, order placement, and seller dashboard.

---

## 🚀 Features

### 👤 User Features

* User Registration & Login
* Browse Products by Categories
* Add to Cart / Remove from Cart
* Checkout with Address Selection
* Multiple Payment Options (Card / UPI / COD)
* Order History (My Orders)
* Profile Management

### 🛍️ Seller Features

* Seller Login Dashboard
* Add / Edit / Delete Products
* Manage Inventory (Stock Status)
* View Orders
* Revenue Analytics Dashboard

---

## 🧑‍💻 Tech Stack

### Frontend

* React.js
* Bootstrap
* Context API (State Management)
* React Router

### Backend

* Node.js
* Express.js
* MongoDB 

---

## 📁 Project Structure

```
Shoppyx/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   │   ├── AuthContext.js
│   │   │   ├── CartContext.js
│   │   │   ├── OrderContext.js
│   │   │   ├── ProductContext.js
│   │   │   └── AddressContext.js
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   ├── Profile.js
│   │   │   ├── Orders.js
│   │   │   ├── CustomerDashboard.js
│   │   │   ├── SellerDashboard.js
│   │   │   ├── Checkout.js
│   │   │   ├── Payment.js
│   │   │   └── RevenueReport.js
│   │   │
│   │   ├── App.js
│   │   └── index.js
│   │
│   └── package.json
│
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Jyoti-1210/E-Commerce.git
cd Shoppyx
```

---

### 2️⃣ Install Dependencies

#### Frontend

```bash
cd frontend
npm install
npm start
```

#### Backend

```bash
cd backend
npm install
npm start
```

---

## 🌐 Running the Project

* Frontend runs on: `http://localhost:3000`
* Backend runs on: `http://localhost:5000`

---

## 💳 Payment Flow

* Select Address
* Choose Payment Method:

  * Card
  * UPI
  * Cash on Delivery
* Place Order
* Order gets stored in local storage (current version)

---

## 📊 Revenue Analytics

Seller dashboard includes:

* Total Revenue Calculation
* Daily Revenue Chart (using Recharts)
* Order-based analytics

---

## ⚠️ Notes

* Orders are stored in **Local Storage**
* No real payment gateway integrated (for demo purposes)
* Images are handled locally / via URL

---

## 🔥 Future Improvements

* Integrate real payment gateway (Razorpay / Stripe)
* Add JWT Authentication
* Connect to real MongoDB database
* Add Admin Panel
* Improve UI/UX (Amazon-like layout)

---

## 👨‍💻 Author

**Vijaya Joshi**
BTech CSE (Cyber Security & Digital Forensics)
**Sambhav Mani Jha**
BTech CSE (Cyber Security & Digital Forensics)
---

## ⭐ Acknowledgements

* React Documentation
* Bootstrap
* Recharts
* Open-source community

---

## 📌 Conclusion

Shoppyx is a beginner-friendly full-stack project demonstrating real-world e-commerce functionality including authentication, product management, order handling, and analytics.

---
