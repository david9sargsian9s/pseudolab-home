import { useState } from "react";
import "./Login.css"
import { Link, useNavigate } from "react-router-dom"

export const Login = () => {

    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();

      const formData = new FormData(e.target);
      const mail = formData.get("mail");
      const password = formData.get("password");

      const response = await fetch(`${process.env.REACT_APP_API_URL}/User_Data`);
      const users = await response.json();

      const user = users.find(
        (u) => u.mail === mail && u.password === password
      );

      if (!user) {
          setError("Incorrect email or password");
        return;
      }
      localStorage.setItem("auth", user.auth);
      navigate("/lab", { replace: true, state: { fromRegister: true, userId: user.id } });
      // console.log("Logged in user:", user);
    };

  return (
    <div className="Login">
        <div className="LogInPanel">
            <h1>Log in</h1>
            {error && (
              <div className="auth-error">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                  <input type="email" name="mail" placeholder="enter your mail. . ."/>
                  <input type="password" name="password" placeholder="enter your pass. . ."/>
                </div>
                    <div id="ppMom">
                        <input type="checkbox" name="PrivacyPolicy"/>
                        <Link to="/">
                            I accept the terms of the agreement and privacy policy
                        </Link>
                    </div>
                    <div className="btnsHolding">
                        <button id="submitBtn">
                            submit
                        </button>
                        <button type="reset">
                            cancel
                        </button>
                    </div>
                    <p>don't have an account? <Link to="/register" state={{ fromRegister: false }}>Register</Link></p>
            </form>
        </div>
    </div>
  )
}
