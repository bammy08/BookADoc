'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Button, Box, Flex } from '@chakra-ui/react';
import L from 'leaflet';
import { useEffect } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Map = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Define new icon URLs
      const iconRetinaUrl =
        'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png';
      const iconUrl =
        'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png';
      const shadowUrl =
        'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png';

      // Create a new icon class with these URLs
      const iconDefault = new L.Icon.Default();
      iconDefault.options.iconRetinaUrl = iconRetinaUrl;
      iconDefault.options.iconUrl = iconUrl;
      iconDefault.options.shadowUrl = shadowUrl;

      // Set the default icon class
      L.Marker.prototype.options.icon = iconDefault;
    }
  }, []);

  return (
    <Box className="bg-white p-4 rounded-lg shadow-md">
      <Box className="relative">
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          className="h-64 w-full rounded-lg"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </Box>
      <Flex justifyContent="center" mt={4}>
        <Button
          leftIcon={<FaMapMarkerAlt />}
          colorScheme="pink"
          variant="outline"
        >
          View in a map
        </Button>
      </Flex>
    </Box>
  );
};

export default Map;
