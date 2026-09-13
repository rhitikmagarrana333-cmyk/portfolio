import { useState } from "react";
import { Link , useNavigate} from "react-router";
import { useAuth } from "../hook/Authcontext";
const Login = () => {
const { handlelogin, loading } = useAuth();
const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
try{

  const data = await handlelogin(email, password);
  if(!data){
    return
  }
  if(data.role === "admin") {
    navigate("/admindashboard/dashboard");
    alert("Admin login successful");
  }else  {
    navigate("/");
    alert("User login successful");
  }
}catch(err){
  console.log(err);
}

if(loading) {
  return <div>Loading...</div>;
}
    
  };

  return (
    <div className="flex h-screen  items-center justify-center bg-gray-100 px-4">
      
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Login
        </h1>

        <p className="text-center text-gray-500 text-sm mb-6">
          Welcome back! Please login to your account.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>


            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 active:scale-[0.98] transition"
          >
            Login
          </button>
<Link to="/register" className="block text-center text-blue-600 hover:underline mt-4">
            Don't have an account? Register
          </Link>
        </form>
      </div>

    </div>
  );
};

export default Login;


