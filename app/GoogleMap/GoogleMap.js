import React from 'react';
import { GoogleMap, Marker, withGoogleMap } from 'react-google-maps';

const Google = withGoogleMap((props) => {
 return (
  <GoogleMap
   ref={props.onMapLoad}
   defaultZoom={15}
   defaultCenter={{ lat: 43.645895, lng: -79.384925 }}
   onClick={props.onMapClick}
  >
   {props.markers && props.markers.map(marker => (
    <Marker
     {...marker}
    />
   ))}
  </GoogleMap>
 );
});
export default Google;