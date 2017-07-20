import React from 'react';
import Selectable from '../Calendar/Selectable';
import Nav from '../Nav/Nav';
import Weather from '../Weather/Weather';
import Googlemap from '../Googlemap/Googlemap';
import style from './style.css';

class Main extends React.Component {

  render() {
    return (
      <div className="main-container container-fluid">
        <div className={style.navv}>
          <p>Welcome to CMS</p>
          <p>Company Management System</p>
          <div className="row">
            <div className={style.content}>
              <Weather />
              <Googlemap />
          </div>
        </div>
      </div>
      </div>
    );
  };
}

export default Main;
