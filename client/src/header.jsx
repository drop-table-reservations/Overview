import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  fillStars () {
    let stars = [];
    for (let i = 0; i < this.props.headerData.reviewAvg; i++) {
      stars.push(<i className="fa fa-star"></i>)
    }

    while (stars.length < 5) {
      stars.push(<i className="fa fa-star-o"></i>)
    }
    return stars;
  }

  render () {
    return (
      <div className="header">
        <span className="stars">{this.fillStars()} {this.props.headerData.reviewAvg}.0</span>
        <span className="reviews"><i class="fa fa-comment-o"></i>  {this.props.headerData.reviews}</span>
        <span className="price"><i class="fa fa-money"></i>  {this.props.headerData.price}</span>
        <span className="cuisines"><i class="fa fa-cutlery"></i>  {this.props.headerData.cuisines}</span>
      </div>
    )
  }
}

export default Header;