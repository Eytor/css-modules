import React, { Component } from 'react';
import ProgressBar from './components/ProgressBar/ProgressBar';
import NameCard from './components/Namecard/Namecard';
import Modal from './components/Modal/Modal';
import Carousel from './components/Carousel/Carousel';
import Row from './components/Row/Row';
import Col from './components/Col/Col';
import CartoonNetworkSpinner from './components/CartoonNetworkSpinner/CartoonNetworkSpinner';
import Tabs from './components/Tabs/Tabs';
import Tab from './components/Tab/Tab';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            tab: 1
        };
    }
  render() {
      const { isModalOpen } = this.state;
    return (
        <div>
            <h1>1</h1>
            <button onClick={() => this.setState({ isModalOpen: true})}>open modal</button>
            <h1>2</h1>
            <ProgressBar progress={100}
            state="success"/>
            <ProgressBar progress={25}
                striped={true}
                animate={true}
            state="warning"/>
            <h1>3</h1>
            <NameCard
                name='stefan'
                email='eythoratli47@gmail.com'
                telephone='stefan'
                image='https://www.w3schools.com/howto/img_avatar.png'/><br/>
            <br/>
            <h1>4</h1>

            <Carousel images={["https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/10422071_1532517227035975_5953709268737394168_n.jpg?oh=57b57284895fe0d3ee7b8d83f4a9d1b2&oe=5B2F5AF7", "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/12316518_10153862150058825_2209851242245843518_n.jpg?oh=74fc8bc4f82335eb800c16b7306df1ce&oe=5B31801A", "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/26055672_884539945039558_8861235570708633679_n.jpg?oh=a540b0c5b7839566c0177b29b78c2b87&oe=5B2D2C39", "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/12592708_10207529889660799_1622688881996220725_n.jpg?_nc_cat=0&oh=0a7138ca61141b9c3bbe4b46f88f030d&oe=5B29C30A", "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/27067063_10156109163691983_8698490140621864374_n.jpg?_nc_cat=0&oh=c24f49865c554133ec081f5f28f59505&oe=5B2FB6C9", "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/12002166_1629341040653292_1135548822399852789_n.jpg?oh=efcebfe03a32ec93c5ff9dd24ce1df15&oe=5B3E354B", "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/27973234_10211428338365967_7586532154843343317_n.jpg?oh=858a5b998c5bbb004cd1458f0ef29b24&oe=5B34A79A", "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/20604249_10156237164664386_7610240044348161540_n.jpg?_nc_cat=0&oh=c945f5d4e6b3a611bc69ac55a3f13909&oe=5B2DC972"]}
            size="large"/>
            <h1>5 & 6</h1>
            <Row>
                <Col size={1}>1</Col>
                <Col size={1}>2</Col>
                <Col size={1}>3</Col>
                <Col size={1}>4</Col>
                <Col size={1}>5</Col>
                <Col size={1}>6</Col>
                <Col size={1}>7</Col>
                <Col size={1}>8</Col>
                <Col size={1}>9</Col>
                <Col size={1}>10</Col>
                <Col size={1}>11</Col>
                <Col size={1}>12</Col>
                <Col size={1}>13</Col>
                <Col size={1}>14</Col>
            </Row>
            <Row>
                <Col size={3}>1</Col>
                <Col size={3}>2</Col>
                <Col size={3}>3</Col>
                <Col size={3}>4</Col>
            </Row>
            <h1>9</h1>
            <Tabs theme='dark' layout='horizontal' onSelect={newTab => this.setState({ tab: newTab })} currentSelectedTab={this.state.tab} >

                <Tab selectionKey={1} title="tab 1">numer 1</Tab>
                <Tab selectionKey={2} title="tab 2">numer 2</Tab>
                <Tab selectionKey={3} title="tab 3">numer 3</Tab>
            </Tabs>
            <h1>10</h1>
            <CartoonNetworkSpinner />
            <Modal isOpen={isModalOpen} onClose={() => this.setState({ isModalOpen: false})}>
                <Modal.Title>Title</Modal.Title>
                <Modal.Body>body text</Modal.Body>
                <Modal.Footer>footer</Modal.Footer>
            </Modal>

        </div>
    );
  }
}

export default App;
