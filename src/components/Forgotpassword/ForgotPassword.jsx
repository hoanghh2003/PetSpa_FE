import { useState } from "react";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    console.log(email);
    console.log("ccccccc");
    var item = { email };
    try {
      let response = await fetch(
        "https://localhost:7150/api/Auth/forgot-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(item),
        }
      );

      if (response.ok) {
        setMessage("Kiểm tra email để nhận hướng dẫn đặt lại mật khẩu");
      } else {
        setMessage("Email không tồn tại hoặc có lỗi xảy ra");
      }
    } catch (error) {
      setMessage("Có lỗi xảy ra");
      console.error(error);
    } finally {
      setIsLoading(false); // Kết thúc quá trình gửi
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md"
    >
      <h2 className="text-2xl font-semibold mb-4">Quên mật khẩu</h2>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Địa chỉ email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        disabled={isLoading} // Vô hiệu hóa nút khi đang gửi
      >
        {isLoading ? "Đang gửi..." : "Gửi"}
      </button>
      {message && <p className="mt-2 text-sm text-red-500">{message}</p>}
    </form>
  );
}

export default ForgotPassword;
