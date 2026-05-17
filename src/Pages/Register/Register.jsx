import { Link, useNavigate } from "react-router-dom"
import "./Register.css"
import { CreateNewUser } from "../../utils/CreateNewUser";
import { useState } from "react";

export const Register = () => {

  const [userData, setUserData] = useState([]);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handlerSubmit = async (e) => {
    e.preventDefault();

    const newUser = CreateNewUser(e.target);

    const verification = await fetch(`${process.env.REACT_APP_API_URL}/User_Data`);
    const users = await verification.json();

    const exists = users.some(u => u.mail === newUser.mail);

    if (exists) {
      setError("This email is already registered!");
      return;
    }

    const response = await fetch(`${process.env.REACT_APP_API_URL}/User_Data`, {
      method:"POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser)
    });

    if(!response.ok) {
      console.error("Registration error: Please try again later.")
    }

    const createdUser = await response.json();

        setUserData([...userData, newUser]);
    navigate("/login", { replace: true, state: { fromRegister: true, userId: createdUser.id } });
  }

  

  return (
    <div className="Register">
        <div className="RegisterPanel">
            <h1>Register</h1>
            {error && (
              <div className="auth-error">
                  {error}
              </div>
            )}
            <form onSubmit={handlerSubmit}>
                <div className="input-group">
                  <input type="text" name="firstName" placeholder="enter your first name. . ."/>
                  <input type="text" name="lastName" placeholder="enter your last name. . ."/>
                  <input type="email" name="mail" placeholder="enter your mail. . ."/>
                  <input type="password" name="password" placeholder="enter your pass. . ."/>
                </div>
                <div className="form-group">
                  <label className="form-label">Gender</label>

                  <div className="radio-group">
                    <label className="radio-item">
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                      />
                      <span>Male</span>
                    </label>

                    <label className="radio-item">
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                      />
                      <span>Female</span>
                    </label>

                    <label className="radio-item">
                      <input
                        type="radio"
                        name="gender"
                        value="other"
                      />
                      <span>Prefer not to say</span>
                    </label>
                  </div>
                </div>
                    <div id="ppMom">
                        <input type="checkbox" name="PrivacyPolicy"/>
                        <Link to="/privacyPolicy">
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
                    <p>also have an account? <Link to="/login" state={{ fromRegister: false }}>Log in</Link></p>
            </form>
        </div>
    </div>
  )
}
