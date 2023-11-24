import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { getCurrentLocation } from '../hooks/Geolocation';

import PlacesAutocomplete, {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';

import { useDispatch, useSelector } from 'react-redux';
import { handleLatChange, handleLngChange, handleAddChange, handleMapChange } from '../redux/auth';
import Map1 from './Map1';

function Map() {
  // const [userLocation, setUserLocation] = useState(null);
  const {lat, lang, add, mapa} = useSelector(state => state);

  const[address, setAdress] = useState ("")
  const dispatch = useDispatch()

  const [coordinates, setCoordinates] = useState ({
    lat: null,
    lng: null
  });

  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    
    const ll = await getLatLng(results[0])
    setAdress(value)
    setCoordinates(ll)
    updateLoc(ll.lat, ll.lng, value)
    dispatch(handleMapChange("0"))

    setTimeout(() => {
      dispatch(handleMapChange("1"))
  }, 1000);

  
  }

  function updateLoc(lat1, lang1, value1){
    dispatch(handleLatChange(lat1))
    dispatch(handleLngChange(lang1))
    dispatch(handleAddChange(value1))
    
  }

  // useEffect(() => {
  //   getCurrentLocation()
  //     .then((location) => {
  //       setUserLocation([location.latitude, location.longitude]);

  //       console.log('User Location:', userLocation);
  //     })
  //     .catch((error) => {
  //       console.error('Error getting location:', error);
  //     });
  // }, []);
  

  return (

//     <>


//     </>

<div>
<PlacesAutocomplete
    value={address}
    onChange={setAdress}
    onSelect={handleSelect}
    
  >
    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
      <div
      key={suggestions.description}
      >
        <input
          {...getInputProps({
            placeholder: 'Search Places ...',
            className: 'location-search-input',
            
           
          })}
        />
        <div className="autocomplete-dropdown-container">
          {loading && <div>Loading...</div>}
          {suggestions.map(suggestion => {
            const className = suggestion.active
              ? 'suggestion-item--active'
              : 'suggestion-item';
            // inline style for demonstration purpose
            const style = suggestion.active
              ? { backgroundColor: 'pink', cursor: 'pointer'}
              : { backgroundColor: '#ffffff', cursor: 'pointer'};
            return (
              <div
                {...getSuggestionItemProps(suggestion, {
                  className,
                  style,
                })}
              >
                <span>{suggestion.description}</span>
              </div>
            );
          })}
        </div>
      </div>
    )}
  </PlacesAutocomplete>
  <br></br>

  <Map1/>



{/* 
  <p>lat: {coordinates.lat}</p>
  <p>long: {coordinates.lng}</p> */}
  
 <p><b>{add}</b></p>

</div>




  );
}

export default Map;