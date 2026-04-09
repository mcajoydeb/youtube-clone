# YouTube Clone (MERN Stack)

##  Project Overview

This is a full-stack YouTube Clone built using the MERN stack (MongoDB, Express, React, Node.js). The application allows users to watch videos, search and filter content, authenticate securely, and interact through comments and likes.

---

##  Features

### Authentication

* User Registration & Login
* JWT-based Authentication
* Protected Routes

### Home Page

* Responsive YouTube-like UI
* Sidebar with toggle functionality
* Video grid with thumbnails
* Search videos by title
* Filter videos by category

### Video Player Page

* Play selected video
* Like / Dislike functionality
* Add, edit, delete comments

### Channel Page

* Create channel (only logged-in users)
* Upload videos
* Edit/Delete videos

---

## Tech Stack

### Frontend

* React (Vite)
* React Router
* Axios

### Backend

* Node.js
* Express.js

### Database

* MongoDB (Atlas)

### Authentication

* JSON Web Token (JWT)
* bcrypt.js

---

## Folder Structure

youtube-clone/
│
├── client/        # React Frontend
├── server/        # Node.js Backend
├── README.md
├── .gitignore

---

## Installation & Setup

### Clone the repository

```bash
git clone https://github.com/your-username/youtube-clone.git
cd youtube-clone
```

---

### 2️⃣ Setup Backend

```bash
cd server
npm install
```

Create a `.env` file in **server/**:

```env
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

Run backend:

```bash
npm run dev
```

---

### Setup Frontend

```bash
cd client
npm install
npm run dev
```

---

## API Endpoints

### Auth

* POST `/api/auth/register`
* POST `/api/auth/login`

### Videos

* GET `/api/videos`
* POST `/api/videos`
* PUT `/api/videos/:id`
* DELETE `/api/videos/:id`

### Comments

* GET `/api/comments/:videoId`
* POST `/api/comments`
* PUT `/api/comments/:id`
* DELETE `/api/comments/:id`

### Channel

* POST `/api/channel`
* GET `/api/channel/:id`

---

## Responsiveness

* Fully responsive design
* Works on Mobile, Tablet, Desktop

---

## Evaluation Criteria Covered

* Frontend UI/UX
* Authentication (JWT)
* Video Player Page
* Channel Management
* Backend APIs
* MongoDB Integration
* Search & Filter
* Responsive Design
* Clean Code Structure

---

## Demo

(Add your demo video link here)

---

## Author

* Your Name

---

## Notes

* node_modules is excluded using .gitignore
* Ensure MongoDB is running before starting backend
* Use ES Modules (import/export)

---
