import { Title } from "../components/Title";
import { Card } from "../components/Card";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";

export const DeviceAdd = () => {
  return (
    <div>
      <Title title="Thêm thiết bị" />
      <Card className="w-[540px] mx-auto">
        <form action="" className="flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-2">
            <label htmlFor="device-add-name">Tên thiết bị</label>
            <Input id="device-add-name" />
          </div>
          <div className="flex flex-col gap-y-2">
            <label htmlFor="device-add-id">ID thiết bị</label>
            <Input id="device-add-id" />
          </div>
          <div className="grid grid-cols-2 gap-x-4">
            <Button text="Thêm" variant="primary" />
            <Link
              to="/devices"
              className="text-blue-600 flex justify-center items-center"
            >
              Huỷ
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
};
