import React, { FC } from 'react';
import classes from './mybutton.module.css';

type props = {
  children: React.ReactNode;
  ref?: React.Ref<HTMLButtonElement>;
};

const MyButton: FC<props> = ({ ref, children }) => {
  return (
    <button ref={ref} className={classes.btn}>
      {children}
    </button>
  );
};

export default MyButton;
