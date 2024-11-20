import { Card } from "../components/Card";

/* eslint-disable react/prop-types */
export const HomeBadge = ({ name, icon, data, color }) => {
  const variant =
    color == "red"
      ? "bg-red-400 border-red-400"
      : "bg-blue-400 border-blue-400";

  return (
    <Card className={`w-1/2 flex gap-x-4 text-white ${variant}`}>
      <div className="w-3/4">
        <h3 className="text-lg font-bold mb-16">{name}</h3>
        <p className="text-6xl font-semibold">{data}</p>
      </div>
      <span className="w-1/4 text-8xl text-right">{icon}</span>
    </Card>
  );
};
