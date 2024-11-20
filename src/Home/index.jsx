/* eslint-disable react/prop-types */
import { Title } from "../components/Title";
import { Card } from "../components/Card";
import { Select } from "../components/Select";
import { Button } from "../components/Button";
import { HomeBadge } from "./HomeBadge";
import { HomeChart } from "./HomeChart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDroplet,
  faTemperatureHalf,
} from "@fortawesome/free-solid-svg-icons";
import { temp, humid, tempData, humidData, devices } from "../../data/mockData";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Home = ({ user }) => {
  const [device, setDevice] = useState(user.deviceList[0] || {});

  const handleConfirm = () => {
    console.log(device);
  };

  return (
    <div className="flex flex-col gap-y-4">
      <Title title="Trang chủ" />
      {user.deviceList.length > 0 ? (
        <>
          <div>
            <label htmlFor="home-devices">Chọn thiết bị</label>
            <div className="flex gap-x-4">
              <Select
                id="home-devices"
                options={user.deviceList.map((device) => device.name)}
                value={device.name}
                onChange={(e) =>
                  setDevice(devices.find((d) => d.name === e.target.value))
                }
              />
              <Button text="OK" onClick={handleConfirm} />
            </div>
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
        </>
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
    </div>
  );
};
