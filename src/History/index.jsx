/* eslint-disable react/prop-types */
import { Title } from "../components/Title";
import { Select } from "../components/Select";
import { Button } from "../components/Button";
import { ScrollList } from "../components/ScrollList";
import { devices, history } from "../../data/mockData";
import { useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

export const History = ({ user }) => {
  const columns = [
    {
      name: "Nhiệt độ",
      selector: (row) => row.temp,
    },
    {
      name: "Độ ẩm",
      selector: (row) => row.humid,
    },
    {
      name: "Thời gian",
      selector: (row) => row.timestamp,
      sortable: true,
    },
  ];

  const styles = {
    headCells: {
      style: {
        fontSize: "20px",
        backgroundColor: "#2563EB",
        color: "#fff",
      },
    },
    cells: {
      style: {
        fontSize: "16px",
      },
    },
  };

  const [device, setDevice] = useState(user.deviceList[0]);
  const handleConfirm = () => {
    console.log(device);
  };

  return (
    <div>
      <Title title="Lịch sử đo" />
      {user.deviceList.length > 0 ? (
        <>
          <div>
            <label htmlFor="device-history">Chọn thiết bị</label>
            <div className="flex gap-x-4">
              <Select
                options={user.deviceList.map((device) => device.name)}
                value={device.name}
                onChange={(e) =>
                  setDevice(devices.find((d) => d.name === e.target.value))
                }
              />
              <Button text="OK" onClick={handleConfirm} />
            </div>
          </div>
          <ScrollList styles="w-full max-h-[640px]">
            <DataTable columns={columns} data={history} customStyles={styles} />
          </ScrollList>
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
