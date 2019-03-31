import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import './App.css';
import ContestList from './components/contest/ContestList';

const styles = {
  textAlign: 'center',
  display: 'inline-block',
  width: '100%',
  boxShadow: 'none'
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Paper style={ styles } >
          <ContestList />
        </Paper>
      </div>
    );
  }
}

export default App;
