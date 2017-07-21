import React from 'react';
import Main from '../Main/Main';
import style from './style.css';
import Selectable from '../Calendar/Selectable';
import Nav from '../Nav/Nav';
import List from '../List/List';
import Icons from '../Nav/Icons/Icons';
import Images from '../Images/Images';



class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'main'
    };
  }

  viewHandler = (target) => {
    this.setState({view: target});
  };
  render() {
    return (
      <div className= " container-fluid main-container container">
        <div className='row'>
          <div className={style.body}>
          <div className="col-sm-1 columns" id="col-1">
            <Images />
          </div>
            <div className="col-sm-1 columns" id="col-3">
              <Nav changeView={this.viewHandler} active={this.state.view}/>
            </div>
            <div className="col-sm-10 columns" id="col-2">
              {this.state.view === 'calendar' && <Selectable />}
              {this.state.view === 'main' && <Main />}
              {this.state.view === 'list' && <List />}
            </div>
          </div>
      </div>
      </div>

    );
  }
}

export default Content;
