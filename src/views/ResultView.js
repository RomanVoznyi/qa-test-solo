import { NavLink } from 'react-router-dom';
import { ReactComponent as IconCat } from '../images/svg/cat.svg';
import PieChart from '../components/PieChart';

const ResultView = () => {
  const correctAnswers = 3;
  const totalQuestions = 12;

  return (
    <section className="section">
      <h2 className="result-title">Results</h2>
      <p className="result-testName">[ Testing theory_]</p>
      <div className="chartWrapper">
        <PieChart />
      </div>
      <p className="total-results">
        <span>
          Correct answers -{' '}
          <span className="result-numbers">{correctAnswers}</span>
        </span>
        <span>
          Total questions -{' '}
          <span className="result-numbers">{totalQuestions}</span>
        </span>
      </p>
      <IconCat className="icon-cat" />
      <p className="result-resume">Not bad!</p>
      <p className="result-recomendation">
        But you still need to learn some materials.
      </p>
      <NavLink to="/test" className="tryAgainBtn">
        Try again
      </NavLink>
    </section>
  );
};

export default ResultView;
