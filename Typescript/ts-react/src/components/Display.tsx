import React from "react";

interface WeatehrData {
  temp: number;
  desc: string;
}

interface DisplayProps {
  weahter: WeatehrData | null;
}

const Display: React.FC<DisplayProps> = ({ weahter }) => {
  return (
    <div>
      {weahter ? (
        <div className="mt-3">
          <p className="font-semibold">Temperature: {weahter.temp}°C</p>
          <p className="font-semibold">Description: {weahter.desc}</p>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default Display;
