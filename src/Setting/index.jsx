import { Title } from "../components/Title";
import { Card } from "../components/Card";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Select } from "../components/Select";
import { devices } from "../../data/mockData";
import { useState } from "react";

export const Setting = () => {
  const [formData, setFormData] = useState({
    device: devices[0].name,
    lowerTemp: devices[0].lowerTemp,
    upperTemp: devices[0].upperTemp,
    lowerHumid: devices[0].lowerHumid,
    upperHumid: devices[0].upperHumid,
  });

  const handleConfirm = () => {
    console.log(formData);
  };

  return (
    <div>
      <Title title="Cài đặt ngưỡng cảnh báo" />
      <Card className="w-[540px] mx-auto">
        <form action="" className="flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-1">
            <h3 className="text-lg">Chọn thiết bị</h3>
            <Select
              options={devices.map((device) => device.name)}
              value={formData.device}
              onChange={(e) =>
                setFormData({ ...formData, device: e.target.value })
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
      </Card>
    </div>
  );
};
