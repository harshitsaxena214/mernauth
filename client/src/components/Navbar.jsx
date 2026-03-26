import { assets } from "../assets/assets.js";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/Context.jsx";
import axios from "axios";
import { toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();
  const { userData, backendUrl, setUserData, setIsLoggedin } =
    useContext(AppContext);

    const sendVerificationOtp = async () => {
      try {
        axios.defaults.withCredentials = true;
        const { data } = await axios.post(
          `${backendUrl}/api/auth/sendverifyotp`)
          if (data.success) {
            navigate("/email-verify");
            toast.success(data.message);
          }else{
            toast.error(data.message);
          }
      } catch (error) {
        const message =
             error.response?.data?.message ||
             error.message ||
             "Something went wrong";
           toast.error(message);
      }
    }

  const logout = async () => {
    try {
       axios.defaults.withCredentials = true;
    const { data } = await axios.post(`${backendUrl}/api/auth/logout`);
    data.success && setIsLoggedin(false);
    data.success && setUserData(false);
    navigate("/login");
    } catch (error) {
     const message =
             error.response?.data?.message ||
             error.message ||
             "Something went wrong";
           toast.error(message);
    }
   
  };
  return (
    <div className="w-full flex justify-between items-center p-4 sm:p-6 sm:px-24 absolute top-0">
      <img src={assets.logo} className="w-28 sm:w-32" alt="Logo" />
      {userData ? (
        <div className="flex items-center justify-center rounded-full bg-black text-white w-10 h-10 relative group">
          {userData.name[0].toUpperCase()}
          <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-10">
            <ul className="list-none bg-gray-200 p-2 m-0 text-sm">
              {!userData.isAccountVerified && (
                <li onClick = {sendVerificationOtp}className="py-1 px-2 hover:bg-gray-200 cursor-pointer">
                  Verify email
                </li>
              )}
              <li onClick={logout} className="py-1 px-2 hover:bg-gray-200 cursor-pointer pr-10">
                Logout
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <button
          onClick={() => navigate("/login")}
          className="flex items-center gap-2 border border-gray-500 rounded-full px-6 py-2 text-gray-800 hover:bg-gray-100 transition-all"
        >
          Login <img src={assets.arrow_icon} alt="" />
        </button>
      )}
    </div>
  );
};

export default Navbar;
