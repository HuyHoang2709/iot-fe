/* eslint-disable react/prop-types */
import { Title } from "../components/Title";
import { Card } from "../components/Card";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
// import { devices } from "../../data/mockData";
import {
  faFan,
  faPlus,
  faLightbulb,
  faTrash,
  faDroplet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ScrollList } from "../components/ScrollList";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

export const DeviceManager = ({ user }) => {
  const [variant, setVariant] = useState(
    user.deviceList.map((d) => {
      return {
        fan: d.fanStatus ? "on" : "off",
        led: d.ledStatus ? "on" : "off",
        wa: d.waStatus ? "on" : "off",
      };
    })
  );

  const toggleDevice = (status, device, deviceId, index) => {
    fetch("http://localhost:3000/device/" + device, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: user.id,
        device_id: deviceId,
        status: status ? 0 : 1,
      }),
    }).then((res) => {
      if (res.ok) {
        toast.success("Thay đổi trạng thái thiết bị thành công");
        setVariant((prev) => {
          const newVariant = [...prev];
          newVariant[index][device] = status ? "off" : "on";
          return newVariant;
        });
        return res.json();
      }
      throw res;
    });
  };

  const [brightness, setBrightness] = useState(user.deviceList.map(() => 0));

  const updateBrightness = (deviceId, brightness, index) => {
    console.log(deviceId, brightness, index);

    if (brightness != 0) {
      fetch("http://localhost:3000/device/brightness", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: user.id,
          device_id: deviceId,
          brightness: brightness,
        }),
      })
        .then((res) => {
          console.log(res);

          if (res.ok) {
            toast.success("Cập nhật độ sáng thành công");
            setBrightness((prev) => {
              const newBrightness = [...prev];
              newBrightness[index] = 0;
              return newBrightness;
            });
            return res.json();
          } else {
            toast.error("Cập nhật độ sáng thất bại");
          }
        })
        .catch((error) => {
          console.error("Error updating brightness:", error);
          toast.error("Error updating brightness");
        });
    } else {
      toast.warn("Vui lòng nhập giá trị độ sáng");
    }
  };

  return (
    <div>
      <Title title="Quản lý thiết bị" />
      <button className="py-2">
        <Link
          to="/devices/add"
          className="flex items-center gap-x-2 bg-blue-500 hover:bg-blue-600 transition-all text-white px-4 py-2 rounded-md text-lg"
        >
          <FontAwesomeIcon icon={faPlus} />
          <span>Thêm thiết bị</span>
        </Link>
      </button>
      <ScrollList>
        {user.deviceList.length > 0 ? (
          user.deviceList.map((device, idx) => (
            <Card
              key={device.id}
              className="w-[720px] mx-auto flex flex-col gap-y-4"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">{device.name}</h3>
                <Button
                  icon={<FontAwesomeIcon icon={faTrash} />}
                  text="Xóa"
                  variant="text-red-600 border-white"
                />
              </div>
              <div className="flex gap-x-4">
                <Input
                  placeholder="Độ sáng Led: [0-15]"
                  type="number"
                  value={brightness[idx]}
                  onChange={(e) => {
                    setBrightness((prev) => {
                      const newBrightness = [...prev];
                      newBrightness[idx] = e.target.value;
                      return newBrightness;
                    });
                  }}
                />
                <Button
                  text="Lưu"
                  onClick={() => {
                    updateBrightness(device.id, brightness[idx], idx);
                  }}
                />
              </div>
              <div className="grid grid-cols-3 gap-x-4">
                <Button
                  variant={variant[idx].fan}
                  text="Quạt"
                  icon={<FontAwesomeIcon icon={faFan} />}
                  onClick={() => {
                    toggleDevice(device.fanStatus, "fan", device.id, idx);
                  }}
                />
                <Button
                  variant={variant[idx].led}
                  text="Led"
                  icon={<FontAwesomeIcon icon={faLightbulb} />}
                  onClick={() => {
                    toggleDevice(device.fanStatus, "led", device.id, idx);
                  }}
                />
                <Button
                  variant={variant[idx].wa}
                  text="Máy bơm"
                  icon={<FontAwesomeIcon icon={faDroplet} />}
                  onClick={() => {
                    toggleDevice(device.fanStatus, "wa", device.id, idx);
                  }}
                />
              </div>
            </Card>
          ))
        ) : (
          <p className="text-center">Không quản lý thiết bị nào</p>
        )}
      </ScrollList>
    </div>
  );
};
