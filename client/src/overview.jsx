import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Description from './description';
import GoogleMaps from './googleMaps';
import {
  StyledOverview,
  OverviewContent,
  Detail,
  DetailTitle,
  DetailBox,
  Fa,
  ExpandButton,
} from './styles';

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
      [info.openGoogleMaps, '', <GoogleMaps />],
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
            <DetailBox>
              <Fa className={iconName} />
              <Detail>
                <DetailTitle>{title}</DetailTitle>
                <div>{content}</div>
              </Detail>
            </DetailBox>
          );
        }
        return <div />;
      })
    );

    return (
      <OverviewContent collapsed={collapsed}>
        <div>
          {mapper(leftContent)}
        </div>
        <div>
          {mapper(rightContent)}
        </div>
      </OverviewContent>
    );
  }

  renderButton() {
    const { collapsed } = this.state;
    return collapsed
      ? <ExpandButton onClick={() => this.handleExpansion()}>View All Details</ExpandButton>
      : <div />;
  }

  render() {
    const { info } = this.props;
    return (
      <StyledOverview>
        <Description description={info.description} />
        {this.createDetails()}
        <div>{this.renderButton()}</div>
      </StyledOverview>
    );
  }
}

Overview.propTypes = {
  info: PropTypes.instanceOf(Object).isRequired,
};

export default Overview;
