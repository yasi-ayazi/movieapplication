# 🎮 Movie App

![GitHub repo size](https://img.shields.io/github/repo-size/yasi-ayazi/movieapplication)
![GitHub contributors](https://img.shields.io/github/contributors/yasi-ayazi/movieapplication)
![GitHub stars](https://img.shields.io/github/stars/yasi-ayazi/movieapplication?style=social)
![GitHub license](https://img.shields.io/github/license/yasi-ayazi/movieapplication)

## 📌 Overview
This is a **Movie Listing & Search App** built as a learning project for **HackYourFuture**. The application allows users to:
- 📌 Browse a list of movies with details (title, director, actors, genre, price, rating, and description).
- 🔎 Search movies by **title, actor, or genre**.
- 🔄 Sort movies by **title (A-Z, Z-A) or year (oldest, newest)**.
- 🎭 Filter movies by **genre** using a dropdown.
- 💬 Toggle and add **comments** to each movie.
- ⏳ **Session tracking to show time spent on the page.**
- ⏲️ **Countdown timer for setting a time limit to pick a movie.**

## 🚀 Technologies Used
- ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
- ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## 📂 Project Structure
```
📺 movie-app
 ├ 📂 scripts
 ┃ ├ 📂 movie-home
 ┃ ├ 📂 movie-timer        # NEW - Timer functionality
 ┃ ┃ ├ 📋 elapsedTime.js   # Tracks session duration
 ┃ ┃ ├ 📋 timer.js         # Implements countdown timer
 ┃ ┃ ├ 📋 ui.js            # Manages UI for timers
 ┃ ├ 📋 app.js             # Main application logic (event listeners & app initialization)
 ├ 📂 styles
 ┃ ├ 📋 app.css            # Styling for the entire application
 ├ 📋 index.html           # HTML structure
 ├ 📋 README.md            # Project documentation
```

---

## 🛠️ Installation & Setup

### ✅ **1. Clone the repository**
```sh
git clone https://github.com/yasi-ayazi/movieapplication.git
cd movieapplication
```

### ✅ **2. Open `index.html` in a browser**
You can directly open the `index.html` file in your browser or use a live server:
```sh
npx live-server
```
_(Requires Node.js installed)_

---

## 🔎 Features
### 🎮 **Movies List**
- Dynamically rendered using **JavaScript**.
- Includes **title, genre, rating, director, actors, price, and description**.

### 🔍 **Search & Filtering**
- **Search**: Users can search by **title or actor**.
- **Genre Filter**: Dropdown allows users to filter movies by genre.
- **Sorting**: Users can sort movies by **title** or **year**.

### 💬 **Comments System**
- Each movie has a **toggle button** for comments.
- Users can **add comments**, which persist on the page.

### ⏳ **Session Tracking (New Feature)**
- A **session timer** has been added to track how long the user spends on the page.
- Displayed in the **sidebar** on the left.
- Implemented in **`elapsedTime.js`** and managed by **`ui.js`**.

### ⏲️ **Countdown Timer for Movie Selection (New Feature)**
- Users can **set a timer** to limit the time they spend choosing a movie.
- When the countdown reaches zero, an **alert rings**.
- Implemented in **`timer.js`**, with UI management in **`ui.js`**.

---

## 📌 How It Works
### 🗼 **Rendering Movies**
- The movies are stored in **`data.js`** as an array of objects.
- The app dynamically creates movie cards using **`render.js`**.

### 🔄 **Search, Filter, and Sort**
- **User inputs** are processed in **`filters.js`**.
- Filters update the movie list dynamically.

### 🎭 **Commenting System**
- **`comments.js`** handles comment toggling and submission.
- Only the **clicked movie’s comments** are shown (others remain hidden).

### ⏳ **Session Timer**
- **`elapsedTime.js`** tracks and updates the session duration.
- The time spent on the page is displayed in the **sidebar** using **`ui.js`**.

### ⏲️ **Movie Selection Countdown**
- **`timer.js`** allows users to set a custom countdown.
- The countdown UI is updated in **`ui.js`**, and an **alert is triggered** when time runs out.

---

## 👨‍💻 Contribution Guide
Contributions are welcome! If you want to improve the project:
1. **Fork the repository**.
2. **Create a feature branch** (`git checkout -b feature-xyz`).
3. **Commit changes** (`git commit -m "Added xyz feature"`).
4. **Push and create a pull request**.

---

## ⚡ Author & Acknowledgements
This project is part of **HackYourFuture** and is developed as a learning experience. Special thanks to the **HYF mentors** for guidance. 🙌  

---

## 🔗 License
![MIT License](https://img.shields.io/badge/License-MIT-green.svg)  
This project is **open-source** under the MIT License. Feel free to use and extend it!

