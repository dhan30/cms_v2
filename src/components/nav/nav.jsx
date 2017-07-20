import React from 'react';
import style from './style.css';
import Icons from './Icons/Icons';
import navicons from './Icons/navicons.json';

const Nav = (props) => {

  return (
    <div className="row">
      <div className={style.nav}>
        { navicons.map((l) => {
          console.log(l);
          console.log(l.name);
          return (

            <Icons
              changeView={props.changeView}
              active={props.active === l.name}
              name={l.name}
              key={l.key}
            />

          );
        }
        )}
      </div>
    </div>
  );
};

export default Nav;
