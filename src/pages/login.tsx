import { BookOpen, Lock, Mail } from "lucide-react";
import { useState } from "react";
import { login, verifyAdmin } from "../api/loginApi";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
const LogIn = () => {
  const navigate = useNavigate()
  const {setAdmin} = useAuth()
  const [data, setData] = useState<{ username: string; password: string }>({
    username: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data)
    try {
      const result = await login(data);
      console.log(result.message)
      console.log(result);
      if (result.success) {
    const response = await verifyAdmin();

    console.log(response);
    setAdmin(response.data.admin)
    navigate("/admin-dashboard");
}
    } catch (error) {
     if (axios.isAxiosError(error)) {
      console.log(error.response?.data);
    } else {
      console.log(error);
    }
    }
  };
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      {/* Login Card */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">
        {/* Logo */}
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-lg">
            <BookOpen className="w-10 h-10 text-white" />
          </div>

          <h1 className="mt-6 text-3xl font-bold text-primary">UrduKitabain</h1>

          <p className="text-gray-500 mt-2 text-center">Admin Control Panel</p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          {/* Email */}

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              UserName
            </label>

            <div className="flex items-center border rounded-xl px-4 py-3 focus-within:border-primary transition">
              <Mail className="w-5 h-5 text-gray-400" />

              <input
                type="text"
                name="username"
                value={data.username}
                onChange={handleChange}
                placeholder="Enter your username"
                className="w-full ml-3 outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Password */}

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>

            <div className="flex items-center border rounded-xl px-4 py-3 focus-within:border-primary transition">
              <Lock className="w-5 h-5 text-gray-400" />

              <input
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full ml-3 outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Button */}

          <button
            type="submit"
            className="w-full bg-primary hover:bg-green-800 text-white font-semibold py-3 rounded-xl transition duration-300 shadow-lg"
          >
            Login
          </button>
        </form>

        {/* Footer */}

        <p className="text-center text-sm text-gray-400 mt-8">
          © 2026 UrduKitabain
        </p>
      </div>
    </div>
  );
};

export default LogIn;
