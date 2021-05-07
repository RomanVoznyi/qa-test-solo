import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import { ReactComponent as IconExit } from '../../images/svg/sign-out.svg';

const ServiceBtn = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = evt => {
    evt.currentTarget.classList.add('active');
    dispatch(authOperations.logoutUser());
    history.push('/');
  };

  const removeActive = evt => {
    evt.currentTarget.classList.remove('active');
  };

  return (
    <button
      type="button"
      className="serviceBtn"
      onClick={handleClick}
      onTransitionEnd={removeActive}
    >
      <IconExit className="icon-exit" />
    </button>
  );
};

export default ServiceBtn;
