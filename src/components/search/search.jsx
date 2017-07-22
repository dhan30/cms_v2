import React from 'react';
import style from './style.css';

class Search extends React.Component {
  render() {
    return (
      <div className={style.searchBar}>
        <input placeholder="search me" className={style.inputBox}></input>
      </div>
    );
  }
}

export default Search;
