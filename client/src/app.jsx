import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
        header: { loading: 'LOADING' },
        menus: [{
          title: '',
          menu: [],
        }],
      },
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    axios.get(`/api/restaurants/${id}/overview`).then((data) => {
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

App.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
};

export default App;
