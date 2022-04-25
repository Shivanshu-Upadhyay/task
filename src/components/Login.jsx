import React from "react";
import "./css/login.css";
import {useNavigate} from "react-router-dom"
function Login() {
    let navigate = useNavigate();
    
  return (
    <div className="parent">
      <div style={{ textAlign: "end", padding: "30px" }}>
        <i className="fa-solid fa-bars fa-2xl " style={{ color: "red" }}></i>
      </div>

      <div className="main">
        <div className="centerdiv">
          <form action="">
            <div className="input-container">
              <i className="fa fa-user icon"></i>
              <input className="input-field" type="email" placeholder="Email" />
            </div>
            <br />

            <div className="input-container">
              <i className="fa fa-envelope icon"></i>
              <input
                className="input-field"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="secondBlock">
              <p>
                <i
                  className="fa-solid fa-circle-check"
                  style={{ paddingRight: "5px" }}
                ></i>
                Remember me
              </p>
              <p> Forget password</p>
            </div>
            <br />
            <button className="login" onClick={()=>navigate("/cart")}>
              Login
            </button>
            <div style={{ padding: "10px" }}>
              Don't have an account ? <a href="df">Sign Up</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
