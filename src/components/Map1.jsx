import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useSelector } from 'react-redux';

function Map1() {
    
    const {lat, lang, add, mapa} = useSelector(state => state);



    if(mapa=='0'){

   return null;
     
    }
    else if(mapa=='1'){
        return (
            <MapContainer center={[lat, lang]} zoom={13} style={{ height: '400px' }}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
              />
        
              {
              [lat,lang] && (
                <Marker position={[lat, lang]}>
                  <Popup>This is the location.</Popup>
                </Marker>
              )
              }
              
            </MapContainer>
          )
    }

}

export default Map1