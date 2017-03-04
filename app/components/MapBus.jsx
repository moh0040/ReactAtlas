import React, {Component} from 'react';
import { Panel  } from 'react-bootstrap';

import GoogleMap from '../GoogleMap/GoogleMap.js';
import { getVehicles } from '../api/bus.js';

class MapBus extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {
    const plotVehicles = () => getVehicles().then((results) => {
      const markers = results.data.map((item, index) => {
        return {
          position: {
            lat: item.lat,
            lng: item.lon,
          },
          key: index,
          icon: {
            path: window.google.maps.SymbolPath.FORWARD_OPEN_ARROW,
            scale: 2.5,
            fillColor: '#FF0009',
            strokeColor: '#000000',
            fillOpacity: 1,
            strokeOpacity: 5,
            rotation: item.heading,
          },
        };
      });
      this.setState({ markers });
    });

    plotVehicles();
    window.setInterval(plotVehicles, 2000);
  }

  render() {
    return (
  <Panel >

      <div style={{ height: '80vh' }}>
        <GoogleMap
          containerElement={
            <div style={{ height: '100%' }} />
          }
          mapElement={
            <div style={{ height: '100%' }} />
          }
          onMapLoad={this.handleMapLoad}
          onMapClick={this.handleMapClick}
          markers={this.state.markers}
          onMarkerRightClick={this.handleMarkerRightClick}
        />
      </div>

  </Panel>

    );
  }
}

module.exports = MapBus;