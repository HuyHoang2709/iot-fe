import { Title } from "../components/Title";
import { Card } from "../components/Card";
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

export const DeviceManager = () => {
  return (
    <div>
      <Title title="Quản lý thiết bị" />
      <button className="py-2">
        <Link
          to="/devices/add"
          className="flex items-center gap-x-2 text-blue-600 text-lg"
        >
          <FontAwesomeIcon icon={faPlus} />
          <span>Thêm thiết bị</span>
        </Link>
      </button>
      <ScrollList>
        {devices.map((device) => (
          <Card key={device.id} className="w-[720px] mx-auto">
            <div className="flex mb-4 items-center justify-between">
              <h3 className="text-xl font-semibold ">{device.name}</h3>
              <Button
                icon={<FontAwesomeIcon icon={faTrash} />}
                text="Xóa"
                variant="text-red-600 border-0"
              />
            </div>
            <div className="grid grid-cols-2 gap-x-4">
              <Button
                variant={`${device.fanStatus ? "on" : "off"}`}
                text="Quạt"
                icon={<FontAwesomeIcon icon={faFan} />}
              />
              <Button
                variant={`${device.ledStatus ? "on" : "off"}`}
                text="Led"
                icon={<FontAwesomeIcon icon={faLightbulb} />}
              />
            </div>
          </Card>
        ))}
      </ScrollList>
    </div>
  );
};
