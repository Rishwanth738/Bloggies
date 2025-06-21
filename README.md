# 📝 Blog App

A simple blog application built using **Node.js** and **Express.js** hosted here: https://bloggies-agom.onrender.com/
This app allows users to:

- Create blog posts
- View individual blog entries
- Edit existing posts
- Delete posts

All data is stored in-memory (using arrays), making it perfect for learning and experimentation.

---

## Features

- View all created blog posts on the home page
- Create a new blog post with a title and content
- Edit any existing post
- Delete posts by clicking a button
- Dynamic routing using slugified titles (e.g., `My First Blog` → `/my-first-blog`)

---

## Tech Stack

- **Backend:** Node.js, Express.js
- **Templating:** EJS (Embedded JavaScript)
- **Styling:** Bootstrap 5
- **Runtime:** JavaScript (ES modules)

---

## Project Structure

blog-app/
├── views/
│ ├── index.ejs # Home page
│ ├── blog.ejs # Create new post
│ ├── content.ejs # View individual post
│ ├── edit.ejs # Edit post form
│ ├── header.ejs # Common header
│ ├── footer.ejs # Common footer
│ └── sidebar.ejs # Sidebar navigation
├── public/ # Static assets (optional)
├── app.js # Main server logic
└── package.json # Project metadata

---

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/blog-app.git
cd blog-app
```
2. Install dependencies
```bash
npm install
```
3. Run the server
```bash
nodemon app.js or node app.js
```
4. View in localhost:3000
