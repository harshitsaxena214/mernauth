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

- Add SMTP environment variables in your `.env` file (refer `.env.example`)  
- The **SMTP user** will be the email you used to sign in  

---

## 📁 Project Setup (Local)

### 1️⃣ Clone the Repository

```bash
git clone <your-repo-url>
cd <your-project-folder>
