/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate, useParams } from "@remix-run/react";
import React, { useState } from "react";
import { Stage, Rect, Layer, Text, Line } from "react-konva";
import { getDataById } from "../utils/parking_data";

export default function Park() {
  const navigate = useNavigate()
  const [selectedPark, setSelectedPark] = useState<any>()
  const { id } = useParams();
  const park = getDataById(id)

  const onParkClick = (v: any) => {
    if (!v.isOccupied) {
      setSelectedPark(v)
    }
  }

  return (
    <div className="bg-gray-900 w-full h-screen">
      <header className="text-white text-center p-4">
        <p className="font-bold leading-3">{park?.title}</p>
        <span className="text-xs leading-3">{park?.address}</span>
      </header>
      <div className="flex justify-center">
        <Stage width={300} height={500}>
          <Layer draggable>
            {park?.parkingSpaces.map((v) => {
              return (
                <React.Fragment key={v.text}>
                  <Rect
                    x={v.x}
                    y={v.y}
                    cornerRadius={5}
                    strokeWidth={1}
                    stroke="rgb(253 224 71)"
                    width={100}
                    height={50}
                    fill={v.text === selectedPark?.text ? "rgb(253 224 71 / 0.2)": ""}
                    onClick={() => onParkClick(v)}
                    onTap={() => onParkClick(v)}
                  />
                  <Text
                    text={v.text}
                    x={v.x + 10}
                    y={v.y + 10}
                    fill="white"
                  />
                  {v.isOccupied && (
                    <>
                      <Line
                        points={[v.x, v.y, v.x + 100, v.y + 50]}
                        stroke="rgb(253 224 71)"
                      />
                      <Line
                        points={[v.x, v.y + 50, v.x + 100, v.y]}
                        stroke="rgb(253 224 71)"
                      />
                    </>
                  )}
                </React.Fragment>
              );
            })}
          </Layer>
        </Stage>
      </div>
      {
        selectedPark && (
          <button onClick={() => {
            navigate(`/form/${id}/${selectedPark.text}`)
          }} className="bg-yellow-300 text-center w-[-webkit-fill-available] rounded-md box-border absolute bottom-0 p-2 m-4">
            Booking
          </button>
        )
      }
    </div>
  );
}
