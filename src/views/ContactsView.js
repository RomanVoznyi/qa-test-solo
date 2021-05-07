import { useState } from 'react';
import sprite from '../images/svg/sprite.svg';
import { contactsList, socialList } from '../utils/dataLists';
import photoWeb1 from '../images/contacts/dev-photo.webp';
import photoWeb2 from '../images/contacts/dev-photo.webp';
import photoWeb3 from '../images/contacts/dev-photo.webp';
import photoJpg from '../images/contacts/dev-photo.webp';

const ContactsView = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDevOpen = () => {
    setIsOpen(state => (state = !state));
  };

  return (
    <section className="section">
      <address className="contacts-box">
        <h2 className="contacts-title">Contacts</h2>
        <ul className="contacts-list">
          {contactsList.map((el, i) => {
            return (
              <li className="contacts-item" key={`cont-${i}`}>
                <a
                  className="contacts-link"
                  href={el.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg className="icon-form">
                    <use href={sprite + el.icon}></use>
                  </svg>
                  {el.text}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className="social-list">
          {socialList.map((el, i) => {
            return (
              <li className="social-item" key={`soc-${i}`}>
                <a
                  className="social-link"
                  href={el.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg className="icon-social">
                    <use href={sprite + el.icon}></use>
                  </svg>
                </a>
              </li>
            );
          })}
        </ul>
      </address>
      <div className="dev-box" onClick={toggleDevOpen}>
        <h2 className="dev-title">
          <span>Development</span>
          <svg className={isOpen ? 'openBtn open' : 'openBtn'}>
            <use href={sprite + '#icon-more'}></use>
          </svg>
        </h2>
        {isOpen && (
          <div className="dev-item">
            <picture className="dev-photo">
              <source
                srcSet={`${photoWeb1} 1x,
                ${photoWeb2} 2x,
                ${photoWeb3} 3x`}
                type="image/webp"
              />
              <img src={photoJpg} alt="developer" />
            </picture>
            <div>
              <h3 className="dev-name">Roman Voznyy</h3>
              <p className="dev-role">Full Stack Developer</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactsView;
