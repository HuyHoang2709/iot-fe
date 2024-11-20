/* eslint-disable react/prop-types */
import { Routes, Route } from "react-router-dom";
import { Home } from "../Home";
import { DeviceManager } from "../DeviceManager";
import { DeviceAdd } from "../DeviceManager/DeviceAdd";
import { Setting } from "../Setting";
import { History } from "../History";
import { Profile } from "../Profile";

export const DisplayContainer = ({ user, setUser }) => {
  return (
    <div className="p-6">
      <Routes>
        <Route exact path="/" element={<Home user={user} />} />
        <Route exact path="/devices" element={<DeviceManager user={user} />} />
        <Route exact path="/devices/add" element={<DeviceAdd user={user} />} />
        <Route exact path="/setting" element={<Setting user={user} />} />
        <Route exact path="/history" element={<History user={user} />} />
        <Route
          exact
          path="/profile"
          element={<Profile user={user} setUser={setUser} />}
        />
      </Routes>
    </div>
  );
};
