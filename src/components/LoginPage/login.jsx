// const colors = {
//   primary: "#060606",
//   background: "#E0E0E0",
//   disbaled: "#D9D9D9",
// };
import COVER_IMAGE from "../LoginPage/login.jpg";
import LOGIN_GG from "../LoginPage/google-icon.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth, googleprovider } from "../../config/firebase";
import axios from "axios";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  // const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const handleLoginGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleprovider);

      // Lấy Google Access Token và thông tin người dùng
      const credential = GoogleAuthProvider.credentialFromResult(result);
      console.log(credential);

      const user = result.user;
      console.log(user.email);

      // Gửi yêu cầu đặt lại mật khẩu tới API
      const response = await axios.post(
        "https://localhost:7150/api/Auth/google",
        { email: user.email } // Đảm bảo đúng định dạng yêu cầu API
      );

      if (response.status === 200) {
        var results = await response.json();
        localStorage.setItem("user-info", JSON.stringify(results));
        navigate("/");
        // Thực hiện các hành động khác, ví dụ: chuyển hướng đến trang đăng nhập
      } else {
        setError("Email is already registered");
      }
    } catch (error) {
      setError("Có lỗi xảy ra. Vui lòng thử lại.");
      console.error("Error during login or password reset: ", error);
    }
  };

  async function login(event) {
    setIsLoading(true);
    if (isLogin) {
      event.preventDefault();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email format regex
      const minPasswordLength = 6; // Minimum length of the password

      if (!emailRegex.test(email)) {
        setError("Email không hợp lệ");
        return false;
      }

      if (password.length < minPasswordLength) {
        setError("Mật khẩu phải có ít nhất 6 ký tự");
        return false;
      }

      let item = { username: email, password: password };
      console.log(email);
      console.log(password);
      try {
        let result = await fetch("https://localhost:7150/api/Auth/Login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(item),
        });

        if (!result.ok) {
          setError("Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.");
          return false;
        } else {
          result = await result.json();
          localStorage.setItem("user-info", JSON.stringify(result));
          setError("Login successfully");
          console.log(result);
          navigate("/");
        }
      } catch (error) {
        setError("Có lỗi xảy ra. Vui lòng thử lại sau.");
        console.error("There was an error!", error);
      } finally {
        setIsLoading(false);
      }
    } else setIsLoading(true);
  }
  React.useEffect(() => {
    const user = localStorage.getItem("user-info");
    if (user == null) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
      setError("Logined");
    }
  }, []);

  return (
    <div className="w-700 h-screen flex items-start my-1 ">
      <div className="relative w-1/2 h-full flex flex-col">
        <div className="absolute top-[20%] left-[10%] flex flex-col">
          <h1 className="text-4x1 text-[#1e1a1a] font-extrabold m--5">
            Welcome to Pet Spa!!!
          </h1>
        </div>

        <img
          src={COVER_IMAGE}
          className="h-full w-full object-cover bg-center"
        />
      </div>

      <div className="w-1/2 mr-auto h-full bg-[#f5f5f5] flex flex-col px-20 py-10 justify-between items-center">
        {/* <h1 className="text-xl text-[#060606] font-semibold">
          Interative Brand
        </h1> */}
        <div className="text-xl text-[#060606] font-semibold mr-auto max-w-[500px]"></div>
        <div className="w-full flex flex-col  max-w-[500px]">
          <div className="w-full flex flex-col mb-2">
            <h1 className="text-4xl text-center font-semibold mb-4 ">Login</h1>
          </div>
          <form>
            <div className="w-full flex flex-col ">
              <input
                className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p style={{ color: "black" }}>{error}</p>
            </div>
            <div className="w-full flex items-center justify-between">
              <div className="w-full flex items-center">
                <input type="checkbox" className="w-4 h-4 mr-2" />
                <p className="text-sm">Remeber me for 30 days</p>
              </div>
              <Link
                to={"/forgot-password"}
                className="text-sm font-medium cursor-pointer whitespace-nowrap underline underline-offset-2"
              >
                Forgot Password ?
              </Link>
            </div>
            <div className="w-full flex flex-col my-4">
              <button
                onClick={login}
                className="w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center cursor-pointer"
                disabled={isLoading}
              >
                {isLoading ? "Login..." : "Log in"}
              </button>

              <Link
                to={"/register"}
                className="w-full text-[#060606] my-2 font-semibold bg-white border border-black rounded-md p-4 text-center flex items-center justify-center cursor-pointer"
              >
                Register
              </Link>
            </div>
          </form>
          <div className="w-full flex items-center justify-center relative py-2">
            <div className="w-full h-[1px] bg-black/40"></div>
            <p className=" text-lg  absolute text-black/80 bg-[#f5f5f5]">or</p>
          </div>
          <button
            onClick={handleLoginGoogle}
            className="w-full text-[#060606] my-2 font-semibold bg-white border border-black/40 rounded-md p-4 text-center flex items-center justify-center cursor-pointer"
          >
            <img src={LOGIN_GG} className="h-6 mr-2" />
            Sign In With Google
          </button>
        </div>
        <div className="w-full flex items-center justify-center py-3">
          <p className="text-sm font-normal text-[#060606]">
            Dont have a account?
            <span className="font-semibold underline underline-offset-2 cursor-pointer">
              Sign up for free
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
