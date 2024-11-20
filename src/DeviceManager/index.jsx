import { Title } from "../components/Title";
import { Card } from "../components/Card";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { devices } from "../../data/mockData";
import {
  faFan,
  faPlus,
  faLightbulb,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ScrollList } from "../components/ScrollList";
import { Link } from "react-router-dom";
import { useState } from "react";

export const DeviceManager = () => {
  const toggleDevice = (e) => {
    console.log(e.target.dataset);
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
        {devices.map((device) => (
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
              <Input placeholder="Độ sáng Led: [0-15]" type="number" />
              <Button text="Lưu" />
            </div>
            <div className="grid grid-cols-2 gap-x-4">
              <Button
                variant={`${device.fanStatus ? "on" : "off"}`}
                text="Quạt"
                icon={<FontAwesomeIcon icon={faFan} />}
                data-name="fan"
                data-device-id={device.id}
                data-status={device.fanStatus}
                onClick={toggleDevice}
              />
              <Button
                variant={`${device.ledStatus ? "on" : "off"}`}
                text="Led"
                icon={<FontAwesomeIcon icon={faLightbulb} />}
                data-name="led"
                data-device-id={device.id}
                data-status={device.ledStatus}
                onClick={toggleDevice}
              />
            </div>
          </Card>
        ))}
      </ScrollList>
    </div>
  );
};
