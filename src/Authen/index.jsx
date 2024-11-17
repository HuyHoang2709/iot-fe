/* eslint-disable react/prop-types */
import { useState } from "react";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";

export const Authen = ({ setUser }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center">
      {isLogin && <SignIn setUser={setUser} setIsLogin={setIsLogin} />}
      {!isLogin && <SignUp setUser={setUser} setIsLogin={setIsLogin} />}
    </div>
  );
};
