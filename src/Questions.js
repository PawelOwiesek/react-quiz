function Questions({ questions }) {
  return (
    <ul>
      {questions.map((question) => {
        return <li key={question.id}>{question.question}</li>;
      })}
    </ul>
  );
}

export default Questions;
