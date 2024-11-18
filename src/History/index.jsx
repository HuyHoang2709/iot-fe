import { Title } from "../components/Title";
import { Select } from "../components/Select";
import { ScrollList } from "../components/ScrollList";
import { devices, history } from "../../data/mockData";
import DataTable from "react-data-table-component";

export const History = () => {
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

  return (
    <div>
      <Title title="Lịch sử đo" />
      <div>
        <div>
          <label htmlFor="device-history">Chọn thiết bị</label>
          <Select options={devices.map((device) => device.name)} />
        </div>
        <ScrollList styles="w-full max-h-[640px]">
          <DataTable columns={columns} data={history} customStyles={styles} />
        </ScrollList>
      </div>
    </div>
  );
};
