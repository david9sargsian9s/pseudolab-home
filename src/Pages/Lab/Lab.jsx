import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Lab.css";
import { CodeMirrorConfig2 } from "../../components/LabConfig1/CodeMirrorConfig2";
import { UserSVG } from "../../SVG/UserSVG"
import { UserProfile } from "../../components/UserProfile/UserProfile";
import { EarMarkSVG } from "../../SVG/EarMarkSVG";

export const Lab = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isOpened, SetIsOpened] = useState(false);
  const [isOpenDoc, setIsOpenDoc] = useState(true);
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const updateUser = async (updatedData) => {
  const response = await fetch(`http://localhost:3009/User_Data/${currentUser.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedData)
  });

  const updatedUser = await response.json();

  setCurrentUser(updatedUser);
};

const deleteUser = async () => {
  await fetch(`http://localhost:3009/User_Data/${currentUser.id}`, {
    method: "DELETE",
  });

  localStorage.removeItem("auth");
  setCurrentUser(null);
  navigate("/register");
};


  useEffect(() => {
    const checkAuth = async () => {
      const savedAuth = localStorage.getItem("auth");

      if (!savedAuth) {
        navigate("/register");
        return;
      }

      try {
        const response = await fetch(
          `http://localhost:3009/User_Data?auth=${savedAuth}`
        );

        const data = await response.json();

        if (data.length > 0) {
          setCurrentUser(data[0]);
        } else {
          localStorage.removeItem("auth");
          navigate("/register");
        }
      } catch (error) {
        console.error("Auth error:", error);
        navigate("/register");
      }
    };

    checkAuth();
  }, [navigate]);

  const handleDragOver = (e) => {
  e.preventDefault();
};

const handleDrop = (e) => {
  e.preventDefault();

  const file = e.dataTransfer.files[0];
  if (!file) return;




  const reader = new FileReader();
  reader.onload = (event) => {
    setCode(event.target.result);
    setIsOpenDoc(false);
  };
  reader.readAsText(file);
};


  return (
    <div className="LabSettings">
      <div className="userInfo">
        {currentUser && 
        <h2 id="greetings">
          Welcome, {currentUser.mail}
        </h2>}
        <button id="profile" onClick={() => SetIsOpened(prev => !prev)}>
          <UserSVG/>
        </button>
      </div>
      {isOpened && 
      <div id="UserProfileInfo">
        <UserProfile
          currentUser={currentUser}
          onLogout={() => {
            localStorage.removeItem("auth");
            navigate("/register");
          }}
          onDelete={deleteUser}
          onUpdateUser={updateUser}
        />
      </div>}
    <div className="Lab">
        {isOpenDoc ? (
          <div className="DropPlace" onDragOver={handleDragOver} onDrop={handleDrop}>
            <div className="PlaceOrBtn" onClick={() => setIsOpenDoc(prev => !prev)}>
              <EarMarkSVG/>
              <span>Create Document</span>
              <p>Or drag & drop a file here</p>
            </div>
          </div>
        ) : (
          <CodeMirrorConfig2 onCloseDoc={() => setIsOpenDoc(prev => !prev)} DafaultCode={code ? code :`
/**
 * =========================================
 *           PSEUDOLAB WORKSPACE
 * =========================================
 *
 *  Welcome to your pseudocode environment.
 *  Write algorithms. Think clearly. Build logic.
 *
 *  Syntax rules (basic example):
 *    FUNCTION name(parameters)
 *    IF condition THEN
 *    FOR each item IN list
 *    RETURN value
 *
 * =========================================
 */


FUNCTION greetUser(name)
    IF name IS EMPTY THEN
        RETURN "Anonymous user"
    ENDIF

    RETURN "Hello, " + name
END FUNCTION


// --- Test Section --------------------------------

SET username TO "Developer"

SET message TO greetUser(username)

PRINT message


/*
  ✏ Try modifying:
  - Change the username
  - Add a loop
  - Create your own function
  - Build a small algorithm

  This is your logic playground.
*/
`}/>
        )}
    </div>
  </div>
  );
};
