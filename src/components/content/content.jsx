import React from 'react';
import Main from '../Main/Main';
import style from './style.css';
import Selectable from '../Calendar/Selectable';
import Nav from '../Nav/Nav';
import List from '../List/List';
import Icons from '../Nav/Icons/Icons';



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
            <div className="col-sm-2 columns" id="col-1">
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
