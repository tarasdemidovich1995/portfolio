import React from 'react';
import PropTypes from 'prop-types';
import { BsX, BsJustify } from 'react-icons/bs';
import './MenuButton.scss';

const MenuButton = ({ isOpen, clickHandler }) => {
  return (
    <button onClick={clickHandler} className="menu-button">
      {isOpen ? <BsX size="30px" /> : <BsJustify size="30px" />}
    </button>
  );
};

MenuButton.propTypes = {
  isOpen: PropTypes.bool,
  clickHandler: PropTypes.func,
};

export default MenuButton;
