/* eslint-disable react/prop-types */
import { Card } from "../../components/Card";
import { Title } from "../../components/Title";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export const SignIn = ({ setUser, setIsLogin }) => {
  const handleSubmit = () => {
    setUser("admin");
  };

  const handleSwitch = () => {
    setIsLogin((status) => !status);
  };

  return (
    <Card className="w-[480px] py-6">
      <form action="" className="flex flex-col gap-y-6 mb-4">
        <Title title="Đăng nhập" />
        <div className="flex flex-col gap-y-2">
          <label htmlFor="signin-username">Tên đăng nhập</label>
          <Input placeholder="VD: admin123" id="signin-username" />
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="signin-password">Mật khẩu</label>
          <Input type="password" id="signin-password" />
        </div>
        <Button text="Đăng nhập" onClick={handleSubmit} />
      </form>
      <p
        onClick={handleSwitch}
        className="cursor-pointer text-center text-blue-500"
      >
        Chưa có tài khoản?
      </p>
    </Card>
  );
};
