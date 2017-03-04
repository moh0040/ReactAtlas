import React from 'react';
import { Well  } from 'react-bootstrap';
import GoogleMap from '../GoogleMap/GoogleMap.js';



var Header = (props) => {
  return (
    <Well className="map" >
	    <div style={{ height: '50vh' }}>
	      <GoogleMap
	       containerElement={
	        <div style={{ height: '100%' }} />
	       }
	       mapElement={
	        <div style={{ height: '100%' }} />
	       }
	      />
	    </div>
    </Well >
  )
};

module.exports = Header;
