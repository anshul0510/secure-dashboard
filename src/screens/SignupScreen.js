import { useState } from "react"
import { SignupServices } from "../services/SignupService"
import Cookies from "js-cookie"
import { useAuthContext } from "../hooks/UseAuthContext"
import { useNavigate } from "react-router-dom";
export default function SignupScreen(){
    const navigate = useNavigate()
    const [emailAddress,setEmailAddress]=useState("")
    const [password,setPassword]=useState("")
    const { dispatch } = useAuthContext();
    const onSignup = async (event) => {
        const data = await SignupServices({
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
      <button onClick={()=>onSignup()}>Signup</button>
      <p className="message">Already registered? <a onClick={()=>navigate("/login")}>Sign In</a></p>
  </div>
</div>
        )
}