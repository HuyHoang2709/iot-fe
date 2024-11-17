import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Input } from "../../components/Input";
import { Title } from "../../components/Title";

/* eslint-disable react/prop-types */
export const SignUp = ({ setUser, setIsLogin }) => {
  const handleSubmit = () => {
    setUser("admin");
  };

  const handleSwitch = () => {
    setIsLogin((status) => !status);
  };

  return (
    <Card className="w-[480px] py-6">
      <form action="" className="flex flex-col gap-y-6 mb-4">
        <Title title="Đăng ký" />
        <div className="flex flex-col gap-y-2">
          <label htmlFor="signup-fullname">Họ và tên</label>
          <Input placeholder="VD: Nguyễn Văn A" id="signup-fullname" />
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="signup-username">Email</label>
          <Input placeholder="VD: nguyenvana@gmail.com" id="signup-email" />
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="signup-username">Tên đăng nhập</label>
          <Input placeholder="VD: admin123" id="signup-username" />
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="signup-password">Mật khẩu</label>
          <Input type="password" id="signup-password" />
        </div>
        <Button text="Đăng ký" onClick={handleSubmit} />
      </form>
      <p
        onClick={handleSwitch}
        className="cursor-pointer text-center text-blue-500"
      >
        Đã có tài khoản?
      </p>
    </Card>
  );
};
