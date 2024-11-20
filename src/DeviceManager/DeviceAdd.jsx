/* eslint-disable react/prop-types */
import { Title } from "../components/Title";
import { Card } from "../components/Card";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

export const DeviceAdd = ({ user }) => {
  const [device, setDevice] = useState({
    name: "",
    id: "",
  });

  const handleConfirm = () => {
    if (!device.name || !device.id) {
      toast.error("Vui lòng nhập đủ thông tin!");
      return;
    }
    fetch("http://localhost:3000/device/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: device.name,
        device_id: device.id,
        user_id: user.id,
      }),
    }).then((res) => {
      if (res.ok) {
        toast.success("Thêm thiết bị thành công!");
      }
      throw res;
    });
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
