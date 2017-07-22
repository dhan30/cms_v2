import React from 'react';

import style from './style.css';

class Login extends React.Component {
  render() {
    return (
      <div className={style.login}>
        <div className={style.form}>
          <h2>Login Page</h2>
          Username:
          <br/>
          <input className={style.inputs} placeholder="Username"></input><br/>
          Password:
          <br/>
          <input className={style.inputs} placeholder="Password"></input><br/>
          <button className={style.loginBtn} name="Login">Login</button>
        </div>
      </div>
    );
  }
}


export default Login;
