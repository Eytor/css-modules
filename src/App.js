import React, { Component } from 'react';
import NameCard from './components/Namecard/Namecard';


class App extends Component {
  render() {
    return (
        <NameCard
            name='stefan'
            email='steafn'
            telephone='stefan'
            image='https://www.w3schools.com/howto/img_avatar.png'/>
    );
  }
}

export default App;
