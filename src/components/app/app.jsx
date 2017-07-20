import React from 'react';
import Content from '../content/content';
import style from './style.css';


const App = (props) => {
  return (
    <div className={style.body}>
      <Content />
    </div>
  );
};

export default App;
