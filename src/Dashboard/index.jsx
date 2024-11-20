/* eslint-disable react/prop-types */
import { DisplayContainer } from "../DisplayContainer";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";

export const Dashboard = ({ user, setUser }) => {
  return (
    <div className="flex h-screen">
      <div className="w-1/6 border-r">
        <Sidebar />
      </div>
      <div className="w-5/6">
        <Header user={user} />
        <DisplayContainer user={user} setUser={setUser} />
      </div>
    </div>
  );
};
