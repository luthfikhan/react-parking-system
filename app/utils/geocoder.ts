import axios from 'axios';
import type { LatLngLiteral } from 'leaflet';

const nominatimBaseUrl = 'https://nominatim.openstreetmap.org';

export const nominatimReverse = async (latLng: LatLngLiteral) => {
  try {
    const results = await axios.get(`${nominatimBaseUrl}/reverse`, {
      params: {
        lat: latLng.lat,
        lon: latLng.lng,
        zoom: 18,
        format: 'jsonv2',
        'accept-language': 'id',
      },
    });

    if (results.data) {
      return {
        name: results.data.display_name,
        address: results.data.address,
      };
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }

  return {
    name: '',
    address: {},
  };
};
