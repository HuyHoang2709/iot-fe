/* eslint-disable react/prop-types */
import { Card } from "../../components/Card";
import { Title } from "../../components/Title";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SignIn = ({ setUser, setIsLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username) toast.error("Vui lòng nhập tên đăng nhập!");
    else if (!password) toast.error("Vui lòng nhập mật khẩu!");
    else {
      fetch("http://localhost:3000/user/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      })
        .then((res) => {
          if (res.ok) return res.json();
          throw res;
        })
        .then((user) => {
          toast.success("Đăng nhập thành công!");
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
        <Title title="Đăng nhập" />
        <div className="flex flex-col gap-y-2">
          <label htmlFor="signin-username">Tên đăng nhập</label>
          <Input
            placeholder="VD: admin123"
            id="signin-username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="signin-password">Mật khẩu</label>
          <Input
            type="password"
            id="signin-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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
