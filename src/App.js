import React, { Component } from 'react';
import ProgressBar from './components/ProgressBar/ProgressBar';

class App extends Component {
  render() {
    return (
        <div>
            <ProgressBar progress={90}
            state="success"/>
        </div>
    );
  }
}

export default App;
