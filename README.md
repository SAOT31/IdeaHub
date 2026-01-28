# Ideas Hub

## 📌 Project Description

Ideas Hub is a web application that allows users to create, view, edit, and organize ideas in a simple and intuitive way.  
Each idea includes information such as title, description, author, and category. The project focuses on practicing JavaScript fundamentals, DOM manipulation, event handling, and data persistence using `localStorage`.

The application provides dynamic filters to improve user experience and make idea management easier.

**Live demo:** https://saot31.github.io/IdeaHub

---

## 👥 Team Members

Team Moana 
- Carlos Monterrosa Gallego — Ideas CRUD & Persistence  
- Jose Miguel Rivera Quiroz — Profile & Storage
- Sergio Ospina Tabares — Authentication & Session
- Veronica Martinez Cadavid — UI & Feed, Filters  

---

## ✨ Features

The current implementation includes:

### 🔐 Authentication
- New user registration
- Login with hardcoded users
- Session storage for logged users
- Redirect if session is missing

### 💡 Ideas Feed
- Dynamic rendering of ideas
- Each idea shows title, description, category, author
- Edit and delete buttons visible only for the idea’s author
- DOM updates without reload

### ✏️ Idea Management
- Edit existing ideas in a modal
- Persist idea changes in `localStorage`
- Save updated ideas and refresh feed

### 🗂 Filters
- Filter by author
- Filter by category
- Dynamic filter lists that update based on selections

### 🌙 UI & UX
- Theme toggle (light / dark)
- Modular CSS and consistent design

---

## 🌱 Git Flow Explanation

This project follows the **Git Flow** branching strategy to keep development organized.

1. **main** — contains stable and deployable code.
2. **develop** — integration branch for all feature work.
3. **feature/\*** — feature branches created from `develop`:
   - `feature/ui-layout`
   - `feature/filters`
   - `feature/ideas-crud`
   - `feature/authentication`
   - `feature/profile`

Workflow:
1. Create a feature branch from `develop`
2. Work on the feature
3. Commit changes using Conventional Commits
4. Merge the feature branch back into `develop`
5. Once stable, merge `develop` into `main`

---

## 📝 Conventional Commits Explanation

This project uses the **Conventional Commits** specification to keep commit history clear and consistent.

Commit format:


Common commit types:
- `feat`: a new feature
- `fix`: a bug fix
- `style`: formatting changes (no logic changes)
- `refactor`: code restructuring without changing behavior
- `docs`: documentation changes
- `chore`: maintenance tasks

Examples:
- `feat: add filter by category`
- `fix: prevent duplicated filters`
- `docs: update README file`

---

## ▶️ How to Run Locally

1. Clone the repository:
   ```bash
   git clone <'https://github.com/SAOT31/IdeaHub'>

2. Navigate to the project folder:
    ```bash
    cd ideas-hub

3. Open the project:

    - Open the index.html file directly in your browser
    or
    - Use a local server (recommended), for example with VS Code Live Server

4. The application will load and data will be stored automatically in the browser using `localStorage`.

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- LocalStorage
- SessionStorage
- Bootstrap

## 

- All data (users, ideas, session) is stored in browser storage
- This project is meant for learning frontend state handling and UI logic
