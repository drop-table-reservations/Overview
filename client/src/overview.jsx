import React from 'react';
import PropTypes from 'prop-types';
import Description from './description';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
    };
  }

  render() {
    const { info } = this.props;
    return (
      <div className="overview">
        <Description description={info.description} />
        <div className="overview-content">
          <div className="leftOverview">
            <div className="detail-box">
              <i className="fa fa-glass" />
              <div className="detail">
                <div className="detail-title">Private Dining</div>
                {info.privateDining}
              </div>
            </div>
            <div className="detail-box">
              <i className="fa fa-coffee" />
              <div className="detail">
                <div className="detail-title">Dining Style</div>
                {info.diningStyle}
              </div>
            </div>
            <div className="detail-box">
              <i className="fa fa-cutlery" />
              <div className="detail">
                <div className="detail-title">Cuisines</div>
                {info.cuisines}
              </div>
            </div>
            <div className="detail-box">
              <i className="fa fa-clock-o" />
              <div className="detail">
                <div className="detail-title">Hours of Operation</div>
                {info.hoursOfOperation}
              </div>
            </div>
            <div className="detail-box">
              <i className="fa fa-phone" />
              <div className="detail">
                <div className="detail-title">Phone Number</div>
                {info.phoneNumber}
              </div>
            </div>
            <div className="detail-box">
              <i className="fa fa-external-link" />
              <div className="detail">
                <div className="detail-title">Website</div>
                {info.website}
              </div>
            </div>
            <div className="detail-box">
              <i className="fa fa-credit-card" />
              <div className="detail">
                <div className="detail-title">Payment Options</div>
                {info.paymentOptions}
              </div>
            </div>
            <div className="detail-box">
              <i className="fa fa-user-secret" />
              <div className="detail">
                <div className="detail-title">Dress Code</div>
                {info.dressCode}
              </div>
            </div>
            <div className="detail-box">
              <i className="fa fa-github-alt" />
              <div className="detail">
                <div className="detail-title">Executive Chef</div>
                {info.executiveChef}
              </div>
            </div>
            <div className="detail-box">
              <i className="fa fa-birthday-cake" />
              <div className="detail">
                <div className="detail-title">Catering</div>
                {info.catering}
              </div>
            </div>
            <div className="detail-box">
              <i className="fa fa-calendar-plus-o" />
              <div className="detail">
                <div className="detail-title">Special Events*</div>
                {info.specialEvents}
              </div>
            </div>
          </div>
          <div className="right-overview">
            <div className="detail-box">
              <i className="fa fa-map-o" />
              <div className="detail">
                <div className="detail-title">Google Maps</div>
                {info.openGoogleMaps}
              </div>
            </div>
            <div className="detail-box">
              <i className="fa fa-building-o" />
              <div className="detail">
                <div className="detail-title">Neighborhood</div>
                {info.Neighborhood}
              </div>
            </div>
            <div className="detail-box">
              <i className="fa fa-road" />
              <div className="detail">
                <div className="detail-title">Cross Streets</div>
                {info.crossStreet}
              </div>
            </div>
            <div className="detail-box">
              <i className="fa fa-product-hunt" />
              <div className="detail">
                <div className="detail-title">Parking Details</div>
                {info.parkingDetails}
              </div>
            </div>
            <div className="detail-box">
              <i className="fa fa-bus" />
              <div className="detail">
                <div className="detail-title">Public Transit*</div>
                {info.publicTransit}
              </div>
            </div>
            <div className="detail-box">
              <i className="fa fa-gift" />
              <div className="detail">
                <div className="detail-title">Gift Cards*</div>
                {info.giftCards}
              </div>
            </div>
            <div className="detail-box">
              <i className="fa fa-music" />
              <div className="detail">
                <div className="detail-title">Entertainment*</div>
                {info.entertainment}
              </div>
            </div>
            <div className="detail-box">
              <i className="fa fa-tags" />
              <div className="detail">
                <div className="detail-title">Additional</div>
                {info.additional}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Overview.propTypes = {
  info: PropTypes.instanceOf(Object).isRequired,
};

export default Overview;
