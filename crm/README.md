# 📌 CRM System (MERN Stack)

A full-featured **Customer Relationship Management (CRM)** application built using the **MERN stack**.  
This CRM supports **Admin & Team Members**, ticket management, messaging, analytics, and customizable settings.

---

## 🚀 Features

### 🔐 Authentication & Roles

- Admin & Member login
- JWT-based authentication
- Protected routes (React + Backend)
- Forced logout when password changes

### 🎫 Ticket Management

- Create, assign, and manage support tickets
- Filter by status (open, assigned, resolved)
- Search by Ticket ID
- Auto-reassign tickets to admin if member deleted

### 💬 Messaging System

- Ticket-based messaging between User ↔ Admin ↔ Member
- Missed message calculation based on reply time
- No real-time (normal request-based messaging)

### 📊 Analytics

- Total messages per week
- Missed chats for last 10 weeks
- Average response time
- Resolved ticket percentage

### ⚙️ Settings (Admin Only)

- Change background color
- Change header color
- Set reply time (minutes)
- Theme applied for all users

---

## 👤 Default Admin Details

Admin login credentials are stored in the backend in a file:
-name:admin
-password:1234
