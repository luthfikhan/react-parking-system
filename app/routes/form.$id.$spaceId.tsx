import { useNavigate, useParams } from "@remix-run/react";
import { FormEvent, useState } from "react";
import { getDataById } from "../utils/parking_data";
import { Modal } from "antd";

export default function Index() {
  const navigate = useNavigate()
  const { id, spaceId } = useParams();
  const park = getDataById(id);
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    vehicleNumber: "",
    duration: 1,
  });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setOpen(true)
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let newValue: number | string = value;

    if (name === "duration") {
      newValue = Number(value);
    }

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleOk = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      localStorage.setItem('bookingData', JSON.stringify({ id: park?.id, spaceId, user: formData, createdAt: new Date().toISOString() }))

      setOpen(false)
      navigate('/order')
    }, 1500)
  };

  const handleCancel = () => {
    setOpen(false)
  };

  return (
    <>
      <form className="bg-gray-900 h-screen p-4" onSubmit={onSubmit}>
        {/* Nama */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-white mb-2">
            Nama
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 border rounded-md"
            required
            value={formData.name}
            onChange={handleFormChange}
          />
        </div>

        {/* Nomor kendaraan */}
        <div className="mb-4">
          <label htmlFor="vehicleNumber" className="block text-white mb-2">
            Nomor kendaraan
          </label>
          <input
            type="text"
            id="vehicleNumber"
            name="vehicleNumber"
            className="w-full px-3 py-2 border rounded-md"
            required
            onChange={handleFormChange}
            value={formData.vehicleNumber}
          />
        </div>

        {/* Durasi */}
        <div className="mb-4">
          <label htmlFor="duration" className="block text-white mb-2">
            Durasi
          </label>
          <input
            type="number"
            id="duration"
            name="duration"
            className="w-full px-3 py-2 border rounded-md"
            required
            onChange={handleFormChange}
            value={formData.duration}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-300 text-gray-900 py-2 rounded-md hover:bg-yellow-400"
        >
          Booking
        </button>
      </form>
      <Modal
        title="Konfirmasi pesanan"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        confirmLoading={isLoading}
      >
        <p>Pastikan data Anda sudah benar</p>
      </Modal>
    </>
  );
}
