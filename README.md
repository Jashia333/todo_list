# 📝 Todo List App (NDJS_1)

This is a simple full-stack **Todo List** application built with **Node.js**, **Express**, and a static HTML/CSS frontend. It allows users to create and manage a list of tasks via a basic web interface.

---

## 📁 Project Structure

```
NDJS_1/
├── backend/
│   ├── node_modules/
│   ├── server.js         # Express backend logic
│   ├── package.json      # Backend dependencies
│   └── .env              # Environment variables (e.g., PORT)
├── frontend/
│   └── todo.html         # Frontend UI
├── .gitignore
└── README.md
```

---

## 🚀 Features

- Add and manage todos through a simple UI.
- Backend built with Express.js.
- Static HTML frontend (easy to extend with React/Vue later).
- Environment variable support via `.env`.
- Clear modular structure (backend + frontend).

---

## 🔧 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/Jashia333/todo_list.git
cd todo_list
```

### 2. Backend Setup

```bash
cd backend
npm install
```

### 3. Set Environment Variables

Create a `.env` file inside `backend/`:

```env
PORT=3000
```

> You can change the port number if needed.

### 4. Start the Backend Server

```bash
node server.js
# or if using nodemon
npx nodemon server.js
```

---

## 🌐 Access the App

Open the `todo.html` file from the `frontend/` directory in your browser:

```
file:///path/to/NDJS_1/frontend/todo.html
```

> You may update it later to make HTTP calls to the backend for dynamic todo management.

---

## 📦 Dependencies

Backend (`backend/package.json`):

- [express](https://www.npmjs.com/package/express)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [nodemon](https://www.npmjs.com/package/nodemon) (for development)

---

## 📄 .gitignore

This project ignores:

```
node_modules/
.env
```

This prevents uploading sensitive files and bulky dependencies.

---

## ✨ Future Improvements (Ideas)

- Convert frontend to React or Vue
- Connect to a real database (MongoDB, PostgreSQL)
- Add authentication
- Deploy on Render, Vercel, or Heroku

---

## 👩‍💻 Author

**Jashia Mitayeegiri**  
📬 [GitHub](https://github.com/Jashia333)

---

## 📜 License

This project is open-source and free to use under the MIT License.