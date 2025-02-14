import React, { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Map = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, [])


  const position = [51.505, -0.09]
  return (
    <div className='text-center max-w-[80vw] mx-auto  my-10 dark:bg-gray-900 dark:text-white'>
      <h1 className='text-2xl lg:text-5xl font-bold py-5 ' data-aos="fade-up" data-aos-once="false">Find Our Location</h1>
      <div className="mapBox grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="locationInfo md:pt-28 lg:pt-28 font-semibold text-lg">
          <p className='text-start text-stone-700 text-base dark:bg-gray-900 dark:text-white' data-aos="fade-up" data-aos-once="false">
            We are located at the heart of London, just 10 minutes away from the train station.
            The nearest train station is the Tower Bridge, and the train travels at an average speed of 100 km/h.
          </p>
        </div>
        <div className='map'>
          <div className="lg:max-w-[50vw] h-[400px]  flex flex-col items-center justify-center lg:p-4">
            <div className="h-full w-full rounded-lg overflow-hidden shadow-md">
              <MapContainer
                center={position}
                zoom={13}
                className="h-full w-full rounded-lg "
              >

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
