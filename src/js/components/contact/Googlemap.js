import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => (
  // <div
  //   style={{
  //     color: 'white',
  //     background: '#cf3472',
  //     padding: '5px 5px',
  //     display: 'inline-flex',
  //     textAlign: 'center',
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //     borderRadius: '100%',
  //     transform: 'translate(-50%, -50%)'
  //   }}
  // >
  //   {text}
  // </div>
  <div
    style={{
      position: 'relative'
      // transform: 'translate(-50%, -50%)'
    }}
  >
    <div
      style={{
        position: 'absolute',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <img
        src="/images/logo-location.png"
        width="20px"
        height="20px"
        alt="Location Logo"
      />
      <span
        style={{
          whiteSpace: 'nowrap',
          color: '#cf3472',
          marginLeft: '2px',
          fontSize: '12px',
          fontWeight: '600'
        }}
      >
        3107 32 Street
      </span>
    </div>
  </div>
);

class Googlemap extends Component {
  static defaultProps = {
    center: {
      lat: 50.2646289,
      lng: -119.2736954
    },
    zoom: 15
  };

  render() {
    const height =
      window.innerWidth < window.innerHeight && window.innerWidth < 768
        ? '400px'
        : '500px';
    return (
      // Important! Always set the container height explicitly
      <div
        style={{
          height: height,
          width: '100%',
          background: 'rgba(0, 0, 0, 0.8)'
        }}
        className="map"
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyC9qr00vRspSrQUYXL8LCforFPZzcx3ifM' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          options={this.getMapOptions}
        >
          <AnyReactComponent
            // lat={50.26473}
            lat={50.26469}
            lng={-119.27372}
            // lat={50.2648035}
            // lng={-119.2757326}
            text="Sushi Kawa"
          />
        </GoogleMapReact>
      </div>
    );
  }
  // getMapOptions = (maps: Maps) => {
  getMapOptions = maps => {
    return {
      streetViewControl: true,
      scaleControl: true,
      fullscreenControl: true,
      scrollwheel: false,
      styles: [
        {
          featureType: 'poi.business',
          elementType: 'labels',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        }
      ],
      // gestureHandling: 'greedy',
      gestureHandling: 'cooperative',
      // gestureHandling: 'auto',
      disableDoubleClickZoom: true,
      minZoom: 13,
      maxZoom: 19,

      mapTypeControl: true,
      // mapTypeId: maps.MapTypeId.SATELLITE,
      mapTypeControlOptions: {
        style: maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: maps.ControlPosition.BOTTOM_CENTER,
        mapTypeIds: [
          maps.MapTypeId.ROADMAP,
          maps.MapTypeId.SATELLITE,
          maps.MapTypeId.HYBRID
        ]
      },

      zoomControl: true,
      clickableIcons: false
    };
  };
}

export default Googlemap;
