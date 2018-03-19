import React, { Component } from 'react';
import ProgressBar from './components/ProgressBar/ProgressBar';
import NameCard from './components/Namecard/Namecard';
import Row from './components/Row/Row';
import Col from './components/Col/Col';
import Tabs from './components/Tabs/Tabs';
import Tab from './components/Tab/Tab';

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
            <Tabs theme='light' onSelect={() => console.log()} >
                <Tab selectionKey={1} title="tab 1">numer 1</Tab>
                <Tab selectionKey={2} title="tab 2">numer 2</Tab>
                <Tab selectionKey={3} title="tab 3">numer 3</Tab>
            </Tabs>
        </div>
    );
  }
}

export default App;
