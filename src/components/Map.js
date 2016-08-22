import React from 'react';

import Map, { GoogleApiWrapper as wrapper } from 'google-maps-react';

const Container = (props) => {
  const { google, lat, lng } = props;

  return (
    <Map
      google={google}
      center={{ lat, lng }}
      style={{ width: '300px', height: '150px' }}
      zoom={10}
      containerStyle={{}}
    />
  );
};

Container.propTypes = {
  google: React.PropTypes.object,
  lat: React.PropTypes.number,
  lng: React.PropTypes.number,
};

export default wrapper({
  apiKey: 'AIzaSyAAZoG6QynqijXF7rtKYkmX5zvSa3jMOCM',
})(Container);
