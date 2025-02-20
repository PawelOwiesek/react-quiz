function Options({ questions, dispatch, answer }) {
  const hesAnswered = answer !== null;
  return (
    <div className="options">
      {questions.options.map((option, index) => {
        return (
          <button
            key={option}
            disabled={hesAnswered}
            className={`btn btn-option ${index === answer ? "answer" : ""} ${
              hesAnswered
                ? index === questions.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default Options;
