import { Title } from "../components/Title";
import { Card } from "../components/Card";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export const Setting = () => {
  return (
    <div>
      <Title title="Cài đặt ngưỡng cảnh báo" />
      <Card className="w-[540px] mx-auto">
        <form action="" className="flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-2">
            <h3>Nhiệt độ</h3>
            <Input
              type="number"
              step="0.1"
              min="0"
              max="100"
              placeholder="Thấp nhất"
            />
            <Input
              type="number"
              step="0.1"
              min="0"
              max="100"
              placeholder="Cao nhất"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <h3 className="text-lg">Độ ẩm</h3>
            <Input
              type="number"
              step="0.1"
              min="0"
              max="100"
              placeholder="Thấp nhất"
            />
            <Input
              type="number"
              step="0.1"
              min="0"
              max="100"
              placeholder="Cao nhất"
            />
          </div>
          <Button text="Lưu" />
        </form>
      </Card>
    </div>
  );
};
