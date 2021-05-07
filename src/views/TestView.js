import { NavLink } from 'react-router-dom';
import TestForm from '../components/TestForm';
import { ReactComponent as IconArrow } from '../images/svg/arrow.svg';

const TestView = () => {
  return (
    <section className="section container">
      <div className="test-title-box">
        <h2 className="test-title">
          [ Testing
          <br />
          theory_ ]
        </h2>
        <NavLink to="/result" className="finishBtn">
          Finish test
        </NavLink>
      </div>
      <TestForm />
      <div className="moveTestBtn-box">
        <button type="button" className="moveTestBtn active">
          <IconArrow className="icon-arrow prev" />
          Previous question
        </button>
        <button type="button" className="moveTestBtn next">
          Next question
          <IconArrow className="icon-arrow next" />
        </button>
      </div>
    </section>
  );
};

export default TestView;
