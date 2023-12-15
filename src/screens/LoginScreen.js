import { useState } from "react"
import { LoginServices } from "../services/LoginServices"
import Cookies from "js-cookie"
import { useAuthContext } from "../hooks/UseAuthContext"
import { useNavigate } from "react-router-dom";
export default function LoginScreen(){
    const navigate = useNavigate()
    const [emailAddress,setEmailAddress]=useState("")
    const [password,setPassword]=useState("")
    const { dispatch } = useAuthContext();
    const onLogin = async (event) => {
        const data = await LoginServices({
            email: emailAddress,
            password: password
        })
        if(data !=="error"){
        console.log(data.data.token)
        Cookies.set("authToken", data.data.token);
        dispatch({ type: "LOGIN", payload: data.data.token });
        navigate("/dashboard");}
    }
    return(
    <div className="login-page">
  <div className="form">
      <input type="text" placeholder="username" value={emailAddress} onChange={(event)=>{setEmailAddress(event.target.value)}}/>
      <input type="password" placeholder="password"  value={password} onChange={(event)=>{setPassword(event.target.value)}}/>
      <button onClick={()=>onLogin()}>login</button>
      <p className="message">Not registered? <a onClick={()=>navigate("/signup")}>Create an account</a></p>
  </div>
</div>
        )
}