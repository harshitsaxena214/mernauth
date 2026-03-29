# 🔐 Authentication System (OTP + JWT)

A complete authentication system built using **React (Frontend)** and **Node.js (Backend)** that supports:

- 🔑 Login using **OTP (Email-based)**
- 📧 Email delivery via **Brevo SMTP**
- 🔐 Authentication using **JWT (JSON Web Tokens)**
- 🔁 Forgot Password functionality
- 🔄 Reset Password flow

---

## 🚀 Features

- OTP-based secure login  
- JWT-based session management  
- Email verification using SMTP  
- Password recovery system  
- Clean separation of client & server  

---

## 🛠️ Tech Stack

- **Frontend:** React (JavaScript)  
- **Backend:** Node.js (JavaScript)  
- **Email Service:** Brevo (SMTP)  
- **Authentication:** JWT  

---

## 📧 Brevo SMTP Setup

Follow these steps to configure Brevo:

1. Sign in to Brevo using Google  
2. Go to **API Keys section**  
3. Click on **Create API Key**  
4. Copy the generated API key  

### ⚙️ SMTP Configuration

- Add SMTP environment variables in your `.env` file (refer `.env.example`) in server folder
- The **SENDER EMAIL** will be the email you used to sign in  

---

## 📁 Project Setup (Local)

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/harshitsaxena214/mernauth.git
cd <your-project-folder>

```

### 2️⃣ Setup Frontend (Client)

```bash
cd client
```

- Create a `.env` file using `.env.example`  
- Add all required environment variables  

### ▶️ Run the Frontend

```bash
npm install
npm run dev
```

### 3️⃣ Setup Backend (Server)

- Open New Terminal

```bash
cd server
```

- Create a `.env` file using `.env.example`  
- Add all required environment variables (including SMTP config)  

### ▶️ Run the Backend

```bash
npm install
npm run dev
```

## ▶️ Running the Project

- Start the client  
- Start the server  

Open your browser and go to:

```bash
http://localhost:5173
```
- Port may vary depending on your setup

---

## 🔄 Authentication Flow

- User enters email  
- OTP is sent via Brevo SMTP  
- User verifies OTP  
- JWT token is generated  
- User gets authenticated access  

---

## 🔐 Password Recovery Flow

- User clicks **Forgot Password**  
- Reset link / OTP is sent via email  
- User sets a new password securely  
