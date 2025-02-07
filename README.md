# Notes App

A simple Notes app built with **Next.js (React)** for the frontend and **Express.js (TypeScript)** for the backend.

## 🚀 Features

- 📝 Create and view notes
- ⚡ Next.js 15 with TypeScript
- 🎨 Tailwind CSS for styling
- 🚀 Express.js with TypeScript for the backend
- 💾 In-memory storage (no database required)

---

## 📌 Getting Started

### ✅ Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16+ recommended)
- npm or yarn

---

## 🔧 Installation

### 1️⃣ Clone the repository

```sh
git clone https://github.com/abdallahaltanna/note_app.git
cd note_app
```

### 2️⃣ Install dependencies

This command will install backend and frontend dependencies

```
npm run init
```

### 3️⃣ Setup Environment Variables

- Create a `.env` file in the root of the project.
- Copy the variables from `.env.example` and paste them into `.env`.
- Set the following values:
  - `PORT=<your_backend_port>`
  - `NODE_ENV=development`
- Navigate to the client directory:

  ```
  cd client
  ```

- Repeat the process: create a `.env` file, copy from `.env.example`, and set:

  - `NEXT_PUBLIC_SERVER_URL=<your_backend_base_url>`

### 🚀 Running the App

##### 🖥️ Start the Backend

```
npm run dev
```

##### 🎨 Start the Frontend

```
cd client
npm run dev
```

### Author

[Abdallah Altanna](https://github.com/abdallahaltanna)
