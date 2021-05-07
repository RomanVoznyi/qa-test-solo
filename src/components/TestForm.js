const answers = [
  'This is testing of the main functionality of the application',
  'Testing a single function',
  'Requirements testing',
  'Tests on already tested areas of the application',
  'One of the types of testing aimed at checking the conformity of the functional requirements of the software to its real characteristics',
  'I don’t know',
];

const TestForm = () => {
  const currentQuestion = 3;
  const totalQuestions = 12;

  const handleSubmit = () => {};
  return (
    <form className="test-form" onSubmit={handleSubmit}>
      <p className="question-counter">
        Question <span className="currentQuestion">{currentQuestion}</span>
        {' / '}
        <span>{totalQuestions}</span>
      </p>
      <h2 className="question">What is regression testing?</h2>
      <ul>
        {answers.map((el, i) => {
          return (
            <li key={i} className="question-item">
              <label className="question-box">
                <input type="radio" className="radioBtn" name="answer" />
                <span className="ownRadioBtn">
                  <span className="inner-circle"></span>
                </span>
                <span className="answer">{el}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </form>
  );
};

export default TestForm;
