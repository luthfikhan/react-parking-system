import { getDataById } from "../utils/parking_data";

export default function Order() {
  const detail = JSON.parse(localStorage.getItem('bookingData') || '{}')
  const park = getDataById(detail.id)

  return (
    <div className="p-4 bg-gray-900 h-screen">
      <h1 className="text-2xl font-bold mb-4 text-white">Detail Pemesanan</h1>

      <div className="bg-white p-4 rounded-lg shadow-md">
        {/* Displaying the Image */}
        <img
          src={park?.image}
          alt={park?.title}
          className="w-full h-60 object-cover rounded-lg mb-4"
        />

        <h2 className="text-xl font-semibold">{park?.title}</h2>
        <p className="text-gray-600">{park?.address}</p>
        <p className="text-sm text-gray-500">
          Tempat Parkir: {detail.spaceId}
        </p>
        <div className="mt-4">
          <h3 className="font-semibold">Detail Pemesanan</h3>
          <ul className="space-y-2">
            <li>
              <span className="font-medium">Nama:</span> {detail.user.name}
            </li>
            <li>
              <span className="font-medium">Nomor Kendaraan: </span>
              {detail.user.vehicleNumber}
            </li>
            <li>
              <span className="font-medium">Durasi:</span> {detail.user.duration}
            </li>
            <li>
              <span className="font-medium">Waktu Pemesanan: </span>
              {detail.createdAt}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}