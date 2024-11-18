/* eslint-disable react/prop-types */
import { Title } from "../components/Title";
import { Card } from "../components/Card";
import { Button } from "../components/Button";

export const Profile = ({ user }) => {
  return (
    <div className="w-[540px] mx-auto gap-y-4 flex flex-col">
      <Title title="Thông tin cá nhân" />
      <Card className="flex justify-between gap-y-4">
        <div className="font-bold">
          <p>Họ tên</p>
          <p>Username</p>
          <p>Email</p>
        </div>
        <div className="text-right">
          <p>{user.name}</p>
          <p>{user.username}</p>
          <p>{user.email}</p>
        </div>
      </Card>
      <Button text="Đăng xuất" variant="secondary" />
    </div>
  );
};
