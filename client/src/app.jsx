import React, { Component } from 'react';
import axios from 'axios';
import Header from './header';
import Overview from './overview';
import Menu from './menu';
import { Container } from './styles';

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
    axios.get('/restaurants/90300808/overview').then((data) => {
      this.setState({
        data: data.data[0],
      });
    });
  }

  render() {
    const { data } = this.state;
    return (
      <Container>
        <h1>{data.name}</h1>
        <Header headerData={data.header} />
        <Overview info={data} />
        <Menu menus={data.menus} />
      </Container>
    );
  }
}

export default App;
