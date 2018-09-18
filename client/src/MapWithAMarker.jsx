import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

const MapWithAMarker = withScriptjs(withGoogleMap(props => (
  <GoogleMap
    prop={props}
    defaultZoom={15}
    defaultCenter={{ lat: 37.7836924, lng: -122.4089666 }}
    defaultOptions={{
      zoomControl: false,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: true,
      rotateControl: false,
      fullscreenControl: true,
    }}
  >
    <Marker
      position={{ lat: 37.7836924, lng: -122.4089666 }}
    />
  </GoogleMap>
)));

export default MapWithAMarker;
