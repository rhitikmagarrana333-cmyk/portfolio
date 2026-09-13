import { Link, Outlet } from "react-router";
import { useAuth } from "../hook/Authcontext";
const Navbar = () => {

const {user , hadlelogout} = useAuth()



const logouts = async() => {
try{  await hadlelogout()
  alert('logout succesfully')
}catch(err){
  console.log(err)
}
}
  return (
    <>
      
        <nav className="flex justify-between 
        items-center gap-6 bg-gray-800 text-white py-4 px-6">
          <div className="flex gap-6">
            <Link to="/" className="hover:text-blue-400">
              Home
            </Link>

            <Link to="/product" className="hover:text-blue-400">
              Product
            </Link>

            
{user ? (
  <>
    <Link to="/cart" className="hover:text-blue-400">
      Cart
    </Link>

    <Link to="/profile" className="hover:text-blue-400">
      Profile
    </Link>

    <button onClick={logouts}>
      Logout
    </button>
  </>
) : (
  <Link to="/login" className="hover:text-blue-400">
    Login
  </Link>
)}
          </div>
        </nav>

      <Outlet />
    </>
  );
};

export default Navbar;