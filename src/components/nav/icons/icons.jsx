import React from 'react';
import style from './style.css';

const Icons = (props) => {
  return (
    <div className={style.iconstyle}>
      <p onClick={() => props.changeView(props.name)}
         className={props.active ? style.iconActive : style.iconStyle}>{props.name}
      </p>
    </div>
  );
};

export default Icons;
