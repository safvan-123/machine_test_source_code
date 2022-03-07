import React, { useState } from "react";
import "./App.css";

export default function App() {
  const[input,setInput]=useState({
    email:"",
    password:""
  })
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="container">
        <span style={{ color: darkMode ? "grey" : "yellow" }}></span>
        <div className="switch-checkbox">
          <label className="switch">
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            <span className="saf" style={{ backgroundColor: darkMode ? "#300F6A" : "#FFDFA3", color: darkMode ? "white" : "#936F39",paddingTop: darkMode ? "3px" : "2px"}}>{darkMode ? "☾  Night" : "Day"}<span className="dot" style={{ display: darkMode ? "none" : "inline-block"}}></span></span>
          </label>
        </div> 
      </div>
      <div class="container h-100 mt-5">
 <div class="d-flex justify-content-center h-100">
 <div class="user_card" style={{ backgroundColor: darkMode ? "#1C0640" : "#FFFFFF" , color: darkMode ? "#FFFFFF" : "#303033"}}>
 <div class="d-flex justify-content-center">
 <div class="brand_logo_container" style={{color: darkMode ? "#1C0640" : "#FFFFFF", borderRadius: darkMode ? "20px" : "0px" }} >
   </div>
 </div>
 <h1 class="cardhead justify-content-center" style={{color: darkMode ? "#FFFFFF" : "#303033" }}>WELCOME BACK!</h1>
 <div class="d-flex justify-content-center form_container">
 <form>
 <h4 class="passwordhead" style={{color: darkMode ? "#FFFFFF" : "#303033" }}>Email Address</h4>
 <div class="input-group mb-3">
 <input type="text"  class="form-control input_user"  onChange={(e)=>{setInput({
   ...input,email:e.target.value
 })
 }} value={input.email}  style={{backgroundColor: darkMode ? "#1C0640" : "#FFFFFF" , opacity: darkMode ? "0.8" : "0.6", color: darkMode ? "#9880AF" : "" }}
 placeholder="Enter your email address" name="email" />
 </div>
 <h4 class="passwordhead" style={{color: darkMode ? "#FFFFFF" : "#303033"}}>Password</h4>
 <div class="input-group mb-2" >
 <input type="password" class="form-control input_pass" placeholder="Enter your password"  name="password" onChange={(e)=>{setInput({
   ...input,password:e.target.value
 })
 }} value={input.password} style={{backgroundColor: darkMode ? "#1C0640" : "#FFFFFF" , opacity: darkMode ? "0.8" : "0.6" , color: darkMode ? "#9880AF" : "" }}
 />
 </div>
  </form>
 </div>
 <div class="d-flex mt-3 login_container justify-content-center">
 <button type="button" name="button" class="btn login_btn justify-content-center " style={{color: darkMode ? "#FFFFFF" : "#303033",opacity: darkMode ? "0.8" : "1" }}>Sign in</button>
 </div>
 <div class="bottom">
 <div class="d-flex justify-content-center links" style={{color: darkMode ? "#FFFFFF" : "#303033" }}>
 Don't have an account? <a href="#" class="ml-2 createlink" style={{color: darkMode ? "#FFFFFF" : "#303033" }}>Create Now</a>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>

  );
}

