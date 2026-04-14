# 📝 Markdown Notes App

A full-stack **Markdown Notes Application** with real-time preview and auto-save functionality.
Built with modern technologies focusing on performance, clean UI, and user experience.

---

## 🚀 Features

* ✏️ Create, edit, and delete notes
* ⚡ Real-time Markdown preview
* 💾 Auto-save with debounce (reduces API calls)
* 📂 Sidebar navigation for notes
* 🎯 Clean and responsive UI

---

## 🛠 Tech Stack

**Frontend**

* React (Vite)
* Axios
* React Markdown

**Backend**

* Node.js
* Express.js

**Database**

* SQLite

---

## 📁 Project Structure

```
notes-app/
│
├── frontend/        # React (Vite) frontend
├── backend/         # Node.js + Express backend
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/notes-app.git
cd notes-app
```

---

### 2️⃣ Install Dependencies

#### Frontend

```bash
cd frontend
npm install
```

#### Backend

```bash
cd backend
npm install
```

---

### 3️⃣ Configure Environment Variables

Create a `.env` file inside the **backend** folder:

```
PORT=5000
DATABASE_URL=./database.sqlite
```

---

### 4️⃣ Run the Application

#### Start Backend Server

```bash
cd backend
npm run dev
```

#### Start Frontend

```bash
cd frontend
npm run dev
```

---

### 5️⃣ Open in Browser

```
http://localhost:5173
```

---

## 🗄 Database Setup

* Uses **SQLite** (lightweight file-based database)
* Database file is automatically created on first run
* No external setup required

---

## 🔌 API Endpoints

| Method | Endpoint   | Description     |
| ------ | ---------- | --------------- |
| GET    | /notes     | Fetch all notes |
| POST   | /notes     | Create new note |
| PUT    | /notes/:id | Update note     |
| DELETE | /notes/:id | Delete note     |

---

## 🌐 Live Demo

👉 (Add your deployed link here)

---

## 🎥 Demo Video

👉 (Add your demo video link here)

---

## 💡 Key Implementation Details

* Implemented **debounced auto-save** to improve performance
* Used **single source of truth (React state lifting)** for real-time sync between editor and preview
* Designed a **clean and intuitive UI** for better user experience

---

## ⚖️ Trade-offs

* Used SQLite for simplicity instead of scalable DB (like PostgreSQL)
* No authentication implemented to keep focus on core features

---

## 🔮 Future Improvements

* 🔍 Search functionality
* 🌙 Dark mode
* 🏷 Tags for notes
* ☁️ Cloud sync

---

## 🙌 Author

**Rishav Kumar**

---

## ⭐ If you like this project

Give it a ⭐ on GitHub!
