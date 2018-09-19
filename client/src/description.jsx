import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DescriptionBody, DescriptionClamped, ReadMore } from './styles';

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
    const { clamped, readText } = this.state;
    this.setState({
      clamped: !clamped,
      readText: readText === '+ Read More' ? '- Read Less' : '+ Read More',
    });
  }

  render() {
    const { description } = this.props;
    const { clamped, readText } = this.state;
    return (
      <div>
        {clamped
          ? <DescriptionClamped>{description}</DescriptionClamped>
          : <DescriptionBody>{description}</DescriptionBody>}
        <div>
          <ReadMore onClick={this.changeSize}>{readText}</ReadMore>
        </div>
      </div>
    );
  }
}

Description.propTypes = {
  description: PropTypes.string.isRequired,
};

export default Description;
