import "./Autorization.css"
import UserInfo from "../../AllImages/logo/BG-Removed-Logo3.png"
import { Link } from "react-router-dom";

export const Autorization = () => {

  return (
    <div className="Autorization">
      <Link to="/lab" id="ToAdaptiveBtn2">
        <img src={UserInfo} alt="UserInfo" width={70}/>
      </Link>
    </div>
  )
}
