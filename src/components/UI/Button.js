import React from 'react';

import styles from './Button.module.css';

const Button = props => {
  // a wrapper component for an HTML button
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
