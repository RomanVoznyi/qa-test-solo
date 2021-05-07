import { NavLink } from 'react-router-dom';
import { ReactComponent as IconArrow } from '../images/svg/arrow.svg';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';

const HomeView = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(authOperations.currentUser());
  };

  return (
    <section className="section">
      <h2 className="quote">
        “Regression testing. What is it? <br />
        If the system compiles, that's good, if it boots, that's great!”
      </h2>
      <div className="author-box">
        <h3 className="author">Linus Torvalds</h3>
        <p className="author-data">Linux kernel creator, hacker, 1969</p>
      </div>
      <div className="buttons-box">
        <NavLink
          to="/test"
          name="tech"
          className="chooseTestBtn tech"
          onClick={handleClick}
        >
          QA technical <br />
          training <br />
          <IconArrow className="icon-arrow" />
        </NavLink>
        <NavLink to="/test" name="theory" className="chooseTestBtn theory">
          Testing <br />
          theory <br />
          <IconArrow className="icon-arrow" />
        </NavLink>
      </div>
    </section>
  );
};

export default HomeView;
