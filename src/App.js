import React, { Component } from 'react';
//import { Button, Icon } from 'antd-mobile';
import styles from './App.css';
import Home from './components/Home'
import {BrowserRouter as Router, Route} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Router>
          <div>
            <Home />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
