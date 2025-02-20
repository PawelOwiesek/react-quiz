# 🎯 React Quiz

A fun and interactive quiz application built with **React 19** and **useReducer** for state management. The app fetches questions from a local JSON server and dynamically updates the UI based on user responses. 🚀

## 📸 Screenshots

![Start Screen](./screenshots/start-screen.png)
_Start screen before the quiz begins._

![Quiz in Progress](./screenshots/quiz-progress.png)
_Answering questions with real-time progress tracking._

![Final Score](./screenshots/quiz-finish.png)
_Final results after completing the quiz._

## 🔥 Features

✅ Fetches quiz questions from a JSON server 📡  
✅ Multiple states: loading, error, ready, active, and finished  
✅ Tracks user progress and calculates final score 📊  
✅ Interactive UI with dynamic updates ⚡  
✅ Fully responsive design 🖥️📱

## 🛠️ Technologies Used

- **React 19** - Frontend framework
- **useReducer & useEffect** - State management
- **JSON Server** - Mock backend for questions
- **React Testing Library** - For unit testing
- **Styled Components / CSS Modules** - Custom styling

## 🚀 Getting Started

### 1️⃣ Install Dependencies

```sh
npm install
```

### 2️⃣ Start JSON Server

```sh
npm run server
```

(Default runs on `http://localhost:9000/questions`)

### 3️⃣ Run the App

```sh
npm start
```

The app will open on `http://localhost:3000/`.

## 🎨 Project Structure

```plaintext
📂 src
 ┣ 📂 components
 ┃ ┣ 📜 Header.js
 ┃ ┣ 📜 Main.js
 ┃ ┣ 📜 Loader.js
 ┃ ┣ 📜 Error.js
 ┃ ┣ 📜 StartScreen.js
 ┃ ┣ 📜 Questions.js
 ┃ ┣ 📜 NextButton.js
 ┃ ┣ 📜 Progress.js
 ┃ ┣ 📜 FinishScreen.js
 ┣ 📂 data
 ┃ ┣ 📜 questions.json
 ┣ 📜 App.js
 ┣ 📜 index.js
```

## ⚡ Future Enhancements

🔹 Add categories & difficulty levels 🔥  
🔹 Implement a timer for each question ⏳  
🔹 Multiplayer support 👥

## 📜 License

This project is open-source and available under the **MIT License**.

---

💡 **Enjoy coding & happy quizzing!** 🎉
