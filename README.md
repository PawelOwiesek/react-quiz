# 🎯 React Quiz

A fun and interactive quiz application built with React 19, using `useReducer` for state management.
The app fetches questions from **Firebase Firestore** and dynamically updates the UI based on user responses. 🚀

## 📸 Screenshots

_Start screen before the quiz begins._

_Answering questions with real-time progress tracking._

_Final results after completing the quiz._

## 🔥 Features

✅ Fetches quiz questions from **Firebase Firestore** 📡\
✅ Multiple states: loading, error, ready, active, and finished\
✅ Tracks user progress and calculates final score 📊\
✅ Interactive UI with dynamic updates ⚡\
✅ Fully responsive design 🖥️📱

## 🛠️ Technologies Used

- **React 19** - Frontend framework
- **useReducer & useEffect** - State management
- **Firebase Firestore** - Real-time database
- **React Testing Library** - For unit testing
- **Styled Components / CSS Modules** - Custom styling

## 🚀 Getting Started

### 1️⃣ Install Dependencies

```sh
npm install
```

### 2️⃣ Set Up Firebase

Create a `.env` file in the root directory and add your Firebase credentials:

```
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

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
 ┣ 📂 firebase
 ┃ ┣ 📜 firebase.js
 ┣ 📜 App.js
 ┣ 📜 index.js
```

## ⚡ Future Enhancements

🔹 Add categories & difficulty levels 🔥

## 📜 License

This project is open-source and available under the **MIT License**.

---

💡 **Enjoy coding & happy quizzing!** 🎉
