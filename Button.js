import React from 'react';
import styles from './Button.module.css';

const Button = (props) => {
  return (
    <button
      type={props.type}
      className={`${styles.button} ${props.disabled ? styles.disabled : ''}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;