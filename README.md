src/
  |
  │── store.js
  |
  │── TodoInput.jsx
  │── TodoList.jsx
  │── todoSlice.js
  │    
  │── GithubSearch.jsx
  │── githubSlice.js
  |
  │── Home.jsx
  |── Todo.jsx
  │── Github.jsx
  ├── App.jsx
  ├── main.jsx
  └── index.css

  
# React Vite To-Do & GitHub User Search App

A simple multi-page React application bootstrapped with **Vite** that features:
- A To-Do list app with Redux Toolkit state management
- A GitHub user profile search dashboard using the GitHub Users API

---

## 🚀 Technologies Used

- [Vite](https://vitejs.dev/) - Fast React project bootstrapping
- [React](https://react.dev/) (functional components)
- [Redux Toolkit](https://redux-toolkit.js.org/) - State management
- [React Redux](https://react-redux.js.org/) - Redux integration
- [React Router](https://reactrouter.com/) - Routing
- [Axios](https://axios-http.com/) or Fetch - Data fetching
- **Plain CSS** for styling

---

## 🛠️ Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/Nikhil352-art/To-Do-GitHub-User-Search-App.git
   cd YOUR_REPO_NAME
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

---

## 📦 Build for production

```bash
npm run build
```
The production-ready files will be in the `dist/` directory.

---

## 📚 Features

- **Home Page:** Quick navigation to To-Do or GitHub search.
- **To-Do App:** Add, delete, and filter tasks. State managed with Redux Toolkit.
- **GitHub User Search:** Search for any GitHub username and see public profile details.

---

## 📝 Notes

- Make sure you have [Node.js](https://nodejs.org/) (v18 or higher recommended) installed.
- This project uses the public [GitHub Users API](https://github.com/Nikhil352-art) for fetching user profiles.

