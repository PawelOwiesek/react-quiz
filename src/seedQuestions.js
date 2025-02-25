import { db } from "./firebase.js"; // Importujemy Firestore
import { collection, addDoc } from "firebase/firestore";

async function seedQuestions() {
  const questions = [
    {
      question: "Which is the most popular JavaScript framework?",
      options: ["Angular", "React", "Svelte", "Vue"],
      correctOption: 1,
      points: 10,
    },
    {
      question: "Which company invented React?",
      options: ["Google", "Apple", "Netflix", "Facebook"],
      correctOption: 3,
      points: 10,
    },
    {
      question: "What's the fundamental building block of React apps?",
      options: ["Components", "Blocks", "Elements", "Effects"],
      correctOption: 0,
      points: 10,
    },
    {
      question:
        "What's the name of the syntax we use to describe the UI in React components?",
      options: ["FBJ", "Babel", "JSX", "ES2015"],
      correctOption: 2,
      points: 10,
    },
    {
      question: "How does data flow naturally in React apps?",
      options: [
        "From parents to children",
        "From children to parents",
        "Both ways",
        "The developers decides",
      ],
      correctOption: 0,
      points: 10,
    },
    {
      question: "How to pass data into a child component?",
      options: ["State", "Props", "PropTypes", "Parameters"],
      correctOption: 1,
      points: 10,
    },
    {
      question: "When to use derived state?",
      options: [
        "Whenever the state should not trigger a re-render",
        "Whenever the state can be synchronized with an effect",
        "Whenever the state should be accessible to all components",
        "Whenever the state can be computed from another state variable",
      ],
      correctOption: 3,
      points: 30,
    },
    {
      question: "What triggers a UI re-render in React?",
      options: [
        "Running an effect",
        "Passing props",
        "Updating state",
        "Adding event listeners to DOM elements",
      ],
      correctOption: 2,
      points: 20,
    },
    {
      question: 'When do we directly "touch" the DOM in React?',
      options: [
        "When we need to listen to an event",
        "When we need to change the UI",
        "When we need to add styles",
        "Almost never",
      ],
      correctOption: 3,
      points: 20,
    },
    {
      question: "In what situation do we use a callback to update state?",
      options: [
        "When updating the state will be slow",
        "When the updated state is very data-intensive",
        "When the state update should happen faster",
        "When the new state depends on the previous state",
      ],
      correctOption: 3,
      points: 30,
    },
    {
      question:
        "If we pass a function to useState, when will that function be called?",
      options: [
        "On each re-render",
        "Each time we update the state",
        "Only on the initial render",
        "The first time we update the state",
      ],
      correctOption: 2,
      points: 30,
    },
    {
      question:
        "Which hook to use for an API request on the component's initial render?",
      options: ["useState", "useEffect", "useRef", "useReducer"],
      correctOption: 1,
      points: 10,
    },
    {
      question:
        "Which variables should go into the useEffect dependency array?",
      options: [
        "Usually none",
        "All our state variables",
        "All state and props referenced in the effect",
        "All variables needed for clean up",
      ],
      correctOption: 2,
      points: 30,
    },
    {
      question: "An effect will always run on the initial render.",
      options: [
        "True",
        "It depends on the dependency array",
        "False",
        "In depends on the code in the effect",
      ],
      correctOption: 0,
      points: 30,
    },
    {
      question:
        "When will an effect run if it doesn't have a dependency array?",
      options: [
        "Only when the component mounts",
        "Only when the component unmounts",
        "The first time the component re-renders",
        "Each time the component is re-rendered",
      ],
      correctOption: 3,
      points: 20,
    },
    {
      question: "What does JSX stand for?",
      options: [
        "JavaScript XML",
        "JavaScript Extension",
        "JavaScript Execution",
        "JavaScript X Markup",
      ],
      correctOption: 0,
      points: 10,
    },
    {
      question: "What is the default behavior of the useEffect hook?",
      options: [
        "Runs on every render",
        "Runs only on mount",
        "Runs only on update",
        "Runs only when unmounting",
      ],
      correctOption: 0,
      points: 20,
    },
    {
      question: "Which lifecycle method runs after the first render?",
      options: [
        "componentDidMount",
        "componentDidUpdate",
        "render",
        "useEffect",
      ],
      correctOption: 3,
      points: 10,
    },
    {
      question: "What is the main reason for using React's virtual DOM?",
      options: [
        "Faster UI updates",
        "Direct manipulation of the DOM",
        "Fewer elements in the UI",
        "Memory management",
      ],
      correctOption: 0,
      points: 20,
    },
    {
      question: "What does the `useState` hook do?",
      options: [
        "Creates a component",
        "Allows you to persist data between renders",
        "Replaces the need for a class-based component",
        "Manages side effects in a component",
      ],
      correctOption: 1,
      points: 10,
    },
    {
      question: "What is the purpose of the `key` prop in a list of elements?",
      options: [
        "To define a unique identifier for each element",
        "To help with CSS styling",
        "To trigger re-renders",
        "To make the list accessible",
      ],
      correctOption: 0,
      points: 10,
    },
    {
      question: "Which hook is used to manage a component's side effects?",
      options: ["useState", "useReducer", "useEffect", "useContext"],
      correctOption: 2,
      points: 10,
    },
    {
      question: "What is the purpose of `useMemo`?",
      options: [
        "Memoizes the component's render",
        "Memoizes expensive calculations",
        "Remembers state values",
        "Prevents side effects",
      ],
      correctOption: 1,
      points: 20,
    },
    {
      question: "Which of the following is true about React's render method?",
      options: [
        "It is called only once during the lifecycle of a component",
        "It triggers state updates",
        "It returns a virtual DOM representation",
        "It is used to handle side effects",
      ],
      correctOption: 2,
      points: 10,
    },
    {
      question: "How can you prevent a re-render in React?",
      options: [
        "Using `shouldComponentUpdate`",
        "Using `useMemo`",
        "Using `React.memo`",
        "All of the above",
      ],
      correctOption: 3,
      points: 30,
    },
    {
      question: "What does the `useRef` hook do?",
      options: [
        "Stores a mutable value that doesn’t cause re-renders",
        "Sets a component's initial state",
        "Manages a component's lifecycle",
        "Executes a side effect after a render",
      ],
      correctOption: 0,
      points: 20,
    },
    {
      question: "What is the purpose of `useContext` hook in React?",
      options: [
        "To share state across components without props",
        "To trigger component re-renders",
        "To handle side effects in components",
        "To access the component’s context object",
      ],
      correctOption: 0,
      points: 20,
    },
    {
      question: "Which hook can be used for managing complex state?",
      options: ["useReducer", "useEffect", "useState", "useContext"],
      correctOption: 0,
      points: 20,
    },
    {
      question: "What does the `componentWillUnmount` lifecycle method do?",
      options: [
        "Called just before the component mounts",
        "Runs after the component unmounts",
        "Cleans up resources before the component unmounts",
        "Runs after every render",
      ],
      correctOption: 2,
      points: 20,
    },
    {
      question: "What does the `React.createElement` function do?",
      options: [
        "It is used to create JSX elements",
        "It is used to create virtual DOM elements",
        "It is used to add styles to elements",
        "It is used to update the component state",
      ],
      correctOption: 1,
      points: 10,
    },
    {
      question: "What is the purpose of `dangerouslySetInnerHTML` in React?",
      options: [
        "To inject raw HTML into the DOM",
        "To add styles to a component",
        "To trigger a side effect",
        "To store a reference to the DOM element",
      ],
      correctOption: 0,
      points: 30,
    },
    {
      question: "How can you optimize the performance of a React application?",
      options: [
        "By using React.memo for functional components",
        "By reducing the number of re-renders",
        "By using lazy loading",
        "All of the above",
      ],
      correctOption: 3,
      points: 30,
    },
    {
      question: "Which hook is used to persist the state between renders?",
      options: ["useState", "useEffect", "useMemo", "useReducer"],
      correctOption: 0,
      points: 10,
    },
    {
      question: "What does the `useCallback` hook do?",
      options: [
        "It memoizes functions to avoid unnecessary re-renders",
        "It triggers side effects",
        "It provides a way to directly interact with the DOM",
        "It updates state in response to an effect",
      ],
      correctOption: 0,
      points: 20,
    },
    {
      question:
        "Which of the following hooks are related to managing state in React?",
      options: [
        "useState, useReducer",
        "useEffect, useMemo",
        "useRef, useContext",
        "useCallback, useEffect",
      ],
      correctOption: 0,
      points: 10,
    },
    {
      question:
        "Which React hook allows you to access the component's previous state?",
      options: ["useEffect", "useReducer", "useRef", "useState"],
      correctOption: 2,
      points: 30,
    },
  ];

  try {
    const questionsRef = collection(db, "questions"); // Odwołujemy się do kolekcji Firestore

    for (const question of questions) {
      await addDoc(questionsRef, question); // Dodajemy dokument do bazy danych
    }

    console.log("✅ Pytania zostały dodane do Firestore!");
  } catch (error) {
    console.error("❌ Błąd przy dodawaniu pytań:", error);
  }
}

seedQuestions();
