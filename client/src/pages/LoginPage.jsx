// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { setAuth } from "../redux/authSlice";
// import API from "../services/api";
// import InputField from "../components/InputField";
// import Button from "../components/Button";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const dispatch = useDispatch();

//   const handleLogin = async () => {
//     try {
//       const { data } = await API.post("/auth/login", { email, password });
//       dispatch(setAuth({ token: data.token, user: { email } }));
//       localStorage.setItem("token", data.token);
//       window.location.href = "/listings";
//     } catch (err) {
//       setError(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <div className="bg-white p-6 rounded shadow-md w-80">
//         <h1 className="text-2xl mb-4">Login</h1>
//         {error && <p className="text-red-500 mb-4">{error}</p>}
//         <InputField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         <InputField
//           label="Password"
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <Button onClick={handleLogin}>Login</Button>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;






import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post("/auth/login", { email, password });
      localStorage.setItem("token", data.token); // Save token in local storage
      navigate("/listings"); // Redirect to the Listings Page
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <span
            className="text-blue-600 cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
