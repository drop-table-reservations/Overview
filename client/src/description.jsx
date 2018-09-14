import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Description extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clamped: true,
      readText: '+ Read More',
    };
    this.changeSize = this.changeSize.bind(this);
  }

  changeSize() {
    const { clamped } = this.state;
    const { readText } = this.state;
    this.setState({
      clamped: !clamped,
      readText: readText === '+ Read More' ? '- Read Less' : '+ Read More',
    });
  }

  render() {
    const { description } = this.props;
    const { clamped } = this.state;
    const { readText } = this.state;
    return (
      <div className="description">
        <div className={clamped ? 'description-body clamped' : 'description-body'}>{description}</div>
        <div>
          <button type="button" className="read-more" onClick={() => this.changeSize()}>{readText}</button>
        </div>
      </div>
    );
  }
}

Description.propTypes = {
  description: PropTypes.string.isRequired,
};

export default Description;
