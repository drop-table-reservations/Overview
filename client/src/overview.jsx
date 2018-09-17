import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Description from './description';

class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
    };
  }

  handleExpansion() {
    const { collapsed } = this.state;
    this.setState({
      collapsed: !collapsed,
    });
  }

  createDetails() {
    const { info } = this.props;
    const { collapsed } = this.state;
    const leftContent = [
      [info.privateDining, 'fa fa-coffee', 'Private Dining'],
      [info.diningStyle, 'fa fa-glass', 'Dining Style'],
      [info.cuisines, 'fa fa-cutlery', 'Cuisines'],
      [info.hoursOfOperation, 'fa fa-clock-o', 'Hours of Operation'],
      [info.phoneNumber, 'fa fa-phone', 'Phone Number'],
      [info.website, 'fa fa-external-link', 'Website'],
      [info.paymentOptions, 'fa fa-credit-card', 'Payment Options'],
      [info.dressCode, 'fa fa-user-secret', 'Dress Code'],
      [info.executiveChef, 'fa fa-github-alt', 'Executive Chef'],
      [info.catering, 'fa fa-birthday-cake', 'Catering'],
      [info.specialEvents, 'fa fa-calendar-plus-o', 'Special Events'],
    ];

    const rightContent = [
      [info.openGoogleMaps, 'fa fa-map-o', 'Open Google Maps'],
      [info.Neighborhood, 'fa fa-building-o', 'Neighborhood'],
      [info.crossStreet, 'fa fa-road', 'Cross Street'],
      [info.parkingDetails, 'fa fa-product-hunt', 'Parking Details'],
      [info.publicTransit, 'fa fa-bus', 'Public Transit'],
      [info.giftCards, 'fa fa-gift', 'Gift Cards'],
      [info.entertainment, 'fa fa-music', 'Entertainment'],
      [info.additional, 'fa fa-tags', 'Additional'],
    ];

    const mapper = array => (
      array.map((detail) => {
        const content = detail[0];
        const iconName = detail[1];
        const title = detail[2];
        if (content) {
          return (
            <div className="detail-box">
              <i className={iconName} />
              <div className="detail">
                <div className="detail-title">{title}</div>
                <div>{content}</div>
              </div>
            </div>
          );
        }
        return <div />;
      }));

    return (
      <div className={collapsed ? 'overview-collapsed' : 'overview-content'}>
        <div className="left-overview">
          {mapper(leftContent)}
        </div>
        <div className="right-overview">
          {mapper(rightContent)}
        </div>
      </div>
    );
  }

  renderButton() {
    const { collapsed } = this.state;
    return collapsed
      ? <button type="button" className="expand-button" onClick={() => this.handleExpansion()}>View All Details</button>
      : <div />;
  }

  render() {
    const { info } = this.props;
    return (
      <div className="overview">
        <Description description={info.description} />
        {this.createDetails()}
        <div>{this.renderButton()}</div>
      </div>
    );
  }
}

Overview.propTypes = {
  info: PropTypes.instanceOf(Object).isRequired,
};

export default Overview;
