import { Title } from "../components/Title";
import { Card } from "../components/Card";
import { Select } from "../components/Select";
import { HomeBadge } from "./HomeBadge";
import { HomeChart } from "./HomeChart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDroplet,
  faTemperatureHalf,
} from "@fortawesome/free-solid-svg-icons";
import { temp, humid, tempData, humidData, devices } from "../../data/mockData";
// import { useState } from "react";

export const Home = () => {
  // const [device, setDevice] = useState(devices[0]);

  return (
    <div className="flex flex-col gap-y-4">
      <Title title="Trang chủ" />
      <div>
        <label htmlFor="home-devices" className="font-semibold text-lg ml-1">
          Chọn thiết bị
        </label>
        <Select
          id="home-devices"
          options={devices.map((device) => device.name)}
        />
      </div>
      <Card className="flex justify-center gap-x-4">
        <HomeBadge
          name="Nhiệt độ"
          icon={<FontAwesomeIcon icon={faTemperatureHalf} />}
          color="red"
          data={<>{temp} °C</>}
        />
        <HomeBadge
          name="Độ ẩm"
          icon={<FontAwesomeIcon icon={faDroplet} />}
          color="blue"
          data={<>{humid} %</>}
        />
      </Card>
      <Card className="flex justify-center gap-x-4">
        <HomeChart data={tempData} label="Nhiệt độ" color="#F87171" />
        <HomeChart data={humidData} label="Độ ẩm" color="#60A5FA" />
      </Card>
    </div>
  );
};
