import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Header from './header.jsx';
import Overview from './overview.jsx';
import Menu from './menu.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        header: {},
        menus: {},
      },
    };
  }

  componentWillMount() {
    axios.get('/restaurants/30590734/overview')
    .then(data => {
      console.log(data.data[0]);
      this.setState({
        data: data.data[0]
      })
    });
  }
  
  render() {
    return (
      <div>
        <h1>{this.state.data.name}</h1>
        <Header headerData={this.state.data.header}/>
        <div>
          {this.state.data.description}
        </div>
        <Overview info={this.state.data}/>
        <Menu menus={this.state.data.menus}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
