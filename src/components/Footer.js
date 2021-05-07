import { Link } from 'react-router-dom';
import { ReactComponent as IconHeart } from '../images/svg/heart.svg';
import { ReactComponent as IconCopyright } from '../images/svg/copyright.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <IconCopyright className="icon-copyright" />
      <span>2021</span>
      <span className="limiter">|</span>
      <span>All Rights Reserved</span>
      <span className="limiter">|</span>
      <span>Developed with</span>
      <IconHeart className="icon-heart" />
      <span>
        by
        <Link to="/contacts" className="devLink">
          RV
        </Link>
      </span>
    </footer>
  );
};

export default Footer;
