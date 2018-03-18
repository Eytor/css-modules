import React, { Component } from 'react';
import ProgressBar from './components/ProgressBar/ProgressBar';
import NameCard from './components/Namecard/Namecard';
import Row from './components/Row/Row';
import Col from './components/Col/Col';

class App extends Component {
  render() {
    return (
        <div>
            <ProgressBar progress={90}
            state="success"/>
            <NameCard
                name='stefan'
                email='Stefanhja16@ru.is'
                telephone='stefan'
                image='https://www.w3schools.com/howto/img_avatar.png'/>
            <Row>
                <Col size={6}>Stebbi</Col>
                <Col size={6}>Eythor</Col>
            </Row>
        </div>
    );
  }
}

export default App;
