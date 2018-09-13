import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  const fillStars = () => {
    const { reviewAvg } = props.headerData;
    const stars = [];
    for (let i = 0; i < reviewAvg; i += 1) {
      stars.push(<i className="fa fa-star" />);
    }

    while (stars.length < 5) {
      stars.push(<i className="fa fa-star-o" />);
    }
    return stars;
  };

  const { headerData } = props;
  return (
    <div className="header">
      <span className="stars">
        {fillStars()}
        {` ${headerData.reviewAvg}.0`}
      </span>
      <span className="reviews">
        <i className="fa fa-comment-o" />
        {` ${headerData.reviews} reviews`}
      </span>
      <span className="price">
        <i className="fa fa-money" />
        {' '}
        {headerData.price}
      </span>
      <span className="cuisines">
        <i className="fa fa-cutlery" />
        {' '}
        {headerData.cuisines}
      </span>
    </div>
  );
};

Header.propTypes = {
  headerData: PropTypes.instanceOf(Object).isRequired,
};

export default Header;
