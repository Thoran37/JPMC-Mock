// components/LiveImpactDashboard.js
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
});

const LiveImpactDashboard = () => {
  const [impactData, setImpactData] = useState(null);
  const [centers, setCenters] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setImpactData({
        litersDistributed: 12567890,
        livesImpacted: 7123456,
        fundsRaised: 18600000,
      });

      setCenters([
        {
          id: 1,
          name: "WHC - Andhra Pradesh",
          coords: [15.9129, 79.74],
          image: "/assets/WHC_Andhra.jpeg",
        },
        {
          id: 2,
          name: "WHC - Telangana",
          coords: [17.385, 78.4867],
          image: "/assets/WHC_Telangana.jpeg",
        },
        {
          id: 3,
          name: "WHC - Karnataka",
          coords: [12.9716, 77.5946],
          image: "/assets/WHC_Karnataka.jpeg",
        },
      ]);
    }, 1000);
  }, []);

  return (
    <div className="p-6 space-y-10">
      <h2 className="text-3xl font-bold text-blue-800 text-center">
        Live Impact Dashboard
      </h2>

      {/* Counters */}
      <div className="grid md:grid-cols-3 gap-6 text-center">
        <div className="bg-blue-100 rounded-xl py-6 shadow">
          <h3 className="text-xl text-blue-700 font-semibold mb-2">
            Liters Distributed
          </h3>
          <CountUp
            end={impactData?.litersDistributed || 0}
            duration={3}
            separator=","
            className="text-3xl font-bold"
          />
        </div>
        <div className="bg-green-100 rounded-xl py-6 shadow">
          <h3 className="text-xl text-green-700 font-semibold mb-2">
            Lives Impacted
          </h3>
          <CountUp
            end={impactData?.livesImpacted || 0}
            duration={3}
            separator=","
            className="text-3xl font-bold"
          />
        </div>
        <div className="bg-yellow-100 rounded-xl py-6 shadow">
          <h3 className="text-xl text-yellow-700 font-semibold mb-2">
            Funds Raised (₹)
          </h3>
          <CountUp
            end={impactData?.fundsRaised || 0}
            duration={3}
            separator=","
            className="text-3xl font-bold"
          />
        </div>
      </div>

      {/* Map */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-blue-800 text-center mb-4">
          Active WaterHealth Centers
        </h3>
        <MapContainer
          center={[16.5, 80.5]}
          zoom={6}
          scrollWheelZoom={false}
          className="h-[400px] w-full rounded-xl shadow"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          {centers.map((center) => (
            <Marker key={center.id} position={center.coords}>
              <Popup>{center.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-blue-800 text-center mb-6">
          WHC Locations Gallery
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {centers.map((center) => (
            <div
              key={center.id}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={center.image}
                alt={center.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h4 className="text-lg font-semibold text-blue-700">
                  {center.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveImpactDashboard;
