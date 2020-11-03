import React from 'react';
import { PAGES } from '../../config';
import PropTypes from 'prop-types';
import './Navigation.scss';

const Navigation = ({ isOpen, clickHandler }) => {
  const styles = ['navigation'];
  if (isOpen) {
    styles.push('navigation_open');
  }
  return (
    <aside className={styles.join(' ')}>
      <nav className="navigation__list">
        <header className="navigation__header">
          <h1>Portfolio</h1>
        </header>
        {Object.values(PAGES).map((uri, index) => {
          return (
            <div key={uri} className="navigation__item">
              <button className="navigation__link" onClick={clickHandler} data-slide={index}>
                {uri.replace(/\w/i, (str) => str.toUpperCase())}
              </button>
            </div>
          );
        })}
      </nav>
    </aside>
  );
};

Navigation.propTypes = {
  isOpen: PropTypes.bool,
  clickHandler: PropTypes.func,
};

export default Navigation;
