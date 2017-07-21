import React from 'react';

import style from './style.css';

class Images extends React.Component {

  render() {
    const imgClick = () => {
      console.log("img clicked");
    };
    return (
      <div>
        <img onClick={imgClick} className={style.images}src="https://image.flaticon.com/icons/png/128/181/181549.png" />
        <img />
        <img />
      </div>
    );
  }
}

export default Images;
