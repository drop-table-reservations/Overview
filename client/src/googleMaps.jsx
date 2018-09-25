import React from 'react';
import MapWithAMarker from './MapWithAMarker';
import googleAPI from '../../googleAPI';

class GoogleMaps extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <MapWithAMarker
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${googleAPI.key}&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '240px', width: '310px' }} />}
      />
    );
  }
}

export default GoogleMaps;
