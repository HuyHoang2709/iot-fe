import { useState } from "react";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Input } from "../../components/Input";
import { Title } from "../../components/Title";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/* eslint-disable react/prop-types */
export const SignUp = ({ setUser, setIsLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username) toast.error("Vui lòng nhập tên đăng nhập!");
    else if (!email) toast.error("Vui lòng nhập email!");
    else if (!fullName) toast.error("Vui lòng nhập họ và tên!");
    else if (!password) toast.error("Vui lòng nhập mật khẩu!");
    else {
      fetch("http://localhost:3000/user/register", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, name: fullName, email }),
      })
        .then((res) => {
          if (res.ok) return res.json();
          else toast.error("Tên đăng nhập hoặc mật khẩu không hợp lệ");
          throw res;
        })
        .then((user) => {
          toast.success("Đăng ký thành công!");
          setUser(user);
        })
        .catch((err) => {
          console.log(err);
        });
    }
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
          <Input
            placeholder="VD: Nguyễn Văn A"
            id="signup-fullname"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="signup-username">Email</label>
          <Input
            placeholder="VD: nguyenvana@gmail.com"
            id="signup-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="signup-username">Tên đăng nhập</label>
          <Input
            placeholder="VD: admin123"
            id="signup-username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="signup-password">Mật khẩu</label>
          <Input
            type="password"
            id="signup-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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
