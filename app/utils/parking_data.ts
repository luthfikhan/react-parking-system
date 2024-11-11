const parkings = [
  {
    "id": "1",
    "image": "/gedunga.webp",
    "title": "Gedung A",
    "address": "Sukoharjo",
    "lat": -7.6965679,
    "lng": 110.8419185,
    "parkingSpaces": [
      { "x": 25, "y": 50, "text": "A01", "isOccupied": true },
      { "x": 25, "y": 100, "text": "A02", "isOccupied": true },
      { "x": 25, "y": 150, "text": "A03", "isOccupied": true },
      { "x": 25, "y": 200, "text": "A04", "isOccupied": true },
      { "x": 25, "y": 250, "text": "A05", "isOccupied": true },
      { "x": 25, "y": 300, "text": "A06", "isOccupied": true },
      { "x": 175, "y": 50, "text": "B01", "isOccupied": true },
      { "x": 175, "y": 100, "text": "B02", "isOccupied": true },
      { "x": 175, "y": 150, "text": "B03", "isOccupied": true },
      { "x": 175, "y": 200, "text": "B04", "isOccupied": true },
      { "x": 175, "y": 250, "text": "B05", "isOccupied": true },
      { "x": 175, "y": 300, "text": "B06", "isOccupied": true }
    ]
  },
  {
    "id": "2",
    "image": "/thepark.jpg",
    "title": "The Park",
    "address": "Solo baru",
    "lat": -7.5988324,
    "lng": 110.8166993,
    "parkingSpaces": [
      { "x": 25, "y": 50, "text": "A01", "isOccupied": false },
      { "x": 25, "y": 100, "text": "A02", "isOccupied": false },
      { "x": 25, "y": 150, "text": "A03", "isOccupied": false },
      { "x": 25, "y": 200, "text": "A04", "isOccupied": false },
      { "x": 25, "y": 250, "text": "A05", "isOccupied": false },
      { "x": 25, "y": 300, "text": "A06", "isOccupied": false },
      { "x": 175, "y": 50, "text": "B01", "isOccupied": false },
      { "x": 175, "y": 100, "text": "B02", "isOccupied": false },
      { "x": 175, "y": 150, "text": "B03", "isOccupied": false },
      { "x": 175, "y": 200, "text": "B04", "isOccupied": false },
      { "x": 175, "y": 250, "text": "B05", "isOccupied": false },
      { "x": 175, "y": 300, "text": "B06", "isOccupied": false }
    ]
  },
  {
    "id": "3",
    "image": "/pakuwon.jpg",
    "title": "Pakuwon",
    "address": "Madegondo Sukoharjo",
    "lat": -7.6018914,
    "lng": 110.8148226,
    "parkingSpaces": [
      { "x": 25, "y": 50, "text": "A01", "isOccupied": false },
      { "x": 25, "y": 100, "text": "A02", "isOccupied": true },
      { "x": 25, "y": 150, "text": "A03", "isOccupied": false },
      { "x": 25, "y": 200, "text": "A04", "isOccupied": true },
      { "x": 25, "y": 250, "text": "A05", "isOccupied": false },
      { "x": 25, "y": 300, "text": "A06", "isOccupied": false },
      { "x": 175, "y": 50, "text": "B01", "isOccupied": true },
      { "x": 175, "y": 100, "text": "B02", "isOccupied": false },
      { "x": 175, "y": 150, "text": "B03", "isOccupied": true },
      { "x": 175, "y": 200, "text": "B04", "isOccupied": false },
      { "x": 175, "y": 250, "text": "B05", "isOccupied": true },
      { "x": 175, "y": 300, "text": "B06", "isOccupied": false }
    ]
  },
  {
    "id": "4",
    "image": "/parkingxyz.jpg",
    "title": "Parking XYZ",
    "address": "Begajah Sukoharjo",
    "lat": -7.7026437,
    "lng": 110.8501813,
    "parkingSpaces": [
      { "x": 25, "y": 50, "text": "A01", "isOccupied": true },
      { "x": 25, "y": 100, "text": "A02", "isOccupied": true },
      { "x": 25, "y": 150, "text": "A03", "isOccupied": true },
      { "x": 25, "y": 200, "text": "A04", "isOccupied": true },
      { "x": 25, "y": 250, "text": "A05", "isOccupied": true },
      { "x": 25, "y": 300, "text": "A06", "isOccupied": true },
      { "x": 175, "y": 50, "text": "B01", "isOccupied": true },
      { "x": 175, "y": 100, "text": "B02", "isOccupied": true },
      { "x": 175, "y": 150, "text": "B03", "isOccupied": true },
      { "x": 175, "y": 200, "text": "B04", "isOccupied": true },
      { "x": 175, "y": 250, "text": "B05", "isOccupied": true },
      { "x": 175, "y": 300, "text": "B06", "isOccupied": false }
    ]
  }
]

export const getDataById = (id?: string) => {
  return parkings.find((p) => p.id === id)
}

export default parkings