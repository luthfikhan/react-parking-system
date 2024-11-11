import { nominatimReverse } from "../utils/geocoder";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { LatLngLiteral } from "leaflet";
import { useEffect, useState } from "react";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons/faLocationArrow";
import L from 'leaflet';
import Map from "../components/map";
import { useNavigate } from "@remix-run/react";
import parkingData from "../utils/parking_data";

const parks = parkingData

export default function Dashboard() {
  const navigate = useNavigate()
  const [position, setPosition] = useState<LatLngLiteral>()
  const [positionName, setPositionName] = useState<string>("Aktifkan lokasi")
  const [selectedPark, setSelectedPark] = useState<typeof parks[0]>()
  const [parkList, setParkList] = useState<typeof parks>(parks)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((p) => {
      const lotLan = {
        lat: p.coords.latitude,
        lng: p.coords.longitude,
      };
      setParkList(parks.sort((a, b) => {
        const disA = L.latLng(lotLan).distanceTo([a.lat, a.lng])
        const disB = L.latLng(lotLan).distanceTo([b.lat, b.lng])

        return disA - disB
      }))
      setPosition(lotLan);
      nominatimReverse(lotLan).then(({ address }) => {
        setPositionName(`${(address.city || address.county) ?? ""} ${address.state}`)
      })
    });
  }, [])

  return (
    <div className="relative">
      <div className="fixed -z-10 w-full h-full bg-gray-900 opacity-50" />
      <div className="fixed -z-20">
        <Map currentPosition={position} otherPosition={selectedPark && { lat: selectedPark.lat, lng: selectedPark.lng }} />
      </div>
      <div className="h-screen">
        <header>
          <div className="flex items-center p-4">
            <div className="size-[42px] shadow-md rounded-full bg-gray-800 opacity-40 flex items-center justify-center mr-2">
              <FontAwesomeIcon
                icon={faLocationDot}
                color="white"
                className="w-3"
              />
            </div>
            <span className="text-sm text-white">{positionName}</span>
          </div>
        </header>
        <footer className="flex items-center overflow-x-auto p-3 absolute w-full bottom-0">
          {parkList.map((v) => {
            const isActive = v.id === selectedPark?.id
            return (
              <div
                aria-hidden="true"
                onClick={() => {
                  if (isActive) {
                    setSelectedPark(undefined)
                  } else {
                    setSelectedPark(v)
                  }
                }}
                key={v.id}
                className={["p-3 rounded-3xl mr-4", isActive ? "bg-yellow-300" : "bg-gray-900"].join(" ")}
              >
                <div>
                  <div className="w-56" >
                    <img width={224} height={112} alt="" className="object-cover w-full h-28 rounded-t-3xl rounded-b-2xl" src={v.image} />
                  </div>
                </div>
                <div className={["mt-3 mx-1 flex items-center justify-between", isActive ? "text-black" : "text-white"].join(" ")}>
                  <div>
                    <p className="font-bold leading-3">{v.title}</p>
                    <span className="text-xs leading-3">{v.address}</span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      navigate(`/parks/${v.id}`)
                    }}
                    className={["w-[40px] h-[40px] rounded-full", isActive ? "bg-gray-900" : "bg-yellow-300"].join(' ')}
                  >
                    <FontAwesomeIcon icon={faLocationArrow} className={[isActive ? "text-yellow-300" : "text-gray-800"].join(" ")} />
                  </button>
                </div>
              </div>
            )
          })}
        </footer>
      </div>
    </div>
  );
}
