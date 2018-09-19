import React, { Component } from 'react';
import axios from 'axios';
import Header from './header';
import Overview from './overview';
import Menu from './menu';
import { Container, H1 } from './styles';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        header: { loading: 'loading...' },
        menus: [{
          title: 'loading',
          menu: [],
        }],
      },
    };
  }

  componentDidMount() {
    const pathname = 'http://localhost:3000/restaurants/30590734/';
    axios.get(`${pathname}overview`).then((data) => {
      this.setState({
        data: data.data[0],
      });
    });
  }

  render() {
    const { data } = this.state;
    return (
      <Container>
        <H1>{data.name}</H1>
        <Header headerData={data.header} />
        <Overview info={data} />
        <Menu menus={data.menus} />
      </Container>
    );
  }
}

export default App;
