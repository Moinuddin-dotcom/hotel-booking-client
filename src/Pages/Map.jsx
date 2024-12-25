import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const position = [51.505, -0.09]
  return (
    <div className='text-center max-w-[80vw] mx-auto  my-10'>
      <h1 className='text-4xl font-bold py-2 underline'>Find Our Location</h1>
      <div className="mapBox grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="locationInfo pt-28 font-semibold text-lg">
          <p className='text-start'>
            We are located at the heart of London, just 10 minutes away from the train station.
            The nearest train station is the Tower Bridge, and the train travels at an average speed of 100 km/h.
          </p>
        </div>
        <div className='map'>
          <div className="max-w-[50vw] h-[400px]  flex flex-col items-center justify-center  bg-gray-100 p-4">
            <div className="h-full w-full rounded-lg overflow-hidden shadow-md">
              <MapContainer
                center={position}
                zoom={13}
                className="h-full w-full rounded-lg"
              >
                {/* TileLayer for the map tiles */}
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {/* Marker with a Popup */}
                <Marker position={position}>
                  <Popup>A marker for demonstration.</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Map
