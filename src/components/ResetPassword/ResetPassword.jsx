import { useState } from "react";
import axios from "axios";

function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [otp, setOtp] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const tokenMatch = window.location.href.match(/token=([^&]+)/);
    const emailMatch = window.location.href.match(/email=([^&]+)/);

    const token = tokenMatch ? tokenMatch[1] : null;
    const email = emailMatch ? emailMatch[1] : null;

    if (!token || !email) {
      setError("Token hoặc email không hợp lệ");
      return;
    }

    const minPasswordLength = 6;
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    if (
      !passwordRegex.test(newPassword) ||
      newPassword.length < minPasswordLength
    ) {
      setError(
        "Mật khẩu không hợp lệ (tối thiểu 8 ký tự, chứa chữ hoa, chữ thường, số và ký tự đặc biệt)"
      );
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Mật khẩu xác nhận không khớp");
      return;
    }

    const data = {
      token,
      email,
      password: newPassword,
    };

    try {
      const response = await axios.post(
        "https://localhost:7150/api/Auth/reset-password",
        data // Axios tự động chuyển đổi data thành JSON
      );

      if (response.status === 200) {
        // Kiểm tra mã trạng thái 200 OK
        setMessage("Đặt lại mật khẩu thành công");
        // ... (Chuyển hướng đến trang đăng nhập)
      } else {
        setError(response.data.msg || "Có lỗi xảy ra khi đặt lại mật khẩu");
      }
    } catch (error) {
      setError("Có lỗi xảy ra. Vui lòng thử lại.");
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col space-y-2">
        <div>
          <label
            htmlFor="newPassword"
            className="block text-sm font-medium text-gray-700"
          >
            Mật khẩu mới
          </label>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e) => setNewPassword(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700"
          >
            Xác nhận mật khẩu
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <button
          type="submit" // Đảm bảo nút có type="submit" để kích hoạt onSubmit của form
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
        {message && <p className="mt-2 text-sm text-red-500">{message}</p>}
        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
      </div>
    </form>
  );
}
export default ResetPassword;
