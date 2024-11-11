import { useEffect, useRef } from "react";
import { Marker, TileLayer, MapContainer } from "react-leaflet";
import L, { LatLngLiteral } from "leaflet";
import "leaflet/dist/leaflet.css";

function Map({
  currentPosition,
  otherPosition,
}: {
  currentPosition?: LatLngLiteral,
  otherPosition?: LatLngLiteral;
}) {
  const mapRef = useRef<L.Map>(null);

  useEffect(() => {
    if (currentPosition && otherPosition) {
      const bounds = L.latLngBounds(currentPosition, otherPosition)

      mapRef.current?.fitBounds(bounds, { animate: true, paddingBottomRight: [0, 200], paddingTopLeft: [0, 90] })
    } else if (currentPosition) {
      mapRef.current?.flyTo(currentPosition);
    } else if (otherPosition) {
      mapRef.current?.flyTo(otherPosition);
    }
  }, [currentPosition, otherPosition]);

  return (
    <MapContainer
      center={currentPosition || { lat: -7.682607, lng: 110.842773 }}
      zoom={20}
      scrollWheelZoom={false}
      ref={mapRef}
      className="w-screen h-screen"
      dragging={false}
      zoomControl={false}
      id="map"
      style={{
        filter: "invert(100%) hue-rotate(180deg) brightness(80%) contrast(100%)",
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.thunderforest.com/atlas/{z}/{x}/{y}.png?apikey=e17dc579f9824a539cf37e170f8a2f58"
      />
      {currentPosition && (
        <Marker
          icon={
            new L.Icon({
              iconUrl: "/current_pin.png",
              iconAnchor: [25, 50],
              iconSize: [50, 50],
            })
          }
          position={currentPosition}
        />
      )}
      {otherPosition && (
        <Marker
          icon={
            new L.Icon({
              iconUrl: "/pin.png",
              iconAnchor: [25, 50],
              iconSize: [50, 50],
            })
          }
          position={otherPosition}
        />
      )}
    </MapContainer>
  );
}

export default Map;
