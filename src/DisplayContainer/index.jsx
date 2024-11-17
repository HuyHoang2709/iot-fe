import { Routes, Route } from "react-router-dom";
import { Home } from "../Home";
import { DeviceManager } from "../DeviceManager";
import { DeviceAdd } from "../DeviceManager/DeviceAdd";
import { Setting } from "../Setting";
import { History } from "../History";
import { Profile } from "../Profile";

export const DisplayContainer = () => {
  return (
    <div className="p-4">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/devices" element={<DeviceManager />} />
        <Route exact path="/devices/add" element={<DeviceAdd />} />
        <Route exact path="/setting" element={<Setting />} />
        <Route exact path="/history" element={<History />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};