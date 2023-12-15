
import Cookies from "js-cookie";
import { useAuthContext } from "../hooks/UseAuthContext";
export default function Dashboard(){
    const { dispatch } = useAuthContext(); 
    const removeAuth = async () => {
      Cookies.remove("authToken");
      dispatch({ type: "LOGOUT" });
    };
    return(
    <div className="login-page">
    <div className="form">
        <p>Dashboard</p>
        <button onClick={()=>removeAuth()}>Logout</button>
    </div>
  </div>
        )
}