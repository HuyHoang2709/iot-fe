import { Link } from "react-router-dom";

export const Sidebar = () => {
  const items = [
    ["Trang chủ", "/"],
    ["Quản lý thiết bị", "/devices"],
    ["Cài đặt ngưỡng", "/setting"],
    ["Lịch sử đo", "/history"],
  ];

  return (
    <div>
      <h1 className="p-6 text-2xl text-blue-600 font-bold">Iot Dashboard</h1>
      <div className="flex flex-col">
        {items.map((item) => (
          <Link
            key={item[0]}
            to={item[1]}
            className="px-6 py-4 text-lg hover:bg-blue-600 hover:text-white transition-all"
          >
            {item[0]}
          </Link>
        ))}
      </div>
    </div>
  );
};
