import { Title } from "../components/Title";
import { Card } from "../components/Card";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";
import { useState } from "react";

export const DeviceAdd = () => {
  const [device, setDevice] = useState({
    name: "",
    id: "",
  });

  const handleConfirm = () => {
    console.log(device);
  };

  return (
    <div>
      <Title title="Thêm thiết bị" />
      <Card className="w-[540px] mx-auto">
        <form action="" className="flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-2">
            <label htmlFor="device-add-name">Tên thiết bị</label>
            <Input
              id="device-add-name"
              value={device.name}
              onChange={(e) => setDevice({ ...device, name: e.target.value })}
              placeholder="VD: Cảm biến vườn hoa"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label htmlFor="device-add-id">ID thiết bị</label>
            <Input
              id="device-add-id"
              value={device.id}
              onChange={(e) => setDevice({ ...device, id: e.target.value })}
              placeholder="VD: 748172487"
            />
          </div>
          <div className="grid grid-cols-2 gap-x-4">
            <Button text="Thêm" variant="primary" onClick={handleConfirm} />
            <Link
              to="/devices"
              className="text-slate-800 bg-slate-100 hover:bg-slate-200 transition-all rounded-md flex justify-center items-center"
            >
              Huỷ
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
};
