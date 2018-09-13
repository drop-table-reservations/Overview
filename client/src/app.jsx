import React from 'react';
import axios from 'axios';
import Header from './header';
import Overview from './overview';
import Menu from './menu';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        header: { loading: 'loading...' },
        menus: { loading: 'loading menus...' },
      },
    };
  }

  componentDidMount() {
    axios.get('/restaurants/30590734/overview').then((data) => {
      this.setState({
        data: data.data[0],
      });
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="app">
        <h1>{data.name}</h1>
        <Header headerData={data.header} />
        <div className="description">{data.description}</div>
        <Overview info={data} />
        <Menu menus={data.menus} />
      </div>
    );
  }
}

export default App;
