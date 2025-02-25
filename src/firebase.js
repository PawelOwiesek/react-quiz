// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiYE_Hebv6OTTwgChU83XI5Orf4ctape4",
  authDomain: "react-quiz-18d96.firebaseapp.com",
  projectId: "react-quiz-18d96",
  storageBucket: "react-quiz-18d96.firebasestorage.app",
  messagingSenderId: "811155875051",
  appId: "1:811155875051:web:e7a543e17f5702b82f4aae",
  measurementId: "G-XZDWYJ2HMR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getQuestions = async () => {
  const querySnapshot = await getDocs(collection(db, "questions"));
  return querySnapshot.docs.map((doc) => doc.data());
};

export { db };
