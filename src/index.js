import React from 'react';
import {render} from 'react-dom';
import App from './components/App/App.jsx';


class Start extends React.Component {
  render() {
  return (
    <div className= " container-fluid main-container container">
      <div className='app row'>
          <App />
      </div>
    </div>
  );
}
}

render((<Start/>), document.getElementById('app'));
