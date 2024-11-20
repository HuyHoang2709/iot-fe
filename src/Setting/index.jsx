/* eslint-disable react/prop-types */
import { Title } from "../components/Title";
import { Card } from "../components/Card";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Select } from "../components/Select";
// import { devices } from "../../data/mockData";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export const Setting = ({ user }) => {
  const [formData, setFormData] = useState({
    device: user.deviceList[0],
    lowerTemp: undefined,
    upperTemp: undefined,
    lowerHumid: undefined,
    upperHumid: undefined,
  });

  const handleConfirm = () => {
    if (!formData.lowerTemp) formData.lowerTemp = -1;
    if (!formData.upperTemp) formData.upperTemp = -1;
    if (!formData.lowerHumid) formData.lowerHumid = -1;
    if (!formData.upperHumid) formData.upperHumid = -1;

    if (formData.lowerTemp > formData.upperTemp)
      toast.error("Ngưỡng nhiệt độ không hợp lệ!");
    else if (formData.lowerHumid > formData.upperHumid)
      toast.error("Ngưỡng độ ẩm không hợp lệ!");
    else {
      console.log(formData, user.deviceList);

      fetch("http://localhost:3000/device/setting", {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: user.id,
          device_id: formData.device.id,
          lower_temp: formData.lowerTemp,
          upper_temp: formData.upperTemp,
          lower_humid: formData.lowerHumid,
          upper_humid: formData.upperHumid,
        }),
      }).then((res) => {
        if (res.ok) {
          toast.success("Cài đặt ngưỡng cảnh báo thành cóng!");
          return res.json();
        } else {
          toast.error("Cài đặt ngưỡng cảnh báo thất bại!");
        }
      });
    }
  };

  return (
    <div>
      <Title title="Cài đặt ngưỡng cảnh báo" />
      <Card className="w-[540px] mx-auto">
        {user.deviceList.length > 0 ? (
          <form action="" className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-1">
              <h3 className="text-lg">Chọn thiết bị</h3>
              <Select
                options={user.deviceList.map((device) => device.name)}
                value={formData.device}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    device: user.deviceList.find(
                      (device) => device.name == e.target.value
                    ),
                  })
                }
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <h3 className="text-lg">
                Nhiệt độ (<sup>o</sup>C)
              </h3>
              <Input
                type="number"
                step="0.1"
                min="0"
                max="100"
                placeholder="Thấp nhất"
                value={formData.lowerTemp}
                onChange={(e) =>
                  setFormData({ ...formData, lowerTemp: e.target.value })
                }
              />
              <Input
                type="number"
                step="0.1"
                min="0"
                max="100"
                placeholder="Cao nhất"
                value={formData.upperTemp}
                onChange={(e) =>
                  setFormData({ ...formData, upperTemp: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <h3 className="text-lg">Độ ẩm (%)</h3>
              <Input
                type="number"
                step="0.1"
                min="0"
                max="100"
                placeholder="Thấp nhất"
                value={formData.lowerHumid}
                onChange={(e) =>
                  setFormData({ ...formData, lowerHumid: e.target.value })
                }
              />
              <Input
                type="number"
                step="0.1"
                min="0"
                max="100"
                placeholder="Cao nhất"
                value={formData.upperHumid}
                onChange={(e) =>
                  setFormData({ ...formData, upperHumid: e.target.value })
                }
              />
            </div>
            <Button text="Lưu" onClick={handleConfirm} />
          </form>
        ) : (
          <div className="flex flex-col items-center gap-y-4">
            <p className="text-center">Không quản lý thiết bị nào</p>
            <Link
              to="/devices/add"
              className="px-4 py-2 text-center rounded-md bg-blue-400 text-white hover:bg-blue-600 transition-all"
            >
              Thêm thiết bị
            </Link>
          </div>
        )}
      </Card>
    </div>
  );
};
