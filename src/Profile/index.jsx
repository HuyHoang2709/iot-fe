/* eslint-disable react/prop-types */
import { Title } from "../components/Title";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";

export const Profile = ({ user, setUser }) => {
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
      <Button
        icon={<FontAwesomeIcon icon={faSignOut} />}
        text="Đăng xuất"
        variant="border-red-400 bg-red-400 text-white transition-all hover:bg-red-600 hover:border-red-600"
        onClick={() => {
          setUser(null);
          window.location.href = "/";
        }}
      />
    </div>
  );
};
