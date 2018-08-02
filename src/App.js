import React, { Component } from 'react';
//import { Button, Icon } from 'antd-mobile';
import styles from './App.css';
import Home from './components/Home'
import LoginForm from './components/Login'


class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Home />
        {/* <LoginForm /> */}
      </div>
    );
  }
}

export default App;
