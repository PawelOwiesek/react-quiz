import Options from "./Options.js";

function Questions({ questions, dispatch, answer }) {
  return (
    <div>
      <h4>{questions.question}</h4>
      <Options dispatch={dispatch} answer={answer} questions={questions} />
    </div>
  );
}

export default Questions;
